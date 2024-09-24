import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pingIcon from '../../img/ping.png';

// Icono personalizado para las tiendas
const storeIcon = new L.Icon({
  iconUrl: pingIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Datos de las ubicaciones de las tiendas
const stores = [
  { id: 1, name: 'Tienda 1', lat: 21.0297404, lng: -101.8783086, address: { street: 'Calle 1', number: '123', colonia: 'Colonia Centro' } },
  { id: 2, name: 'Tienda 2', lat: 21.0222261, lng: -101.8489949, address: { street: 'Calle 2', number: '456', colonia: 'Colonia Sur' } },
  { id: 3, name: 'Tienda 3', lat: 21.0155351, lng: -101.8574264, address: { street: 'Calle 3', number: '789', colonia: 'Colonia Norte' } },
  { id: 4, name: 'Tienda 4', lat: 21.0145017, lng: -101.8592261, address: { street: 'Calle 4', number: '101', colonia: 'Colonia Este' } },
  { id: 5, name: 'Tienda 5', lat: 21.030114, lng: -101.8528337, address: { street: 'Calle 5', number: '202', colonia: 'Colonia Oeste' } },
];

const Stores = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('locationPermissionGranted')) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          localStorage.setItem('locationPermissionGranted', 'true');
          localStorage.setItem('lastKnownLocation', JSON.stringify([latitude, longitude]));
        },
        (error) => {
          console.error('Error obteniendo la ubicación:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      const lastKnownLocation = JSON.parse(localStorage.getItem('lastKnownLocation'));
      if (lastKnownLocation) {
        setUserLocation(lastKnownLocation);
      } else {
        setUserLocation([21.0155351, -101.8574264]); // Ubicación predeterminada
      }
    }

    setTimeout(() => {
      setIsMapReady(true);
    }, 500);
  }, []);

  const findNearestStore = (userLocation) => {
    let nearestStore = stores[0];
    let minDistance = getDistance(userLocation, [nearestStore.lat, nearestStore.lng]);

    stores.forEach((store) => {
      const distance = getDistance(userLocation, [store.lat, store.lng]);
      if (distance < minDistance) {
        minDistance = distance;
        nearestStore = store;
      }
    });

    return nearestStore;
  };

  const getDistance = ([lat1, lng1], [lat2, lng2]) => {
    const R = 6371e3; // Radio de la Tierra en metros
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lng2 - lng1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distancia en metros
  };

  const nearestStore = userLocation ? findNearestStore(userLocation) : null;

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-screen bg-gray-100">
      <h2 className="text-2xl mb-4 text-gray-600">Ubicaciones de nuestras tiendas</h2>
      <div className="w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12 h-[500px] overflow-hidden rounded-lg shadow-lg relative">
        {isMapReady && userLocation ? (
          <MapContainer
            center={nearestStore ? [nearestStore.lat, nearestStore.lng] : userLocation}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {stores.map((store) => (
              <Marker key={store.id} position={[store.lat, store.lng]} icon={storeIcon}>
                <Popup>
                  <strong>{store.name}</strong>
                  <br />
                  {store.address.street} #{store.address.number}, {store.address.colonia}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>Cargando mapa...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stores;

import Menu from './client/navigation/menu'
import Slider from './client/slider/main-slider'
import FeaturedProductsSlider from './client/slider/products-slider'
import Banner from './client/section/banner';

function App() {
  return (
    <div className="flex flex-col">
      <Menu />
        <div className="p-0 mt-32">
          <Slider/>
          <FeaturedProductsSlider />
          <Banner />
        </div>
    </div>
  );
}
export default App;

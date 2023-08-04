import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import ImmageBanner from "./Components/ImageBanner";
import Items from "./Components/Items";

function App() {
  return (
    <div className='App'>
      <header>
        <Banner />
        <Navbar />
        <ImmageBanner />
      </header>
      <main>
        <Items />
      </main>
    </div>
  );
}
export default App;

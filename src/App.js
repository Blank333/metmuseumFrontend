import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import ImmageBanner from "./Components/ImageBanner";
import Items from "./Components/Items";
import Item from "./Components/Item";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Highlights from "./Components/Highlights";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='App'>
          <header>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <Banner />
                    <Navbar />
                    <ImmageBanner />
                  </>
                }
              />
              <Route path='/item/:objectID' element={<Navbar />} />
              <Route path='*' element={<Navbar />} />
            </Routes>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Items />} />
              <Route path='/item/:objectID' element={<Item />} />
              <Route path='/item/highlights' element={<Highlights />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

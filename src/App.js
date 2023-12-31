import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Items from "./Components/Items";
import Item from "./Components/Item";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Highlights from "./Components/Highlights";
import Bookmarks from "./Components/Bookmarks";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='App'>
          <header>
            <Routes>
              <Route path='/' element={<Banner />} />
            </Routes>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Items />} />
              <Route path='/item/:objectID' element={<Item />} />
              <Route path='/item/highlights' element={<Highlights />} />
              <Route path='/bookmarks' element={<Bookmarks />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

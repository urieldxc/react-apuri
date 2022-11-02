import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Categories from './components/Categories';
import Hola from './components/Hola'
import MyList from './components/MyList';
import NavBar from './components/NavBar';
import Anime from './components/Anime';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={<Hola />} />
      <Route path='/my-list' element={<MyList />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/anime/:animeid' element={<Anime />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

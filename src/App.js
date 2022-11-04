import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider} from "@mui/material/styles";
import  theme1  from "./theme"

import Categories from './components/Categories';
import Hola from './components/Hola'
import MyList from './components/MyList';
import NavBar from './components/NavBar';
import Anime from './components/Anime';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme1}>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hola />} />
          <Route path='/my-list' element={<MyList />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/anime/:animeid' element={<Anime />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;

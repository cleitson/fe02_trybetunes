import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Album from './pages/Album/Album';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="/album/:id" element={ <Album /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

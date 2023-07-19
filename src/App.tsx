import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Login from './pages/login/login';
import Search from './pages/search/search';
import Album from './pages/album/album';

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

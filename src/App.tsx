import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Album from './pages/Album/Album';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route index element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

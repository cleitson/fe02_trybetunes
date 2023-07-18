import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notFound/notFound';
import Login from './pages/login/login';
import Search from './pages/login/search/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

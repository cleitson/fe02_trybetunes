import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Layout() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

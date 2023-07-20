import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import { UserType } from '../../types';
import Loading from '../Loading/Loading';

function Header() {
  const [user, setUser] = useState<UserType>();
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    const selectUser = async () => {
      const usuario = await getUser();
      setLoad(false);
      setUser(usuario);
      return usuario;
    };
    selectUser();
  }, []);
  return (
    <div>
      { load ? <Loading /> : (
        <header data-testid="header-component">
          <NavLink
            to="/profile"
            data-testid="link-to-profile"
          >
            <span data-testid="header-user-name">{user?.name}</span>
          </NavLink>
          <NavLink
            to="/search"
            data-testid="link-to-search"
          >
            Search
          </NavLink>
          <NavLink
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritos
          </NavLink>
        </header>
      )}
    </div>
  );
}

export default Header;

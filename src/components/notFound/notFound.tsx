import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <NavLink to="/">Pagina Inicial</NavLink>
    </div>
  );
}

export default NotFound;

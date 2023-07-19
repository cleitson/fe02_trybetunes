import { NavLink } from 'react-router-dom';
import { AlbumType } from '../../types';
import './listAlbum.css';

type ListAlbumProp = {
  prop: AlbumType,
};

export default function ListAlbum({ prop }: ListAlbumProp) {
  const {
    collectionId,
    artistName,
    artworkUrl100,
    collectionName,
  } = prop;

  return (
    <div className="listAlbum-container">
      <img src={ artworkUrl100 } alt={ artistName } />
      <p>{ artistName }</p>
      <NavLink
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <h2>{ collectionName }</h2>
      </NavLink>
    </div>
  );
}

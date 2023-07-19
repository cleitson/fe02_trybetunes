import { useState } from 'react';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';
import ListAlbum from '../../components/listAlbum/listAlbum';
import './search.css';

function Search() {
  type InputData = {
    name: string
  };
  const initialState = {
    name: '',
  };
  const initialAlbum = {
    artistId: 0,
    artistName: '',
    collectionId: 0,
    collectionName: '',
    collectionPrice: 0,
    artworkUrl100: '',
    releaseDate: '',
    trackCount: 0,
  };

  const [inputData, setInputData] = useState<InputData>(initialState);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const [albumData, setAlbumData] = useState<AlbumType[]>([initialAlbum]);
  const [artistName, setArtistName] = useState<string>();
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value });
    if (inputData.name.length < 1) {
      setButtonDisable(true);
    } else {
      setButtonDisable(false);
    }
  };

  const findAlbum = async () => {
    const searchAlbum = await searchAlbumsAPI(inputData.name);
    return searchAlbum;
  };

  const handleSubmit = async () => {
    const albums = await findAlbum();
    setArtistName(inputData.name);
    setAlbumData(albums);
    setInputData(initialState);
    setShow(true);
  };
  return (
    <>
      <div>
        <input
          data-testid="search-artist-input"
          name="name"
          value={ inputData.name }
          onChange={ handleChange }
        />
        <button
          data-testid="search-artist-button"
          disabled={ buttonDisable }
          onClick={ handleSubmit }
        >
          Pesquisar
        </button>
      </div>
      <div className="render-container">
        {albumData.length > 1 ? (
          <h2>{`Resultado de álbuns de: ${artistName}`}</h2>) : ('')}
        {show && (albumData.length > 1 ? (
          albumData.map((data) => <ListAlbum prop={ data } key={ data.collectionId } />))
          : (<h1>Nenhum álbum foi encontrado</h1>)) }
      </div>
    </>
  );
}

export default Search;

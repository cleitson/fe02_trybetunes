import { useState } from 'react';
import { SongType } from '../../types';
import './MusicCard.css';
import imgFavorite from '../../images/checked_heart.png';
import imgNotFavorite from '../../images/empty_heart.png';

type MusicCardProp = {
  musics: SongType,
};

function MusicCard({ musics }: MusicCardProp) {
  const [isChecked, setIsChecked] = useState(false);
  // const [favoriteSongs, setFavoriteSongs] = useState<SongType[]>();

  const {
    trackId,
    trackName,
    previewUrl,
  } = musics;

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  // function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
  //   const { name, type } = event.target;
  // }

  return (
    <div className="musicList-container">
      <span>{trackName}</span>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
      </audio>
      <label
        data-testid={ `checkbox-music-${trackId}` }
      >
        <input
          name="favoriteSong"
          type="checkbox"
          checked={ isChecked }
          onClick={ handleClick }
        />
        <img
          src={ isChecked ? (imgFavorite) : (imgNotFavorite) }
          alt="favorite"
          className="imagem-checkbox"
        />
      </label>
    </div>
  );
}

export default MusicCard;

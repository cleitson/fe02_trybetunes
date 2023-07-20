import { SongType } from '../../types';
import './musicList.css';

type MusicListProp = {
  musics: SongType,
};

function MusicList({ musics }: MusicListProp) {
  const {
    trackId,
    trackName,
    previewUrl,
  } = musics;
  return (
    <div className="musicList-container">
      <span>{trackName}</span>
      <audio data-testid="audio-component" src={ previewUrl } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        {' '}
        <code>audio</code>
      </audio>
    </div>
  );
}

export default MusicList;

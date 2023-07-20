import { SongType } from '../../types';

type MusicListProp = {
  musics: SongType,
};

function MusicList({ musics }: MusicListProp) {
  const {
    trackName,
    previewUrl,
  } = musics;
  return (
    <div>
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

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import Loading from '../../components/loading/loading';
import { AlbumType, SongType } from '../../types';
import MusicList from '../../components/musicList/musicList';
import './album.css';

export default function Album() {
  const [load, setLoad] = useState<boolean>(true);
  const [coverAlbum, setCoverAlbum] = useState<AlbumType>();
  const [album, setAlbum] = useState<(AlbumType | SongType)[]>();

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const musics = async () => {
      const albums = await getMusics(String(id));
      setLoad(false);
      setCoverAlbum(albums[0]);
      const newAlbum = albums.slice();
      newAlbum.splice(0, 1);
      setAlbum(newAlbum);
      console.log(coverAlbum);
      console.log(albums);
    };
    musics();
  }, [id]);
  return (
    <div>
      {load ? (<Loading />) : (
        <div className="album-container">
          <div className="render-album">
            <img src={ coverAlbum?.artworkUrl100 } alt={ coverAlbum?.collectionName } />
            <p data-testid="album-name">{coverAlbum?.collectionName}</p>
            <p data-testid="artist-name">{coverAlbum?.artistName}</p>
          </div>
          <div className="render-musics">
            {album?.map((songs) => (<MusicList
              key={ songs?.trackId }
              musics={ {
                trackId: songs?.trackId,
                trackName: songs?.trackName,
                previewUrl: songs?.previewUrl,
              } }
            />))}
          </div>
        </div>
      )}
    </div>
  );
}
/*
  trackId: 12,
  trackName: 0,
  trackNumber: 1,
        const filterdAlbum: SongType[] = await newAlbum.map((song) => ({
        trackId: song.trackId,
        trackName: song.trackName,
        trackViewUrl: song.trackViewUrl,
      }));

  {album?.map((songs) => (<MusicList
              key={ songs?.trackId }
              musics={ {
                trackId: songs?.trackId,
                trackName: songs?.trackName,
                previewUrl: songs?.previewUrl,
              } }
            />))}
*/

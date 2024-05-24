import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
       * Main Container
       *  - Video Background
       *  - Video Title
       * Secondry Container
       *  - Movie List * N
       *    - Cards * n 
       */}
    </div>
  )
}

export default Browse
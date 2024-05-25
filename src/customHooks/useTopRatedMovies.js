import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRateMovies);
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {
        !topRatedMovies.length && getTopRatedMovies();
    }, [])
}
export default useTopRatedMovies;
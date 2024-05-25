import { useSelector } from "react-redux"
import lang from "../utils/languageContant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addGptSearchMovies} from '../utils/gptSlice';
const GptSearchBar = () => {
    const dispatch = useDispatch();
    const language = useSelector(store => store.config.lang);
    const searchText = useRef(null);


    //Search Movie in TMDB
    const searchMovieInTmdb = async (movieName) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleSearch = async () => {
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        // const gptResults = await openai.chat.completions.create({
        // messages: [{ role: "user", content: gptQuery }],
        // model: "gpt-3.5-turbo",
        // });

        // if (!gptResults.choices) {
        // // TODO: Write Error Handling
        // }
        // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        const gptMovies = ['Andaaz Apna Apna ', 'Chupke Chupke ','Chalti ka Naam Gaadi ' , 'Amar Akbar Anthony ', 'Padosan'];
        // For Each Movie I have to search it in tmd movie api 
        // This returns a promise array
        const data = gptMovies.map((movie) => searchMovieInTmdb(movie));
        const searchResults = await Promise.all(data);
        dispatch(addGptSearchMovies({movieNames:gptMovies, movieResults : searchResults}));
    }

    return (
        <div className='pt-[50%] md:pt-[10%] flex  justify-center'>
            <form className='bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg'  onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type='text' className='text-sm md:text-lg p-3 m-3 md:p-4 md:m-4 col-span-9' placeholder={lang[language].searchText} />
                <button className='py-1 px-2 m-3 md:py-2 md:px-4 md:m-4 bg-red-800 text-white rounded col-span-3' onClick={handleSearch}>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
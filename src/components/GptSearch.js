import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_IMAGE } from '../utils/constants'

const GptSearch = () => {
    return (
        <>
        <div className='fixed'>
                <img className="h-screen w-screen object-cover" src={BACK_IMAGE} alt="" />
            </div>
            <div>
            <div className='absolute w-full'>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
        </>
    )
}

export default GptSearch
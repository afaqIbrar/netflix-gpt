import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_IMAGE } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='fixed'>
                <img className="concord-img vlv-creative w-full" src={BACK_IMAGE} alt="" />
            </div>
            <div className='absolute w-full'>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </div>
    )
}

export default GptSearch
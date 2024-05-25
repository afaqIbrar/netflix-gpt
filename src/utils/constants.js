export const LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const BACK_IMAGE = 'https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/0279102c-4f3f-4ed2-a283-cce57434d595/PK-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg';
export const DEFAULT_USER_AVATAR = 'https://avatars.githubusercontent.com/u/60314748?v=4';
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
};
export const IMAGE_CDN = 'https://image.tmdb.org/t/p/w300';

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "ur", name: "Urdu" },
    { identifier: "sp", name: "Spanish" },
]
export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
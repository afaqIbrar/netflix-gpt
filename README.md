# Netflix gpt

    - Create React App
    - Configured Tailwind css
    - Header
    - Sign/Sign Up form
    - Routing
    - Login Form
    - Form Validation
    - useRef Hooks
    - Implement Sign in and Sign Up using firebase APIs
    - Setup Redux and create redux store with user slice
    - Implement Sign out 
    - Update Profile
    - Bug fix - Sign Up User Display Name and profile picture
    - Bug fix - If user is not login redirect the /browse to login and vice versa that means protecting the routes
    - As we move the onAuthStateChange listener to header then we have to unsubscribe the listener coz it can add multiple listeners
    - Add the hard coded strings to contants file.
    - Register TMDB API & create an app & get access token
    - Get Data from TMDB now playing movies 
    - Custom hook for now playing movies
    - Create a movie slice
    - Updated the store with movies
    - Planning for container
    - Add Title containers
    - Fetch Data for trailer video
    - Update store with trailer video data
    - Embedded the youtube video and make it mute and auto play
    - Build Secondary Component
    - Build Movie List component
    - Build Movie card
    - Add tmdb image cdn
    - Add Now Playing, Toprated upcoming trending action in movies reducer
    - Add custom hooks for these movie types and dispatch the actions
    - Make the UI look good with tailwind
    - Create GPT search bar
    - Implement Multi Language feature in GPT Search 
    



# Features
    - Login Page / Sign Up
        - Sign In /  Sign Up Form
        - Redirect to Browse
    - Browse Page (Only Comes after authentication)
        - Header
        - Main Movie
            - Trailer in Background
            - Movie title and description
            - Movie Suggestions
                - MovieList * N
    - NetflixGpt
        - Search Bar
        -  Movie Suggestions 
# Movies Gallery <img style="width: 121px;" align="right" src="./frontend/src/assets/MGLogoMD.PNG">
> ## Table of contents
- [Overview](#overview)
- [Technology used](#technologies-used)
- [Demo](#demo)
- [Getting Started](#getting-started)
    - [prerequisite](#prerequisite)
    - [installation](#installation)
- [References](#references)

___

> ## Overview

Movies gallery web app that does the following :

- Browse, search for all movies.
- Filter movies as cateigories and genres.
- Very considerate UI/UX performance, and responsive web app.
- User can add movies to the local storage (MyGallery).
- User can perform CRUD operations on the website's data and workflows.

___


> ## Technologies used

- DataBase
    - MongoDB
- backend
    - ExpressJS and Node.js
    - External API "TMDB API"
- Frontend
    - React JS
    - React-Bootstrap
    - Redux-Toolkit
____

>## Demo

Coming Soon ...

___

>## Getting Started

-  ### Prerequisite 
    - MongoDBCompass
    - Node JS v-14 or newer
-  ### Configuration
    1. Create .env file like .env.sample file in backend folder
    2. In .env file you'll create the following variables:
        - PORT = 3000
        - DB_CONNECT = mongodb://localhost:27017/"Your-DB-name"
        - TOKEN_SECRET = "random-string"
        - API_KEY = "your TMDB API key"
-  ### Installation
    1. Navigate To the Directory you want to download in and Clone
    ```
    git clone https://github.com/Mohammad-Mancy/Movies-Gallery.git
    ```
    2. Run the following command in the "backend"  folder to install NPM packages for the server:
    ```
    npm install
    ```
    3. Navigate into the "frontend" folder, to install NPM packages:
    ```
    npm install
    ```
    4. To run the server, navigate to the "backend" folder then run:
    ```
    npm start
    ```
    4. To run the app, navigate to the "frontend" folder then run:
    ```
    npm start
    ```
___

>## References
- [LinkedIn](https://www.linkedin.com/in/mohammad-mancy-75b591227/)
- [Twitter](https://twitter.com/mancy_mohammad)
- [Facebook](https://www.facebook.com/mohammad.mancy.33)

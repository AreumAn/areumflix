## Intro
Use the [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction) to build a UI for showing and searching their movies and tv shows.


## Table of Contents
- [Intro](#intro)
- [Table of Contents](#table-of-contents)
- [Requirements](#requirements)
- [Setup](#setup)
- [Dev Setup](#dev-setup)
- [Library](#library)
- [API Data](#api-data)
- [Overview](#overview)

---
## Requirements
* [ ] 3 top menus Movie, TV and Search
* [ ] We can move previous page with back button
* [ ] `Movie` menu shows movies by section: nowPlaying, upcoming, airingToday
* [ ] `TV show ` menu shows contents by section: topRated, popular, popular
* [ ] Search results includes some of information - title, picture etc
* [ ] When a user clicks on a result, it moves to detail page.
* [ ] Use debounce to prevent unnecessary API calls: Custom debounce in `utils/debounce.js` (reference: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci)
* [ ] Only show last results: Use axios cancelToken to cancel the previous request, if there is new request called.
* [ ] Use pagination in search page
* [ ] User can search tv or movie by option bar

## Setup

1. Run `npm install` or `yarn`
2. Run `npm start` or `yarn start`
3. Open your browser to [localhost:3000](http://localhost:3000)

## Dev Setup
- **eslint, prettier**
```
yarn add --dev eslint
yarn run eslint --init
yarn add eslint-config-prettier
```

## Library
- axios : To get api data
- prop-types
- styled-componenets
- react-router-dom : To move detail page

## API Data
[The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)


## Overview



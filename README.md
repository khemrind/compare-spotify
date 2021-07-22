# compare-spotify

Spotify profile comparing web service.

This project is backed with Django and uses React for the UI.
Related files are compiled with Webpack and served on Django using Whitenoise.
Django's REST framework is the main connection between client and server.

## getting started

Make sure you have the following installed: `python`, `npm`
```sh
cd compare-spotify
Scripts\activate
npm run
py manage.py collectstatic
py manage.py runserver
```

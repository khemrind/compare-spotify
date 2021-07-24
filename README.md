# compare-spotify

_Spotify profile comparing web service._

This project is backed with Django and uses React for the UI.
Related files are compiled with Webpack and served on Django using Whitenoise.
Django's REST framework is the main connection between client and server.

## Deployment

_Make sure you have the following installed: `python`, `npm` along with their respective dependencies for the project._

Specific build files must be present before Heroku can launch the site from a github branch.
- you should clear any files in `*\dist\` and `\staticfiles\` to reduce push size.
- however, `favicon.ico` must be in `\staticfiles\` before launch.

Complete build commands:
```sh
cd compare-spotify
Scripts\activate
npm run start
py manage.py collectstatic
py manage.py runserver
```

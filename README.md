### Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c4078936-581b-40ef-90b4-4bb79191a139/deploy-status)](https://app.netlify.com/sites/cheeesypizza/deploys)

# CheesyPizza

A pizza ordering website.

## Run the project

This project is a front-end template and can be used for various backend services.

You can use this bootstrap your e-commerce website and/or test your backend services.

Todo so, you need to add `.env` file into the project's directory. Then add the env variable url to your backend service.

```
REACT_APP_API_URL = 'http://localhost:8000'
```

install the node modules, run `yarn start` in your terminal to get the dev server running and start testing/developing.

## Folder-structure

I'm using a slightly modified version of the redux-toolkit's folder-structure.
It helped to avoid deep nesting, but has a drawback with the import/export. This can as well be fixed with the new experimental import/export syntax, but I haven't set it up yet.

I've separated the styles and I'm using css.modules. All the component/page styles are located in the same folder and exported using a index.js, which allows to do named imports from the`./src/styles` folder and forget about component's nesting.

Here is the folder structure, but it might get changed by the time.

```

├── public/

├── src/

  ├── app         # The app's config files,
                    api, store, settings

  ├── assets      # The static assets
                    (e.g. images, fonts)

  ├── components  # The UI components

  ├── containers  # The containers, that
                    contain multiple UI components
                    and usually are just a markup

  ├── features    # The components that are
                    working with the redux store

  ├── pages       # The actual pages, that
                    can contain multiple containers

  ├── styles      # The component/container's styles

```

## ToDo

- [] Add user profiles

- [] Extend the useApi hook

- [] Add UI Testing

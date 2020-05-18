# CheesyPizza

A pizza ordering website.

## Folder-Structure

I'm using a little modified version of the default folder-structure from redux-toolkit template.

Here is the folder structure for this project.

```
.
|- src

    |- app          # The folder for the logical parts of the project (e.g. redux store, api settings, etc.)

    |- assets       # All the static assets are located here with separate folders for each asset type (e.g. fonts, images)

    |- features     # All the components that are working with the redux store are presented here as features, and each feature will contain it's own css module.

    |- components   # The UI components lay here

    |- pages        # All the container pages are located here.

    |- styles       # I'm using the css modules, and to avoid of to much nesting and make project more organized I keep all the component/page style files in one folder and I export them with a single `index.js` file. This allows to import the styles using destructuring and not to worry about nesting, etc. Modules are encapsulated and without any globals.

    |- tests        # Folder for the frontend tests

```

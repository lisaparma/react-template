# React template

This is my template for react applications.
All my fav packages and features are setted and configured in the code.

## Available features
- ### Github Pages
    Deploy react app on github page.
    1. Active github page on repo settings.
    2. Set real repo homepage on package.json
    2. Run `npm run predeploy` and `npm run deploy` to deploy app. \
    See [documentation](https://lodash.com/docs/4.17.15) for more information.
    
- ### Styled Components
    CSS-in-JS tool that bridges the gap between components and styling.\
    Set a `ThemeProvider` with a custom theme to create in `src/theming/`\
    Info and documentation [here](https://styled-components.com/docs).
      
- ### React Router DOM
    Declarative routing for React.\
    Set up only a main route in `src/routing/` that display `App` component.\
    Info and documentation [here](https://reactrouter.com/web/guides/quick-start).
       
- ### React Redux
   Predictable state container for JavaScript apps.\
   Set up a template of store, reducers, actions and middleware in `src/redux/` and provided store in all app.\
   Info and documentation [here](https://redux.js.org/introduction/getting-started).
              
- ### PropTypes
    Typechecker for the props for a React component.\
    List of possible types [here](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes).
        
- ### Lodash
    A JavaScript utility library delivering modularity, performance & extras.\
    Info and documentation [here](https://lodash.com/docs/4.17.15).
  
- ### i18n
  Translations system fro react. \
  Use `src/ranslations/` to add translations strings.
  
- ### FontAwesome Icons
  Beautiful free icons available [here](https://fontawesome.com/icons?d=gallery&p=1&m=free)
            
## Available Scripts
You can run all *create-react-app* scripts:

### `npm start`
To Run the app in the development mode on  [http://localhost:3000](http://localhost:3000).

### `npm test`
To launches the test runner in the interactive watch mode.

### `npm run build`
To build the app for production to the `build` folder.

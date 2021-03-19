import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from 'react-redux';

import { AppRouter } from "./routing/AppRouter";
import { theme } from "./theming/defaultTheme";
import { store } from "./redux/store";
import './index.css';

import './translations/i18n';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <AppRouter />
      </ReduxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

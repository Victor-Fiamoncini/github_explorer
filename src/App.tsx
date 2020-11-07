import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';

import Routes from './routes';
import GlobalStyle from './styles/global';

import light from './styles/themes/light';

const App: React.FC = () => (
	<Provider store={store}>
		<ThemeProvider theme={light}>
			<Routes />
			<GlobalStyle />
		</ThemeProvider>
	</Provider>
);

export default App;

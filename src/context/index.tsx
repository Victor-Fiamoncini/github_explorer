import React from 'react';

import { ThemeProvider } from './ThemeContext';
import { RepositoryProvider } from './RepositoryContext';

const AppProvider: React.FC = ({ children }) => (
	<ThemeProvider>
		<RepositoryProvider>{children}</RepositoryProvider>
	</ThemeProvider>
);

export default AppProvider;

import React from 'react';
import { ThemeProvider as Theme } from 'styled-components';

import lightTheme from '../../styles/themes/light';

export const ThemeProvider: React.FC = ({ children }) => (
	<Theme theme={lightTheme}>{children}</Theme>
);

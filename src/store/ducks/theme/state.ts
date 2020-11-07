export interface ThemeState {
	currentTheme: string;
	error: Error | null;
}

export default {
	currentTheme: 'light',
	error: null,
} as ThemeState;

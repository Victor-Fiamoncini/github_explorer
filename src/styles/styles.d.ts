import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;
		colors: {
			primary: string;
			secundary: string;
			tertiary: string;
			quartenary: string;
			quinary: string;
			senary: string;
			septenary: string;
			black: string;
			white: string;
			messages: {
				info: string;
				success: string;
				error: string;
			};
		};
		fonts: {
			primary: string;
		};
	}
}

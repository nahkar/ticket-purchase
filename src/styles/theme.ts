export const theme = {
	light: {
		colors: {
			primary: {
				green: '#00AB55',
				blue: '#3366ff',
				red: '#ff4842',
			},
			text: {
				primary: '#161c24',
				secondary: '#637381',
			},
			button: {
				outlined: '#212b36',
			},
			shadow: {
				main: 'rgba(145, 158, 171, 0.16)',
			},
			form: {
				border: 'rgba(145, 158, 171, 0.32)',
			},
		},
	},
};

export type ThemeT = {
	theme: typeof theme;
};

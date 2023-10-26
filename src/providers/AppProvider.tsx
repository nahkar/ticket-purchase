import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '~styles/globalStyles';
import { ThemeHoc } from '~styles/ThemeProvider';
import { theme } from '~styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';

type PropsT = { children: React.ReactNode };

export const AppProvider = ({ children }: PropsT) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<BrowserRouter>
			<ThemeHoc>
				<GlobalStyle theme={theme} />
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</ThemeHoc>
		</BrowserRouter>
	);
};

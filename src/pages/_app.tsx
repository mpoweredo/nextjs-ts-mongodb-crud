import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../chakra/chakra';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp;

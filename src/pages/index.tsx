import { Box, Center, Container, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import AddTodo from '../components/AddTodo';

const Home: NextPage = () => {
	return (
		<Container height='100vh'>
			<Box>
				<Center height='80px'>
					<Text textAlign='center' fontSize='3xl' fontWeight='semibold' color='gray.300'>
						Your last todo list!
					</Text>
				</Center>
				<AddTodo />
			</Box>
		</Container>
	);
};

export default Home;

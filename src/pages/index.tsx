import { Box, Center, Container, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const Home: NextPage = () => {
	return (
		<Container height='100vh'>
			<Stack spacing='5'>
				<Box>
					<Center height='80px'>
						<Text textAlign='center' fontSize='3xl' fontWeight='semibold' color='gray.300'>
							Your last todo list!
						</Text>
					</Center>
					<AddTodo />
				</Box>
				<TodoList />
			</Stack>
		</Container>
	);
};

export default Home;

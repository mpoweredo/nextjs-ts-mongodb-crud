import { Box, Center, Container, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodos';

const Home: NextPage = () => {
	const { isLoading, todos, refetch } = useTodos();

	return (
		<Container height='100vh'>
			<Stack spacing='5'>
				<Box>
					<Center height='80px'>
						<Text textAlign='center' fontSize='3xl' fontWeight='semibold' color='gray.300'>
							Your last todo list!
						</Text>
					</Center>
					<AddTodo refetch={refetch} />
				</Box>
				<TodoList isLoading={isLoading} todos={todos} />
			</Stack>
		</Container>
	);
};

export default Home;

import { Box, Center, Container, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/TodoTypes';

const getTodos = async () => {
	const result = await fetch('/api/getTodos');

	const data = await result.json();
	return data as TodoType[];
};

const Home: NextPage = () => {
	const {
		isLoading,
		data: todos,
		refetch,
	} = useQuery(['todos'], getTodos, {
		refetchInterval: 400000,
		refetchOnWindowFocus: false,
	});

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

import { Center, List, Spinner, Stack, Text } from '@chakra-ui/react';
import { TodoType } from '../types/TodoTypes';
import TodoItem from './TodoItem';

type Props = {
	todos?: TodoType[];
	isLoading: boolean;
};

const TodoList = ({ todos, isLoading }: Props) => {
	return (
		<Stack bg='gray.700' minHeight='300px' maxHeight='70vh' direction='column' p='4' rounded='5'>
			<List
				h='full'
				display='flex'
				flexDirection='column'
				gap='2'
				w='full'
				overflowY='auto'
				pr='1'
				css={{
					'&::-webkit-scrollbar': {
						width: '4px',
					},
					'&::-webkit-scrollbar-track': {
						width: '6px',
					},
					'&::-webkit-scrollbar-thumb': {
						background: 'gray',
						borderRadius: '24px',
					},
				}}>
				{isLoading ? (
					<Center h='full'>
						<Spinner />
					</Center>
				) : todos?.length !== 0 ? (
					todos?.map((todo: TodoType) => <TodoItem key={todo.id} todo={todo} />)
				) : (
					<Text color='gray.500' fontWeight='500'>
						There aren&rsquo;t any todos yet.
					</Text>
				)}
			</List>
		</Stack>
	);
};

export default TodoList;

{
	/* <Text color='gray.400' fontWeight='semibold'>
There are any todos right now...
</Text> */
}

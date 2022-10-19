import { Box, List, Stack, Text } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList = () => {
	return (
		<Box bg='gray.700' minHeight='250px' p='4' rounded='5'>
			<List>
				<Stack
					gap='1'
					maxHeight='55vh'
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
                        <Text color='gray.400' fontWeight='semibold'>There are any todos right now...</Text>
				</Stack>
			</List>
		</Box>
	);
};

export default TodoList;

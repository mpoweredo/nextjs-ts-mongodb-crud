import { DeleteIcon } from '@chakra-ui/icons';
import { Center, Checkbox, Editable, EditableInput, EditablePreview, Flex, IconButton, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { TodoType } from '../types/TodoTypes';

const TodoItem = ({ todo }: { todo: TodoType }) => {
	const [isChecked, setIsChecked] = useState(todo.isCompleted);

	const toggleChecked = () => setIsChecked(prevState => !prevState);

	const deleteTodoHandler = () => console.log('Deleted todo');

	const editTodoHandler = (nextValue: string) => console.log('edited todo: ', nextValue);

	return (
		<ListItem
			bg='gray.600'
			_hover={{ bg: 'gray.500' }}
			minHeight={{ base: '14', sm: '12' }}
			display='flex'
			justifyContent='center'
			flexDirection='column'>
			<Flex gap='2' h='full' w='full' px='3' cursor='pointer' rounded='2'>
				<Center w='full' justifyContent='start' gap='1'>
					<Checkbox borderColor='gray.400' onChange={toggleChecked} isChecked={isChecked} colorScheme='purple' />
					<Editable onSubmit={editTodoHandler} defaultValue={todo.title} w='full'>
						<EditablePreview
							wordBreak='break-all'
							color={isChecked ? 'gray.400' : ''}
							fontWeight='medium'
							as={isChecked ? 's' : 'p'}
							w='full'
							rounded='3'
							px='2'
							cursor='pointer'
						/>
						<EditableInput rounded='3' px='2' spellCheck='false' _focus={{ boxShadow: 'none', bg: 'whiteAlpha.300', color: 'gray.50' }} />
					</Editable>

					<IconButton onClick={deleteTodoHandler} ml='auto' bg='gray.700' _hover={{ bg: 'gray.600' }} aria-label='delete-button' size='sm'>
						<DeleteIcon />
					</IconButton>
				</Center>
			</Flex>
		</ListItem>
	);
};

export default TodoItem;

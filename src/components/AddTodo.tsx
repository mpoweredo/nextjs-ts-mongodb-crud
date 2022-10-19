import { Flex, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useToast } from '@chakra-ui/react';

const AddTodo = () => {
	const [todoTitle, setTodoTitle] = useState('');
	const [isLoading, setLoading] = useState(false);
	const changeTodoTitle = ({ target }: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(target.value);
	const toast = useToast();

	const addTodoHandler = async () => {
		try {
			setLoading(true);
			await fetch('/api/addTodo', {
				method: 'POST',
				body: JSON.stringify({ title: todoTitle }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setTodoTitle('');
		} catch (error) {
			if (error instanceof Error) {
				toast({
					title: error.message,
					status: 'error',
					duration: 5000,
					isClosable: true,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<Flex gap='2' direction={{ base: 'column', sm: 'row' }}>
			<Input
				value={todoTitle}
				onChange={changeTodoTitle}
				placeholder='Make dinner...'
				_focus={{ bg: 'gray.900' }}
				_hover={{ bg: 'gray.600' }}
				variant='filled'
				maxWidth='8xl'
				bg='gray.700'
				isDisabled={isLoading}
			/>
			<Button isLoading={isLoading} onClick={addTodoHandler} _hover={{ bg: 'purple.400' }} bg='purple.500'>
				Add todo
			</Button>
		</Flex>
	);
};

export default AddTodo;

import { Flex, Input, Button, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';

type Props = {
	refetch: () => void;
};

const AddTodo = ({ refetch }: Props) => {
	const [todoTitle, setTodoTitle] = useState('');
	const [isLoading, setLoading] = useState(false);
	const changeTodoTitle = ({ target }: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(target.value);
	const toast = useToast();

	const addTodoHandler = async (e: React.FormEvent) => {
		e.preventDefault();
		if (todoTitle.trim().length === 0) return;
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
			refetch();
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
		<form onSubmit={addTodoHandler}>
			<Box>
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
						maxLength={35}
						isDisabled={isLoading}
					/>
					<Button type='submit' isLoading={isLoading} _hover={{ bg: 'purple.400' }} bg='purple.500'>
						Add todo
					</Button>
				</Flex>
			</Box>
		</form>
	);
};

export default AddTodo;

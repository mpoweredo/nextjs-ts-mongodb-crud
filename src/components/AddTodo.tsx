import { Flex, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const AddTodo = () => {
	return (
		<Flex gap='2' direction={{ base: 'column', sm: 'row' }}>
			<Input placeholder='Make dinner...' _focus={{ bg: 'gray.900' }} _hover={{ bg: 'gray.600' }} variant='filled' maxWidth='8xl' bg='gray.700' />
			<Button bg='purple.500'>Add todo</Button>
		</Flex>
	);
};

export default AddTodo;

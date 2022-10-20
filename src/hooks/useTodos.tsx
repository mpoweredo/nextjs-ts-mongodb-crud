import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { TodoType } from '../types/TodoTypes';

const getTodos = async () => {
	const result = await fetch('/api/getTodos');

	const data = await result.json();
	return data as TodoType[];
};

const useTodos = () => {
	const {
		isLoading,
		data: todos,
		refetch,
	} = useQuery(['todos'], getTodos, {
		refetchInterval: 400000,
		refetchOnWindowFocus: false,
	});

	return { todos, isLoading, refetch };
};

export default useTodos;

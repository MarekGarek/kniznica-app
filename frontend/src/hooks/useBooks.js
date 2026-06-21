import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBooks, createBook, updateBook } from '../api/bookApi';
import { toast } from 'sonner';

export const useBooks = () => {
  const queryClient = useQueryClient();

  // GET
  const query = useQuery({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });

  // CREATE
  const createMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      toast.success('Kniha bola úspešne pridaná!');
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
    onError: (error) => {
      const serverMessage = error.response?.data?.error || error.message || 'Neznáma chyba';
      toast.error(`Nepodarilo sa pridať knihu: ${serverMessage}`);
    }
  });

  // UPDATE
  const updateMutation = useMutation({
    mutationFn: updateBook,
    onSuccess: () => {
      toast.success('Kniha bola úspešne upravená!');
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
    onError: (error) => {
      const serverMessage = error.response?.data?.error || error.message || 'Neznáma chyba';
      toast.error(`Nepodarilo sa upraviť knihu: ${serverMessage}`);
    }
  });

  return {
    ...query,
    createBook: createMutation.mutateAsync,
    updateBook: updateMutation.mutateAsync,
    isSaving: createMutation.isPending || updateMutation.isPending,
  };
};
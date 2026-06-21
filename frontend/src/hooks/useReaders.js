import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchReaders, createReader, updateReader } from '../api/readerApi';
import { toast } from 'sonner';

export const useReaders = () => {
  const queryClient = useQueryClient();

  // GET
  const query = useQuery({
    queryKey: ['readers'],
    queryFn: fetchReaders,
  });

  // CREATE
  const createMutation = useMutation({
    mutationFn: createReader,
    onSuccess: () => {
      toast.success('Čitateľ bol úspešne pridaný!');
      queryClient.invalidateQueries({ queryKey: ['readers'] });
    },
    onError: (error) => {
      const serverMessage = error.response?.data?.error || error.message || 'Neznáma chyba';
      toast.error(`Nepodarilo sa pridať čitateľa: ${serverMessage}`);
    }
  });

  // UPDATE
  const updateMutation = useMutation({
    mutationFn: updateReader,
    onSuccess: () => {
      toast.success('Zmeny boli úspešne uložené!');
      queryClient.invalidateQueries({ queryKey: ['readers'] });
    },
    onError: (error) => {
      const serverMessage = error.response?.data?.error || error.message || 'Neznáma chyba';
      toast.error(`Nepodarilo sa upraviť čitateľa: ${serverMessage}`);
    }
  });

  return {
    ...query,
    createReader: createMutation.mutateAsync,
    updateReader: updateMutation.mutateAsync,
    isSaving: createMutation.isPending || updateMutation.isPending,
  };
};
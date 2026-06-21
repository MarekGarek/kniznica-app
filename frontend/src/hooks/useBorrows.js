import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBorrowsList, createBorrow, returnBook } from '../api/borrowApi';
import { toast } from 'sonner';

export const useBorrows = () => {
    const queryClient = useQueryClient();

    // GET-
    const query = useQuery({
        queryKey: ['borrows'],
        queryFn: getBorrowsList,
    });

    // CREATE 
    const borrowMutation = useMutation({
        mutationFn: createBorrow,
        onSuccess: () => {
            toast.success('Kniha bola úspešne požičaná!');
            queryClient.invalidateQueries({ queryKey: ['books'] });
            queryClient.invalidateQueries({ queryKey: ['borrows'] });
        },
        onError: (error) => {
            const serverMessage = error.response?.data?.error || error.message || 'Neznáma chyba';
            toast.error(`Nepodarilo sa požičať knihu: ${serverMessage}`);
        }
    });

    // UPDATE
    const returnMutation = useMutation({
        mutationFn: returnBook,
        onSuccess: () => {
            toast.success('Kniha bola úspešne vrátená!');
            queryClient.invalidateQueries({ queryKey: ['books'] });
            queryClient.invalidateQueries({ queryKey: ['borrows'] });
        },
        onError: (error) => {
            const serverMessage = error.response?.data?.error || error.message || 'Neznáma chyba';
            toast.error(`Nepodarilo sa vrátiť knihu: ${serverMessage}`);
        }
    });

    return {
        ...query,
        borrowBook: borrowMutation.mutateAsync,
        returnBook: returnMutation.mutateAsync,
        isProcessing: borrowMutation.isPending || returnMutation.isPending,
    };
};
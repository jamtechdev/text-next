import { useQuery } from 'react-query';
import { API_ENDPOINTS } from './rest/api-endpoints';
import client from "./rest/index"

export function useCategory(options?: Partial<any>) {
    const { data, isLoading, error } = useQuery<any, Error>(
        [API_ENDPOINTS.CATEGORY, options],
        // ({ queryKey }) => client.menus.all(Object.assign({}, queryKey[1]))
        () => client.category.all(options)
    );
    return {
        category: data,
        isLoading,
        error,
    };
}
import type { Genre } from '@/interfaces/Genre';
import useData from './useData';

const useGenere = () => useData<Genre>('/genres');
export default useGenere;
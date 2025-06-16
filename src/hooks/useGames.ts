import type { Game } from "@/interfaces/Game";
import useData from "./useData";
import type { Genre } from "@/interfaces/Genre";
//We are only defining the variables we need.

const useGames= (selectedGenre:Genre|null) => useData<Game>('/games', {params:{genres:selectedGenre?.id}}, [selectedGenre?.id] );
export default useGames;
import type { Game } from "@/interfaces/Game";
import useData from "./useData";
//We are only defining the variables we need.

const useGames= () => useData<Game>('/games');
export default useGames;
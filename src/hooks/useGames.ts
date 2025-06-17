import type { Game} from "@/interfaces/Game";
import useData from "./useData";
import type { GameQuery } from "@/interfaces/GameQuery";
//We are only defining the variables we need.

const useGames= (gameQuery:GameQuery) => useData<Game>(
  '/games', 
  {params:{genres:gameQuery.genre?.id,platforms:gameQuery.platform?.id, ordering: gameQuery.sortOrder, search:gameQuery.searchText}},
  // [selectedGenre?.id, selectedPlatform?.id] is used to refetch the data when the selected genre or platform changes.
  // This is a dependency array that tells the hook to refetch the data when either of these values change. 
  [gameQuery] );
export default useGames;
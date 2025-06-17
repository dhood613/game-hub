import type { Game, Platform } from "@/interfaces/Game";
import useData from "./useData";
import type { Genre } from "@/interfaces/Genre";
//We are only defining the variables we need.

const useGames= (selectedGenre:Genre|null, selectedPlatform:Platform|null) => useData<Game>(
  '/games', 
  {params:{genres:selectedGenre?.id,platforms:selectedPlatform?.id}},
  // [selectedGenre?.id, selectedPlatform?.id] is used to refetch the data when the selected genre or platform changes.
  // This is a dependency array that tells the hook to refetch the data when either of these values change. 
  [selectedGenre?.id, selectedPlatform?.id] );
export default useGames;
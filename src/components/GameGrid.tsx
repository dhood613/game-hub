import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, err, isLoading } = useGames();
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        padding="10px"
        spaceX={1}
      >
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

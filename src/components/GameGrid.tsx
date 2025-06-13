import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, err } = useGames();
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} padding="10px">
        {games.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { data, err, isLoading } = useGames();
  return (
    <>
      {err && <Text>{err}</Text>}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        padding="10px"
        spaceX={1}
      >
        {isLoading &&
          Array.from({ length: 20 }).map((_, index) => (
            <GameCardContainer>
              <GameCardSkeleton key={index} />
            </GameCardContainer>
          ))}
        {data &&
          data.map((game) => (
            <GameCardContainer>
              <GameCard game={game} key={game.id}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

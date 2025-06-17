import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import type { GameQuery } from "@/interfaces/GameQuery";

interface Props {
  gameQuery: GameQuery;
}
export const GameGrid = ({ gameQuery }: Props) => {
  const { data, err, isLoading } = useGames(gameQuery);
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
            <GameCardContainer key={index}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

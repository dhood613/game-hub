import type { GameQuery } from "@/interfaces/GameQuery";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name ?? ""} ${
    gameQuery.genre?.name ?? ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

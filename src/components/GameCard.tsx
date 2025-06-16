import type { Game } from "@/interfaces/Game";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"; // ✅ Make sure Td is imported from Chakra
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="300px">
      {/* ✅ Chakra's table cell component */}
      <Image
        src={game.background_image}
        alt={game.name}
        height="250px"
        width="100%"
        objectFit="cover"
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack marginY={1} justify="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

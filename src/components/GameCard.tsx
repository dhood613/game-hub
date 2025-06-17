import type { Game } from "@/interfaces/Game";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"; // ✅ Make sure Td is imported from Chakra
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { Emoji } from "./Emoji";
// ✅ Import a placeholder image

interface Prop {
  game: Game;
}

export const GameCard = ({ game }: Prop) => {
  return (
    <Card.Root>
      {/* ✅ Chakra's table cell component */}
      <Image
        src={game?.background_image}
        alt={game.name}
        height="250px"
        width="100%"
        objectFit="cover"
      />
      <CardBody>
        <HStack marginY={1} justify="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

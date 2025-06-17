import useGenres from "@/hooks/useGenres";
import type { Genre } from "@/interfaces/Genre";
import {
  Image,
  VStack,
  HStack,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}
export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, err, isLoading } = useGenres();

  if (err) return null;
  if (isLoading || !data || !Array.isArray(data)) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize="2xl" paddingBottom="10px">
        Genres
      </Heading>
      <VStack align="start" gap={3} paddingY="5px">
        {data.map((genre) => (
          <HStack key={genre.id}>
            <Image
              src={genre.image_background}
              alt={genre.name}
              boxSize="32px"
              objectFit="cover"
            />
            <Button
              whiteSpace={"normal"}
              textAlign="left"
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              paddingY="5px"
              variant={"plain"}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

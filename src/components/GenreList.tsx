import useGenres from "@/hooks/useGenres";
import type { Genre } from "@/interfaces/Genre";
import { Image, VStack, Text, HStack, Spinner, Button } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}
export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, err, isLoading } = useGenres();

  if (err) return null;
  if (isLoading || !data || !Array.isArray(data)) return <Spinner></Spinner>;
  return (
    <VStack align="start" gap={3} paddingY="5px">
      {data.map((genre) => (
        <HStack key={genre.id} paddingX="5px">
          <Image src={genre.image_background} alt={genre.name} boxSize="32px" />
          <Button
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            onClick={() => onSelectGenre(genre)}
            fontSize="sm"
            paddingY="5px"
            variant={"plain"}
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </VStack>
  );
};

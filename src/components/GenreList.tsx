import useGenres from "@/hooks/useGenres";
import { Image, VStack, Text, HStack, Spinner } from "@chakra-ui/react";

export const GenreList = () => {
  const { data, err, isLoading } = useGenres();

  if (err) return null;
  if (isLoading || !data || !Array.isArray(data)) return <Spinner></Spinner>;
  return (
    <VStack align="start" gap={3} paddingY="5px">
      {data.map((genre) => (
        <HStack key={genre.id} paddingX="5px">
          <Image src={genre.image_background} alt={genre.name} boxSize="32px" />
          <Text fontSize="lg" paddingY="5px">
            {genre.name}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
};

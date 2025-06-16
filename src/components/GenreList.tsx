import useGenres from "@/hooks/useGenres";
import { Text } from "@chakra-ui/react";
export const GenreList = () => {
  const { data, err } = useGenres();

  if (!data) return <p>No data available.</p>;

  return (
    <>
      {err && <Text>{err}</Text>}
      {data.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </>
  );
};

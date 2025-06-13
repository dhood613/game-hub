import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Stack, Table, Text } from "@chakra-ui/react";
//We are only defining the variables we need.
interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}
export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErr(err.message));
  });

  return (
    <>
      {err && <Text>{err}</Text>}
      <Stack>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Title</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          {games.map((game) => (
            <Table.Row key={game.id}>
              <Table.Cell>{game.name}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Root>
      </Stack>
    </>
  );
};

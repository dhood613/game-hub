import { Text, Stack, Table } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

export const GameGrid = () => {
  const { games, err } = useGames();
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
          <Table.Body>
            {games.map((game) => (
              <Table.Row key={game.id}>
                <Table.Cell>{game.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Stack>
    </>
  );
};

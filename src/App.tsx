import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";

function App() {
  //Grid defines what the page will look like
  //Setting different sizes for moble and full screen
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* Aisde only visble on full displays */}
      <Box display={{ base: "none", lg: "block" }}>
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Box>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

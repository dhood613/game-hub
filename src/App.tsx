import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  //Grid defines what the page will look like
  //Setting different sizes for moble and full screen
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* Aisde only visble on full displays */}
      <Box display={{ base: "none", lg: "block" }}>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Box>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

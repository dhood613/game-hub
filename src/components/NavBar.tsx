import { HStack, Image, Text } from "@chakra-ui/react";
//Need to import the logo
import logo from "../assets/GameHubResources/Logo/logo.webp";
//Layout our components horizontally
export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
    </HStack>
  );
};

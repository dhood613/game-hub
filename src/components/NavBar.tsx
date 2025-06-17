import { HStack, Image } from "@chakra-ui/react";
//Need to import the logo
import logo from "../assets/GameHubResources/Logo/logo.webp";
import { SearchInput } from "./SearchInput";
//Layout our components horizontally
interface Props {
  onSearch: (searchTerm: string) => void;
}
export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
    </HStack>
  );
};

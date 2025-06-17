import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
interface Props {
  onSearch: (searchTerm: string) => void;
}
export const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup flex={1}>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};

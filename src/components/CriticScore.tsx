import { Badge, Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
export const CriticScore = ({ score }: Props) => {
  const getColor = (score: number) => {
    if (score > 80) return "green";
    if (score > 50) return "yellow";
    return "red";
  };
  return (
    <Badge
      bg={getColor(score)}
      color={getColor(score) === "yellow" ? "gray" : "white"}
      px={2}
      py={1}
      borderRadius="md"
      fontWeight="bold"
      display="inline-block"
      minW="40px"
      textAlign="center"
      opacity={0.75}
    >
      {score}
    </Badge>
  );
};

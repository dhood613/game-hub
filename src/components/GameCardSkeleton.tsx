import { HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="200px" />
      <HStack width="full">
        <SkeletonText noOfLines={2} />
        <Stack flex="1">
          <Skeleton height="5" />
          <Skeleton height="5" width="80%" />
        </Stack>
      </HStack>
    </Stack>
  );
};

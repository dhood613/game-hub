import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Stack gap="6" width="300px" borderRadius={10} overflow="hidden">
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

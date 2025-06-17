import bullsEye from "../assets/GameHubResources/Emojis/bulls-eye.webp";
import thumbsUp from "../assets/GameHubResources/Emojis/thumbs-up.webp";
import meh from "../assets/GameHubResources/Emojis/meh.webp";
import type { ImageProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
interface Props {
  rating: number;
}
export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
};

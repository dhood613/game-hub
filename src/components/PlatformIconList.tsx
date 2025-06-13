import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import type { IconType } from "react-icons";
import type { Platform } from "@/interfaces/Game";
import { HStack, Icon } from "@chakra-ui/react"; // Assuming you're using React Native

interface Props {
  platforms: Platform[];
}
export const PlatformIconList = ({ platforms }: Props) => {
  const consoleIconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => {
          const IconComponent = consoleIconMap[platform.slug];
          if (!IconComponent) return null; // gracefully skip unknown platforms

          return (
            <Icon
              as={IconComponent}
              key={platform.id}
              color="gray.500"
              boxSize={4}
            />
          );
        })}
      </HStack>
    </>
  );
};

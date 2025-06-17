import usePlatforms from "@/hooks/usePlatforms";
import type { Platform } from "@/interfaces/Game";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform | null) => void;
}
export const PlatformSelecter = ({
  selectedPlatform,
  onSelectPlatform,
}: Props) => {
  const { data, err } = usePlatforms();
  if (err || !data) return null;
  return (
    <select>
      <option
        value=""
        onSelect={() => onSelectPlatform(null)}
        selected={!selectedPlatform}
      >
        Platform
      </option>
      {data.map((platform) => (
        <option
          key={platform.id}
          value={platform.id}
          onSelect={() => onSelectPlatform(platform)}
        >
          {platform.name}
        </option>
      ))}
    </select>
  );
};

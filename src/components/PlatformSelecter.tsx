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
    <select
      value={selectedPlatform?.id || ""}
      onChange={(event) => {
        const selectedId = Number(event.target.value);
        const selected = data.find((p) => p.id === selectedId) || null;
        onSelectPlatform(selected);
      }}
    >
      <option value="">Platform</option>
      {data.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

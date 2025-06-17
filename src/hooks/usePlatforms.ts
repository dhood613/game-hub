import type { Platform } from "@/interfaces/Game";
import useData from "./useData";

const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;
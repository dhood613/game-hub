import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import type { Game } from "@/interfaces/Game";
//We are only defining the variables we need.
interface FetchGameResponse {
    count: number;
    results: Game[];
}
const useGames= () => {
     
      const [games, setGames] = useState<Game[]>([]);
      const [err, setErr] = useState("");
    
      useEffect(() => {
        const controller = new AbortController();
        apiClient
          .get<FetchGameResponse>("/games")
          .then((res) => setGames(res.data.results))
          .catch((err) => {
            if(err instanceof CanceledError)return;
                setErr(err.message)});
          return () => controller.abort();
      },[]);
      return {games,err};
}
export default useGames;
import type { GameDetail } from "@/interfaces/Game"
import apiClient from "@/services/api-client"
import { CanceledError } from "axios";
import { useEffect, useState } from "react"

export const useGame = (id:number) => {
    const [game,setGame] = useState<GameDetail>();
    const [err,setErr] = useState('');
    useEffect(()=>{
        const controller = new AbortController();
        apiClient
        .get<GameDetail>('/games/'+{id})
        .then(res=>setGame(res.data)).catch((err) => {
                    if(err instanceof CanceledError)return;
                        setErr(err.message)});
                  return () => controller.abort();
    })
    return {game,err};
}
export default useGame
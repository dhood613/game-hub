import apiClient from '@/services/api-client';
import { CanceledError, type AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

interface FetchResponse<T> {
    count: number;
    results: T[];
}
const useData = <T>(endpoint:string, requestConfig?:AxiosRequestConfig, deps?:any[]) => {
    const [data, setData] = useState<T[] | undefined>();
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
            apiClient
              .get<FetchResponse<T>>(endpoint, {signal: controller.signal,...requestConfig})
              .then((res) => {
                setData(res.data.results);
                setIsLoading(false);
          })
              .catch((err) => {
                if(err instanceof CanceledError)return;
                    setErr(err.message)});
              return () => controller.abort();
          },deps?[...deps]:[]);
          return { data, err,isLoading};
}
export default useData;
import { useEffect, useState } from "react";

export enum Status {
    Loading = "Loading",
    Success = "Success",
    Error = "Error"
}

type FetchState<T> = {
    data: T | null;
    status: Status;
};

export default function useFetchUrl<T>(url: string): FetchState<T> {

    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<Status>(Status.Loading);
    let isIgnore: boolean = true;

    useEffect(() => {
        isIgnore = false;
        fetch(url)
            .then((result) => {
                console.log(result);
                // json() return是一個 Promise<any>所以要寫在下一層
                return result.json();
            })
            .then((data) => {
                console.log(data);
                if (!isIgnore) {
                    setData(data);
                    setStatus(Status.Success);
                }
            })
            .catch(() => {
                setStatus(Status.Error);
            });
        return () => {
            isIgnore = true;
            setData(null);
            setStatus(Status.Loading);
        }
    }, [url]);

    return { data, status };
}
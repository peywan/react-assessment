import { useEffect, useState } from "react";

function UseFetchData(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [url]);

    return { data, isLoading };
}

export default UseFetchData;

import { useEffect, useState } from 'react';

function useQuote () {
    const [quote, setQuote] = useState({})
    useEffect( () => {
        fetch(`https://quotes.rest/qod`).then(data =>
            data.json()
        ).then(data => {
            console.log(data, data?.contents?.quotes[0])
            setQuote(data?.contents?.quotes[0] || {})
        })

    }, []);

    return quote;
}

export default useQuote;

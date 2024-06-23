import {useEffect, useLayoutEffect, useState} from 'react'
import BASE_URL from './../constants/BASE_URL'

export const useFetch = (path)=> {
    const [state, setState] = useState(
        {
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        }
    )

    useEffect(()=>{
        getFetch()
    }, [])


    const getFetch = async()=>{
        const resp= await fetch(`${BASE_URL}/${path}`);
        const data = resp.json();

    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        isError: state.hasError
    }

}


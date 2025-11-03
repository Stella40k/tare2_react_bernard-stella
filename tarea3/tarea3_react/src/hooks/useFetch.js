import { useEffect, useState } from "react";
export const useFetch = (url)=>{
    const [state, setSate] = useState({
        data: null,
        loading: true,
        hasError: null
    });
    const getFetch = async() =>{
        try {
            setSate({
                ...state, //pintamos todo lo q habia mas el nuevo valor q se actualiza
                loading: true
            });
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Error en el fetch");
            }
            const data = await response.json();
            await new Promise((resolve)=> setTimeout(resolve, 300));
            console.log(data);
            setSate({
                ...state,
                data: data,
                loading: false
            });
        } catch (error) {
            setSate({
                data: null,
                loading: false,
                hasError: error
            });
        };
    }    //preguntar mas de esto
    useEffect(()=>{
        getFetch();
    }, [url]);
    return{
        data: state.data,
        loading: state.loading,
        hasError: state.hasError
    };
    
}
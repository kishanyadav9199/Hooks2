import {createContext, useState} from 'react'

export const ConterContext = createContext(null);
export const CounterProvider=(props)=>{
    const [count, setcount] = useState(0)
    return(
        <ConterContext.Provider value={{count,setcount}}>
            {props.children}
        </ConterContext.Provider>
    )
}
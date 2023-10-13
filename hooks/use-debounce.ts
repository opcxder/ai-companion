import { useEffect , useState } from "react";

export function useDebounce<T>(value:T  , delay?:number) : T {
    const [debounceVAlue  , setDebounceValue ] = useState<T>(value);

     useEffect(() => {
        const timer  = setTimeout(() => setDebounceValue(value) , delay || 500);

        return () => {
            clearTimeout(timer);
        }
     }, [value , delay]);

     return debounceVAlue;
}


"use client"

import {useEffect, useState, ChangeEventHandler } from 'react'
import { Search} from "lucide-react"
import { useRouter , useSearchParams} from 'next/navigation'
import qs from 'query-string';

import { Input } from "@/components/ui/input"
import {useDebounce} from '@/hooks/use-debounce'
export const SearchInput = () => {
     const router = useRouter();
     const searchParams = useSearchParams();
     
     const categoryId =  searchParams.get('catergoryId');
     const name = searchParams.get('name');

     const [value , setValue] = useState(name || "");
     const deBounceValue = useDebounce<string>(value,500);

     const onChange : ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
     } 

     useEffect(() => {
        const query  = {
             name : deBounceValue,
             categoryId : categoryId,
        };
             const url = qs.stringifyUrl({
                url : window.location.href,
                query
             }, {skipEmptyString : true , skipNull : true});
             router.push(url);
     },[deBounceValue , router , categoryId])

    return(
        <div className="relative">
            <Search  className="absolute h-4 w-4 top-3 left-3 text-muted-foreground" />
            <Input 
               onChange={onChange}
               value={value}
              placeholder="Search...."
              className="pl-10 bg-primary/10"
            />
             
        </div>
    )
}
import { useRef } from 'react'
import { Input } from '../Input'
import { Sidebar } from '../Sidebar'

export function AiqueryPage(){

    const queryRef = useRef<HTMLInputElement>(null)

    return (
        <div className="w-screen bg-gray-100 h-screen">
            <Sidebar/>
            <div className='ml-72 min-h-screen bg-gray-200 flex flex-col justify-end items-center'  > 
            <div className='mb-14 w-[80%]'><Input ref={queryRef} placeholder='Query Your Brain ...'/></div>
            </div>
        </div>
    )
}
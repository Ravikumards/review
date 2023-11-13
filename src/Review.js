import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
export default function Review(){
    const[index,setIndex]=useState(0)
    const{name,job,image,text}=people[index]
    const get_random_no=()=>{
       return Math.floor(Math.random() * people.length-1) + 0
    }
    return (
        <article class="rounded-lg border-2 mt-8 shadow-lg">
            <div class="flex justify-center items-center mt-4">
                <img src={image} class="rounded-full h-24 w-24 "></img>
            </div>
            <h4 class="mt-4 font-bold">{name}</h4>
            <p class="text-cyan-400">{job}</p>
            <p class="font-light pr-6 pl-6">{text}</p>
            <div>
                <button onClick={()=> {
                    setIndex(index > 0 ? index - 1 : 0)
                }} class="border-cyan-500"><FaChevronLeft/></button>
                <button onClick={()=> {
                    setIndex(index < (people.length-1) ? index+1 : index)
                }}><FaChevronRight/></button>
            </div>
            <button onClick={()=>{
                setIndex(get_random_no())
            }} >Suprise Me</button>
        </article>
    )
}
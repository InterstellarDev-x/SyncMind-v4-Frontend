import { ReactNode } from "react"

type Buttonvariant = "primary" | "secondary"
type Sizevariant = "sm" | "md" | "lg"

interface Buttonprops {
    variants : Buttonvariant,
    text : string,
    onClick?() : void
    startIcon? : ReactNode | string,
    endIcon? : ReactNode | string,
    size : Sizevariant
    loding? : boolean
}

const defaultStyle : string =  "rounded-lg flex gap-1 items-center px-4 py-2 font-light"

const SizeStyle : Record<Sizevariant , string> = {
   "sm" : "px-2 py-1",
   "md" : "px-4 , py-2",
   "lg" : "px-6 , py-4"
}

const varirantStyle : Record<Buttonvariant , string> = {
    "primary" : "bg-blue-400 text-blue-500 border border-bg-blue-400",
    "secondary" : "bg-blue-500 text-white border border-bg-blue-500"
}

export const Button = (props : Buttonprops)=>{
   return (
    <button  disabled= {props.loding} className={`${defaultStyle} ${(props.loding ? "opacity-45" : "")} ${varirantStyle[props.variants]}  ${SizeStyle[props.size]} active:scale-[0.9] `} onClick={props.onClick}>{props.startIcon}  { props.text }  </button>
   )
}
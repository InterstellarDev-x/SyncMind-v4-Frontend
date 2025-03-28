
import { Link } from "react-router-dom"
import { Mindsync } from "./Icon/Mind"
import { SidebarItem } from "./Sidebaritem"


export const Sidebar = ()=>{


    return (
        <div className="h-screen w-72  fixed top-0 left-0 bg-[#101618]   " >
            <div className="text-4xl text-[#65acbe] font-kanit font-semibold text-center p-5 cursor-pointer flex items-center"    >
             <div>{<Mindsync/>} </div> <Link to="/content">SyncMind</Link> </div>
            <div className="flex flex-col gap-4 pt-2">
            <SidebarItem name="Video" Link="Video"/>
            <SidebarItem name="Twitter" Link="/Twitter"/>
            <SidebarItem name="Document" Link="/Document"/> 
            <SidebarItem name="AiQuery" Link="/aiQuery"/>
        
            </div>
          

        </div>
    )
}
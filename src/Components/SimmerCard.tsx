
import { ShimmerPostItem } from "react-shimmer-effects";




export function SimmerCard(){
    return (
        <div className="bg-gray-200  rounded-lg shadow-md  h-80 w-72 m-3 border shadow-[#cbd2e2] border-spacing-8 p-2 overflow-hidden " >
           <ShimmerPostItem  card imageType="thumbnail"  title     imageWidth={200}
          imageHeight={150} contentCenter/>


        </div> 
        

    )
}
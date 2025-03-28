


import { useState } from 'react'
import '../../App.css'

import { Card } from '../Card'
import { Plusicon } from '../Icon/Plusicon'
import { Shareicon } from '../Icon/Shareicon'
import { Modal } from '../Modal'
import { Sidebar } from '../Sidebar'
import { Button } from '../Button'
import { useContent ,  } from '../../CustomHooks/useContent'
import { useNavigate } from 'react-router-dom'
import { SimmerCard } from '../SimmerCard'





function Content() {
  

  const [openModal  , setopenModal ] = useState(false)

  const  { contentData  }  = useContent();
  const Navigate = useNavigate()
  console.log(contentData)


    

  return (
     
     <div>
      <Sidebar/>
    <div className='ml-72 min-h-screen bg-gray-100'  > 
    <Modal open={openModal} onclose={()=>{setopenModal(false)}}/>
    <div className='flex justify-end gap-3 p-3'>
    <Button  variants='primary'  text="Add Content" onClick={()=>{setopenModal(true)}} size='md' startIcon={<Plusicon size='sm'/>} />
    <Button variants='secondary'  text=" Logout " onClick={()=>{
      localStorage.removeItem("token")
      Navigate("/signin")
      
    }}  size='md' startIcon={<Shareicon size="sm"/>}/>
    
    </div>


    {  contentData.length == 0 ?   <div className='flex flex-wrap'>
       <SimmerCard/> <SimmerCard/> <SimmerCard/> <SimmerCard/> <SimmerCard/> <SimmerCard/> 
    </div> :  <div   className='flex flex-wrap'>
      {contentData.map(({tittle , link , type , tag , _id }) => 
      <Card tittle={tittle} link={link} type={type} tag={tag[0]["tag"]} _id={_id}/>
      )}</div>}


     </div>
     </div>
  )
}

export default Content

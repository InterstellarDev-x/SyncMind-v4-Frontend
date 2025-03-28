import { Singup } from "./Components/Pages.tsx/Singnup";



import Content from "./Components/Pages.tsx/Content";
import { Signin } from "./Components/Pages.tsx/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landingpage } from "./Components/Pages.tsx/Landingpage";
import { AiqueryPage } from "./Components/Pages.tsx/aiQuery";




export function App(){


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Singup/>} />
      <Route path="/content" element={<Content/>} />
      <Route path="/aiQuery" element={<AiqueryPage/>} />
      <Route path="*" element={<div style={{backgroundColor :"white"}}> <b>please go back to main page</b>  </div>}/>
    </Routes>
    </BrowserRouter>
   
  )
}
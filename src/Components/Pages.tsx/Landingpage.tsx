
import {  ArrowRight } from 'lucide-react';
import {  MindsyncAuth } from '../Icon/Mind';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export function Landingpage() {

  const Navigate = useNavigate()
  const Marquegsapref = useRef(null)

  useGSAP(()=>{
    
    gsap.to(Marquegsapref.current, {
        x: "-100%", // Move the text to the left
        duration: 15, // Speed of the animation
        ease: "linear",
        repeat: -1, // Infinite loop
      });
    
    
  })

  return (
    <div className="min-h-screen bg-gradient-to-b bg-[#101618]  ">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">

            <div onClick={()=>{Navigate("/")}} className='flex items-center cursor-pointer '> <div >{<MindsyncAuth/>}</div> <div className='font-kanit font-semibold text-4xl text-[#65acbe]'>SyncMind</div></div>

          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-blue-500 font-Imprima text-lg" onClick={()=>{
                Navigate("signin")
            }}>Login</button>
            <Button  size='md' text='Sign Up' variants='secondary' onClick={()=>{Navigate("/signup")}}/>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#65acbe] leading-tight mb-6 font-kanit">
            Your Digital Brain  <br />
              <span className="text-[#65acbe] font-kanit"> Always in Sync</span>
            </h1>
            <div className="overflow-hidden whitespace-nowrap w-full">
  <div ref={Marquegsapref} className=" text-lg text-white mb-8 font-Imprima">
    “MindSync is your AI-powered digital brain—designed to store, organize, and retrieve your thoughts effortlessly. Capture ideas, sync knowledge, and query with AI for instant insights. Never lose a thought—just ask, and MindSync delivers.” 
    &nbsp;•&nbsp;
    “MindSync is your AI-powered digital brain—designed to store, organize, and retrieve your thoughts effortlessly. Capture ideas, sync knowledge, and query with AI for instant insights. Never lose a thought—just ask, and MindSync delivers.” 
  </div>
</div>
            <button onClick={()=>{Navigate("/signup")}} className="bg-blue-500  active:scale-[.9]  text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>   
          </div>
          <div className="relative">
            <img 
              src="https://www.lummi.ai/api/pro/image/2239814e-c396-4dc8-a81c-529cdcf73632?asset=original&cb=Dufux7&auto=format&w=640"
              alt="People collaborating"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>


      {/* Footer */}
     
    </div>
  );
}




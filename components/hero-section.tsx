"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, Award, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import RotatingText from "./RotatingText"
export default function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const vantaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const initVanta = async () => {
        try {
          // Load Three.js first (required dependency for Vanta.js)
          const threeScript = document.createElement('script')
          threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
          
          threeScript.onload = () => {
            // Load Vanta.js after Three.js is loaded
            const vantaScript = document.createElement('script')
            vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js'
            
            vantaScript.onload = () => {
              if ((window as any).VANTA && vantaRef.current) {
                const effect = (window as any).VANTA.WAVES({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  shine: 2,
                  wave: 2.5,
                  speed: 5,
                  color: 0x828384,
                  shininess: 4.00,
                  waveHeight:5.5,
                  waveSpeed: 2
                })
                setVantaEffect(effect)
              }
            }
            document.head.appendChild(vantaScript)
          }
          document.head.appendChild(threeScript)
        } catch (error) {
          console.error('Failed to initialize Vanta effect:', error)
        }
      }
      initVanta()
    }

    return () => {
      if (vantaEffect && vantaEffect.destroy) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{fontFamily:"Poppins"}}>
      {/* Background gradient */}
      

      {/* Vanta.js waves background */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2" 
        style={{height: '100%', overflow: 'hidden', zIndex: 0}}
      />

      {/* Animated background elements */}
   

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 mt-24 md:mt-28 lg:mt-32">
          {/* Main heading */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-foreground leading-tight">
              <span className="flex flex-wrap items-baseline justify-center gap-1 md:gap-2">
                <span style={{fontFamily:"Poppins"}}  className="transition-transform">Learning</span>
                <RotatingText
                  texts={['JAVA', 'Editing', 'CAD', 'Designing ', 'Ui/Ux']}
                  mainClassName="inline-flex items-center whitespace-nowrap w-auto shrink-0 px-1 sm:px-2 md:px-2 bg-white text-black overflow-hidden rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 4 }}
                  
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
        
              Skills That Matter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your career with experts training in Designing, Ui/Ux, Graphic Designing , Fullstack development and cutting-edge software. Join
              thousands of professionals who've advanced their skills with CadTech.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-14">
            <button
             style={{fontSize:"18px"}}
              className="cssbuttons-io  px-8 py-1"
            >
              <span>
              Start Learning Today
              </span>
           
            </button>
            <a
             style={{fontSize:"18px",}}
               className="cssbuttons-io-2 px-8 py-1"
             href="https://www.instagram.com/reel/DNlQPL0S0YO/?igsh=MXVzMWo5ZjF3ODh3cg=="
           >
              <span>
             Watch our Demo
              </span>
           
            </a>
          </div>

 
      
        </div>
      </div>
    </section>
  )
}

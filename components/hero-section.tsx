"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, Award, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
                  shine: 0,
                  wave: 2.5,
                  speed: 1.05,
                  color: 0x8a8a93
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>

      {/* Vanta.js waves background */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2" 
        style={{height: '100%', overflow: 'hidden', zIndex: 0}}
      />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 mt-24 md:mt-0">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-foreground leading-tight">
              Master
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Software</span>
              <br />
              Skills That Matter
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your career with expert-led training in AutoCAD, Video Editing, and cutting-edge software. Join
              thousands of professionals who've advanced their skills with CadTech.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-primary hover:glow-primary transition-all duration-300 text-lg px-8 py-6"
            >
              Start Learning Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

 
      
        </div>
      </div>
    </section>
  )
}

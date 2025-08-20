"use client"

import { Button } from "@/components/ui/button"
import { Play, Users, Award, Clock } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>

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

 
          {/* <div className="mt-16">
         
            <div className="md:hidden grid grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="flex flex-col items-center justify-center">
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <div className="text-2xl font-heading font-black text-foreground">5000+</div>
                  <div className="text-xs text-muted-foreground">Students Trained</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex flex-col items-center justify-center">
                  <Award className="w-8 h-8 text-secondary mb-2" />
                  <div className="text-2xl font-heading font-black text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex flex-col items-center justify-center">
                  <Clock className="w-8 h-8 text-accent mb-2" />
                  <div className="text-2xl font-heading font-black text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:grid-cols-3  gap-8">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary mr-2" />
                  <span className="text-3xl font-heading font-black text-foreground">5000+</span>
                </div>
                <p className="text-base text-muted-foreground">Students Trained</p>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Award className="w-8 h-8 text-secondary mr-2" />
                  <span className="text-3xl font-heading font-black text-foreground">98%</span>
                </div>
                <p className="text-base text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Clock className="w-8 h-8 text-accent mr-2" />
                  <span className="text-3xl font-heading font-black text-foreground">24/7</span>
                </div>
                <p className="text-base text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

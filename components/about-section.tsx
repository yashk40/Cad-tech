"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, BookOpen, Target, CheckCircle, TrendingUp } from "lucide-react"

const achievements = [
  {
    icon: Users,
    number: "5+",
    label: "Excellent Teachers",
    description: "Professional Guidance",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Industry-leading expertise",
  },
  {
    icon: BookOpen,
    number: "25+",
    label: "Course Programs",
    description: "Comprehensive skill development",
  },
  {
    icon: Target,
    number: "98%",
    label: "Success Rate",
    description: "Career advancement guaranteed",
  },
]

const benefits = [
  "Expert instructors with industry experience",
  "Hands-on projects and real-world applications",
  "Flexible learning schedules and formats",
  "Career support and job placement assistance",
  "Industry-recognized certifications",
  "Lifetime access to course materials",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative" >
      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4" data-aos="fade-right">
              <Badge variant="outline" className="border-secondary text-secondary">
                About CadTech
              </Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground">
                Empowering Careers Through
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Expert Training</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CadTech has been at the forefront of professional software training. We've helped
                thousands of professionals master the tools they need to excel in their careers, from CAD
                Designing to Fullstack development and Graphic Designing.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4" data-aos="fade-down" >
              <h3 className="text-xl font-heading font-bold text-foreground">Why Choose CadTech?</h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-black flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="bg-white border-border/20 glow-secondary-black" data-aos="fade-up">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0" style={{ boxShadow: "0px 0px 8px #1212" }}>
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Our Mission</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To bridge the gap between ambition and achievement by providing world-class software with best training that
                      transforms careers and opens new opportunities in the digital economy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-up">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-border/20 hover:glow-primary transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-black text-foreground transition-colors">
                        {achievement.number}
                      </div>
                      <div className="text-sm font-semibold text-foreground mt-1">{achievement.label}</div>
                      <div className="text-xs text-muted-foreground mt-2">{achievement.description}</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

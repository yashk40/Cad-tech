"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, BookOpen, Target, CheckCircle, TrendingUp } from "lucide-react"

const achievements = [
  {
    icon: Users,
    number: "5000+",
    label: "Students Trained",
    description: "Professionals across 50+ countries",
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-card/30 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-secondary text-secondary">
                About CadTech
              </Badge>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground">
                Empowering Careers Through
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Expert Training</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, CadTech has been at the forefront of professional software training. We've helped
                thousands of professionals master the tools they need to excel in their careers, from AutoCAD and video
                editing to web development and data visualization.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-foreground">Why Choose CadTech?</h3>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Statement */}
            <Card className="gradient-card border-border/20 glow-secondary">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-2">Our Mission</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To bridge the gap between ambition and achievement by providing world-class software training that
                      transforms careers and opens new opportunities in the digital economy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className="gradient-card border-border/20 hover:glow-primary transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:glow-primary transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-heading font-black text-foreground group-hover:text-primary transition-colors">
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

"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@cadtech.com",
    description: "Get in touch for course inquiries",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Speak with our training advisors",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 9AM-6PM",
    description: "We're here to help you succeed",
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("https://formspree.io/f/mvgbowbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          course: formData.course,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", course: "", message: "" })
        // Auto hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-black text-black">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground">
            Ready to Start Your
            <span className="bg-gradient-to-r from-black to-secondary bg-clip-text text-transparent"> Learning Journey?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about our courses? Want to discuss your career goals? Our expert advisors are here to help
            you choose the right path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-border/20 hover:glow-black transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 group-hover:glow-black transition-all duration-300" style={{ boxShadow: "0px 0px 5px #1212" }}>
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-bold text-foreground group-hover:text-black transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-semibold mt-1">{info.details}</p>
                        <p className="text-muted-foreground text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-foreground">
                  <MessageSquare className="w-6 h-6 text-black" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                        <p className="text-green-600 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="bg-gray-200 border-border focus:border-black"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="bg-gray-200 border-border focus:border-black"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="course" className="text-sm font-semibold text-foreground">
                      Course Interest
                    </label>
                    <Input
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      placeholder="Which course are you interested in?"
                      className="bg-gray-200 border-border focus:border-black"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals and how we can help..."
                      className="bg-gray-200 border-border focus:border-black min-h-[120px]"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-black transition-all duration-300 hover:bg-black/90"
                    disabled={isSubmitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

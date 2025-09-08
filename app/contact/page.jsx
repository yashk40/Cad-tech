"use client"

import Navbar from '@/components/navbar'
import { useState } from 'react'
import Footer from '@/components/footer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Star, Globe, Users } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    priority: 'medium'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        priority: 'medium'
      })
      
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "Cadtechofficial@gmail.com",
      color: "bg-black"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Sun from 9am to 6pm",
      contact: "+91 7303450061",
      color: "bg-black"
    },
    // {
    //   icon: <MessageSquare className="w-6 h-6" />,
    //   title: "Live Chat",
    //   description: "Chat with our team",
    //   contact: "Start conversation",
    //   color: "bg-black"
    // },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      description: "Mon-Sun: 7AM-12PM",
      contact: "We're here to help you succeed",
      color: "bg-black"
    }
  ]

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Happy Customers" },
    { icon: <Star className="w-8 h-8" />, value: "4.9", label: "Customer Rating" },
    { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Countries Served" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support Available" }
  ]

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-black py-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Ready to take your study to the next level? We're here to help you succeed.
          </p>
    
        </div>
      </div>

  
      {/* Contact Methods */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you. We're available across multiple channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
                <div className={`${method.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="text-white-600 font-medium">{method.contact}</p>
              </div>
            ))}
          </div>

          {/* Main Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">{submitMessage}</p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                      placeholder="+91 7303450061"
                    />
                  </div>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                    placeholder="Your Company Name"
                  />
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-white-500 focus:border-white-500 transition duration-200 resize-none"
                    placeholder="Tell us more about your project or inquiry..."
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:from-white-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div className="bg-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Let's start a conversation</h3>
                <p className="text-white mb-8">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-4 text-white" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white-100">Cadtechofficial@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-4 text-white-200" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white-100">+91 7303450061</p>
                    </div>
                  </div>
                
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-4 text-white-200" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-white-100">Mon-Sun: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900">How quickly do you respond?</h5>
                    <p className="text-gray-600 text-sm mt-1">We typically respond within 2-4 hours during business hours.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Do you offer free consultations?</h5>
                    <p className="text-gray-600 text-sm mt-1">Yes! We offer free 30-minute consultations for all new clients.</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">What's your project timeline?</h5>
                    <p className="text-gray-600 text-sm mt-1">Project timelines vary, but most projects are completed within 2-8 weeks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

<Footer/>
    </>
  )
}
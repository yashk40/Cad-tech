"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layers, Video, Palette, Database, Code2, Camera, Clock, Users, Star } from "lucide-react";

// Note: Add this script tag to your main HTML file or use Next.js Script component in _app.js or layout
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>

const courses = [
  {
    icon: Layers,
    title: "AutoCAD Mastery",
    description: "Complete AutoCAD training from basics to advanced 3D modeling and technical drawing.",
    duration: "12 weeks",
    students: "2,500+",
    rating: "4.9",
    level: "All Levels",
    features: ["2D & 3D Design", "Technical Drawing", "Industry Projects", "Certification"],
  },
  {
    icon: Video,
    title: "Video Editing Pro",
    description: "Master professional video editing with Adobe Premiere Pro, After Effects, and DaVinci Resolve.",
    duration: "10 weeks",
    students: "1,800+",
    rating: "4.8",
    level: "Beginner to Pro",
    features: ["Multi-platform Training", "Color Grading", "Motion Graphics", "Portfolio Building"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Learn Adobe Creative Suite including Photoshop, Illustrator, and InDesign for professional design.",
    duration: "8 weeks",
    students: "1,200+",
    rating: "4.9",
    level: "All Levels",
    features: ["Adobe Creative Suite", "Brand Design", "Print & Digital", "Client Projects"],
  },
  {
    icon: Database,
    title: "Data Visualization",
    description: "Create compelling data visualizations using Tableau, Power BI, and advanced Excel techniques.",
    duration: "6 weeks",
    students: "900+",
    rating: "4.7",
    level: "Intermediate",
    features: ["Tableau & Power BI", "Dashboard Design", "Data Analysis", "Business Intelligence"],
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Build modern websites and web applications using HTML, CSS, JavaScript, and React.",
    duration: "16 weeks",
    students: "2,100+",
    rating: "4.8",
    level: "Beginner to Advanced",
    features: ["Full-Stack Development", "React & Node.js", "Database Integration", "Deployment"],
  },
  {
    icon: Camera,
    title: "Photography & Editing",
    description: "Master digital photography and photo editing with Lightroom and Photoshop.",
    duration: "8 weeks",
    students: "1,500+",
    rating: "4.9",
    level: "All Levels",
    features: ["Digital Photography", "Lightroom & Photoshop", "Portfolio Development", "Business Skills"],
  },
];

function EnrollmentForm({ course, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    courseInterest: course.title,
    message: '',
  });

  const modalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, modalRef);

    const handleScroll = () => onClose();
    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert(); // Cleanup GSAP
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onClose]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-[#1d1d1d2d] flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>&times;</button>
        <h3 className="text-lg font-bold mb-4">Enroll in {course.title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700">Course Interest</label>
            <input
              id="courseInterest"
              name="courseInterest"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-100"
              value={formData.courseInterest}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  function handleEnrollClick(course) {
    setSelectedCourse(course);
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
    setSelectedCourse(null);
  }

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div data-aos="fade-down">
            <Badge variant="outline" className="border-primary text-primary">
              Our Courses
            </Badge>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground" data-aos="fade-up">
            Professional Training
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-aos="fade-up">
            Choose from our comprehensive range of industry-leading software training courses, designed by experts and
            trusted by professionals worldwide.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card
                key={index}
                className="border-border/20 transition-all duration-300 group bg-white rounded-3xl"
                data-aos="zoom-in"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300" style={{ boxShadow: "0px 0px 5px #1212" }}>
                      <IconComponent className="w-6 h-6 bg-white text-black" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                      {course.level}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl font-heading font-bold text-foreground transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">{course.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-black" />
                      <span className="text-muted-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-muted-foreground">{course.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">What You'll Learn:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    id="Enroll-button"
                    type="button"
                    className="w-full bg-black text-white hover:bg-black cursor-pointer"
                    onClick={() => handleEnrollClick(course)}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {showForm && selectedCourse && (
          <EnrollmentForm course={selectedCourse} onClose={handleCloseForm} />
        )}
      </div>
    </section>
  );
}

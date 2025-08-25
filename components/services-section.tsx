"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Clock, Star } from "lucide-react";

// Courses Data
const courses = [
  
    {
      "title": "AutoCAD 2D/3D",
      "image": "https://i.postimg.cc/kgwpFCFM/image-9.jpg",
      "duration": "6 weeks",
      "students": "20+ live classes",
      "rating": "4.9",
      "features": [
        "2D & 3D Design",
        "Technical Drawing",
        "Industry Projects",
        "Certification"
      ]
    },
    {
      "title": "Solid Works",
      "image": "https://i.postimg.cc/6qp3qnKL/photo-6147830576091088525-y.jpg",
      "duration": "9 weeks",
      "students": "28+ Live classes",
      "rating": "4.8",
      "features": [
        "3D Modeling",
        "Assembly Design",
        "Simulation",
        "Certification Prep"
      ]
    },
    {
      "title": "Siemens NX",
      "image": "/images/siemens-nx-course.jpg",
      "duration": "10 weeks",
      "students": "30+ Live classes",
      "rating": "4.7",
      "features": [
        "CAD/CAM",
        "3D Modeling",
        "Assembly Design",
        "Manufacturing Tools"
      ]
    },
    {
      "title": "UI/UX Design",
      "image": "/images/ui-ux-course.jpg",
      "duration": "12 weeks",
      "students": "30+ Live classes",
      "rating": "4.9",
      "features": [
        "Figma & Adobe XD",
        "User Research",
        "Prototyping",
        "Usability Testing"
      ]
    },
    {
      "title": "Video Editing",
      "image": "/images/video-editing-course.jpg",
      "duration": "8 weeks",
      "students": "22+ Live classes",
      "rating": "4.8",
      "features": [
        "Adobe Premiere Pro",
        "After Effects",
        "Color Grading",
        "Project Editing"
      ]
    },
    {
      "title": "Java Full-Stack Development",
      "image": "/images/java-fullstack-course.jpg",
      "duration": "16 weeks",
      "students": "44+ Live classes",
      "rating": "4.9",
      "features": [
        "Core Java",
        "Spring Boot",
        "React & Angular",
        "RESTful APIs"
      ]
    },
    {
      "title": "Spring Boot and Microservices Development",
      "image": "/images/spring-boot-course.jpg",
      "duration": "14 weeks",
      "students": "35+ Live classes",
      "rating": "4.8",
      "features": [
        "Microservices Architecture",
        "Spring Cloud",
        "Docker & Kubernetes",
        "API Gateway"
      ]
    },
  
   
    {
      "title": "Generative AI",
      "image": "/images/gen-ai-course.jpg",
      "duration": "12 weeks",
      "students": "35+ Live clsses",
      "rating": "4.9",
      "features": [
        "Prompt Engineering",
        "API managment",
        "AI Tools Integration",
        "Ethical AI Practices"
      ]
    },
    {
      "title": "Project Development",
      "image": "/images/project-dev-course.jpg",
      "duration": "10 weeks",
      "students": "25+ Live classes",
      "rating": "4.7",
      "features": [
        "Agile & Scrum",
        "Project Planning",
        "Risk Management",
        "Team Collaboration"
      ]
    },
    {
      "title": "Graphic Designing",
      "image": "/images/graphic-design-course.jpg",
      "duration": "26 weeks",
      "students": "50+ Live classes",
      "rating": "4.9",
      "features": [
        "Adobe Illustrator",
        "Adobe Indesign",
        "Corel Draw",
        "After Effects",
        "Photoshop",
        "Premier Pro"

      ]
    },
    {
      "title": "MS Office",
      "image": "/images/ms-office-course.jpg",
      "duration": "6 weeks",
      "students": "15+ Live classes",
      "rating": "4.6",
      "features": [
        "Excel",
        "Word ",
        "PowerPoint",
        "Paint"
      ]
    }
];

// Enrollment form
function EnrollmentForm({ course, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    courseInterest: course.title,
    message: "",
  });

  const modalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-lg font-bold mb-4">Enroll in {course.title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
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
            <label
              htmlFor="courseInterest"
              className="block text-sm font-medium text-gray-700"
            >
              Course Interest
            </label>
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
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
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

// Main component
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div data-aos="fade-down">
            <Badge variant="outline" className="border-black text-black">
              Our Courses
            </Badge>
          </div>
          <h2
            className="text-3xl md:text-5xl font-heading font-black text-foreground"
            data-aos="fade-up"
          >
            Professional Training{" "}
            <span className="bg-gradient-to-r from-black to-secondary bg-clip-text text-transparent">
              Programs
            </span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            Choose from our comprehensive range of industry-leading
            software training courses, designed by experts and trusted by
            professionals worldwide.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => {
            return (
              <Card
                key={index}
               
                className="border-border/20 transition-all duration-300 group bg-white rounded-3xl overflow-hidden py-0"
                data-aos="zoom-in"
              >
                {/* Image fully flush with top */}
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                 
                    className="w-full h-full object-cover object-top block"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.jpg";
                    }}
                  />
                </div>

                {/* Remove extra padding from CardHeader */}
                <CardHeader className="px-4 pt-4 pb-0">
                  <CardTitle className="text-xl font-heading font-bold text-foreground">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 px-4 pb-6">
                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4 text-black" />
                      <span className="text-muted-foreground">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Video className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">
                        {course.students}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-muted-foreground">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      What You'll Learn:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {course.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-muted-foreground flex items-center"
                        >
                          <div className="w-1 h-1 bg-black rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
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

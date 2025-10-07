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
import { Video, Clock, Star, ChevronDown, CheckCircle, X } from "lucide-react";
import { gsap } from "gsap";

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
    "image": "https://i.postimg.cc/0Qb1nFPB/Generated-Image-October-08-2025-1-28-AM.png",
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
    "image": "https://i.postimg.cc/cHvn0k4Z/photo-6156628129402178239-x.jpg",
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
    "image": "https://i.postimg.cc/RFSHyC2K/photo-6168142515815958621-y.jpg",
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
    "image": "https://i.postimg.cc/P5dTmLDT/photo-6179375186734860782-y.jpg",
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
    "image": "https://media.licdn.com/dms/image/v2/D5612AQFZxDT8T_1Pxg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1710502542744?e=2147483647&v=beta&t=VsQEl7__F9XPaKuF8ICteGwQsOi0n-V0dYNq6YMdueM",
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
    "title": "Project Development",
    "image": "https://idapgroup.com/blog/blog/wp-content/uploads/2018/07/image1.png",
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
    "image": "https://i.ibb.co/BHCXf8S6/photo-6156628129402178237-y.jpg",
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
    "image": "https://tyfontech.wordpress.com/wp-content/uploads/2018/02/c566a-office-logos-for-banner2.png",
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

// Enrollment form with Formspree and GSAP animations
function EnrollmentForm({ course, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    courseInterest: course.title,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => onClose();
    window.addEventListener("scroll", handleScroll);

    // GSAP entrance animation
    if (backdropRef.current && modalRef.current) {
      gsap.fromTo(backdropRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      gsap.fromTo(modalRef.current,
        { 
          scale: 0.8, 
          opacity: 0, 
          y: 50 
        },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          ease: "back.out(1.7)" 
        }
      );
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://formspree.io/f/mvgbowbg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          mobile: formData.mobile,
          courseInterest: formData.courseInterest,
          message: formData.message,
          formType: "Course Enrollment",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ 
          fullName: "", 
          email: "", 
          mobile: "",
          courseInterest: course.title, 
          message: "" 
        });
        
        // Auto close after 3 seconds
        setTimeout(() => {
          handleCloseWithAnimation();
        }, 3000);
      } else {
        throw new Error("Failed to send enrollment request");
      }
    } catch (error) {
      setSubmitError("Failed to submit enrollment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleCloseWithAnimation = () => {
    if (backdropRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power2.in"
      });
      
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => onClose()
      });
    } else {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseWithAnimation();
    }
  };

  if (isSubmitted) {
    return (
      <div 
        ref={backdropRef}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        onClick={handleBackdropClick}
      >
        <div 
          ref={modalRef}
          className="bg-white rounded-xl p-8 max-w-md w-full mx-4 text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Enrollment Successful!
          </h3>
          <p className="text-gray-600 mb-4">
            Thank you for enrolling in <strong>{course.title}</strong>. We'll contact you soon with course details.
          </p>
          <p className="text-sm text-gray-500">
            This window will close automatically...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center pt-12"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
          onClick={handleCloseWithAnimation}
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900">
          Enroll in {course.title}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-2">
          {submitError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg ">
              <p className="text-red-600 text-sm">{submitError}</p>
            </div>
          )}

          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:border-black transition-colors"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:border-black transition-colors"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mobile Number *
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:border-black transition-colors"
              value={formData.mobile}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Enter your mobile number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit mobile number"
            />
          </div>
          
          <div>
            <label
              htmlFor="courseInterest"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Interest
            </label>
            <input
              id="courseInterest"
              name="courseInterest"
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 cursor-not-allowed"
              value={formData.courseInterest}
              readOnly
            />
          </div>
          
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-black focus:border-black transition-colors resize-none"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              placeholder="Tell us about your experience level and goals..."
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-black text-white hover:bg-gray-800 transition-colors py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Enrollment"}
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
  const [showAllCourses, setShowAllCourses] = useState(false);

  function handleEnrollClick(course) {
    setSelectedCourse(course);
    setShowForm(true);
  }

  function handleCloseForm() {
    setShowForm(false);
    setSelectedCourse(null);
  }

  function handleShowMore() {
    setShowAllCourses(true);
  }

  // Get courses to display based on showAllCourses state
  const displayedCourses = showAllCourses ? courses : courses.slice(0, 3);

  return (
    <section id="Courses" className="py-20 relative">
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
          {displayedCourses.map((course, index) => {
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

        {/* Show More Button */}
        {!showAllCourses && (
          <div className="text-center mt-12">
            <Button
              onClick={handleShowMore}
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg"
            >
              <ChevronDown className="w-5 h-5 mr-2" />
              Show More Courses
            </Button>
          </div>
        )}

        {showForm && selectedCourse && (
          <EnrollmentForm course={selectedCourse} onClose={handleCloseForm} />
        )}
      </div>
    </section>
  );
}

import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-28 max-w-7xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About CadTech</h1>
          <h2 className="text-2xl text-gray-700">Empowering Professionals Through Excellence in Software Training</h2>
        </header>

        {/* Intro Section */}
        <section className="mb-12">
          <p className="text-lg mb-6">
            CadTech has been at the forefront of professional software training, establishing itself as a trusted leader in technology education for over a decade. We've helped thousands of professionals master the tools they need to excel in their careers, from CAD Designing to Fullstack Development and Graphic Designing.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Our Story</h2>
          <p className="text-lg mb-4">
            Founded with a vision to bridge the gap between theoretical knowledge and practical expertise, CadTech began as a small training center with big dreams. Today, we stand as one of the most respected names in professional software education, having transformed the careers of countless individuals across various industries.
          </p>
          <p className="text-lg">
            Our journey started when we recognized a critical need in the marketplace: professionals were struggling to keep pace with rapidly evolving software technologies. Traditional educational institutions often fell short in providing the hands-on, industry-relevant training that employers demanded. CadTech stepped in to fill this void, creating comprehensive programs that don't just teach software—they build careers.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">What We Do</h2>
          <p className="text-lg mb-8">
            At CadTech, we specialize in three core areas that represent the backbone of modern professional development:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CAD Designing */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">CAD Designing</h3>
              <p className="text-gray-700">
                Our Computer-Aided Design programs are meticulously crafted to meet industry standards. We provide comprehensive training in industry-leading CAD software, covering everything from basic 2D drafting to advanced 3D modeling and simulation. Our students learn not just the technical aspects of CAD software, but also the design principles, engineering concepts, and problem-solving skills that make them valuable assets in fields like mechanical engineering, architecture, product design, and manufacturing.
              </p>
            </div>

            {/* Fullstack Development */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Fullstack Development</h3>
              <p className="text-gray-700">
                In today's digital-first world, fullstack development skills are more valuable than ever. Our comprehensive web development programs take students from complete beginners to job-ready developers. We cover both frontend technologies like HTML, CSS, JavaScript, React, and modern frameworks, as well as backend development including databases, server-side programming, API development, and cloud deployment. Our curriculum is constantly updated to reflect the latest industry trends and employer requirements.
              </p>
            </div>

            {/* Graphic Designing */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Graphic Designing</h3>
              <p className="text-gray-700">
                Visual communication is at the heart of modern business success. Our graphic design programs combine artistic principles with cutting-edge software training. Students master industry-standard tools like Adobe Creative Suite, learn color theory, typography, branding principles, and digital illustration techniques. Whether aspiring to work in advertising agencies, corporate marketing departments, or as freelance designers, our graduates leave with a portfolio that showcases their creativity and technical proficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Our Approach</h2>
          <p className="text-lg mb-6">
            What sets CadTech apart is our unique blend of theoretical knowledge and practical application. We believe that true learning happens when students can immediately apply what they've learned to real-world scenarios. Our methodology includes:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><span className="font-semibold">Hands-On Learning</span>: Every lesson is reinforced with practical exercises and real-world projects that mirror industry challenges.</li>
            <li><span className="font-semibold">Industry-Relevant Curriculum</span>: Our courses are designed in consultation with industry experts and are regularly updated to reflect current market demands and emerging technologies.</li>
            <li><span className="font-semibold">Experienced Instructors</span>: Our faculty consists of working professionals who bring years of industry experience into the classroom, providing students with insights that go beyond textbook knowledge.</li>
            <li><span className="font-semibold">Small Class Sizes</span>: We maintain optimal student-to-instructor ratios to ensure personalized attention and effective learning outcomes.</li>
            <li><span className="font-semibold">Project-Based Learning</span>: Students work on actual projects that build their portfolios while developing practical skills that employers value.</li>
          </ul>
        </section>

        {/* Our Impact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Our Impact</h2>
          <p className="text-lg mb-6">
            Over the years, CadTech has made a significant impact on the professional development landscape:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><span className="font-semibold">Thousands of Successful Graduates</span>: We've trained over 3,000 professionals who have gone on to secure positions at leading companies across various industries.</li>
            <li><span className="font-semibold">High Placement Rate</span>: Our graduates consistently achieve high placement rates, with many securing positions before completing their programs.</li>
            <li><span className="font-semibold">Industry Recognition</span>: We've earned recognition from leading software companies and industry associations for our training quality and graduate competencies.</li>
            <li><span className="font-semibold">Corporate Partnerships</span>: We work closely with companies to provide customized training solutions that address specific organizational needs.</li>
            <li><span className="font-semibold">Community Building</span>: We've fostered a strong alumni network that provides ongoing support, mentorship, and career opportunities for our graduates.</li>
          </ul>
        </section>

        {/* Why Choose CadTech Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Why Choose CadTech?</h2>
          
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><span className="font-semibold">Proven Track Record</span>: With thousands of successful graduates and years of experience, we have a proven methodology that delivers results.</li>
            <li><span className="font-semibold">Comprehensive Training</span>: Our programs cover not just software skills but also the soft skills and industry knowledge needed for career success.</li>
            <li><span className="font-semibold">Flexible Learning Options</span>: We offer various scheduling options including full-time, part-time, weekend, and online programs to accommodate different lifestyles and commitments.</li>
            <li><span className="font-semibold">Career Support</span>: Our relationship with students doesn't end at graduation. We provide ongoing career support, including job placement assistance, resume building, and interview preparation.</li>
            <li><span className="font-semibold">Modern Facilities</span>: Our training centers are equipped with the latest software, hardware, and learning tools to provide an optimal learning environment.</li>
            <li><span className="font-semibold">Affordable Excellence</span>: We believe quality education should be accessible, which is why we offer competitive pricing and flexible payment options.</li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Our Vision for the Future</h2>
          <p className="text-lg mb-4">
            As technology continues to evolve at an unprecedented pace, CadTech remains committed to staying at the forefront of educational innovation. We're constantly exploring new training methodologies, emerging technologies, and industry trends to ensure our students are always prepared for tomorrow's challenges.
          </p>
          <p className="text-lg">
            We envision a future where every professional has access to the skills and knowledge they need to thrive in an increasingly digital world. Through our continued commitment to excellence in education, we aim to be the catalyst that transforms careers and drives industry advancement.
          </p>
        </section>

        {/* Join Section */}
        <section className="mb-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Join the CadTech Family</h2>
          <p className="text-lg mb-4">
            When you choose CadTech, you're not just enrolling in a training program—you're joining a community of ambitious professionals, experienced instructors, and successful alumni who are all committed to excellence and continuous growth.
          </p>
          <p className="text-lg mb-4">
            Whether you're a recent graduate looking to kickstart your career, a working professional seeking to upskill, or someone considering a career change, CadTech has the programs, expertise, and support system to help you achieve your goals.
          </p>
          <p className="text-lg mb-4">
            Your journey to professional excellence starts here. Join the thousands of professionals who have transformed their careers with CadTech, and discover what it means to truly master the tools of your trade.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center italic text-gray-600 border-t border-gray-200 pt-8">
          <p>
            Ready to take the next step in your career? Contact CadTech today and discover how we can help you master the skills that matter most in today's competitive marketplace.
          </p>
        </footer>
      </div>
    </div>
  <Footer/>
    </>
  );
};

export default AboutUs;
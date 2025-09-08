import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
const TermsAndConditions = () => {
  return (
    <>
 <Navbar/>
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-28 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-700">Last Updated: {new Date().toLocaleDateString()}</p>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-lg mb-6">
            Welcome to CadTech! These Terms and Conditions govern your use of our website, services, and training programs. 
            By accessing or using our services, you agree to be bound by these Terms and Conditions.
          </p>
          <p className="text-lg">
            Please read these terms carefully before using our services. If you do not agree with any part of these terms, 
            you may not access our website or use our services.
          </p>
        </section>

        {/* Definitions */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Definitions</h2>
          
          <ul className="list-disc pl-6 space-y-3">
            <li><span className="font-semibold">"Company", "We", "Us", "Our"</span> refers to CadTech.</li>
            <li><span className="font-semibold">"You", "Your", "User"</span> refers to the individual accessing or using our services.</li>
            <li><span className="font-semibold">"Services"</span> refers to our training programs, courses, website, and any related services.</li>
            <li><span className="font-semibold">"Content"</span> refers to all materials, resources, and information provided through our services.</li>
            <li><span className="font-semibold">"Account"</span> refers to the unique account created for you to access our services.</li>
          </ul>
        </section>

        {/* Account Registration */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Account Registration</h2>
          
          <p className="mb-4">
            To access certain features of our services, you may be required to create an account. When registering, you agree to:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and accept all risks of unauthorized access</li>
            <li>Promptly update your information if it changes</li>
            <li>Be responsible for all activities that occur under your account</li>
          </ul>
          
          <p>
            We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.
          </p>
        </section>

        {/* Services and Payments */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Services and Payments</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Course Enrollment</h3>
            <p>
              Enrollment in our courses is subject to availability and our acceptance of your registration. 
              We reserve the right to refuse enrollment to anyone for any reason at any time.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Fees and Payment</h3>
            <p className="mb-4">
              You agree to pay all fees associated with your selected courses or services. Fees are non-refundable except as specified in our refund policy.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All fees are stated in the applicable currency</li>
              <li>You are responsible for any taxes associated with your purchases</li>
              <li>We may change our fees at any time, but changes will not affect existing enrollments</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Refund Policy</h3>
            <p className="mb-4">
              Our refund policy is as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full refund if cancellation occurs at least 14 days before the course start date</li>
              <li>50% refund if cancellation occurs between 7-13 days before the course start date</li>
              <li>No refund for cancellations less than 7 days before the course start date</li>
              <li>No refund after the course has commenced</li>
              <li>All refund requests must be submitted in writing</li>
            </ul>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Intellectual Property</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Our Content</h3>
            <p>
              All content provided through our services, including but not limited to text, graphics, logos, images, 
              course materials, and software, is the property of CadTech or our content suppliers and protected by 
              intellectual property laws.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">License Grant</h3>
            <p className="mb-4">
              Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable, 
              non-sublicensable license to access and use our services for your personal, non-commercial educational purposes.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit 
              any of our content without our express written permission.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">User Content</h3>
            <p className="mb-4">
              By submitting or posting content through our services, you grant us a worldwide, perpetual, royalty-free license 
              to use, reproduce, modify, and display such content for the purpose of providing our services.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to any content you submit and that it does not 
              violate any third-party rights.
            </p>
          </div>
        </section>

        {/* User Conduct */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">User Conduct</h2>
          
          <p className="mb-4">
            You agree not to engage in any of the following prohibited activities:
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>Copying, distributing, or disclosing any part of our services in any medium</li>
            <li>Using any automated system to access our services</li>
            <li>Attempting to interfere with or compromise the integrity or security of our systems</li>
            <li>Taking any action that imposes an unreasonable load on our infrastructure</li>
            <li>Uploading or transmitting viruses or any other malicious code</li>
            <li>Collecting or harvesting any personally identifiable information from our services</li>
            <li>Impersonating another person or otherwise misrepresenting your affiliation with a person or entity</li>
            <li>Interfering with the proper functioning of our services</li>
            <li>Accessing content or data not intended for you</li>
            <li>Violating any applicable laws or regulations</li>
          </ul>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Disclaimer of Warranties</h2>
          
          <p className="mb-4">
            Our services are provided on an "as is" and "as available" basis without any warranties of any kind, 
            either express or implied. We do not warrant that:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>Our services will meet your specific requirements</li>
            <li>Our services will be uninterrupted, timely, secure, or error-free</li>
            <li>The results that may be obtained from the use of our services will be accurate or reliable</li>
            <li>The quality of any products, services, information, or other material will meet your expectations</li>
          </ul>
          
          <p>
            We make no warranties regarding the success or outcomes of completing our training programs, 
            including but not limited to employment opportunities or career advancement.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Limitation of Liability</h2>
          
          <p className="mb-4">
            To the fullest extent permitted by law, in no event shall CadTech, its officers, directors, employees, or agents 
            be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mb-4">
            <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
            <li>Damages resulting from your access to or use of or inability to access or use our services</li>
            <li>Damages resulting from any conduct or content of any third party on our services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
          
          <p>
            Our total liability to you for all claims arising out of or relating to these terms or your use of our services 
            shall not exceed the amount you paid to us in the six months preceding the event giving rise to the claim.
          </p>
        </section>

        {/* Indemnification */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Indemnification</h2>
          
          <p>
            You agree to defend, indemnify, and hold harmless CadTech and its subsidiaries, agents, licensors, managers, 
            and other affiliated companies, and their employees, contractors, agents, officers, and directors, from and 
            against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
            (including but not limited to attorney's fees) arising from:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>Your use of and access to our services</li>
            <li>Your violation of any term of these Terms and Conditions</li>
            <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
            <li>Any claim that your content caused damage to a third party</li>
          </ul>
        </section>

        {/* Governing Law */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Governing Law</h2>
          
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction 
            in which CadTech is established, without regard to its conflict of law provisions.
          </p>
        </section>

        {/* Changes to Terms */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Changes to Terms</h2>
          
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions at any time. 
            If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
            What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>

    
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsAndConditions;
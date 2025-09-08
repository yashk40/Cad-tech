import React from 'react';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
const PrivacyPolicy = () => {
  return (
    <>
   <Navbar/>
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-28 max-w-7xl">
      
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-700">Last Updated: {new Date().toLocaleDateString()}</p>
        </header>

       
        <section className="mb-10">
          <p className="text-lg mb-6">
            At CadTech, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            or use our services.
          </p>
          <p className="text-lg">
            Please read this privacy policy carefully. By accessing or using our website and services, you acknowledge that 
            you have read, understood, and agree to be bound by all the terms outlined here.
          </p>
        </section>

       
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Information We Collect</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register for an account on our website</li>
              <li>Enroll in any of our training programs</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Fill out forms or surveys on our website</li>
              <li>Contact us with inquiries or for customer support</li>
            </ul>
            <p>
              The personal information we collect may include your name, email address, phone number, 
              educational background, employment information, and payment details.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages you visit on our website</li>
              <li>Time and date of your visit</li>
              <li>Time spent on those pages</li>
              <li>Other diagnostic data</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
          </div>
        </section>

      
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">How We Use Your Information</h2>
          
          <p className="mb-4">
            We may use the information we collect for various purposes, including to:
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your registrations and enrollments</li>
            <li>Send you administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you promotional communications about our courses, events, and other news</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            <li>Detect, prevent, and address technical issues and fraudulent activities</li>
            <li>Comply with legal obligations and enforce our terms and conditions</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">How We Share Your Information</h2>
          
          <p className="mb-4">
            We may share your personal information in the following situations:
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-semibold">With Service Providers:</span> We may share your information with third-party vendors, 
              service providers, contractors, or agents who perform services for us or on our behalf.
            </li>
            <li>
              <span className="font-semibold">For Business Transfers:</span> We may share or transfer your information in connection with, 
              or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
            </li>
            <li>
              <span className="font-semibold">With Your Consent:</span> We may disclose your personal information for any other purpose with your consent.
            </li>
            <li>
              <span className="font-semibold">For Legal Reasons:</span> We may disclose your information where we are legally required to do so 
              in order to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.
            </li>
          </ul>
        </section>

     
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Data Retention</h2>
          
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. 
            We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, 
            and enforce our policies.
          </p>
        </section>

      
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Data Security</h2>
          
          <p className="mb-4">
            We implement appropriate technical and organizational security measures designed to protect the security of your personal information. 
            However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
            While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        {/* Your Data Protection Rights */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Your Data Protection Rights</h2>
          
          <p className="mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>The right to access, update, or delete the information we have on you</li>
            <li>The right of rectification to have your information corrected if it is inaccurate or incomplete</li>
            <li>The right to object to our processing of your personal information</li>
            <li>The right of restriction to request that we restrict the processing of your personal information</li>
            <li>The right to data portability to receive a copy of your personal information in a structured, machine-readable format</li>
            <li>The right to withdraw consent where we have relied on your consent to process your personal information</li>
          </ul>
          
          <p className="mt-4">
            To exercise any of these rights, please contact us using the contact details provided at the end of this policy.
          </p>
        </section>

        {/* Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Children's Privacy</h2>
          
          <p>
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. 
            If you become aware that a child has provided us with personal information, please contact us. 
            If we become aware that we have collected personal information from children without verification of parental consent, 
            we take steps to remove that information from our servers.
          </p>
        </section>

        {/* Changes to This Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Changes to This Privacy Policy</h2>
          
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
            and updating the "Last Updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically 
            for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-10 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
          
          <p className="text-center mb-6">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          
          <div className="text-center">
            <p className="font-semibold">CadTech</p>
            <p>Email: cadtechofficial@gmail.com</p>
            <p>Phone: +91 7303450061</p>
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
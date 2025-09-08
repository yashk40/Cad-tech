import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
const ShippingPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Course Access & Delivery Policy</h1>
          <p className="text-lg text-gray-700">Last updated: September 8, 2025</p>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-lg mb-6">
            At CadTech, we specialize in digital education products. This policy outlines how we deliver 
            course materials and provide access to our training programs. Since our products are primarily digital, 
            there is no physical shipping involved for most of our offerings.
          </p>
        </section>

        {/* Digital Course Access */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Digital Course Access</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Instant Access to Online Courses</h3>
            <p className="mb-4">
              Upon successful payment confirmation, you will receive immediate access to your purchased course(s) through:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Automated email with login credentials and access instructions</li>
              <li>Direct access to our learning management system (LMS)</li>
              <li>Download links for any supplementary materials</li>
            </ul>
            <p>
              Access is typically granted within 15 minutes of purchase completion. If you don't receive access within 1 hour, 
              please check your spam folder or contact our support team.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Scheduled Courses</h3>
            <p className="mb-4">
              For instructor-led live courses with specific start dates:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You will receive immediate access to pre-course materials</li>
              <li>Live session links will be sent via email 24 hours before each session</li>
              <li>Recordings of live sessions will be available within 24 hours after completion</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Access Duration</h3>
            <p className="mb-4">
              Course access periods vary by program:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Self-paced courses:</strong> Typically 12 months access from purchase date</li>
              <li><strong>Instructor-led courses:</strong> Access during course duration + 3 months review period</li>
              <li><strong>Certification programs:</strong> Access until certification exam completion</li>
              <li><strong>Lifetime access:</strong> Selected courses offer unlimited access (specified at purchase)</li>
            </ul>
          </div>
        </section>

        {/* Physical Materials Delivery */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Physical Materials Delivery</h2>
          
          <div className="mb-6">
            <p className="mb-4">
              Some of our premium courses include physical materials such as textbooks, certification kits, or hardware. 
              For these items, the following delivery policies apply:
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
            <p className="mb-4">
              Physical materials are typically shipped within 2-3 business days after course enrollment confirmation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Domestic Shipping (Within the United States)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-4 border-b text-left">Shipping Method</th>
                    <th className="py-2 px-4 border-b text-left">Delivery Time</th>
                    <th className="py-2 px-4 border-b text-left">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Standard Shipping</td>
                    <td className="py-2 px-4 border-b">3-5 business days</td>
                    <td className="py-2 px-4 border-b">$7.99 (Free on orders over $200)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">Express Shipping</td>
                    <td className="py-2 px-4 border-b">2-3 business days</td>
                    <td className="py-2 px-4 border-b">$14.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">International Shipping</h3>
            <p className="mb-4">
              We ship physical materials to most countries. International delivery typically takes 7-21 business days 
              depending on destination and customs processing.
            </p>
            <p className="text-sm text-gray-600">
              * Additional customs fees, taxes, or duties may apply for international orders and are the responsibility of the customer.
            </p>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Technical Requirements</h2>
          
          <div className="mb-6">
            <p className="mb-4">
              To access our digital courses, you will need:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A reliable internet connection</li>
              <li>A modern web browser (Chrome, Firefox, Safari, or Edge)</li>
              <li>For some courses: specific software (we provide student versions or trial licenses)</li>
              <li>For video-intensive courses: minimum 5 Mbps download speed</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Downloadable Content</h3>
            <p>
              Some courses include downloadable resources (PDFs, project files, software). These are typically available 
              immediately after purchase in your student dashboard.
            </p>
          </div>
        </section>

        {/* Access Issues & Troubleshooting */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Access Issues & Troubleshooting</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">If You Don't Receive Access</h3>
            <p className="mb-4">
              If you haven't received course access within 1 hour of purchase:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Check your spam/junk folder for emails from CadTech</li>
              <li>Verify the email address used for registration</li>
              <li>Contact our support team with your order confirmation number</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
            <p className="mb-4">
              Our technical support team is available to help with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Login and access issues</li>
              <li>Video playback problems</li>
              <li>Download difficulties</li>
              <li>Platform navigation assistance</li>
            </ul>
          </div>
        </section>

        {/* Tracking Your Order */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Tracking Your Order</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Digital Products</h3>
            <p className="mb-4">
              You can always check the status of your digital course access through your CadTech account dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Physical Materials</h3>
            <p className="mb-4">
              For orders containing physical materials, we provide tracking numbers via email once your order has shipped.
            </p>
          </div>
        </section>

        {/* Policy Changes */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Policy Changes</h2>
          
          <p>
            CadTech reserves the right to modify this Course Access & Delivery Policy at any time. 
            Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

      
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShippingPolicy;
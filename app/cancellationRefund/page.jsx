import React from 'react';
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
const CancellationRefundPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cancellation & Refund Policy</h1>
          <p className="text-lg text-gray-700">Last updated: September 8, 2025</p>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-lg mb-6">
            At CadTech, we strive to provide the highest quality training programs and customer satisfaction. 
            We understand that sometimes circumstances may require cancellation or refund requests. 
            This policy outlines the terms and conditions for cancellations and refunds.
          </p>
        </section>

        {/* General Policy */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">General Policy</h2>
          
          <p className="mb-4">
            CadTech believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
          </p>
          
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Cancellations will be considered only if the request is made within 30 days of placing the order. 
              However, the cancellation request may not be entertained if the orders have been communicated to 
              the vendors/merchants and they have initiated the process of shipping them.
            </li>
            <li>
              CadTech does not accept cancellation requests for perishable items like flowers, eatables etc. 
              However, refund/replacement can be made if the customer establishes that the quality of product 
              delivered is not good.
            </li>
          </ul>
        </section>

        {/* Course Cancellation Policy */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Course Cancellation Policy</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Before Course Commencement</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>100% refund if cancellation occurs at least 14 days before the course start date</li>
              <li>50% refund if cancellation occurs between 7-13 days before the course start date</li>
              <li>No refund for cancellations less than 7 days before the course start date</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">After Course Commencement</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>No cancellations or refunds after the course has commenced</li>
              <li>In exceptional circumstances (medical emergencies, etc.), students may request credit toward a future course</li>
              <li>All such requests must be accompanied by appropriate documentation and will be evaluated on a case-by-case basis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Cancellation by CadTech</h3>
            <p className="mb-4">
              CadTech reserves the right to cancel or reschedule courses due to insufficient enrollment, instructor illness, 
              or other circumstances beyond our control.
            </p>
            <p>
              In such cases, students will be offered the option to transfer to another course session or receive a full refund.
            </p>
          </div>
        </section>

        {/* Refund Policy */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Refund Policy</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Eligibility for Refunds</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds are only provided as outlined in this policy</li>
              <li>All refund requests must be submitted in writing to our customer service team</li>
              <li>Refunds will be issued using the original payment method whenever possible</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Processing Time</h3>
            <p className="mb-4">
              In case of any refunds approved by CadTech, it will take 6-8 business days for the refund to be processed 
              to the end customer.
            </p>
            <p>
              The time it takes for the refund to reflect in your account may vary depending on your bank or payment provider.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Non-Refundable Items</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Course materials that have been accessed or downloaded</li>
              <li>Certification exam fees once the exam has been scheduled</li>
              <li>Any customized or personalized training programs</li>
              <li>Membership fees after the membership period has begun</li>
            </ul>
          </div>
        </section>

        {/* Defective or Damaged Products */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Defective or Damaged Products</h2>
          
          <p className="mb-4">
            In case of receipt of damaged or defective items please report the same to our Customer Service team. 
            The request will, however, be entertained once the merchant has checked and determined the same at his own end. 
            This should be reported within 30 days of receipt of the products.
          </p>
          
          <p className="mb-4">
            In case you feel that the product received is not as shown on the site or as per your expectations, 
            you must bring it to the notice of our customer service within 30 days of receiving the product. 
            The Customer Service Team after looking into your complaint will take an appropriate decision.
          </p>
          
          <p>
            In case of complaints regarding products that come with a warranty from manufacturers, 
            please refer the issue to them.
          </p>
        </section>

        {/* How to Request Cancellation or Refund */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">How to Request Cancellation or Refund</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Cancellation Requests</h3>
            <p className="mb-4">
              To request a cancellation, please contact our customer service team with the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name and contact information</li>
              <li>Order number or transaction ID</li>
              <li>Course or product name</li>
              <li>Reason for cancellation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Refund Requests</h3>
            <p className="mb-4">
              To request a refund, please contact our customer service team with the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your full name and contact information</li>
              <li>Order number or transaction ID</li>
              <li>Course or product name</li>
              <li>Detailed reason for refund request</li>
              <li>Any supporting documentation</li>
            </ul>
          </div>
        </section>

        {/* Special Circumstances */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Special Circumstances</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Technical Issues</h3>
            <p>
              If you experience technical issues that prevent you from accessing our courses or services, 
              please contact our technical support team immediately. We will work to resolve the issue promptly. 
              If we are unable to resolve the issue within a reasonable time, you may be eligible for a refund 
              or course credit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Instructor Changes</h3>
            <p>
              CadTech reserves the right to change instructors for any course. Instructor changes alone 
              do not qualify for cancellations or refunds unless the change significantly alters the 
              course content or quality.
            </p>
          </div>
        </section>

        {/* Policy Changes */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-200 pb-2">Policy Changes</h2>
          
          <p>
            CadTech reserves the right to modify this Cancellation & Refund Policy at any time. 
            Any changes will be posted on this page with an updated revision date. 
            Continued use of our services after any changes constitutes your acceptance of the new policy.
          </p>
        </section>


      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CancellationRefundPolicy;
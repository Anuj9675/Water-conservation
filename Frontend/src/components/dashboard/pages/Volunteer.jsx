import React from 'react';

function VolunteerCoordination() {
  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-800">Volunteer Coordination</h1>
      <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto">

        {/* Why Volunteer Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Why Volunteer?</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img 
              src="https://plus.unsplash.com/premium_photo-1681195079271-cbfd9ba1cbc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2h5JTIwdm9sdW50ZWVyfGVufDB8fDB8fHww" 
              alt="Why Volunteer" 
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0" 
            />
            <div className="md:ml-6">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Volunteering is an enriching experience that offers numerous benefits both to the community and to you personally. 
                By volunteering, you contribute to causes you care about, support community initiatives, and help those in need. 
                This selfless act fosters a sense of purpose and fulfillment while building strong community bonds.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Engaging in volunteer work can also be a transformative journey, offering opportunities for personal growth, skill development, 
                and enhanced social connections. It is a powerful way to make a difference and positively impact the lives of others.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits of Volunteering Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Benefits of Volunteering</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img 
              src="https://plus.unsplash.com/premium_photo-1683121334505-907a00cf904c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVuaWZpdHMlMjBvZiUyMHZvbHVudGVlcnxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Benefits of Volunteering" 
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0" 
            />
            <div className="md:ml-6">
              <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 text-lg">
                <li><strong>Personal Growth:</strong> Gain new experiences, learn new skills, and discover personal strengths.</li>
                <li><strong>Community Impact:</strong> Contribute to local projects, support community needs, and promote positive change.</li>
                <li><strong>Professional Development:</strong> Enhance your resume with volunteer experience, network with professionals, and explore career opportunities.</li>
                <li><strong>Health and Well-being:</strong> Experience improved mental and physical health through active engagement and social interactions.</li>
                <li><strong>Sense of Achievement:</strong> Feel a deep sense of accomplishment and pride from making a meaningful contribution.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Volunteering also provides a unique chance to work alongside like-minded individuals who share your passions, making it a rewarding 
                and enjoyable experience. The bonds formed through shared efforts can lead to lasting friendships and a stronger community.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Involved Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">How to Get Involved</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img 
              src="https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="How to Get Involved" 
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0" 
            />
            <div className="md:ml-6">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Getting involved as a volunteer is simple and straightforward. Begin by identifying organizations or causes that resonate with 
                you and align with your interests. Many local organizations, nonprofits, and community groups are always seeking volunteers 
                for various projects and events.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                You can explore volunteer opportunities through local community boards, social media groups, or by visiting the websites of 
                organizations you're interested in. Reach out to them directly to inquire about available positions, requirements, and 
                application processes.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Additionally, consider participating in community events, joining volunteer networks, or attending informational sessions 
                to connect with others and learn more about how you can contribute. Every effort counts, and even a small commitment can 
                have a significant impact.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Success Stories</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img 
              src="https://images.unsplash.com/photo-1543726969-a1da85a6d334?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Success Stories" 
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md mb-6 md:mb-0" 
            />
            <div className="md:ml-6">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Many volunteers have found their experiences to be life-changing and inspiring. Here are a few success stories:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 text-lg">
                <li><strong>Emily:</strong> A dedicated volunteer who helped coordinate community clean-up events, resulting in a cleaner and more vibrant neighborhood.</li>
                <li><strong>James:</strong> An enthusiastic mentor who guided young students through after-school programs, fostering their academic growth and confidence.</li>
                <li><strong>Linda:</strong> A compassionate volunteer who supported local shelters, providing crucial assistance and comfort to those in need.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                These stories highlight the positive outcomes of volunteering and demonstrate how your involvement can make a tangible difference 
                in the lives of others.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            If you have any questions, need more information about volunteer opportunities, or want to get in touch with us, please 
            don't hesitate to reach out. We're here to help you find the perfect volunteer role and support you in your journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Contact us at <a href="mailto:volunteer@example.com" className="text-blue-600 underline">volunteer@example.com</a>. 
            We look forward to hearing from you and welcoming you to our volunteer community!
          </p>
        </section>

      </div>
    </div>
  );
}

export default VolunteerCoordination;

import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="mt-1 mr-3 text-blue-600" />
                  <div>
                    <p className="font-medium">AAR Equipment</p>
                    <p>123 Restaurant Row</p>
                    <p>Chicago, IL 60654</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-3 text-blue-600" />
                  <div>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FiPhone className="mr-3 text-blue-600" />
                <a href="tel:+1-800-555-0123" className="hover:text-blue-600">
                  1-800-555-0123
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-blue-600" />
                <a href="mailto:sales@aarequipment.com" className="hover:text-blue-600">
                  sales@aarequipment.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.232977942352!2d-87.63245908455828!3d41.89023717922173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb1da049173%3A0xa3d192c6f76c8ed4!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1625764842183!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
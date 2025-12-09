import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface ContactInfoProps {
  variant?: 'compact' | 'detailed' | 'card';
  showIcons?: boolean;
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  variant = 'detailed',
  showIcons = true,
  className = ''
}) => {
  const contactData = {
    phone: '+91-8779600550',
    phoneFormatted: '+91 87796 00550',
    email: 'instacad@instacad.in',
    address: 'Thane, Mumbai, India',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    website: 'www.instacad.in'
  };

  // Compact variant for headers/footers
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-4 text-sm ${className}`}>
        <a
          href={`tel:${contactData.phone}`}
          className="flex items-center gap-2 text-gray-600 hover:text-instacad-blue transition-colors"
        >
          {showIcons && <PhoneIcon className="w-4 h-4" />}
          <span>{contactData.phoneFormatted}</span>
        </a>
        <a
          href={`mailto:${contactData.email}`}
          className="flex items-center gap-2 text-gray-600 hover:text-instacad-blue transition-colors"
        >
          {showIcons && <EnvelopeIcon className="w-4 h-4" />}
          <span>{contactData.email}</span>
        </a>
      </div>
    );
  }

  // Card variant for contact sections
  if (variant === 'card') {
    return (
      <div className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-200 ${className}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-instacad-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-5 h-5 text-instacad-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
              <a
                href={`tel:${contactData.phone}`}
                className="text-gray-600 hover:text-instacad-blue transition-colors"
              >
                {contactData.phoneFormatted}
              </a>
              <p className="text-sm text-gray-500 mt-1">Available 24/7 for support</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-instacad-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <EnvelopeIcon className="w-5 h-5 text-instacad-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <a
                href={`mailto:${contactData.email}`}
                className="text-gray-600 hover:text-instacad-blue transition-colors"
              >
                {contactData.email}
              </a>
              <p className="text-sm text-gray-500 mt-1">Response within 2 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-instacad-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPinIcon className="w-5 h-5 text-instacad-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-gray-600">{contactData.address}</p>
              <p className="text-sm text-gray-500 mt-1">Near Mumbai International Airport</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
          <div className="flex items-center gap-2 text-gray-600">
            <ClockIcon className="w-4 h-4" />
            <span>{contactData.hours}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Saturday: 10:00 AM - 4:00 PM</p>
        </div>
      </div>
    );
  }

  // Detailed variant (default)
  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
        <p className="text-gray-600">
          Have questions about our engineering solutions? We're here to help!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {showIcons && (
              <div className="w-12 h-12 bg-instacad-blue/10 rounded-xl flex items-center justify-center">
                <PhoneIcon className="w-6 h-6 text-instacad-blue" />
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900">Call Us</h4>
              <a
                href={`tel:${contactData.phone}`}
                className="text-lg text-instacad-blue hover:text-instacad-blue/80 transition-colors font-semibold"
              >
                {contactData.phoneFormatted}
              </a>
              <p className="text-sm text-gray-500 mt-1">For immediate assistance</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {showIcons && (
              <div className="w-12 h-12 bg-instacad-blue/10 rounded-xl flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="w-6 h-6 text-instacad-blue" />
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900">Live Chat</h4>
              <button className="text-lg text-instacad-blue hover:text-instacad-blue/80 transition-colors font-semibold">
                Start Chat
              </button>
              <p className="text-sm text-gray-500 mt-1">Available Mon-Sat, 9AM-6PM</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {showIcons && (
              <div className="w-12 h-12 bg-instacad-blue/10 rounded-xl flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-instacad-blue" />
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900">Email Us</h4>
              <a
                href={`mailto:${contactData.email}`}
                className="text-lg text-instacad-blue hover:text-instacad-blue/80 transition-colors font-semibold break-all"
              >
                {contactData.email}
              </a>
              <p className="text-sm text-gray-500 mt-1">Typically respond within 2 hours</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {showIcons && (
              <div className="w-12 h-12 bg-instacad-blue/10 rounded-xl flex items-center justify-center">
                <GlobeAltIcon className="w-6 h-6 text-instacad-blue" />
              </div>
            )}
            <div>
              <h4 className="font-bold text-gray-900">Visit Us</h4>
              <p className="text-lg text-gray-900 font-semibold">{contactData.address}</p>
              <p className="text-sm text-gray-500 mt-1">Schedule an office visit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">Support Hours</h4>
            <div className="space-y-1 text-gray-600">
              <p>• {contactData.hours}</p>
              <p>• Saturday: 10:00 AM - 4:00 PM</p>
              <p>• Sunday: Emergency Support Only</p>
            </div>
          </div>
          <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">Online Now</span>
            </div>
            <p className="text-sm">Quick response guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
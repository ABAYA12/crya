"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UpcomingEvent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Event
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in our next initiative to empower African youth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
                  alt="Youth Leadership Forum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold">
                  Featured Event
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Youth Leadership & Governance Forum 2024
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span>December 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <span>University of Ghana, Legon</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join us for an inspiring day of dialogue, networking, and empowerment as we 
                  discuss youth participation in governance and nation-building. Connect with 
                  fellow young leaders and policymakers.
                </p>

                <div className="flex gap-4">
                  <Link href="/events" className="btn-primary">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/events" className="btn-outline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Empowering African Youth
          </h2>
          <p className="text-lg md:text-xl text-primary-50 mb-12 leading-relaxed">
            Your support can transform lives and shape the future of Africa. 
            Whether through donations, volunteering, or partnership, every contribution matters.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Make a Donation</h3>
              <p className="text-primary-50 mb-6">
                Support our programs and help us reach more youth across Africa
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-md font-semibold hover:bg-primary-50 transition-colors w-full"
              >
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Become a Volunteer</h3>
              <p className="text-primary-50 mb-6">
                Join our team and make a direct impact in the lives of young people
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white border-2 border-white rounded-md font-semibold hover:bg-white hover:text-primary-600 transition-colors w-full"
              >
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl" />
    </section>
  );
}

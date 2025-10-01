"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSnippet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    "Education as empowerment",
    "Youth-driven leadership",
    "Patriotism and hope",
    "Unity across borders",
  ];

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                alt="Youth collaboration"
                className="rounded-lg shadow-lg h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
                alt="African youth"
                className="rounded-lg shadow-lg h-64 w-full object-cover mt-8"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-primary-600 mb-6" />
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Concerned Rising Youths Africa (CRYA) is a youth-led initiative created by 
              Ghanaian youth for the Ghanaian and African youth. We exist to serve as a 
              platform to raise and catapult the voices of African youth to the national 
              and international stage.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to building a united, empowered, and visionary generation 
              of young Africans—on the continent and in the diaspora—driven by education, 
              hope, patriotism, and purposeful engagement.
            </p>

            {/* Core Values */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

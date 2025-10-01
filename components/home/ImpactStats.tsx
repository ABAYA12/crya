"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, School, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Youth Empowered",
    description: "Students reached through our programs",
  },
  {
    icon: School,
    value: "5+",
    label: "Schools Visited",
    description: "Senior high schools in Greater Accra",
  },
  {
    icon: Award,
    value: "10+",
    label: "Programs Launched",
    description: "Impactful initiatives across Ghana",
  },
  {
    icon: Globe,
    value: "3",
    label: "Regions Covered",
    description: "Expanding across Africa",
  },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-primary-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Making a real difference in the lives of African youth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-primary-100">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

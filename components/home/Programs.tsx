"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen, Megaphone, Target, Globe } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    icon: Heart,
    title: "Anti-Drug & Mental Health",
    description: "Empowering youth in senior high schools to combat substance abuse and promote mental wellness.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Youth & Governance",
    description: "Amplifying youth voices in governance, democracy, and policy-making at all levels.",
    color: "secondary",
  },
  {
    icon: BookOpen,
    title: "Education for Change",
    description: "Actualizing the African Dream through quality education and skills development.",
    color: "accent",
  },
  {
    icon: Megaphone,
    title: "Advocacy & Awareness",
    description: "Raising awareness on pressing continental and global issues affecting youth.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Leadership Development",
    description: "Building the next generation of visionary African leaders.",
    color: "secondary",
  },
  {
    icon: Globe,
    title: "Pan-African Unity",
    description: "Connecting African youth on the continent and in the diaspora.",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-600",
    hover: "group-hover:bg-primary-600",
  },
  secondary: {
    bg: "bg-secondary-100",
    text: "text-secondary-600",
    hover: "group-hover:bg-secondary-600",
  },
  accent: {
    bg: "bg-accent-100",
    text: "text-accent-600",
    hover: "group-hover:bg-accent-600",
  },
};

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs & Impact Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We focus on multiple areas to create lasting change in the lives of African youth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const colors = colorClasses[program.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colors.bg} ${colors.text} ${colors.hover} group-hover:text-white transition-colors duration-300 mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/programs" className="btn-primary">
            Explore All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

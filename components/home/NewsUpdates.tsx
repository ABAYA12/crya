"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const news = [
  {
    title: "CRYA Launches Anti-Drug Campaign at Kwabenya SHS",
    excerpt: "Our latest campaign reaches over 200 students with powerful messages about substance abuse prevention and mental health awareness.",
    date: "November 15, 2024",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    category: "Campaign",
  },
  {
    title: "Youth Voices in National Governance Forum",
    excerpt: "CRYA representatives participate in national dialogue on youth inclusion in policy-making and democratic processes.",
    date: "November 10, 2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop",
    category: "Governance",
  },
  {
    title: "New Partnership with Kivo & H&H",
    excerpt: "Exciting collaboration to expand our reach and impact across more senior high schools in Greater Accra region.",
    date: "November 5, 2024",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop",
    category: "Partnership",
  },
];

export default function NewsUpdates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed about our recent activities and impact
            </p>
          </div>
          <Link href="/news" className="hidden md:flex btn-outline">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                <Link
                  href="/news"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:hidden"
        >
          <Link href="/news" className="btn-outline">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

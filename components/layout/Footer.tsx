import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Vision & Mission", href: "/about#mission" },
    { name: "Our Team", href: "/about#team" },
    { name: "Partners", href: "/about#partners" },
  ],
  programs: [
    { name: "Anti-Drug Campaign", href: "/programs#anti-drug" },
    { name: "Mental Health", href: "/programs#mental-health" },
    { name: "Youth Governance", href: "/programs#governance" },
    { name: "Education Initiatives", href: "/programs#education" },
  ],
  getInvolved: [
    { name: "Volunteer", href: "/get-involved#volunteer" },
    { name: "Donate", href: "/donate" },
    { name: "Partner With Us", href: "/get-involved#partner" },
    { name: "Join Network", href: "/get-involved#join" },
  ],
  resources: [
    { name: "News & Blog", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ],
};

const social = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">CRYA</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Concerned Rising Youths Africa - Empowering African youth through education, 
                governance, and purposeful engagement.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>054 397 3578</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@crya.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                {navigation.programs.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2">
                {navigation.getInvolved.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="max-w-md">
              <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social & Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Concerned Rising Youths Africa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

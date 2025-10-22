import Link from "next/link"
import { Facebook, Linkedin, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/mega-foundries-logo.png"
                  alt="MEGA Foundries"
                  width={72}
                  height={72}
                  className="h-24 w-auto"
                />
                {/* <h3 className="text-xl font-bold text-gray-900">MEGA</h3> */}
              </div>
              {/* <p className="text-sm text-gray-600 font-medium">Foundries</p> */}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Empowering innovators and builders worldwide through accessible, interactive learning. Our mission is to
              make quality education available to everyone, everywhere.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-700 hover:bg-red-800 text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Interactive Learning
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Mobile App
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-600">Phone</p>
                  <a href="tel:+15162521111" className="text-sm text-gray-900 hover:text-red-600 transition-colors">
                    +1 (516) 252-1111
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-600">Email</p>
                  <a
                    href="mailto:support@megafoundries.org"
                    className="text-sm text-gray-900 hover:text-red-600 transition-colors"
                  >
                    support@megafoundries.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-600">Address</p>
                  <p className="text-sm text-gray-900">123 Innovation Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <Link href="#" className="hover:text-red-600 transition-colors">
              Terms of Service
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="#" className="hover:text-red-600 transition-colors">
              Cookie Policy
            </Link>
            <span className="hidden md:inline">•</span>
            <Link href="#" className="hover:text-red-600 transition-colors">
              Sitemap
            </Link>
          </div>
          <p className="text-sm text-gray-600">© {currentYear} MEGA Foundries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

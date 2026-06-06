import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import footerLogo from '@/imports/footer-study-abroad.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#231f5a] via-[#1d1a50] to-[#15133f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <div className="mb-5">
              <div className="inline-flex bg-white px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.22)] ring-1 ring-white/70">
                <img
                  src={footerLogo.src}
                  alt="Honey Study Abroad Services"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="mb-7 max-w-[260px] text-[15px] leading-8 text-white">
              Professional translation services connecting people and businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/honeytranslationservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#1877F2] hover:bg-[#1877F2]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/honey_translation_services_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#E1306C] hover:bg-gradient-to-br hover:from-[#E1306C] hover:to-[#F77737]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/honey-translation-services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#0A66C2] hover:bg-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a
                href="https://wa.me/917299005577"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-extrabold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/#home" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Home</a></li>
              <li><a href="/#about" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">About</a></li>
              <li><a href="/#services" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Services</a></li>
              <li><a href="/#countries" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Countries</a></li>
              <li><a href="/#contact" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-extrabold text-white">Study Abroad Services</h3>
            <ul className="space-y-3">
              <li><a href="/university-admissions" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">University Admissions</a></li>
              <li><a href="/visa-assistance" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Visa Assistance</a></li>
              <li><a href="/scholarship-guidance" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Scholarship Guidance</a></li>
              <li><a href="/ielts-test-prep" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">IELTS / Test Prep</a></li>
              <li><a href="/campus-admission" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Campus Admission</a></li>
              <li><a href="/online-admission" className="inline-block text-[15px] text-white/85 transition-colors hover:translate-x-1 hover:text-orange-300">Online Admission</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-extrabold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-400" />
                <span className="text-[15px] text-white/90">Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-orange-400" />
                <a href="tel:+917299005577" className="text-[15px] text-white/90 transition-colors hover:text-orange-300">
                  +91 7299005577
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-400" />
                <a href="mailto:salesteam@honeytranslations.com" className="break-all text-[15px] text-white/90 transition-colors hover:text-orange-300">
                  salesteam@honeytranslations.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-7 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/70 sm:text-sm">
            &copy; 2026 Honey Translations Services. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-white/70 sm:text-sm">
            <a href="#privacy" className="transition-colors hover:text-orange-300">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms" className="transition-colors hover:text-orange-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/media';

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-void pt-16 pb-8 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          <div>
            <div className="font-display text-2xl tracking-wide uppercase">
              Mr<span className="text-ember">Vssence</span>
            </div>
            <p className="text-smoke text-sm mt-3 max-w-xs">
              Video Editor | Reels Editor | Photo Editor
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-smoke hover:text-ember transition-colors"
              >
                <Instagram size={17} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-smoke hover:text-ember transition-colors"
              >
                <Youtube size={17} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-smoke hover:text-ember transition-colors"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-smoke mb-5">QUICK LINKS</p>
            <ul className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-paper/80 hover:text-ember text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-smoke mb-5">CONTACT</p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-sm text-paper/80">
                <Mail size={14} className="text-ember shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ember transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-paper/80">
                <Phone size={14} className="text-ember shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-ember transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-paper/80">
                <MapPin size={14} className="text-ember shrink-0" />
                {contactInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-smoke text-xs">
            &copy; {new Date().getFullYear()} MrVssence. All rights reserved.
          </p>
          <p className="text-smoke text-xs">Crafted frame by frame.</p>
        </div>
      </div>
    </footer>
  );
}

import { Phone } from 'lucide-react';
import { brand } from '../../data/siteData';

// Official WhatsApp glyph (not lucide's generic MessageCircle) so this reads
// as the real WhatsApp brand mark — matters for an official-looking site.
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.001 2C6.478 2 2 6.478 2 12c0 1.803.48 3.535 1.372 5.056L2 22l4.996-1.312A9.936 9.936 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062c-1.68 0-3.309-.454-4.72-1.313l-.338-.201-3.087.811.826-3.017-.221-.35A8.043 8.043 0 013.94 12c0-4.44 3.618-8.058 8.061-8.058 4.44 0 8.059 3.618 8.059 8.058 0 4.442-3.62 8.062-8.059 8.062z" />
    </svg>
  );
}

const waNumber = brand.phone.replace(/[^\d]/g, '');
const telNumber = brand.phone.replace(/\s/g, '');

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      <a
        href={`tel:${telNumber}`}
        aria-label="Call us"
        className="group relative flex items-center"
      >
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-text-primary px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:mr-4 hidden sm:block">
          Call Us
        </span>
        <span
          className="pulse-ring relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 transition-transform duration-200 group-hover:scale-110"
          style={{ '--pulse-color': 'var(--color-primary)' }}
        >
          <Phone className="text-white relative z-10" size={24} fill="currentColor" />
        </span>
      </a>

      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center"
      >
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-text-primary px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 group-hover:mr-4 hidden sm:block">
          Chat on WhatsApp
        </span>
        <span
          className="pulse-ring relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110"
          style={{ '--pulse-color': '#25D366' }}
        >
          <WhatsAppIcon className="text-white relative z-10" width={26} height={26} />
        </span>
      </a>
    </div>
  );
}

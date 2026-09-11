import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-white rounded-2xl border border-navy/10 p-7 sm:p-9 shadow-sm">
      <h3 className="font-display font-bold text-navy text-2xl mb-3">Contact HoCAID directly</h3>
      <p className="font-sans text-navy/65 leading-relaxed mb-7">
        Online message submission is not available at this time. Please contact us directly and include the purpose of your enquiry.
      </p>
      <div className="space-y-4">
        <a href="mailto:info@hocaid.org" className="flex items-center gap-3 rounded-xl bg-cream px-4 py-4 text-navy hover:bg-sunrise/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise">
          <Mail className="w-5 h-5 text-sunrise" aria-hidden="true" />
          <span className="font-sans font-semibold">info@hocaid.org</span>
        </a>
        <a href="tel:+2348064749454" className="flex items-center gap-3 rounded-xl bg-cream px-4 py-4 text-navy hover:bg-sunrise/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunrise">
          <Phone className="w-5 h-5 text-sunrise" aria-hidden="true" />
          <span className="font-sans font-semibold">+234 806 474 9454</span>
        </a>
      </div>
    </div>
  );
}

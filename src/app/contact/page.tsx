import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | HoCAID",
  description:
    "Get in touch with HoCAID — we would love to hear from you. Reach out about programmes, partnerships, volunteering, or consulting.",
  openGraph: {
    title: "Contact Us | HoCAID",
    description:
      "Get in touch with HoCAID — we would love to hear from you. Reach out about programmes, partnerships, volunteering, or consulting.",
    url: "/contact",
  },
};

const contactDetails = [
  {
    Icon: Mail,
    label: "Email",
    value: "info@hocaid.org",
    href: "mailto:info@hocaid.org",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    Icon: MapPin,
    label: "Head Office",
    value: "14 Development Avenue, Maitama, Abuja, Nigeria",
    href: undefined,
  },
  {
    Icon: Clock,
    label: "Office Hours",
    value: "Monday – Friday, 8:00 am – 5:00 pm WAT",
    href: undefined,
  },
];

const enquiryTypes = [
  { label: "General Enquiry", email: "info@hocaid.org" },
  { label: "Partnerships", email: "partnerships@hocaid.org" },
  { label: "Media & Press", email: "media@hocaid.org" },
  { label: "Consulting", email: "consulting@hocaid.org" },
  { label: "Donations", email: "donate@hocaid.org" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Contact" }]}
        description="Have a question, a partnership idea, or just want to say hello? We would love to hear from you."
        size="md"
      />

      {/* ── Main grid ── */}
      <section className="bg-white px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">

            {/* ── Left: contact info ── */}
            <aside className="lg:col-span-2">
              <SectionHeading eyebrow="Reach Us" title="Get in Touch" />

              <ul className="space-y-5">
                {contactDetails.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange/10">
                      <Icon size={18} className="text-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-grey/60">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-0.5 text-sm font-medium text-navy hover:text-orange transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-navy">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Enquiry type directory */}
              <div className="mt-8 rounded-2xl bg-cream p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-grey/60">
                  Specific Enquiries
                </p>
                <ul className="space-y-2">
                  {enquiryTypes.map(({ label, email }) => (
                    <li key={label} className="flex items-center justify-between">
                      <span className="text-sm text-grey">{label}</span>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs font-semibold text-orange hover:underline"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="mt-6 flex h-52 items-center justify-center rounded-2xl bg-navy/5 ring-1 ring-navy/10">
                <div className="text-center">
                  <MapPin size={28} className="mx-auto text-navy/30" aria-hidden="true" />
                  <p className="mt-2 text-xs font-medium text-grey/60">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </aside>

            {/* ── Right: form ── */}
            <div className="lg:col-span-3">
              <SectionHeading eyebrow="Send a Message" title="We Read Every Message" />
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Country offices strip ── */}
      <section className="bg-cream px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-grey/60 text-center">
            Country Offices
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { country: "Nigeria", city: "Abuja (HQ)" },
              { country: "Ghana", city: "Accra" },
              { country: "Senegal", city: "Dakar" },
              { country: "Kenya", city: "Nairobi" },
              { country: "Cameroon", city: "Yaoundé" },
            ].map(({ country, city }) => (
              <div
                key={country}
                className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
              >
                <p className="font-display font-bold text-navy">{country}</p>
                <p className="mt-0.5 text-xs text-grey">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

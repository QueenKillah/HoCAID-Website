import Link from "next/link";

// Activity data sourced from: Hocaid_Programs actvities information for Website_Content.pdf
const activities = [
  {
    id: 1,
    title: "PWD Cervical Cancer Awareness & HPV Vaccination",
    pillar: "Health Systems Strengthening",
    date: "14 May 2026",
    location: "Ijebu Ode, Ogun State",
    stat: "200+",
    statLabel: "PWDs, caregivers & community influencers reached",
    summary:
      "HOCAID held a one-day HPV awareness and sensitization programme for Persons with Disabilities, preparing an often-underserved population for an upcoming HPV intensification exercise and ensuring girls with disabilities are not left behind in vaccination efforts.",
    source: "Hocaid_Programs actvities information for Website_Content.pdf",
  },
  {
    id: 2,
    title: "Empowering Displaced Women Through Traditional Cap-Making",
    pillar: "Food Security, Agriculture & Sustainable Livelihoods",
    date: "From 18 April 2026",
    location: "IDP Community, Borno State",
    stat: "25",
    statLabel: "displaced women supported (25 aged 14–30)",
    summary:
      "HOCAID is equipping displaced women in an IDP community with traditional cap-making and local craft skills, strengthening their economic independence. Supported by YEF Fund, GY Mobilization, TAP4, SprutBud, and EU partners.",
    source: "Hocaid_Programs actvities information for Website_Content.pdf",
  },
  {
    id: 3,
    title: "National Community Food Bank Launch — Ogun State",
    pillar: "Food Security, Agriculture & Sustainable Livelihoods",
    date: "19 August 2026",
    location: "Makun Health Centre, Sagamu, Ogun State",
    stat: "1,000",
    statLabel: "women mobilized as programme beneficiaries",
    summary:
      "HOCAID supported the commissioning of Nigeria's Zonal National Community Food Bank Programme at Sagamu, hosted by the First Lady, Senator Oluremi Tinubu. HOCAID mobilized 1,000 women from surrounding communities as beneficiaries, partnering with the Ogun State Government and Primary Health Care Development Board.",
    source: "Hocaid_Programs actvities information for Website_Content.pdf",
  },
];

export default function Impact() {
  return (
    <>
      <div className="h-3 bg-cream" aria-hidden="true" />

      {/* ── Stage marker ── */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans font-semibold text-gold uppercase tracking-widest text-sm mb-4">
            Building with purpose
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-5">
            Established in April 2026
          </h2>
          <p className="font-sans text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
            The activities below represent our documented work since registration.
          </p>
        </div>
      </section>

      {/* ── Real activity cards ── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl">
              Recent Activities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((act) => (
              <article
                key={act.id}
                className="bg-white rounded-2xl border border-navy/8 overflow-hidden flex flex-col hover:border-sunrise/30 transition-colors"
              >
                {/* Stat banner */}
                <div className="bg-navy px-6 py-5 text-center">
                  <p
                    className="font-display font-black text-4xl text-gold leading-none mb-1"
                    aria-label={`${act.stat} ${act.statLabel}`}
                  >
                    {act.stat}
                  </p>
                  <p className="font-sans text-white/70 text-xs leading-snug">
                    {act.statLabel}
                  </p>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <span className="inline-block font-sans text-xs font-semibold text-sunrise uppercase tracking-wider mb-3">
                    {act.pillar}
                  </span>
                  <h3 className="font-display font-bold text-navy text-lg leading-snug mb-2">
                    {act.title}
                  </h3>
                  <p className="font-sans text-navy/55 text-xs mb-3">
                    {act.date} · {act.location}
                  </p>
                  <p className="font-sans text-navy/70 text-sm leading-relaxed flex-1">
                    {act.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="font-sans text-navy/40 text-xs text-center mt-8">
            All figures drawn from internal activity reports. Updated as new reports are approved.
          </p>
        </div>
      </section>

      <div className="h-3 bg-cream" aria-hidden="true" />

      {/* ── CTA ── */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-white/70 text-base leading-relaxed mb-6">
            As our programme portfolio grows, we will share approved updates and evidence here.
          </p>
          <Link
            href="/about"
            className="inline-block px-7 py-3 rounded-lg border-2 border-white text-white font-sans font-semibold text-sm hover:bg-white hover:text-navy transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            About HoCAID
          </Link>
        </div>
      </section>

      <div className="h-3 bg-cream" aria-hidden="true" />
    </>
  );
}

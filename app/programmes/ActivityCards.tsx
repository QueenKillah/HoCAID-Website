import Image from "next/image";

const activities = [
  {
    id: 1,
    image: "/images/activities/activity-1.jpg",
    imageAlt:
      "Participants including wheelchair users attending the HoCAID HPV awareness and sensitisation session in Ijebu Ode",
    stat: "200+",
    statLabel: "PWDs, caregivers & community members reached",
    pillar: "Health Systems Strengthening",
    title: "Reaching Persons with Disabilities with HPV Awareness",
    location: "Ijebu Ode, Ogun State",
    date: "14 May 2026",
    description:
      "In partnership with the Association of Persons with Disabilities (APWD), HOCAID held a one-day HPV sensitisation programme ensuring girls with disabilities are not left behind in vaccination efforts — delivered in the local Ijebu dialect with accessible transport and venue.",
  },
  {
    id: 2,
    image: "/images/activities/activity-4.jpg",
    imageAlt:
      "Health workers and community representatives at the HoCAID HPV intensification kick-off meeting",
    stat: "7 LGAs",
    statLabel: "covered in the intensification exercise",
    pillar: "Health Systems Strengthening",
    title: "Kicking Off the HPV Intensification Exercise",
    location: "Ogun State",
    date: "13 May 2026",
    description:
      "HOCAID coordinated the launch of an HPV intensification exercise spanning seven Local Government Areas, equipping health workers and community leaders to drive inclusive vaccine coverage and close gaps in underserved populations.",
  },
  {
    id: 3,
    image: "/images/activities/activity-6.jpg",
    imageAlt:
      "Young women displaying traditional caps they made during HOCAID's livelihoods skills training in Borno State",
    stat: "25",
    statLabel: "displaced women supported (all aged 14–30)",
    pillar: "Food Security, Agriculture & Sustainable Livelihoods",
    title: "Empowering Displaced Women Through Traditional Cap-Making",
    location: "IDP Community, Borno State",
    date: "From 18 April 2026",
    description:
      "HOCAID equipped displaced women with traditional cap-making and local craft skills to build economic independence. Supported by YEF Fund, Global Youth Mobilization, TAPE4, SprutBud and the EU, participants moved from training into income-generating production.",
  },
  {
    id: 4,
    image: "/images/activities/activity-10.jpg",
    imageAlt:
      "HOCAID beneficiary women at the National Community Food Bank commissioning programme in Sagamu, Ogun State",
    stat: "1,000",
    statLabel: "women mobilised as programme beneficiaries",
    pillar: "Food Security, Agriculture & Sustainable Livelihoods",
    title: "First Lady Launches National Community Food Bank — Ogun State",
    location: "Makun Health Centre, Sagamu, Ogun State",
    date: "19 August 2026",
    description:
      "HOCAID mobilised 1,000 women as beneficiaries for the commissioning of Nigeria's Zonal National Community Food Bank Programme — hosted by Nigeria's First Lady, Senator Oluremi Tinubu — in partnership with the Ogun State Government and Primary Health Care Development Board.",
  },
];

export default function ActivityCards() {
  return (
    <section className="bg-cream py-20 px-6 border-t border-navy/10">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-sans font-semibold text-sunrise uppercase tracking-widest text-sm mb-3">
            In the Field
          </p>
          <h2 className="font-display font-bold text-navy text-3xl sm:text-4xl mb-4">
            Our Activities
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {activities.map((act) => (
            <article
              key={act.id}
              className="bg-white rounded-2xl overflow-hidden border border-navy/8 flex flex-col"
            >
              {/* Photo with stat overlay */}
              <div className="relative aspect-[4/3] bg-navy/10 flex-shrink-0">
                <Image
                  src={act.image}
                  alt={act.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className="object-cover object-center"
                />
                {/* Gradient scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                {/* Stat badge */}
                <div className="absolute bottom-4 left-4">
                  <p className="font-display font-black text-gold text-2xl leading-none drop-shadow">
                    {act.stat}
                  </p>
                  <p className="font-sans text-white/90 text-xs mt-0.5 max-w-[180px] leading-snug drop-shadow">
                    {act.statLabel}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="font-sans font-semibold text-sunrise text-xs uppercase tracking-wider mb-2">
                  {act.pillar}
                </p>
                <h3 className="font-display font-bold text-navy text-lg leading-snug mb-2">
                  {act.title}
                </h3>
                <p className="font-sans text-navy/50 text-xs mb-3">
                  {act.location} · {act.date}
                </p>
                <p className="font-sans text-navy/70 text-sm leading-relaxed flex-1">
                  {act.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="font-sans text-navy/40 text-xs text-center mt-10">
          All figures drawn from approved internal activity reports. Updated as new reports are filed.
        </p>
      </div>
    </section>
  );
}

import React, { useEffect, ReactNode } from "react";

/* ================= PREMIUM GLASS CARD ================= */
function PremiumCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative rounded-3xl p-10 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-xl border border-blue-400/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_40px_120px_rgba(255,193,7,0.25)] transition duration-500">

      {/* LEFT yellow gradient line */}
      <div className="absolute left-0 top-6 bottom-6 w-[4px] rounded-full 
        bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300 
        shadow-[0_0_24px_rgba(255,193,7,0.7)]" 
      />

      <h3 className="text-2xl font-semibold text-white mb-4 pl-6">
        {title}
      </h3>

      <div className="text-gray-200 text-lg leading-relaxed pl-6">
        {children}
      </div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */
const AIDeepLearning: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#06070a] text-white overflow-hidden">
{/* ================= YELLOW GRADIENT BANNER ================= */}
<div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

  <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
    {/* Top small text in black */}
    <p className="uppercase tracking-[0.35em] text-xs text-black/90">
      Artificial Intelligence & Deep Learning
    </p>

    {/* Main heading in white */}
    <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-lg">
      HRV-to-Biochemistry Estimation
      <br />
      & Translational Decision Support
    </h1>

    {/* Bottom description in black */}
    <p className="text-black/80 text-lg md:text-xl font-medium">
      Translating wearable signals into clinically interpretable, longitudinal decision support.
    </p>
  </div>
</div>


      {/* ================= YELLOW S-CURVE DIVIDER ================= */}
      <div className="-mt-20 relative z-0">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path
            d="M0,80 
               C240,120 480,120 720,80 
               960,40 1200,40 1440,80 
               L1440,0 L0,0 Z"
            fill="#c59a0dff"
          />
        </svg>
      </div>

      {/* ================= GLASS CARD CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-24">

        <PremiumCard title="Scientific Orientation">
          Dr. Polisetty’s AI program bridges classical physiological reasoning
          with modern analytics. Systems emphasize interpretability, 
          longitudinal safety, and reproducible validation across time.
        </PremiumCard>

        <PremiumCard title="Proprietary Algorithms (IP-Protected)">
          Seventeen proprietary ML algorithms transform HRV-derived inputs 
          into rough estimates of blood biochemistry and physiological parameters. 
          <p className="text-gray-400 italic mt-2">
            Active IP protection — architectural details, datasets, and validation 
            reports shared under NDA collaboration.
          </p>
        </PremiumCard>

        <PremiumCard title="What the AI Enables">
          <ul className="list-disc list-inside space-y-2">
            <li>Physiological pattern recognition across long time horizons</li>
            <li>Signal-to-state translational estimation layers</li>
            <li>Clinician-led decision support (AI as advisor, not authority)</li>
            <li>Outcome-driven continuous learning loops</li>
          </ul>
        </PremiumCard>

        <PremiumCard title="Where This Is Headed">
          Integrated learning health stack: devices → AI translation → protocol automation 
          → clinician dashboards → outcomes analytics — supporting prevention, chronic optimization, and integrative end-stage care.
        </PremiumCard>

        {/* ================= CALL TO ACTION BUTTONS ================= */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="px-12 py-4 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 text-black font-semibold tracking-wide hover:scale-105 transition shadow-[0_20px_60px_rgba(255,193,7,0.6)]">
            Request NDA-Based Technical Brief
          </button>

          <button className="px-12 py-4 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-105 transition">
            Collaborate on Validation & Outcomes
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIDeepLearning;

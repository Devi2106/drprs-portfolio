import React, { useEffect } from 'react';

const AIDeepLearning: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#06070a] text-white overflow-hidden">

      {/* ====== ATMOSPHERIC BACKGROUND ====== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[1000px] h-[1000px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-24">

        {/* ====== HERO ====== */}
        <header className="space-y-8 text-center">
          <p className="uppercase tracking-[0.35em] text-xs text-amber-400/80">
            Artificial Intelligence & Deep Learning
          </p>

          <h1 className="font-serif text-4xl md:text-6xl leading-tight font-semibold bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            HRV-to-Biochemistry Estimation
            <br />
            & Translational Decision Support
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            Computational physiology systems that translate wearable signals
            into clinically interpretable, longitudinal decision support —
            designed for safety, meaning, and medical accountability.
          </p>
        </header>

        {/* ====== CONTENT BLOCKS ====== */}
        <div className="space-y-16">

          {/* BLOCK */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />
            <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <h2 className="text-2xl font-serif text-amber-400 mb-6">
                Scientific Orientation
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dr. Polisetty’s AI program bridges classical physiological reasoning
                with modern analytics. Rather than replacing clinical judgment,
                these systems emphasize interpretability, longitudinal safety,
                and reproducible validation across time.
              </p>
            </div>
          </div>

          {/* BLOCK */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />
            <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <h2 className="text-2xl font-serif text-amber-400 mb-6">
                Proprietary Algorithms (IP-Protected)
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Seventeen proprietary machine-learning algorithms (currently
                under patent filing) transform HRV-derived inputs into rough
                mathematical estimates of blood biochemistry and related
                physiological parameters.
              </p>
              <p className="text-gray-400 italic">
                Due to active IP protection, architectural details, datasets,
                and validation reports are shared selectively under NDA-based
                collaboration frameworks.
              </p>
            </div>
          </div>

          {/* BLOCK — GRID */}
          <div className="bg-white/[0.035] backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <h2 className="text-2xl font-serif text-amber-400 mb-10">
              What the AI Is Designed to Enable
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Physiological pattern recognition across long time horizons',
                'Signal-to-state translational estimation layers',
                'Clinician-led decision support (AI as advisor, not authority)',
                'Outcome-driven continuous learning loops',
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-black/30 border border-white/5 hover:border-amber-400/40 hover:bg-black/40 transition-all duration-500"
                >
                  <p className="text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCK */}
          <div className="bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl font-serif text-amber-400 mb-6">
              Where This Is Headed
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A learning health stack aligned with smart-health-city architecture:
              devices → AI translation → protocol automation → clinician dashboards
              → outcomes analytics — supporting prevention, chronic optimisation,
              and integrative end-stage care.
            </p>
          </div>

        </div>

        {/* ====== CTAs ====== */}
        <footer className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]">
            Request NDA-Based Technical Brief
          </button>

          <button className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300">
            Collaborate on Validation & Outcomes
          </button>
        </footer>

      </div>
    </section>
  );
};

export default AIDeepLearning;

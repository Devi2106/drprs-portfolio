{/*import React from 'react';*/}

export default function IntegrativeMedicine() {
  return (
    <section className="relative min-h-screen bg-[#07080b] text-white overflow-hidden">

      {/* ===== ATMOSPHERIC BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-25%] left-[-15%] w-[900px] h-[900px] bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[1000px] h-[1000px] bg-gradient-to-tr from-rose-500/20 via-purple-500/10 to-transparent rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-24">

        {/* ===== HERO ===== */}
        <header className="text-center space-y-8">
          <p className="uppercase tracking-[0.35em] text-xs text-amber-400/80">
            Integrative Medicine
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Converting Experimental Regeneration
            <br />
            into Staged End-Stage Clinical Pathways
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            A disciplined translational framework that converts preclinical
            regenerative science into bedside pathways — governed by staging,
            safety boundaries, measurable endpoints, and ethical oversight.
          </p>
        </header>

        {/* ===== CORE PHILOSOPHY ===== */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />
          <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <p className="text-gray-300 text-lg leading-relaxed">
              Dr. Polisetty’s integrative medicine work is not “mix-and-match” care.
              It is a structured translation process where experimental
              regeneration protocols are converted into staged clinical
              pathways — suitable for end-stage and treatment-resistant disease,
              real-world learning, and formal publication. <span className="text-gray-400">(I-Prism)</span>
            </p>
          </div>
        </div>

        {/* ===== PATIENT CATEGORIES ===== */}
        <div className="bg-white/[0.035] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-10">
            Who These Pathways Are Designed For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Advanced heart failure (EF < 30%, VAD / transplant candidates)',
              'Kidney failure — advanced chronic and end-stage',
              'Liver failure, including decompensated states',
              'Severe neurological injury and complex rehabilitation',
              'Refractory metabolic disease (diabetes, hypertension)',
              'Steroid-refractory allergies and asthma',
              'Dermatologic immune disease (psoriasis, vitiligo)',
              'Autoimmune and inflammatory disorders (Crohn’s, RA, MS, Sjögren’s)',
              'Cancers — supportive integrative pathways under oncology oversight',
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/30 border border-white/5 hover:border-amber-400/40 hover:bg-black/40 transition-all duration-500"
              >
                <p className="text-gray-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== OUTCOMES & NOTE ===== */}
        <div className="space-y-10">

          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <h2 className="text-2xl font-serif text-amber-400 mb-6">
              Clinical Experience & Reported Outcomes
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Publicly reported SGP data describes 28,000+ end-stage patients
              treated. Among those adhering strictly to protocol, more than
              63% became medicine-free, with approximately 95% reporting
              significant quality-of-life improvements. <span className="text-gray-400">(Sai Ganga Panakeia)</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
            <h2 className="text-2xl font-serif text-amber-400 mb-6">
              Severe Hypoxic Encephalopathy — Important Note
            </h2>
            <p className="text-gray-400 italic text-lg leading-relaxed">
              This program includes staged pathways for profound hypoxic-ischemic
              brain injury and coma states. While families or prior records may
              use the term “brain-dead,” clinical framing here follows structured
              safety screening, ethical oversight, and documented outcome tracking.
            </p>
          </div>

        </div>

        {/* ===== CTAs ===== */}
        <footer className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]">
            Explore Clinical Collaboration
          </button>

          <button className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300">
            Request Protocol Overview (Research Use)
          </button>
        </footer>

        {/* ===== SAFETY FOOTER ===== */}
        <p className="text-center text-gray-500 text-sm max-w-3xl mx-auto pt-10">
          This site describes research-led, protocol-based integrative pathways.
          It is not emergency care. Individual outcomes vary. All approaches
          require safety screening, red-flag identification, and coordination
          with standard medical care.
        </p>

      </div>
    </section>
  );
}

import React, { useEffect } from 'react';

export default function RegenerativeMedicine() {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#07080b] text-white overflow-hidden">

      {/* ===== ATMOSPHERIC BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-25%] left-[-20%] w-[900px] h-[900px] bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-[-30%] right-[-15%] w-[1000px] h-[1000px] bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-24">

        {/* ===== HERO ===== */}
        <header className="text-center space-y-8">
          <p className="uppercase tracking-[0.35em] text-xs text-amber-400/80">
            Regenerative Medicine
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Demonstrated Tissue Regeneration
            <br />
            in Preclinical Models
          </h1>

          <p className="text-gray-400 text-lg md:text-xl">
            Heart • Kidney • Liver • Pancreas • Brain
          </p>
        </header>

        {/* ===== CORE PHILOSOPHY ===== */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />
          <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <p className="text-gray-300 text-lg leading-relaxed">
              Dr. Ravishankar Polisetty’s regenerative medicine work follows a
              strict bench-to-bedside discipline: clearly defining biological
              problems, demonstrating regeneration in controlled experimental
              models, validating micro-architecture and functional recovery, and
              translating findings into staged, safety-bounded clinical pathways.
              <span className="text-gray-400"> (I-Prism)</span>
            </p>
          </div>
        </div>

        {/* ===== PRECLINICAL MODELS ===== */}
        <div className="bg-white/[0.035] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-10">
            Preclinical Regeneration Demonstrations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { organ: 'Heart', desc: 'Post-thermocellular injury models' },
              { organ: 'Kidney', desc: 'Partial nephrectomy models (no regeneration after total nephrectomy)' },
              { organ: 'Liver', desc: 'Subtotal hepatectomy models' },
              { organ: 'Pancreas', desc: 'Subtotal pancreatectomy models' },
              { organ: 'Brain', desc: 'Hypoxic encephalopathy / ischemic injury models' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/30 border border-white/5 hover:border-emerald-400/40 hover:bg-black/40 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">
                  {item.organ}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MICRO-ARCHITECTURE ===== */}
        <div className="bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-6">
            Down to the Micro-Architecture
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Emphasis is placed on tissue-level restoration markers including
            structural organization, integrity of tissue planes, and restoration
            patterns consistent with native micro-anatomical architecture — beyond
            gross morphological recovery alone.
          </p>
        </div>

        {/* ===== FUTURE DIRECTION ===== */}
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-6">
            Where This Is Headed
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            A reproducible, evidence-building regeneration framework integrated
            with clinical delivery platforms and institutional collaborations —
            converting regenerative science into operational medicine.
          </p>
        </div>

        {/* ===== CTAs ===== */}
        <footer className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]">
            Request a Scientific Dossier
          </button>

          <button className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300">
            Explore Institutional Collaboration
          </button>
        </footer>

      </div>
    </section>
  );
}

{/*} import React from 'react';*/}

export default function BiomedicalDeviceEngineering() {
  return (
    <section className="relative min-h-screen bg-[#07080b] text-white overflow-hidden">

      {/* ===== ATMOSPHERIC BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-30%] right-[-20%] w-[1000px] h-[1000px] bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-[180px]" />
        <div className="absolute bottom-[-25%] left-[-15%] w-[900px] h-[900px] bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 space-y-24">

        {/* ===== HERO ===== */}
        <header className="text-center space-y-8">
          <p className="uppercase tracking-[0.35em] text-xs text-amber-400/80">
            Biomedical Device Engineering
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Translating Physiological Complexity
            <br />
            into Decision-Grade Personalization
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            Engineering systems that convert high-dimensional physiological
            signals — especially HRV-derived patterns — into clinician-usable,
            longitudinal, and protocol-aligned insights.
          </p>
        </header>

        {/* ===== CORE PHILOSOPHY ===== */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl" />
          <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <p className="text-gray-300 text-lg leading-relaxed">
              Dr. Polisetty’s device engineering work focuses not on collecting
              more data, but on producing decision-grade guidance. These systems
              are designed to support preventive care, chronic disease
              optimisation, and integrative protocol delivery through clinically
              meaningful signal interpretation.
            </p>
          </div>
        </div>

        {/* ===== FLAGSHIP PLATFORMS ===== */}
        <div className="bg-white/[0.035] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-10">
            Flagship Platforms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Docture-Poly™',
                desc: 'A wearable + software system for maintaining homeostasis and delivering advanced integrated health systems.',
                note: '(Sai Ganga Panakeia)',
              },
              {
                title: 'K-Ring',
                desc: 'A wearable concept in the same ecosystem for continuous signal capture and longitudinal profiling.',
              },
              {
                title: 'Associated Devices & Pipelines',
                desc: 'Additional prototypes evolving around sensing, signal processing, and clinical usability.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/30 border border-white/5 hover:border-amber-400/40 hover:bg-black/40 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-amber-300 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.desc}{' '}
                  {item.note && (
                    <span className="text-gray-400">{item.note}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PERSONALIZATION ===== */}
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-10">
            What Personalization Looks Like in Practice
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              'Diet composition and meal timing',
              'Physical fitness and exercise regimens',
              'Breathing exercises and pranayama protocols',
              'Home routines and supportive home remedies',
              'Personalized herbal formulations and supplement strategies (within protocol boundaries)',
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-black/30 border border-white/5 hover:border-cyan-400/40 transition-all duration-500"
              >
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SYSTEM WORKFLOW ===== */}
        <div className="bg-gradient-to-br from-black/40 to-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-6">
            How the System Works (High-Level)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Docture-Poly follows a data-driven workflow that collects
            physiological parameters at high frequency and applies analytics to
            generate individualized outputs aligned with
            Ayurveda-informed frameworks — while maintaining clinical usability
            and interpretability.
          </p>
        </div>

        {/* ===== FUTURE ===== */}
        <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
          <h2 className="text-2xl font-serif text-amber-400 mb-6">
            Where This Is Headed
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            An integrated device-plus-protocol ecosystem scaling toward an
            automated smart health city vision — where measurement,
            personalization, and outcomes tracking become continuous,
            coordinated, and clinically actionable across homes, clinics, and
            community health systems.
          </p>
        </div>

        {/* ===== CTAs ===== */}
        <footer className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold tracking-wide hover:scale-[1.05] transition duration-300 shadow-[0_20px_60px_rgba(255,193,7,0.4)]">
            Request a Demo / Prototype Brief
          </button>

          <button className="px-10 py-4 rounded-full border border-amber-400/60 text-amber-400 hover:bg-amber-400 hover:text-black hover:scale-[1.05] transition duration-300">
            Partner on Device + Clinical Deployment
          </button>
        </footer>

      </div>
    </section>
  );
}

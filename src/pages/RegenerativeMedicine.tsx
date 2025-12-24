import { useEffect, ReactNode } from "react";

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

      {/* LEFT yellow gradient line (changed from top) */}
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
export default function RegenerativeMedicine() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative bg-[#07080b] overflow-hidden">

      {/* ================= YELLOW GRADIENT BANNER ================= */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

        <div className="relative z-10 text-center px-6 max-w-5xl space-y-6">
          <p className="uppercase tracking-[0.4em] text-xs text-black">
            Regenerative Medicine
          </p>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight">
            <span className="text-black">
              Demonstrated Tissue Regeneration
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              in Preclinical Models
            </span>
          </h1>

          <p className="text-black/80 text-lg md:text-xl font-medium">
            Heart • Kidney • Liver • Pancreas • Brain
          </p>
        </div>
      </div>

      {/* ================= YELLOW S-CURVE DIVIDER ================= */}
      <div className="-mt-24 relative z-0">
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

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-32 space-y-24">

        <PremiumCard title="Evidence-Informed">
          Bench models validated through structured experimental and
          translational pathways, emphasizing reproducibility, safety,
          and biological fidelity.
        </PremiumCard>

        <PremiumCard title="Bench-to-Bedside Discipline">
          Dr. Ravishankar Polisetty’s regenerative medicine framework follows a
          rigorous bench-to-bedside approach: defining biological problems,
          demonstrating regeneration in controlled models, validating
          micro-architecture and functional recovery, and translating findings
          into safety-bounded clinical pathways (I-Prism).
        </PremiumCard>

   <div className="space-y-12">
  {/* Yellow line above heading */}
  <div className="h-1 w-24 bg-amber-400 mx-auto rounded"></div>

  <h2 className="text-3xl font-serif text-white text-center">
    Preclinical Regeneration Demonstrations
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { organ: "Heart", desc: "Post-thermocellular injury regeneration models demonstrating myocardial tissue recovery." },
      { organ: "Kidney", desc: "Partial nephrectomy models (no regeneration observed following total nephrectomy)." },
      { organ: "Liver", desc: "Subtotal hepatectomy models validating hepatic structural restoration." },
      { organ: "Pancreas", desc: "Subtotal pancreatectomy models assessing endocrine and exocrine regeneration." },
      { organ: "Brain", desc: "Hypoxic-ischemic injury models evaluating neural tissue recovery." },
    ].map((item, index) => (
      <PremiumCard key={index} title={item.organ}>
        {item.desc}
      </PremiumCard>
    ))}
  </div>
</div>


        <PremiumCard title="Down to the Micro-Architecture">
          Regeneration assessment extends beyond gross morphology, emphasizing
          restoration of native tissue planes, cellular organization,
          micro-structural integrity, and architecture consistent with
          physiological norms.
        </PremiumCard>

        <PremiumCard title="Where This Is Headed">
          A scalable, evidence-building regenerative framework integrated with
          clinical delivery platforms and institutional collaborations —
          converting regenerative science into operational medicine.
        </PremiumCard>

        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-10">
          <button className="px-12 py-4 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 text-black font-semibold tracking-wide hover:scale-105 transition shadow-[0_20px_60px_rgba(255,193,7,0.6)]">
            Request Scientific Dossier
          </button>

          <button className="px-12 py-4 rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-105 transition">
            Institutional Collaboration
          </button>
        </div>

      </div>
    </section>
  );
}

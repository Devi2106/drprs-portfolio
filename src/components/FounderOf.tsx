{/*import { Sparkles, Leaf, Cpu } from 'lucide-react';*/}

export default function FounderOf() {
  return (
    <section
      id="founder"
      className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 
          bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Founder Of
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-600 mx-auto mb-8"></div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
              {/* SGP */}
         <div className="group relative bg-gradient-to-br from-gray-900 to-black 
border border-[#19B5D8]/30 rounded-3xl p-10
transition-all duration-500 hover:-translate-y-2
hover:shadow-[0_0_60px_rgba(25,181,216,0.45)]">

            <img
              src="/SGPlogo.png"
              alt="Novadigm Logo"
              className="h-16 w-auto mb-4 object-contain"
            />

            <h3 className="text-2xl font-bold text-white mb-4">SGP</h3>
            <p className="text-gray-300">
              SGP is a company that developed cutting-edge medical technologies and clinical methodologies to improve the clinical efficacy by integrating best of both the worlds –modern allopathic system of medicine and the ancient Indian wisdom of Ayurveda.</p>
          </div>

       
            {/* SGP Manufacturing */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black 
          border border-amber-500/30 rounded-3xl p-10
          transition-all duration-500 hover:-translate-y-2
          hover:shadow-[0_0_60px_rgba(255,191,36,0.35)]">

            <img
              src="/SGP-Manufacturing-logo.png"
              alt="Novadigm Logo"
              className="h-16 w-auto mb-4 object-contain"
            />

            <h3 className="text-2xl font-bold text-white mb-4">SGP-Manufacturing</h3>
            <p className="text-gray-300">
              Pioneering healthcare all-natural center dedicated to offering Poly Scientific Ayurveda (PSA) treatments, redefining healthcare by merging ancient wisdom with modern innovation to cater the chronic diseases.
            </p>
          </div>

          {/* RESEARCH */}
           <div className="group relative bg-gradient-to-br from-gray-900 to-black 
border border-[#19B5D8]/30 rounded-3xl p-10
transition-all duration-500 hover:-translate-y-2
hover:shadow-[0_0_60px_rgba(25,181,216,0.45)]">

            <img
              src="/SGP-Research-logo.png"
              alt="Novadigm Logo"
              className="h-16 w-auto mb-4 object-contain"
            />

            <h3 className="text-2xl font-bold text-white mb-4">SGP-Research</h3>
            <p className="text-gray-300">
              SGP is a company that developed cutting-edge medical technologies and clinical methodologies to improve the clinical efficacy by integrating best of both the worlds –modern allopathic system of medicine and the ancient Indian wisdom of Ayurveda.</p>
          </div>

          


          {/* I-PRISM */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black 
          border border-blue-500/30 rounded-3xl p-10
          transition-all duration-500 hover:-translate-y-2
          hover:shadow-[0_0_60px_rgba(59,130,246,0.35)]">

            <img
              src="/IPRISMlogo.png"
              alt="I-PRISM Logo"
              className="h-20 w-auto mb-4 object-contain"
            />

            <h3 className="text-2xl font-bold text-white mb-4">I-PRISM</h3>
            <p className="text-gray-300">
              In a world where quality healthcare is often a luxury and modern medicine, while beneficial, can bring a host of side effects and temporary relief, we stand at a crossroads and bringing in institutionalized Poly Scientific Ayurveda.
            </p>
          </div>

             {/* NOVADIGM */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black 
          border border-amber-500/30 rounded-3xl p-10
          transition-all duration-500 hover:-translate-y-2
          hover:shadow-[0_0_60px_rgba(255,191,36,0.35)]">

            <img
              src="/Novadigm-logo.png"
              alt="Novadigm Logo"
              className="h-16 w-auto mb-4 object-contain"
            />

            <h3 className="text-2xl font-bold text-white mb-4">Novadigm</h3>
            <p className="text-gray-300">
              Pioneering healthcare all-natural center dedicated to offering Poly Scientific Ayurveda (PSA) treatments, redefining healthcare by merging ancient wisdom with modern innovation to cater the chronic diseases.
            </p>
          </div>

          {/* DOCTURE-POLY */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-black 
          border border-purple-500/30 rounded-3xl p-10
          transition-all duration-500 hover:-translate-y-2
          hover:shadow-[0_0_60px_rgba(168,85,247,0.35)]">

            <img
              src="/Docture-poly-logo.png"
              alt="Docture-Poly Logo"
              className="h-16 w-auto mb-4 object-contain"
            />

            <h3 className="text-2xl font-bold text-white mb-4">Docture-Poly</h3>
            <p className="text-gray-300">
              Docture-Poly is an AI and ML based IoT device that effectively gives your VPK42Fingerprint (aka Metabolic Fingerprint), and offers personalized, smart, automated, and intelligent dietary, fitness, and herbal regimens; also provides a non-invasive estimate of blood biochemistry.
            </p>
          </div>

 
        </div>
      </div>
    </section>
  );
}

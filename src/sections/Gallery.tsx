import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionFooter from "./SectionFooter";

const Gallery: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Gallery
        </motion.h2>

        <p className="text-center text-sm text-slate-600 mb-10">Glimpse of conferences, meetings, and experimental campaigns.</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Conferences</h3>
            <details className="group border border-slate-200 rounded-xl">
              <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
                <span>DAE-SNP 2025 (Oral Presentation)</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { id: "dae2025-oral-1", src: "oral.jpg", alt: "Oral presentation DAE-SNP 2025 photo 1", caption: "Presenting at DAE-SNP 2025, IIT-Roorkee" },
                    { id: "dae2025-oral-2", src: "DAE_24.jpg", alt: "Oral presentation DAE-SNP 2025 photo 2", caption: "DAE-SNP 2025" },
                    { id: "dae2025-oral-4", src: "DAE_24_vol.jpg", alt: "Oral presentation DAE-SNP 2025 photo 4", caption: "Registration kit distribution (volunteering) DAE-SNP 2025" },
                    { id: "dae2025-oral-3", src: "DAE_24_g.jpg", alt: "Oral presentation DAE-SNP 2025 photo 3", caption: "Group Photo at DAE-SNP 2025" },
                  ].map((img) => (
                    <motion.div key={img.id} whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-xl">
                      <img src={img.src} alt={img.alt} className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105" />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">{img.caption}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </details>

            {/* DAE-SNP 2023 poster presentation */}
            <details className="group border border-slate-200 rounded-xl">
              <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
                <span>DAE-SNP 2023 (IIT-Indore) — Poster Presentation </span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { id: "dae2024-poster-1", src: "DAE_23.jpg", alt: "Poster presentation DAE-SNP 2024", caption: "Poster session, IIT Indore" },
                  ].map((img) => (
                    <motion.div key={img.id} whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-xl">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">
                        {img.caption}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </details>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Meetings</h3>
            <details className="group border border-slate-200 rounded-xl">
              <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
                <span>FOOT Collaboration Meeting — May 2025</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { id: "foot-meeting-1", src: "FOOT_28_25.jpg", alt: "FOOT collaboration meeting May 2025", caption: "FOOT collaboration meeting, May 2025" },
                    { id: "foot-meeting-2", src: "FOOT_28_25_1.jpg", alt: "FOOT collaboration meeting May 2025 2", caption: "Riccione, Italy" },
                  ].map((img) => (
                    <motion.div key={img.id} whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-xl">
                      <img src={img.src} alt={img.alt} className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105" />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">{img.caption}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </details>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Experiments</h3>
            <details className="group border border-slate-200 rounded-xl">
              <summary className="cursor-pointer px-6 py-4 font-medium text-gray-700 flex justify-between items-center">
                <span>INGA Campaign — VECC Kolkata</span>
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { id: "i1", src: "bharat_vecc.jpg", alt: "INGA campaign VECC Kolkata", caption: "During INGA campaign" },
                    { id: "i2", src: "vecc_2.jpg", alt: "INGA campaign", caption: "INGA campaign photos" },
                  ].map((img) => (
                    <motion.div key={img.id} whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-xl">
                      <img src={img.src} alt={img.alt} className="w-full h-56 object-cover rounded-xl shadow-sm transition-transform duration-200 hover:scale-105" />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-md">{img.caption}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
      <SectionFooter sectionId="Gallery" onNavigate={onNavigate} />
    </div>
  );
};

export default Gallery;

import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionFooter from "./SectionFooter";

const projects = [
  {
    institution: "INFN Torino · FOOT Collaboration",
    period: "Current research",
    title: "Measuring fragmentation for better particle therapy",
    question: "How do ion beams produce secondary fragments when they interact with tissue-equivalent targets?",
    contribution: "I work on BGO calorimeter calibration and response characterization, and contribute to differential cross-section analysis.",
    methods: "BGO calorimetry · detector response · neutron detection · cross-section analysis",
    outcome: "This work supports more precise treatment planning in hadron therapy and improved radiation-risk models for space missions.",
    images: [
      { src: "calo_imag.jpg", alt: "BGO calorimeter setup" },
      { src: "response_calo.png", alt: "BGO calorimeter response" },
    ],
    link: "https://iopscience.iop.org/article/10.1088/1748-0221/20/03/P03021",
    linkLabel: "Read related detector paper",
  },
  {
    institution: "Vi-Hi Collaboration",
    period: "Current Collaborative research",
    title: "Micro-computed tomography for biological tissue",
    question: "How can phase-contrast X-ray imaging and reconstruction improve three-dimensional tissue studies?",
    contribution: "I contribute to work combining high-resolution micro-CT, phase contrast, and computational reconstruction methods.",
    methods: "Micro-CT · phase-contrast X-ray imaging · computational reconstruction",
    outcome: "The collaboration explores improved imaging workflows for biological samples.",
    images: [{ src: "Vi-HI_setup.jpg", alt: "Vi-Hi micro-computed tomography setup" }],
  },
  {
    institution: "IIT-Roorkee",
    period: "2024–2025",
    title: "Fusion reaction dynamics in 11B + Zr systems",
    question: "What residual radionuclides are produced in boron-induced reactions on zirconium?",
    contribution: "I used off-line gamma-ray measurements to determine residual production cross sections and study the reaction dynamics.",
    methods: "Off-line gamma spectroscopy · reaction cross sections · radionuclide analysis",
    outcome: "The analysis was presented at the DAE Symposium on Nuclear Physics 68 (2025).",
    images: [
      { src: "exp_setup.png", alt: "Fusion experiment setup" },
      { src: "oral.jpg", alt: "Research presentation at DAE Symposium" },
    ],
    link: "https://link.springer.com/article/10.1140/epjp/s13360-025-07171-6",
    linkLabel: "View Published Article",
  },
  {
    institution: "Visva-Bharati University",
    period: "2022–2024",
    title: "Nuclear structure around the A≈70 mass region",
    question: "What can gamma-ray spectra reveal about the structure and lifetimes of 66Zn and 66Ga?",
    contribution: "I carried out spectroscopy and lifetime measurements using the INGA detector array.",
    methods: "INGA HPGe array · gamma-ray spectroscopy · lifetime measurements",
    outcome: "The work was presented at the DAE Symposium on Nuclear Physics 67 (2024).",
    images: [
      { src: "bharat_vecc.jpg", alt: "INGA campaign at VECC" },
      { src: "69Ge.png", alt: "Nuclear level scheme" },
    ],
    link: "https://inspirehep.net/literature/2764532",
    linkLabel: "View conference paper",
  },

];

const Research: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => (
  <div className="flex h-full w-full flex-col">
    <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Research portfolio</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">From nuclear reactions to real-world applications.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">My work combines nuclear physics, detector development, and quantitative analysis to understand processes that matter in medicine, biology, and space science.</p>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 border-y border-slate-300 sm:grid-cols-4">
        {["Medical physics", "Detector systems", "Nuclear reactions", "Gamma spectroscopy"].map((theme) => <div key={theme} className="border-slate-300 px-3 py-5 text-center text-sm font-semibold text-slate-700 first:border-r sm:border-r sm:last:border-r-0">{theme}</div>)}
      </div>

      <div className="mt-14 space-y-14">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }} className="border-t-2 border-slate-300 pt-7">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-700">{project.institution}</p>
                <p className="mt-2 text-sm text-slate-500">{project.period}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{project.title}</h3>
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 hover:text-cyan-900">{project.linkLabel} <ExternalLink size={15} /></a>}
              </div>
              <div className="grid gap-6 text-sm leading-6 text-slate-600 sm:grid-cols-2">
                <div><p className="font-semibold text-slate-900">The question</p><p className="mt-1">{project.question}</p></div>
                <div><p className="font-semibold text-slate-900">My contribution</p><p className="mt-1">{project.contribution}</p></div>
                <div><p className="font-semibold text-slate-900">Methods</p><p className="mt-1">{project.methods}</p></div>
                <div><p className="font-semibold text-slate-900">Outcome</p><p className="mt-1">{project.outcome}</p></div>
              </div>
            </div>
            <div className={`mt-8 grid gap-4 ${project.images.length > 1 ? "sm:grid-cols-2" : "sm:max-w-md"}`}>
              {project.images.map((image) => <figure key={image.src} className="overflow-hidden border border-slate-300 bg-white/40"><img src={image.src} alt={image.alt} className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105" /></figure>)}
            </div>
            {index === 0 && <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Featured current project</p>}
          </motion.article>
        ))}
      </div>
    </div>
    <SectionFooter sectionId="Research" onNavigate={onNavigate} />
  </div>
);

export default Research;

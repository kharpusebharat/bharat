import React from "react";
import { motion } from "framer-motion";
import SectionFooter from "./SectionFooter";

const About: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const achievements = [
    { title: "MAECI Grande (2024)", description: "Grant for the project 'Measuring Oxygen Fragmentation at GSI For Improved Ion Therapy Strategies'", logo: "MAECI.png" },
    { title: "MP-SET (2024)", description: "Qualified Madhya Pradesh State Eligibility Test, qualification for Assistant Professor exam.", logo: "MPSET.png" },
    { title: "M-SET (2023)", description: "Qualified Maharashtra State Eligibility Test, qualification for Assistant Professor exam.", logo: "MHSET.jpeg" },
    { title: "GATE (2022 & 2023)", description: "Qualified GATE conducted by IIT.", logo: "gate-logo.jpg" },
    { title: "IIT-JAM (2019)", description: "Qualified the Joint Admission Test for Master of Science.", logo: "JAM.jpeg" },
    { title: "NGPE (2019)", description: "Among the 1% state topper in the National Graduate Physics Examination conducted by IAPT.", logo: "NGPE.png" },
    { title: "NMMS (2012)", description: "National Means-cum-Merit Scholarship, recognition of outstanding academic performance in secondary school.", logo: "NMMS.jpeg" },
  ];

  const education = [
    { period: "Apr-2025 – Present", degree: "Post Graduate Grant", place: "INFN-Torino, Italy" },
    { period: "Jan-2024 – Mar-2025", degree: "Junior Research Fellow", place: "IIT-Roorkee, India" },
    { period: "Sep-2022 – Jan-2024", degree: "Junior Research Fellow", place: "Visva-Bharati, Santiniketan, India" },
    { period: "2019 – 2021", degree: "MSc (Physics)", place: "Indian Institute of Engineering Science and Technology, Shibpur, WB, India" },
    { period: "2016 – 2019", degree: "BSc (PCM)", place: "Govt. Nirbhaya Singh Patel Science College, Indore (affiliated to DAVV University, Indore)" },
  ];

  const experience = [
    {
      title: "Junior Research Fellow (Jan/2024 - Mar/2025)",
      detail: "Study of the fusion reaction dynamics using 11B projectile on Zr target. Supervisor: Dr. Moumita Maiti, IIT-Roorkee, UK",
    },
    {
      title: "Junior Research Fellow (Sep/2022 - Jan/2024)",
      detail: "Nuclear structure study at A~70 mass region using gamma-ray spectroscopy. Supervisor: Dr. Budhhadev Mukherjee, Visva-Bharati, Santiniketan, WB",
    },
    {
      title: "Master Thesis (Jan/2020 - Mar/2021)",
      detail: "Nuclear structure study using Shell Model Calculation. Supervisor: Dr. Sukhendu Sekhar Sarkar, IIEST-Shibpur, WB",
    },
  ];

  const skills = [
    {
      number: "01",
      title: "Fragmentation Studies",
      context: "FOOT Collaboration · Active",
      accent: "bg-cyan-600",
      details: [
        ["Instruments", "FOOT experiment, neutron detectors"],
        ["Analysis Tools", "CERN-ROOT, Python"],
        ["Simulation", "Monte Carlo simulation using GEANT4"],
      ],
    },
    {
      number: "02",
      title: "Phase-Contrast Imaging",
      context: "Vi-Hi Collaboration · Active",
      accent: "bg-rose-500",
      details: [
        ["Instruments", "Interference grating setup"],
        ["Analysis Tools", "Custom analysis package in Julia"],
      ],
    },
    {
      number: "03",
      title: "Nuclear Reactions",
      context: "Gamma-ray spectroscopy and reaction dynamics",
      accent: "bg-amber-500",
      details: [
        ["Instruments", "Off-beam gamma-ray spectroscopy at TIFR"],
        ["Analysis Tools", "GENIEE-2K for peak fitting"],
        ["Theoretical Models", "TALYS, EMPIRE, PACE4"],
      ],
    },
    {
      number: "04",
      title: "Nuclear Structure",
      context: "Gamma-ray spectroscopy and shell-model studies",
      accent: "bg-emerald-600",
      details: [
        ["Instruments", "INGA HPGe detector array at VECC"],
        ["Analysis Tools", "INGASORT, RADWEAR, TV"],
        ["Theoretical Models", "NUSHELLX, KSHELL"],
      ],
    },
    
  ];

  return (
    <div className="w-full flex flex-col bg-[#f7f8f5]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col gap-12 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="w-full max-w-[62rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">The person behind the work</p>
            <h2 className="mt-3 max-w-[42rem] text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">A physicist building a practical path from nuclei to patients.</h2>
            <p className="mt-6 max-w-[52rem] text-base leading-8 text-slate-700 sm:text-lg">
              I'm passionate about applying nuclear physics to medical challenges, particularly in radiation therapy and space radioprotection. At INFN Torino, I contribute to the FOOT experiment, focusing on BGO calorimeter response and neutron detection techniques crucial for understanding secondary fragments from therapeutic beams.
            </p>
            <p className="mt-5 max-w-[52rem] text-base leading-8 text-slate-700 sm:text-lg">
              Previously, I worked on gamma-ray spectroscopy and fusion–evaporation studies, gaining hands-on experience with gamma radiation and detector systems.
            </p>
          </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold">Education & experience</h3>
          <div className="relative ml-2 border-l-2 border-cyan-200 pl-7">
            {[...education.map((item) => ({ period: item.period, title: item.degree, place: item.place }))].map((item, index) => (
              <motion.div key={`${item.title}-${index}`} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mb-7 last:mb-0">
                <span className="absolute -left-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#f7f8f5] bg-cyan-500" />
                <p className="text-sm font-semibold text-cyan-700">{item.period}</p>
                <h4 className="mt-1 text-lg font-semibold">{item.title}</h4>
                <p className="mt-1 leading-6 text-slate-600">{item.place}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-3xl font-bold">Selected qualifications</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((item) => <div key={item.title} className="flex items-center gap-4 border-b border-slate-200 py-3"><img src={item.logo} alt="" className="h-10 w-10 object-contain" /><div><h4 className="font-semibold">{item.title}</h4><p className="text-sm text-slate-600">{item.description}</p></div></div>)}
          </div>
        </div>

        <div>
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Current to foundational</p>
              <h3 className="mt-2 text-3xl font-bold">Skills & Expertise</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600">Research methods, instruments, and computational tools developed across each stage of the work.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm"
              >
                <div className={`absolute inset-y-0 left-0 w-1 ${skill.accent}`} />
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-semibold text-slate-400">{skill.number}</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xl font-bold text-slate-900">{skill.title}</h4>
                    <p className="mt-1 text-sm text-slate-500">{skill.context}</p>
                    <dl className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                      {skill.details.map(([label, value]) => (
                        <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 text-sm leading-6">
                          <dt className="font-semibold text-slate-700">{label}</dt>
                          <dd className="text-slate-600">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
      <SectionFooter sectionId="About" onNavigate={onNavigate} />
    </div>
  );
};

export default About;

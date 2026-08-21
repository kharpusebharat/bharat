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

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col gap-16 text-gray-900 px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} src="bharat_imag.jpg" alt="Bharat portrait" className="w-48 h-48 rounded-full object-cover shadow-lg" />
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-4 text-lg">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p>
              I'm passionate about applying nuclear physics to medical challenges, particularly in radiation therapy and space radioprotection. At INFN Torino, I contribute to the FOOT experiment, focusing on BGO calorimeter response and neutron detection techniques crucial for understanding secondary fragments from therapeutic beams.
            </p>
            <p>
              Previously, I worked on gamma-ray spectroscopy and fusion–evaporation studies, gaining hands-on experience with gamma radiation and detector systems.
            </p>
          </motion.div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Scholastic Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-gray-100 rounded-xl p-4 shadow flex items-start gap-4">
                <img src={item.logo} alt={`${item.title} logo`} className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Education</h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="border-l-4 border-gray-300 pl-4">
                <p className="text-sm text-gray-500">{edu.period}</p>
                <h4 className="font-semibold text-xl">{edu.degree}</h4>
                <p>{edu.place}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gray-100 p-4 rounded-xl shadow">
                <h4 className="font-semibold text-xl mb-1">{exp.title}</h4>
                <p>{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Instruments:</strong> INGA (HPGe detector array), SCA, MCA</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Software:</strong> NUSHELLX, KSHELL</li>
              <li><strong>Analysis Tools:</strong> CERN-ROOT, Python, GENIEE-2K, RADWARE, INGASHORT</li>
            </ul>
          </div>
          {/* animated bars */}
          <div className="mt-8 space-y-4">
            {[
              { label: "C++", pct: 0.9 },
              { label: "Python", pct: 0.8 },
              { label: "ROOT", pct: 0.7 },
            ].map((skill) => (
              <motion.div
                key={skill.label}
                className="w-full bg-gray-200 rounded-full h-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: skill.pct }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                style={{ transformOrigin: "left" }}
              >
                <span className="sr-only">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SectionFooter sectionId="About" onNavigate={onNavigate} />
    </div>
  );
};

export default About;

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, FileText, Github, File, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Portfolio site for Bharat Kharpuse – Experimental Nuclear Physicist.
 * Sections: Hero, About, Research, Publications, Contact.
 * TailwindCSS for styling, Framer Motion for subtle animations, lucide-react icons.
 * Smooth scroll behaviour and active‑link highlighting handled with small helper hooks.
 */
export default function Portfolio() {
  // Highlight nav links on scroll
  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 96; // 96px offset for nav height
      sections.forEach((sec) => {
        const link = document.querySelector(`a[href="#${sec.id}"]`);
        if (!link) return;
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          link.classList.add("text-sky-500");
        } else {
          link.classList.remove("text-sky-500");
        }
      });
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/70 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <span className="text-xl font-bold tracking-tight">Bharat&nbsp;Kharpuse</span>
          <ul className="flex gap-6 text-sm font-medium">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "research", label: "Research" },
              { id: "publications", label: "Publications" },
              { id: "contact", label: "Contact" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-sky-500">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Bharat Kharpuse
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Experimental Nuclear Physicist | Data Analyst | Developer
          </p>

          <motion.div
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button className="px-6 py-3 text-lg" variant="default">
              <ArrowRight className="mr-2 h-5 w-5" /> View Projects
            </Button>
            <Button className="px-6 py-3 text-lg" variant="outline">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            src="bharat_imag.jpg"
            alt="Bharat portrait"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-lg"
          >
            <h2 className="text-2xl font-semibold">About&nbsp;Me</h2>
            <p>
              I am passionate about unraveling the intricate structure of atomic nuclei and advancing detector technologies. My research spans gamma‑ray spectroscopy, fusion‑evaporation reactions, and shell‑model calculations.
            </p>
            <p>
              Currently, I contribute to the <strong>FOOT</strong> experiment at INFN&nbsp;Torino, focusing on BGO calorimeter response and neutron detection techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-8 text-center"
          >
            Research&nbsp;Interests
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            {[
              ["Nuclear Structure", "Investigating the arrangement and interaction of nucleons within exotic nuclei using high‑resolution HPGe arrays."],
              ["Gamma‑ray Spectroscopy", "Extracting level schemes and transition rates through in‑beam and offline measurement techniques."],
              ["Fusion‑Evaporation Reactions", "Studying reaction dynamics and residue production to inform radio‑nuclide applications."],
              ["Shell Model", "Performing large‑scale calculations (NuShellX, KSHELL) to interpret experimental observables."]
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                className="p-6 bg-white rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold mb-8 text-center"
          >
            Selected&nbsp;Publications
          </motion.h2>
          <ol className="space-y-6 list-decimal list-inside text-slate-700">
            {[
              {
                title: "In‑beam γ‑ray spectroscopy of 69Ge",
                link: "https://inspirehep.net/files/f4641f4fd6aeb3f8e24a72537413a0c5",
              },
              {
                title: "Yield distribution of fusion‑evaporation reaction 28Si + 48Ti",
                link: "https://inspirehep.net/files/7ea5acd798e644d724b427da46ae0ead",
              },
              {
                title: "Coexisting Features in 68Zn",
                link: "https://inspirehep.net/files/c187de064ddf8cd540b7c80dae7f613e",
              },
              {
                title: "Low‑lying level sequences in 76As",
                link: "https://inspirehep.net/files/c20ac04331f57b46e0c9ccd001f724b2",
              },
            ].map(({ title, link }) => (
              <motion.li
                key={title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-sky-600 underline">
                  {title}
                </a>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-xl mx-auto px-6 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold"
          >
            Contact&nbsp;Me
          </motion.h2>
          <p className="text-lg text-slate-600">
            I’m open to collaboration and discussion – feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 text-slate-700">
            <a href="mailto:bharatkharpuse@gmail.com" className="hover:text-sky-600">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/bharat-pawar-369728161/" target="_blank" rel="noreferrer" className="hover:text-sky-600">
              <Linkedin size={28} />
            </a>
            <a href="https://github.com/BharatKharpuse" target="_blank" rel="noreferrer" className="hover:text-sky-600">
              <Github size={28} />
            </a>
            <a href="Bharat_CVU.pdf" target="_blank" rel="noreferrer" className="hover:text-sky-600 flex items-center">
              <File size={28} />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-slate-500 bg-white">
        © {new Date().getFullYear()} Bharat Kharpuse – Built with React & TailwindCSS
      </footer>
    </main>
  );
}

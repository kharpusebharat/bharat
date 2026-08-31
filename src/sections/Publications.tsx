import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionFooter from "./SectionFooter";

const Publications: React.FC<{ onNavigate?: (id: string) => void }> = ({ onNavigate }) => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"All" | "Articles" | "Conference Papers">("All");
  const articles = [
    {
      authors: "<strong>Bharat Kharpuse</strong>, Himanshu Sharma and Moumita Maiti",
      title: "Cross section measurement of residues from 11B reactions on Zr: Production of 97Ru",
      link: "https://link.springer.com/article/10.1140/epjp/s13360-025-07171-6",
      journal: "European Physical Journal Plus 140 (2025) 1231",
    },
    {
      authors: "A. Trigilio, L. Sabbatini, A. Alexandrov, B. Alpat, G. Ambrosi, S. Argirò, <strong>Bharat Kharpuse</strong>, ...",
      title: "Characterization of a permanent magnetic dipolar system for the FOOT experiment",
      link: "https://iopscience.iop.org/article/10.1088/1748-0221/20/09/T09010",
      journal: "Journal of Instrumentation 20 (09), T09010 (2025)",
    },
  ];

  const conference = [
    {
      authors: "<strong>Bharat Kharpuse</strong> and Moumita Maiti",
      title: "Analysis of residual cross section from 11B-induced reaction on Zr",
      link: "https://inspirehep.net/literature/2877428",
      journal: "DAE Symp. Nucl. Phys. 68 (2025) 399–400",
    },
    {
      authors: "Suchorita Paul, S. Bhattacharyya et al.",
      title: "Observation of the rotational bands in 123Te",
      link: "https://inspirehep.net/literature/2877432",
      journal: "DAE Symp. Nucl. Phys. 68 (2025) 401–402",
    },
    {
      authors: "<strong>Bharat Kharpuse</strong> et al.",
      title: "In-beam γ-ray spectroscopy of 69Ge",
      link: "https://inspirehep.net/files/f4641f4fd6aeb3f8e24a72537413a0c5",
      journal: "DAE Symp. Nucl. Phys. 67 (2024) 99–100",
    },
    {
      authors: "Sramana Biswas, <strong>Bharat Kharpuse</strong> et al.",
      title: "Yield distribution of fusion evaporation reaction 28Si + 48Ti",
      link: "https://inspirehep.net/files/7ea5acd798e644d724b427da46ae0ead",
      journal: "DAE Symp. Nucl. Phys. 67 (2024) 201–202",
    },
    {
      authors: "A. Basak, <strong>Bharat Kharpuse</strong> et al.",
      title: "Coexisting Features in 68Zn",
      link: "https://inspirehep.net/files/c187de064ddf8cd540b7c80dae7f613e",
      journal: "DAE Symp. Nucl. Phys. 66 (2023) 121–122",
    },
    {
      authors: "A.K. Mondal, <strong>Bharat Kharpuse</strong> et al.",
      title: "Low-lying level sequences in 76As",
      link: "https://inspirehep.net/files/c20ac04331f57b46e0c9ccd001f724b2",
      journal: "DAE Symp. Nucl. Phys. 65 (2022) 77–78",
    },
  ];

  const filteredGroups = useMemo(() => {
    const matches = (item: { authors: string; title: string; journal: string }) => {
      const text = `${item.authors} ${item.title} ${item.journal}`.toLowerCase();
      return text.includes(query.toLowerCase());
    };
    return {
      articles: type !== "Conference Papers" ? articles.filter(matches) : [],
      conference: type !== "Articles" ? conference.filter(matches) : [],
    };
  }, [query, type]);


  return (
    <div className="w-full h-full flex flex-col">
      <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-20 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl font-semibold mb-8 text-center text-gray-900">
          Publications
        </motion.h2>

        <div className="mb-10 grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="publication-search">Search publications</label>
          <input id="publication-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search title, author, or journal" className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100" />
          <label className="sr-only" htmlFor="publication-type">Filter publications by type</label>
          <select id="publication-type" value={type} onChange={(event) => setType(event.target.value as typeof type)} className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100">
            <option>All</option><option>Articles</option><option>Conference Papers</option>
          </select>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
          <h3 className="mb-6 text-2xl font-medium text-gray-800">Articles <span className="text-sm font-normal text-slate-500">({filteredGroups.articles.length})</span></h3>
          <ol className="list-decimal list-outside pl-6 space-y-6 text-slate-700">
            {filteredGroups.articles.map(({ authors, title, link, journal }, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-sky-600" dangerouslySetInnerHTML={{ __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>` }} />
                <p className="text-sm text-slate-500 italic mt-1">{journal}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="mb-6 text-2xl font-medium text-gray-800">Conference Papers <span className="text-sm font-normal text-slate-500">({filteredGroups.conference.length})</span></h3>
          <ol className="list-decimal list-outside pl-6 space-y-6 text-slate-700">
            {filteredGroups.conference.map(({ authors, title, link, journal }, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noreferrer" className="hover:text-sky-600" dangerouslySetInnerHTML={{ __html: `${authors}, <span class='text-blue-700 italic'>"${title}"</span>` }} />
                <p className="text-sm text-slate-500 italic mt-1">{journal}</p>
              </li>
            ))}
          </ol>
          {filteredGroups.articles.length === 0 && filteredGroups.conference.length === 0 && <p className="mt-8 text-slate-500">No publications match your search.</p>}
        </motion.div>
      </div>
      <SectionFooter sectionId="Publications" onNavigate={onNavigate} />
    </div>
  );
};

export default Publications;

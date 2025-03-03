import React, { useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { useLocation } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

// ScrollReveal component for triggering animations on scroll
const ScrollReveal = ({ children, delay = 0.2, duration = 0.8, threshold = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 50,
          transition: {
            duration: duration * 0.5, // Faster reset animation
            ease: [0.22, 1, 0.36, 1]
          }
        },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: duration, 
            delay: delay,
            ease: [0.22, 1, 0.36, 1] // Custom easing for Apple-like feel
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Section title component with animation
const SectionTitle = ({ title }) => (
  <ScrollReveal>
    <div className="mt-16 mb-16 flex justify-center flex-col items-center">
      <h1 className="text-8xl text-white">{title}</h1>
      <div className="w-24 h-1 bg-[#e41937] mt-4"></div>
    </div>
  </ScrollReveal>
);

const Information = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor links with smooth scrolling
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      const element = document.getElementById(id);
      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-24 flex flex-col min-h-screen">
      {/* Information Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 mb-16 flex justify-center flex-col items-center"
      >
        <h1 className="text-8xl text-white">Information.</h1>
        <div className="w-24 h-1 bg-[#e41937] mt-4"></div>
      </motion.div>
      
      <ScrollReveal>
        <div className="flex h-1/2 border-b border-white">
          <div className="w-2/5 border-r border-white p-4">
            <p className="leading-relaxed text-gray-200">
              I am a second-year undergraduate student in the <a href="https://cms.caltech.edu/" className="underline decoration-white">Department of Computing + Mathematical Sciences</a> at the <a href="https://www.caltech.edu/" className="underline decoration-white">California Institute of Technology</a>. My research interests are in automated machine learning, language models, dimensionality reduction, and scientific applications of AI. I also enjoy statistical manifolds, computational physics, and theoretical astrophysics.
            </p>
            <p className="leading-relaxed text-gray-200 mt-4">
              I also dabbled in some pre-college competitions, most notably the USA Team Selection Tests / Camps for <a href="https://en.wikipedia.org/wiki/International_Science_Olympiad" className="underline decoration-white">International Science Olympiads</a>, the Regeneron (prev. Intel, Westinghouse) <a href="https://en.wikipedia.org/wiki/Regeneron_Science_Talent_Search" className="underline decoration-white">Science Talent Search</a>, the <a href="https://en.wikipedia.org/wiki/National_Science_Bowl" className="underline decoration-white">National Science Bowl</a> National Finals, and the <a href="https://en.wikipedia.org/wiki/Science_Olympiad" className="underline decoration-white">Science Olympiad</a> National Tournament.
            </p>
            <p className="leading-relaxed text-gray-200 mt-4 italic">
              One shall direct their correspondence to [first initial] + h + [last] + [at] + caltech + [dot] + edu.
            </p>
          </div>
          <div className="w-3/5 p-4 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img 
                src="/images/nemophila-bg.jpg"
                alt="Nemophila flowers background"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={0.3}>
        <div className="flex h-1/2 border-b border-white">
          <div className="w-3/5 border-r border-white p-4 flex items-center justify-center">
            <div className="relative w-full h-full">
              <img 
                src="/images/sky.jpg"
                alt="Sky background"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-2/5 p-4">
            <div className="border-l-4 border-white pl-4">
              <p className="leading-relaxed text-gray-200 italic">
                Imagine life as a black box—offering no explicit purpose or inherent design from the outside, yet governed by an internal logic that transforms inputs into inevitable outcomes. Even so, its very existence bestows radical agency over how you choose to engage with it. It is a void—not barren, not desolate, but profound in its refusal to impose meaning, leaving you the sovereign architect of significance, or the liberator who discards it altogether. Within this, you may discover smaller boxes inside—your own constructions—values, aspirations, emotions. You can open and rearrange them or relinquish them at will, knowing they have never been, nor will they ever be, part of the black box's original essence. The black box is the utmost gift of gifts—one that is most beautiful because it is inherently unadorned.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
      
      <div className="flex flex-col max-w-5xl mx-auto">
        {/* Research Section Title */}
        <SectionTitle title="Research." />
        
        {/* CERN CMS/Fermilab Section */}
        <ScrollReveal threshold={0.2}>
          <div className="mb-16" id="cern-cms-fermilab">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[35vh] overflow-hidden rounded-lg"
            >
              <img 
                src="/images/13.6.jpg"
                alt="High-energy particle collision visualization from LHC experiments"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <h2 className="text-4xl text-white">Foundation models for proton-proton collisions at <InlineMath math="\sqrt{s}"/> = 13.6 TeV</h2>
              <p className="mt-2 text-[#e41937] italic">
                <a href="https://united-states.cern/" className="text-[#e41937] italic underline decoration-[#e41937]">united-states.cern</a> • <a href="https://cms.fnal.gov/" className="text-[#e41937] italic underline decoration-[#e41937]">cms.fnal.gov</a>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 prose prose-lg dark:prose-invert"
            >
              <h3 className="text-2xl mb-4 text-white">Research Supervisors</h3>
              <ul className="list-none mt-2 text-gray-200 mb-4">
                <li className="mb-4">
                  <a href="https://scholar.google.com/citations?user=Hi8Bc4QAAAAJ" className="underline decoration-white text-xl">Raghav Kansal</a>
                  <br />
                  <span className="italic">AI/Schmidt Postdoctoral Scholar Research Associate in Physics, California Institute of Technology and Fermi National Accelerator Laboratory</span>
                </li>
                <li className="mb-4">
                  <a href="https://scholar.google.com/citations?user=ZTqZD80AAAAJ" className="underline decoration-white text-xl">Jennifer Ngadiuba</a>
                  <br />
                  <span className="italic">Wilson Fellow, Fermi National Accelerator Laboratory; Postdoctoral Researcher, California Institute of Technology</span>
                </li>
                <li className="mb-4">
                  <a href="https://inspirehep.net/authors/987865" className="underline decoration-white text-xl">Maria Spiropulu</a>
                  <br />
                  <span className="italic">Shang-Yi Ch'en Professor of Physics, California Institute of Technology</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </ScrollReveal>
        
        {/* Tensorlab Section */}
        <ScrollReveal threshold={0.2}>
          <div className="mb-16" id="tensorlab">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[35vh] overflow-hidden rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center"
            >
              <img 
                src="/images/vorticity_evolution.gif"
                alt="Animated visualization of vorticity evolution in fluid dynamics simulation"
                className="w-full max-h-full object-scale-down"
                style={{ maxHeight: "90%" }}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <h2 className="text-4xl text-white">Scale-Consistent Learning with Scale-Informed Neural Operators</h2>
              <p className="mt-2 text-[#e41937] italic">
                <a href="http://tensorlab.cms.caltech.edu/users/anima/" className="text-[#e41937] italic underline decoration-[#e41937]">tensorlab.cms.caltech.edu</a>
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 prose prose-lg dark:prose-invert"
            >
              <h3 className="text-2xl mb-4 text-white">Research Supervisors</h3>
              <ul className="list-none mt-2 text-gray-200 mb-4">
                <li className="mb-4">
                  <a href="https://scholar.google.com/citations?user=RdeqpiAAAAAJ" className="underline decoration-white text-xl">Zongyi Li</a>
                  <br />
                  <span className="italic">PhD, Computing + Mathematical Sciences, California Institute of Technology</span>
                </li>
                <li className="mb-4">
                  <a href="https://scholar.google.com/citations?user=bEcLezcAAAAJ" className="underline decoration-white text-xl">Anima Anandkumar</a>
                  <br />
                  <span className="italic">Bren Professor of Computing, California Institute of Technology</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </ScrollReveal>
        
        {/* Tornadogenesis Section */}
        <ScrollReveal threshold={0.2}>
          <div className="mb-4" id="tornadogenesis">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[35vh] overflow-hidden rounded-lg"
            >
              <img 
                src="/images/eyecandy.jpg"
                alt="Tornadogenesis simulation"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <h2 className="text-4xl text-white">Ramifications of Low-Level Backing on Supercell Intensity and Longevity</h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 prose prose-lg dark:prose-invert"
            >
              <h3 className="text-2xl mb-4 text-white">Research Supervisors</h3>
              <ul className="list-none mt-2 text-gray-200 mb-4">
                <li className="mb-4">
                  None/Sole Author
                </li>
              </ul>
              
              <h3 className="text-2xl mb-4 text-white">Description</h3>
              <p className="text-gray-200 mb-6">
                Prior to the Institute, my research aimed to optimize tornadogenesis and parameter-space constructions (2019-2022), with particular focus on theoretical hodograph structures; I accumulated extensive experience with NWPs across spatiotemporal magnitudes, from microphysics to synoptic structures and teleconnections, spanning long-range GCMs to mesoscale rapid refresh models in both research and forecasting (2017-).
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
        
        {/* Nagoya Section Title */}
        <SectionTitle title="Nagoya." />
        
        {/* Nagoya Section */}
        <ScrollReveal threshold={0.2}>
          <div className="mb-16" id="nagoya">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-[50vh] overflow-hidden rounded-lg"
            >
              <img 
                src="/images/nagoya.jpg"
                alt="Nagoya cityscape"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6"
            >
              <h2 className="text-4xl text-white">I am from Nagoya (名古屋)</h2>
              <p className="mt-2 text-[#e41937] italic">
                <a href="https://nagoya-info.jp" className="text-[#e41937] italic underline decoration-[#e41937]">nagoya-info.jp</a>
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Information; 

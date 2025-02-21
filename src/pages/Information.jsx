import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const Information = () => {
  return (
    <div className="pt-16 flex flex-col min-h-screen">
      <div className="flex h-1/2 border-b border-white">
        <div className="w-2/5 border-r border-white p-4">
          <p className="leading-relaxed text-gray-200">
            I am a second-year undergraduate student in the <a href="https://cms.caltech.edu/" className="underline decoration-white">Department of Computing + Mathematical Sciences</a> at the <a href="https://www.caltech.edu/" className="underline decoration-white">California Institute of Technology</a>. My research interests are in automated machine learning, language models, dimensionality reduction, and scientific applications of AI. I also enjoy statistical manifolds, computational physics, and theoretical astrophysics.
          </p>
          <p className="leading-relaxed text-gray-200 mt-4">
            I also dabbled in some pre-college competitions (USA Team Selection Tests for <a href="https://en.wikipedia.org/wiki/International_Science_Olympiad" className="underline decoration-white">International Science Olympiads</a>, the <a href="https://en.wikipedia.org/wiki/Regeneron_Science_Talent_Search" className="underline decoration-white">Science Talent Search</a>, the <a href="https://en.wikipedia.org/wiki/National_Science_Bowl" className="underline decoration-white">National Science Bowl</a> National Finals, and the <a href="https://en.wikipedia.org/wiki/Science_Olympiad" className="underline decoration-white">Science Olympiad</a> National Tournament).
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
      <div className="flex h-1/2">
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
      <div className="flex border-t border-white">
        <div className="w-2/5 border-r border-white p-4">
          <p className="leading-relaxed text-gray-200">
            <span className="text-[#e41937] italic">Foundation models for proton-proton collisions at <InlineMath math="\sqrt{s}"/> = 13.6 TeV</span>
          </p>
          <p className="leading-relaxed text-gray-200 mt-2">
            <a href="https://united-states.cern/" className="text-[#e41937] italic underline decoration-[#e41937]">united-states.cern</a> • <a href="https://cms.fnal.gov/" className="text-[#e41937] italic underline decoration-[#e41937]">cms.fnal.gov</a>
          </p>
          <p className="leading-relaxed text-gray-200 mt-4">
            Research Supervisors:
          </p>
          <ul className="list-none mt-2 text-gray-200">
            <li className="mb-2">
              <a href="https://scholar.google.com/citations?user=Hi8Bc4QAAAAJ" className="underline decoration-white">Raghav Kansal</a>
              <br />
              <span className="italic">AI/Schmidt Postdoctoral Scholar Research Associate in Physics, Caltech</span>
            </li>
            <li className="mb-2">
              <a href="https://scholar.google.com/citations?user=ZTqZD80AAAAJ" className="underline decoration-white">Jennifer Ngadiuba</a>
              <br />
              <span className="italic">Wilson Fellow, Fermi National Accelerator Laboratory</span>
            </li>
            <li className="mb-2">
              <a href="https://scholar.google.com/citations?user=UrL7wJ0AAAAJ" className="underline decoration-white">Si Xie</a>
              <br />
              <span className="italic">Assistant Research Professor of Physics, Caltech; Scientist, Fermi National Accelerator Laboratory</span>
            </li>
            <li>
              <a href="https://www.semanticscholar.org/author/M.-Spiropulu/6115015" className="underline decoration-white">Maria Spiropulu</a>
              <br />
              <span className="italic">Shang-Yi Ch'en Professor of Physics, Caltech</span>
            </li>
          </ul>
        </div>
        <div className="w-3/5 p-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <img 
              src="/images/13.6.jpg"
              alt="High-energy particle collision visualization from LHC experiments"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex border-t border-white">
        <div className="w-3/5 border-r border-white p-4 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/images/vorticity_evolution.gif"
              alt="Animated visualization of vorticity evolution in fluid dynamics simulation"
              className="w-full rounded-lg"
            />
          </div>
        </div>
        <div className="w-2/5 p-4">
          <p className="leading-relaxed text-gray-200">
            <span className="text-[#e41937] italic">Scale-Consistent Learning with Scale-Informed Neural Operators</span>
          </p>
          <p className="leading-relaxed text-gray-200 mt-2">
            <a href="http://tensorlab.cms.caltech.edu/users/anima/" className="text-[#e41937] italic underline decoration-[#e41937]">tensorlab.cms.caltech.edu</a>
          </p>  
          <p className="leading-relaxed text-gray-200 mt-4">
            Research Supervisors:
          </p>
          <ul className="list-none mt-2 text-gray-200">
            <li className="mb-2">
              <a href="https://scholar.google.com/citations?user=RdeqpiAAAAAJ" className="underline decoration-white">Zongyi Li</a>
              <br />
              <span className="italic">PhD, Computing + Mathematical Sciences, Caltech</span>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=bEcLezcAAAAJ" className="underline decoration-white">Anima Anandkumar</a>
              <br />
              <span className="italic">Bren Professor of Computing, Caltech</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex border-t border-white">
        <div className="w-2/5 border-r border-white p-4">
          <p className="leading-relaxed text-gray-200">
            <span className="text-[#e41937] italic">Ramifications of Low-Level Backing on Supercell Intensity and Longevity</span>
          </p>
          <p className="leading-relaxed text-gray-200 mt-4">
            Research Supervisors:
          </p>
          <ul className="list-none mt-2 text-gray-200">
            <li>
              None / Sole Author
            </li>
          </ul>
          <p className="leading-relaxed text-gray-200 mt-4">
            Prior to the Institute, my research aimed to optimize tornadogenesis and parameter-space constructions (2019-2022), with particular focus on theoretical hodograph structures (first / only high school student to present at the top conference in the field); I accumulated extensive experience with NWPs across spatiotemporal magnitudes, from microphysics to synoptic structures and teleconnections, spanning long-range GCMs to mesoscale rapid refresh models in both research and forecasting (2017-).
          </p>
        </div>
        <div className="w-3/5 p-4 flex items-center justify-center">
          <div className="relative w-full h-full">
            <img 
              src="/images/eyecandy.jpg"
              alt="Tornadogenesis simulation"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information; 
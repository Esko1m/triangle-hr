import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import logo from './assets/logo.jpeg';

const academicList = [
  'Christ University', 'KLE College, Bengaluru', 'Maharani Lakshmi Ammanni College for Women', 'Vivekananda College of Law',
  'Vemana Institute of Technology', 'Cambridge Institute of Technology', 'Acharya Institute of Technology', 'ATME College of Engineering, Mysuru',
  'Don Bosco Institute of Technology (MBA)', 'St. Joseph Engineering College', 'Hoysala Degree College'
];

const corporateList = [
  'HDFC', 'ICICI', 'Axis Bank', 'Tata Capital',
  'Reliance Mart', 'D-Mart', "Domino's",
  'Getit Info Services',
  'Precision Group', 'Spack Automotives Pvt. Ltd.'
];

const services = [
  { title: 'Counselling', description: 'Professional career guidance and counseling' },
  { title: 'Soft Skill', description: 'Comprehensive skill development programs' },
  { title: 'Recruitment', description: 'Direct networking with companies' },
  { title: 'Workshops', description: 'Hands-on learning experiences' }
];

const trainingPillars = [
  {
    title: 'Vision',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2h11A2.5 2.5 0 0 1 20 4.5v15A2.5 2.5 0 0 1 17.5 22h-11A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>,
    details: ['To be a trusted partner in shaping confident, skilled, and future-ready professionals who thrive in a changing world.']
  },
  {
    title: 'Mission',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>,
    details: ['To connect learning with real-world success by helping individuals grow with confidence and enabling organizations to build strong, future-ready teams.']
  },
  {
    title: 'Objective',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    details: ['Connecting learning with real-world impact by developing capable people, strong organizations, and future-ready careers.']
  },
  {
    title: 'Our Approach',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>,
    details: ['Strengthening organizations by building the future of talent today.']
  },
  {
    title: 'Partnerships',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>,
    details: ['Associated with NAMANAM Trust, conducting leadership workshops and seminars.']
  },
  {
    title: 'Core Focus Areas',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    details: ['Interpersonal skills', 'Industry-aligned modules', 'Behavioral change', 'Employability solutions']
  }
];

const phases = [
  { phase: '01', title: 'Training Needs Analysis & Alignment', text: 'Identification of skill gaps · Alignment with institutional and industry requirements · Setting clear learning objectives' },
  { phase: '02', title: 'Industry Orientation & Skill Awareness', text: 'Industry expectations and employability skills · Corporate culture and professional ethics · Career awareness and role clarity' },
  { phase: '03', title: 'Experiential & Applied Learning', text: 'Role plays, simulations, and group activities · Real-time industry case studies · Communication, teamwork, and problem-solving exercises' },
  { phase: '04', title: 'Application, Coaching & Reinforcement', text: 'Mock interviews, group discussions, and presentations · Performance counselling and individual feedback · Audio-visual learning tools and assignments' },
  { phase: '05', title: 'Assessment, Feedback & Follow-Up', text: 'Pre- and post-training assessment · Consolidated feedback and institutional reporting · Follow-up discussions to ensure retention' }
];

const navItems = [
  { id: 'services', label: 'SERVICES', number: 'I.' },
  { id: 'framework', label: 'EXPERTISE', number: 'II.' },
  { id: 'about', label: 'WHY I MENTOR', number: 'III.' },
  { id: 'methodology', label: 'COACHING', number: 'IV.' },
  { id: 'partners', label: 'PARTNERS', number: 'V.' },
  { id: 'none1', label: '', number: 'VI.' },
  { id: 'none2', label: '', number: 'VII.' }
];

const RevealLine = ({ children, delay = 0, className = "", animateOnLoad = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0% 0px" });
  return (
    <span ref={ref} className={`overflow-hidden block ${className}`}>
      <motion.div
        initial={{ y: "115%", rotate: 3 }}
        animate={animateOnLoad || isInView ? { y: 0, rotate: 0 } : { y: "115%", rotate: 3 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}
        className="origin-bottom-left"
      >
        {children}
      </motion.div>
    </span>
  );
};

const RevealText = ({ children, delay = 0, className = "", animateOnLoad = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0% 0px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "115%" }}
        animate={animateOnLoad || isInView ? { y: 0 } : { y: "115%" }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const MaskingSection = ({ children, id, className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Ultra-tight unmasking for instant visibility
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <div ref={targetRef} className="relative h-[110vh] w-full" id={id}>
      <motion.div
        style={{ clipPath }}
        className={`sticky top-0 min-h-screen w-full flex flex-col justify-start overflow-hidden ${className}`}
      >
        <div className="w-full py-12 lg:py-16">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const TriangleHRWebsite = () => {
  const [activeSection, setActiveSection] = useState('services');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...navItems, { id: 'contact' }].map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/xwvnarzj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-blue selection:bg-brand-blue selection:text-white overflow-x-hidden flex flex-col md:flex-row">

      {/* FIXED LEFT SIDEBAR (Wonjyou Exact Clone) */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 bg-white z-50 flex-col border-r border-brand-blue/20">
        {/* Menu Icon Space */}
        <div className="h-20 border-b border-brand-blue/20 flex items-center justify-center cursor-pointer text-brand-blue hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(true)}>
          <div className="w-6 flex flex-col gap-1.5">
            <div className="w-full h-px bg-brand-blue"></div>
            <div className="w-full h-px bg-brand-blue"></div>
          </div>
        </div>

        {/* Dynamic Navigation Items */}
        <div className="flex-1 flex flex-col">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => item.id.startsWith('none') ? null : scrollToSection(item.id)}
                className={`w-full flex items-center justify-center border-b border-brand-blue/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-brand-blue/10 ${isActive ? 'flex-[2] py-8' : 'flex-[1] min-h-0'
                  }`}
              >
                {isActive ? (
                  <div className="text-brand-blue text-[0.65rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    {item.number} {item.label}
                  </div>
                ) : (
                  <div className="text-brand-blue/60 text-[0.65rem] font-bold font-sans">
                    {item.number}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <button
          onClick={() => scrollToSection('contact')}
          className={`h-40 flex items-center justify-center border-t border-brand-blue/20 transition-colors duration-500 hover:brightness-110 ${activeSection === 'contact' ? 'bg-brand-blue text-white' : 'bg-brand-blue text-white'
            }`}
        >
          <div className="text-[0.65rem] font-bold uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            LET'S CONNECT ↗
          </div>
        </button>
      </aside>

      {/* MOBILE HEADER (for screens < md) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-brand-blue/20 h-16 flex items-center justify-between px-6 text-brand-blue">
        <div className="font-bold tracking-widest text-sm">TRIANGLE_HR</div>
        <button onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* FIXED LOGO OVERLAY */}
      <div className="fixed top-6 left-6 md:top-8 md:left-28 z-40 pointer-events-none text-brand-blue hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="none" viewBox="0 0 31 25">
          <path fill="brand-blue" d="M5.838.705H.5L9.94 24.28l2.743-6.92zM25.162.705H30.5L21.06 24.28l-2.743-6.92zM19.281.73h-7.562l3.732 9.538z"></path>
        </svg>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-brand-blue text-white p-8 flex flex-col justify-center"
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            <div className="flex flex-col gap-6 text-display-4 font-display font-bold uppercase">
              {[...navItems, { id: 'contact', label: 'LET\'S CONNECT', number: 'VI.' }].map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:text-brand-blue transition-colors flex items-center gap-4"
                >
                  <span className="text-lg opacity-40">{item.number}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <main className="w-full md:pl-20 pt-16 md:pt-0 bg-white text-brand-blue">

        {/* Section 1: Hero (Services) */}
        <section id="services" className="relative z-10 min-h-[100svh] pt-28 lg:pt-32 px-6 sm:px-12 lg:px-20 pb-20 flex flex-col lg:flex-row gap-8 lg:gap-16 bg-white">

          <div className="flex-[6] xl:flex-[5.5] pb-12">
            <h1 className="text-[4rem] sm:text-display-3 lg:text-[8.5vw] font-display font-black uppercase leading-[0.8] tracking-[-0.04em] m-0">
              <RevealLine delay={1.0} animateOnLoad={true} className="text-brand-blue">EMPOWERING</RevealLine>
              <RevealLine delay={1.1} animateOnLoad={true} className="text-brand-blue">TALENT,</RevealLine>
              <RevealLine delay={1.2} animateOnLoad={true} className="text-brand-green">STRENGTHENING</RevealLine>
              <RevealLine delay={1.3} animateOnLoad={true} className="text-brand-blue">ORGANIZATIONS,</RevealLine>
              <RevealLine delay={1.4} animateOnLoad={true} className="text-brand-blue">BUILDING</RevealLine>
              <RevealLine delay={1.5} animateOnLoad={true} className="text-brand-green">THE FUTURE.</RevealLine>
            </h1>
          </div>

          <div className="flex-[4] xl:flex-[4.5] flex flex-col justify-between h-full pb-16">
            <RevealText delay={1.5} animateOnLoad={true} className="w-full flex justify-end">
              <div className="w-[100%] xl:w-[85%] aspect-[16/10] bg-slate-800 overflow-hidden relative group mt-8 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team working" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </RevealText>

            <div className="flex flex-col mt-32 lg:mt-auto pt-24 pr-8 lg:pr-16 w-full xl:w-[85%] ml-auto">
              <RevealText delay={1.6} animateOnLoad={true}>
                <p className="text-brand-green text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-6">Ways I Can Help</p>
              </RevealText>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <RevealText key={index} delay={1.7 + (index * 0.1)} animateOnLoad={true}>
                    <div className="group flex items-center gap-4 cursor-pointer text-brand-blue hover:text-brand-blue transition-colors duration-300">
                      <div className="w-[1.25rem] h-[1.25rem] rounded-full bg-brand-green text-brand-blue flex items-center justify-center text-[0.65rem] font-black shrink-0 relative top-0.5">
                        {index + 1}
                      </div>
                      <h2 className="text-xl md:text-[1.35rem] font-bold whitespace-nowrap leading-none tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </RevealText>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Framework (Expertise) - GREEN BACKGROUND */}
        <MaskingSection id="framework" className="bg-brand-green text-white">
          <div className="px-6 sm:px-12 lg:px-20">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
              {/* Left Header Column */}
              <div className="flex flex-col">
                <RevealText delay={0.1}>
                  <p className="text-white/70 text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-16">Backed by decades of experience</p>
                </RevealText>
                <h2 className="text-[5rem] lg:text-[7rem] font-display font-black leading-[0.8] tracking-[-0.04em] lg:sticky lg:top-32 m-0 text-white">
                  <RevealLine delay={0.2}>My</RevealLine>
                  <RevealLine delay={0.3}>Expertise</RevealLine>
                </h2>
              </div>

              {/* Right Content Column (2x2 Grid) */}
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                {trainingPillars.map((pillar, index) => (
                  <div key={index} className={`flex flex-col pb-12 pt-8 ${index > 1 ? 'border-t border-white/20' : ''}`}>
                    <RevealText delay={0.2 + (index * 0.1)}>
                      {/* Decorative Icon Circle */}
                      <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white mb-6">
                        <div className="scale-75">
                          {pillar.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-display font-bold tracking-tight leading-none mb-4 text-white">{pillar.title}</h3>
                      <div className="flex flex-col gap-1 pr-4">
                        {pillar.details.map((detail, idx) => (
                          <p key={idx} className="text-sm md:text-base font-medium tracking-tight opacity-90 leading-snug text-white">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </RevealText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaskingSection>

        {/* Section 3: About (Why I mentor) - WHITE BACKGROUND */}
        <MaskingSection id="about" className="bg-white text-brand-blue">
          <div className="relative flex flex-col items-center justify-center overflow-hidden px-6 lg:px-12">
            {/* Huge Background-style Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 font-display font-black leading-[0.8] tracking-[-0.04em] mt-24 lg:mt-0 opacity-[0.05]">
              <div className="text-brand-blue text-[18vw] lg:text-[14vw] xl:text-[200px] text-center w-full">
                <RevealText>5-PILLAR</RevealText>
              </div>
              <div className="text-brand-blue text-[18vw] lg:text-[14vw] xl:text-[200px] text-center w-full">
                <RevealText delay={0.1}>FRAMEWORK</RevealText>
              </div>
            </div>

            {/* Center Image and Text Columns */}
            <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-end justify-center w-full max-w-[90rem] mx-auto gap-8 lg:gap-16 pt-32 lg:pt-0 pb-16">

              {/* Left Text */}
              <div className="flex-1 text-center lg:text-right max-w-sm lg:mb-16 order-2 lg:order-1 flex flex-col gap-10">
                <RevealText delay={0.2}>
                  <div>
                    <h4 className="text-brand-green text-xs font-black tracking-[0.2em] uppercase mb-3">Our Approach</h4>
                    <p className="text-base md:text-lg leading-relaxed font-bold">To systematic skill development and holistic career preparation.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.3}>
                  <div>
                    <h4 className="text-brand-blue text-2xl font-black mb-3 font-display">Center for Learning and Teaching</h4>
                    <p className="text-base md:text-lg leading-relaxed font-bold opacity-90 text-brand-blue">Foundation of knowledge transfer and skill acquisition.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.4}>
                  <div>
                    <h4 className="text-brand-blue text-2xl font-black mb-3 font-display">Skill And Career Development</h4>
                    <p className="text-base md:text-lg leading-relaxed font-bold opacity-90 text-brand-blue">Building practical competencies for career growth.</p>
                  </div>
                </RevealText>
              </div>

              {/* Center Image */}
              <div className="w-full sm:w-[80%] lg:w-[35%] xl:w-[40%] aspect-[3/4] lg:aspect-[4/5] overflow-hidden order-1 lg:order-2 shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Framework" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100" />
              </div>

              {/* Right Text */}
              <div className="flex-1 text-center lg:text-left max-w-sm lg:mb-16 order-3 flex flex-col gap-10">
                <RevealText delay={0.3}>
                  <div>
                    <h4 className="text-brand-blue text-2xl font-black mb-3 font-display">Center For Creativity</h4>
                    <p className="text-base md:text-lg leading-relaxed font-bold opacity-70">Fostering innovation and creative problem-solving.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.4}>
                  <div>
                    <h4 className="text-brand-blue text-2xl font-black mb-3 font-display">Industry Institute Partnership Cell</h4>
                    <p className="text-base md:text-lg leading-relaxed font-bold opacity-70">Strengthening the bond between academia and industry.</p>
                  </div>
                </RevealText>
                <RevealText delay={0.5}>
                  <div>
                    <h4 className="text-brand-blue text-2xl font-black mb-3 font-display">Social Responsibility Initiatives</h4>
                    <p className="text-base md:text-lg leading-relaxed font-bold opacity-70">Developing ethical and socially conscious professionals.</p>
                  </div>
                </RevealText>
              </div>
            </div>
          </div>
        </MaskingSection>

        {/* Section 4: Coaching Approach (Methodology) - GREEN BACKGROUND */}
        <MaskingSection id="methodology" className="bg-brand-green text-white">
          <div className="flex flex-col lg:flex-row relative">
            <div className="lg:w-1/2 px-6 sm:px-12 lg:px-24 flex flex-col justify-between z-10">
              <div>
                <RevealText delay={0.1}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-12 text-white/70">My Belief</p>
                </RevealText>
                <div className="space-y-6 max-w-lg text-white">
                  <RevealLine delay={0.2}><p className="text-lg md:text-xl font-medium leading-relaxed">We combine experiential learning with continuous performance evaluation to ensure maximum impact.</p></RevealLine>
                  <RevealLine delay={0.3}><p className="text-lg md:text-xl font-medium leading-relaxed">I'll ask tough questions, challenge your assumptions, and I'll always be direct and honest. You can think of us as your <span className="underline decoration-2 underline-offset-4">career mentors.</span></p></RevealLine>
                </div>
              </div>

              <div className="mt-24 lg:mt-0 relative w-full lg:w-auto overflow-visible">
                <h2 className="text-[14vw] sm:text-[10vw] lg:text-[7.5vw] xl:text-[5.5rem] font-display font-black uppercase leading-[0.85] tracking-tighter text-white relative z-20 drop-shadow-sm whitespace-nowrap">
                  <RevealLine delay={0.4}>TRAINING</RevealLine>
                  <RevealLine delay={0.5}>METHODOLOGY</RevealLine>
                </h2>
              </div>
            </div>

            {/* Image side */}
            <div className="lg:w-1/2 h-[50vh] lg:min-h-[60vh] relative lg:absolute lg:top-0 lg:right-0 lg:bottom-0">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Mentorship session" className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700" />
            </div>
          </div>
        </MaskingSection>

        {/* Section 5: Methodology Details - WHITE BACKGROUND */}
        <MaskingSection id="methodology-details" className="bg-white text-brand-blue">
          <div className="px-6 sm:px-12 lg:px-24">
            <p className="text-brand-blue text-xs font-bold tracking-widest uppercase mb-16 underline decoration-brand-green decoration-2 underline-offset-8">Training Methodology Process</p>
            <div className="flex flex-col w-full border-t border-brand-blue/10">
              {phases.map((phase, index) => (
                <div key={index} className="grid lg:grid-cols-12 gap-8 lg:gap-16 border-b border-brand-blue/10 py-20 px-4 group hover:bg-brand-green/20 transition-all duration-700 relative overflow-hidden">
                  {/* Hover background slide effect */}
                  <div className="absolute inset-0 bg-brand-green translate-y-full group-hover:translate-y-[calc(100%-4px)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>

                  <div className="lg:col-span-1 relative z-10">
                    <RevealText delay={0.1}>
                      <span className="text-sm font-bold opacity-50 text-brand-blue">{phase.phase}</span>
                    </RevealText>
                  </div>
                  <div className="lg:col-span-8 relative z-10 transition-transform duration-700 group-hover:translate-x-2">
                    <RevealLine delay={0.2}>
                      <h3 className="text-5xl lg:text-7xl font-display font-bold tracking-tight group-hover:text-brand-blue transition-colors duration-500">{phase.title}</h3>
                    </RevealLine>
                  </div>
                  <div className="lg:col-span-3 mt-4 lg:mt-0 relative z-10">
                    <RevealText delay={0.3}>
                      <p className="text-base lg:text-lg font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        {phase.text}
                      </p>
                    </RevealText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MaskingSection>

        {/* Section 5: Partners - GREEN BACKGROUND */}
        <MaskingSection id="partners" className="bg-brand-green text-white">
          <div className="py-12 lg:py-24 px-6 sm:px-12 lg:px-24">
            <RevealText delay={0.1}>
              <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-16">Trusted By</p>
            </RevealText>

            <div className="flex flex-col border-t border-white/20">
              <div className="border-b border-white/20 group list-none">
                <details className="w-full" open>
                  <summary className="py-12 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <RevealLine delay={0.2}>
                      <h3 className="text-4xl lg:text-5xl font-display font-bold tracking-tight group-hover:text-white transition-colors">Academic Institutions</h3>
                    </RevealLine>
                    <ArrowUpRight className="w-8 h-8 transform group-open:rotate-180 transition-transform text-white/50" />
                  </summary>
                  <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {academicList.map((partner, idx) => (
                      <RevealText key={idx} delay={0.1 + (idx * 0.05)}>
                        <div className="text-lg font-medium border-t border-white/10 pt-4 hover:text-white transition-colors cursor-default opacity-80">
                          {partner}
                        </div>
                      </RevealText>
                    ))}
                  </div>
                </details>
              </div>

              <div className="border-b border-white/10 group list-none">
                <details className="w-full">
                  <summary className="py-12 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <RevealLine delay={0.2}>
                      <h3 className="text-4xl lg:text-5xl font-display font-bold tracking-tight group-hover:text-white transition-colors">Corporate Clients</h3>
                    </RevealLine>
                    <ArrowUpRight className="w-8 h-8 transform group-open:rotate-180 transition-transform text-white/50" />
                  </summary>
                  <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                    {corporateList.map((client, idx) => (
                      <RevealText key={idx} delay={0.1 + (idx * 0.05)}>
                        <div className="text-lg font-medium border-t border-white/10 pt-4 hover:text-white transition-colors cursor-default opacity-80">
                          {client}
                        </div>
                      </RevealText>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          </div>
        </MaskingSection>

        {/* Section 6: Contact - WHITE BACKGROUND */}
        <MaskingSection id="contact" className="bg-white text-brand-blue">
          <div className="py-32 lg:py-40 px-6 sm:px-12 lg:px-24 flex flex-col justify-between">
            <div className="flex-1">
              <h2 className="text-display-2 lg:text-[10rem] text-brand-blue font-display font-extrabold uppercase leading-[0.8] mb-24 tracking-tighter">
                <RevealLine delay={0.1}>LET'S HAVE</RevealLine>
                <RevealLine delay={0.2}>A CHAT</RevealLine>
              </h2>

              <div className="grid lg:grid-cols-3 gap-16 lg:gap-8 border-t border-brand-blue/10 pt-16">
                <RevealText delay={0.3}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50">Schedule a call</div>
                    <a href="#" className="text-3xl font-display hover:text-brand-blue transition-colors">Calendly.com</a>
                  </div>
                </RevealText>
                <RevealText delay={0.4}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50">Leave a message</div>
                    <a href="tel:123-456-7890" className="text-3xl font-display hover:text-brand-blue transition-colors">123-456-7890</a>
                  </div>
                </RevealText>
                <RevealText delay={0.5}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-50">Email us</div>
                    <a href="mailto:info.trianglehrsolutions@gmail.com" className="text-2xl lg:text-3xl font-display hover:text-brand-blue transition-colors break-all">info@trianglehr.com</a>
                  </div>
                </RevealText>
              </div>
            </div>

            <footer className="mt-32 pt-8 border-t border-brand-blue/10 flex flex-col md:flex-row justify-between gap-8 items-start md:items-end">
              <RevealText delay={0.6}>
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                  <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-brand-blue transition-colors">LinkedIn</a>
                  <a href="#" className="text-sm font-bold tracking-widest uppercase hover:text-brand-blue transition-colors">Twitter</a>
                </div>
              </RevealText>
              <RevealText delay={0.7}>
                <p className="text-xs font-bold tracking-widest uppercase opacity-40">© 2025 Triangle HR.</p>
              </RevealText>
            </footer>
          </div>
        </MaskingSection>

      </main>
    </div>
  );
}

export default TriangleHRWebsite;
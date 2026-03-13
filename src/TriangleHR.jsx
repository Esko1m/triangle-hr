import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Mail, Phone, ArrowRight, CheckCircle2, Target, Lightbulb, Users, BookOpen, Palette, Building2, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
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

const TriangleHRWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    { title: 'Counselling', icon: <Target className="w-8 h-8" />, description: 'Professional career guidance and counseling' },
    { title: 'Soft Skill', icon: <Lightbulb className="w-8 h-8" />, description: 'Comprehensive skill development programs' },
    { title: 'Recruitment Assistance', icon: <Users className="w-8 h-8" />, description: 'Direct networking with companies' },
    { title: 'Workshops & Internship Programs', icon: <BookOpen className="w-8 h-8" />, description: 'Hands-on learning experiences' }
  ];

  const trainingPillars = [
    {
      title: 'Center for Learning and Teaching',
      icon: <BookOpen className="w-6 h-6" />,
      color: '#F59E0B',
      description: 'Foundation of knowledge transfer and skill acquisition',
      details: [
        'Structured curriculum design',
        'Interactive learning methodologies',
        'Continuous assessment and feedback',
        'Knowledge application workshops'
      ]
    },
    {
      title: 'Skill And Career Development',
      icon: <Target className="w-6 h-6" />,
      color: '#EF4444',
      description: 'Building practical competencies for career growth',
      details: [
        'Industry-relevant skill training',
        'Career pathway planning',
        'Professional development programs',
        'Competency-based assessments'
      ]
    },
    {
      title: 'Center For Creativity',
      icon: <Palette className="w-6 h-6" />,
      color: '#10B981',
      description: 'Fostering innovation and creative problem-solving',
      details: [
        'Creative thinking workshops',
        'Innovation labs and projects',
        'Design thinking methodologies',
        'Collaborative ideation sessions'
      ]
    },
    {
      title: 'Industry Institute Partnership Cell',
      icon: <Building2 className="w-6 h-6" />,
      color: '#F97316',
      description: 'Strengthening the bond between academia and industry',
      details: [
        'Corporate collaboration programs',
        'Industry expert sessions',
        'Real-world project exposure',
        'Internship and placement support'
      ]
    },
    {
      title: 'Social Responsibility Initiatives',
      icon: <Users className="w-6 h-6" />,
      color: '#3B82F6',
      description: 'Developing ethical and socially conscious professionals',
      details: [
        'Community engagement programs',
        'Ethics and values training',
        'Social impact projects',
        'Leadership development'
      ]
    }
  ];

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Training Needs Analysis & Alignment',
      points: ['Identification of skill gaps', 'Alignment with institutional and industry requirements', 'Setting clear learning objectives']
    },
    {
      phase: 'Phase 2',
      title: 'Industry Orientation & Skill Awareness',
      points: ['Industry expectations and employability skills', 'Corporate culture and professional ethics', 'Career awareness and role clarity']
    },
    {
      phase: 'Phase 3',
      title: 'Experiential & Applied Learning',
      points: ['Role plays, simulations, and group activities', 'Real-time industry case studies', 'Communication, teamwork, and problem-solving exercises']
    },
    {
      phase: 'Phase 4',
      title: 'Application, Coaching & Reinforcement',
      points: ['Mock interviews, group discussions, and presentations', 'Performance counselling and individual feedback', 'Audio-visual learning tools and assignments']
    },
    {
      phase: 'Phase 5',
      title: 'Assessment, Feedback & Follow-Up',
      points: ['Pre- and post-training assessment', 'Consolidated feedback and institutional reporting', 'Follow-up discussions to ensure retention']
    }
  ];

  const [formStatus, setFormStatus] = useState('idle'); // idle | sending | success | error

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
    <div className="min-h-screen bg-emerald-50 font-sans selection:bg-accent-500/30 selection:text-accent-900 overflow-x-hidden">
      {/* Modern Glass Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`relative flex justify-between items-center transition-all duration-500 rounded-2xl ${scrolled ? 'glass-panel px-6 py-3' : 'bg-transparent px-2'}`}>
            <div className="flex items-center space-x-4 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden shrink-0 shadow-sm border border-emerald-100">
                <img
                  src={logo}
                  alt="Triangle HR Solutions Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-slate-900 tracking-tight leading-none">Triangle HR Solutions</h1>
                <p className="text-[0.65rem] font-medium text-slate-500 uppercase tracking-widest mt-1">Excellence Since 2011</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {['Home', 'About', 'Services', 'Training', 'Partners', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 group ${activeSection === item.toLowerCase() ? 'text-accent-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                    }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent-50/80 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
              <div className="pl-4 ml-2 border-l border-slate-200">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] transform hover:-translate-y-0.5"
                >
                  Get Started
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/50 border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 p-4 glass-panel rounded-2xl md:hidden overflow-hidden origin-top"
            >
              <div className="flex flex-col space-y-1">
                {['Home', 'About', 'Services', 'Training', 'Partners', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                      ? 'bg-accent-50 text-accent-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 w-full px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
          {/* Premium Ambient Glow Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-[120px] mix-blend-multiply animate-orbit"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-multiply animate-orbit" style={{ animationDelay: '-10s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full magic-badge text-accent-700 text-sm font-medium cursor-default mb-2 shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                  </span>
                  <span>Connecting Talent with Opportunity</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-display font-extrabold text-slate-900 leading-[1.1] md:leading-[1.05] tracking-tight text-center lg:text-left">
                  Empowering Talent, <br className="hidden md:block" /> Strengthening Organizations, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-600">Building the Future.</span>
                </h1>

                <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light text-center lg:text-left">
                  Delivering value-driven management services, specializing in career-connect training programs and strategic employment opportunities since 2011.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="relative overflow-hidden px-6 py-4 bg-slate-900 text-white rounded-xl text-base md:text-lg font-bold hover:bg-slate-800 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transform hover:-translate-y-1 flex items-center justify-center group"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Your Journey
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Sweep Shine Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="px-6 py-4 bg-white text-slate-700 rounded-xl text-sm md:text-base font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center shadow-sm"
                  >
                    Explore Services
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60 w-full lg:w-max pr-0 lg:pr-8">
                  {[
                    { value: '13+', label: 'Years Experience' },
                    { value: '50+', label: 'Partner Institutions' },
                    { value: '10K+', label: 'Students Trained' },
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1 text-center lg:text-left">
                      <p className="text-2xl md:text-3xl font-display font-bold text-slate-900">{stat.value}</p>
                      <p className="text-[0.7rem] md:text-[0.8rem] text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
              >
                {/* Abstract Hero Visual */}
                <div className="relative w-full aspect-square max-w-[500px]">
                  {/* Main glass card */}
                  <div className="absolute inset-0 glass-panel rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/60 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-accent-400/20 to-blue-500/20 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-rose-400/10 to-purple-500/20 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700" />

                    <div className="space-y-4 relative z-10">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-accent-500 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500"><Target className="w-8 h-8" /></div>
                      <h3 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Excellence in Training</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">Empowering students and professionals to achieve their highest possible potential.</p>
                    </div>

                    <div className="relative w-full h-48 bg-slate-50/50 backdrop-blur-sm rounded-2xl border border-white/80 overflow-hidden shadow-inner mt-8 z-10 p-5 group-hover:bg-white/60 transition-colors duration-500">
                      <div className="flex gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-rose-400/80 shadow-[0_0_10px_rgba(251,113,133,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/80 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                        <div className="w-3 h-3 rounded-full bg-accent-400/80 shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-4 w-3/4 bg-slate-200/80 rounded-full animate-pulse" />
                        <div className="h-4 w-1/2 bg-slate-200/80 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                        <div className="h-4 w-5/6 bg-slate-200/80 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                      </div>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 md:-right-8 top-12 glass-panel p-4 rounded-2xl shadow-xl flex items-center space-x-3 z-20 border border-white/60"
                  >
                    <div className="w-10 h-10 bg-accent-50 border border-accent-100 text-accent-600 rounded-full flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Certified</p>
                      <p className="text-xs text-slate-500 font-medium">Trainers</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-4 md:-left-8 bottom-24 glass-panel p-4 rounded-2xl shadow-xl flex gap-4 items-center z-20 border border-white/60"
                  >
                    <div className="flex -space-x-4">
                      {['X', 'Y', 'Z'].map((user, i) => (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, x: -20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ delay: 0.5 + (i * 0.1), type: "spring", stiffness: 200, damping: 15 }}
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm relative"
                          style={{ zIndex: 10 - i }}
                        >
                          <img src={`https://i.pravatar.cc/150?u=${user}${i}`} alt={`Student portrait ${i + 1}`} width="56" height="56" loading="eager" className="w-full h-full object-cover" />
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">+10k</p>
                      <p className="text-xs text-slate-500 font-medium">Placed</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50 rounded-l-[100px] -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-xs font-bold tracking-widest text-accent-600 uppercase mb-3">Discover</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">About Triangle HR Solutions</h3>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                Founded in 2011, we are dedicated to delivering quality and value-driven management services.
              </p>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
              {/* Top wide card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="md:col-span-2 row-span-1 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-gradient-to-br from-white via-white to-accent-50 rounded-[2rem] p-8 md:p-10 overflow-hidden relative group magic-border hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute right-0 top-0 w-64 h-64 bg-accent-500/10 blur-[80px] rounded-full group-hover:bg-accent-400/20 transition-colors duration-700" />

                <div className="grid sm:grid-cols-3 gap-8 relative z-10">
                  <div className="space-y-4">
                    <div className="text-accent-500 bg-accent-50 p-3 rounded-xl w-max"><Sparkles className="w-6 h-6" /></div>
                    <h3 className="text-xl font-display font-bold tracking-tight text-slate-900">Vision</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      To be a trusted partner in shaping confident, skilled, and future-ready professionals who thrive in a changing world.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-emerald-500 bg-emerald-50 p-3 rounded-xl w-max"><Target className="w-6 h-6" /></div>
                    <h3 className="text-xl font-display font-bold tracking-tight text-slate-900">Mission</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      To connect learning with real-world success by helping individuals grow with confidence and enabling organizations to build strong, future-ready teams.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="text-blue-500 bg-blue-50 p-3 rounded-xl w-max"><ChevronRight className="w-6 h-6" /></div>
                    <h3 className="text-xl font-display font-bold tracking-tight text-slate-900">Objective</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      Connecting learning with real-world impact by developing capable people, strong organizations, and future-ready careers.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Top right square */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className="col-span-1 row-span-1 bg-accent-50 rounded-[2rem] p-8 flex flex-col justify-between group overflow-hidden relative border border-accent-100 magic-border hover:-translate-y-2 hover:shadow-glow-primary transition-all duration-300"
              >
                <div className="absolute -bottom-4 -right-4 w-48 h-48 opacity-10 text-accent-600 transform group-hover:scale-110 transition-transform duration-500"><Sparkles className="w-full h-full" /></div>
                <div className="text-accent-400 mb-4 relative z-10 group-hover:scale-110 transition-transform origin-left w-max bg-white p-3 rounded-2xl shadow-sm"><Sparkles className="w-8 h-8" /></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Our Approach</h3>
                  <p className="text-slate-600 text-sm">
                    Strengthening organizations by building the future of talent today.
                  </p>
                </div>
              </motion.div>

              {/* Bottom left square */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.2 }}
                className="col-span-1 row-span-1 border border-slate-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 flex flex-col justify-between group hover:border-slate-300 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 magic-border"
              >
                <div className="text-accent-400 mb-4 group-hover:-translate-y-2 transition-transform duration-300 origin-left w-max bg-slate-50 p-3 rounded-2xl border border-slate-100"><Users className="w-8 h-8" /></div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Partnerships</h3>
                  <p className="text-slate-500 text-sm">
                    Associated with NAMANAM Trust, conducting leadership workshops and seminars.
                  </p>
                </div>
              </motion.div>

              {/* Bottom wide custom area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 row-span-1 bg-gradient-to-br from-blue-50 to-accent-50/50 rounded-[2rem] p-8 border border-accent-100/50 flex items-center shadow-sm magic-border"
              >
                <div className="w-full">
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 tracking-tight">Core Focus Areas</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Interpersonal skills',
                      'Industry-aligned modules',
                      'Behavioral change',
                      'Employability solutions',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3 group bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] p-4 rounded-xl border border-slate-100 hover:border-accent-200 transition-colors cursor-default">
                        <div className="bg-accent-100 p-1.5 rounded-lg text-accent-600 group-hover:bg-accent-500 group-hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></div>
                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-emerald-50 relative overflow-hidden">
          <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-widest text-accent-600 uppercase mb-3">Offerings</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Our Services</h3>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">Comprehensive solutions for training and recruitment designed for high performance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="group glass-panel bg-white/50 hover:bg-white hover:border-accent-200 p-8 rounded-[2rem] transition-all duration-500 cursor-pointer transform hover:-translate-y-2 relative overflow-hidden flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl magic-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm border border-accent-100/50">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-3 tracking-wide group-hover:text-accent-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 text-accent-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 5-Pillar Framework Modernized */}
            <div className="mt-32">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">5-Pillar Training Framework</h3>
                <p className="text-slate-500 text-lg">Our systematic approach to skill development</p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {trainingPillars.map((pillar, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      key={index}
                      onClick={() => setSelectedPillar(selectedPillar === index ? null : index)}
                      className={`relative group cursor-pointer transition-all duration-500 rounded-[2rem] overflow-hidden border border-white/60 ${selectedPillar === index
                        ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-accent-500/20 z-20'
                        : 'glass-panel bg-white/40 hover:bg-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl z-10'
                        }`}
                    >
                      <div className="p-6 md:p-8 flex items-center space-x-6">
                        {/* Premium Icon Container like Image 2 */}
                        <div className="relative shrink-0">
                          <div
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg border-2 border-white/80 group-hover:scale-110 transition-transform duration-500"
                            style={{ background: `linear-gradient(135deg, ${pillar.color}20, ${pillar.color}40)` }}
                          >
                            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                            <div className="relative" style={{ color: pillar.color }}>
                              {React.cloneElement(pillar.icon, { className: 'w-8 h-8 md:w-10 md:h-10' })}
                            </div>
                          </div>
                          {/* Inner glow effect */}
                          <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow min-w-0">
                          <h4 className="font-display font-extrabold text-xl md:text-2xl text-slate-800 mb-2 tracking-tight group-hover:text-accent-700 transition-colors leading-tight">
                            {pillar.title}
                          </h4>
                          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                            {pillar.description}
                          </p>
                        </div>

                        {/* Minimalist Arrow like Image 2 */}
                        <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-slate-100 transition-all duration-300 ${selectedPillar === index
                          ? 'bg-accent-500 border-accent-500 text-white rotate-90'
                          : 'bg-white shadow-sm text-slate-400 group-hover:text-accent-500 group-hover:border-accent-200'
                          }`}>
                          <ChevronRight className="w-5 h-5" />
                        </div>
                      </div>

                      <AnimatePresence>
                        {selectedPillar === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-8 pb-8 pt-2 border-t border-slate-50 overflow-hidden"
                          >
                            <div className="grid sm:grid-cols-2 gap-4 mt-4">
                              {pillar.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center space-x-3 bg-slate-50/50 p-3 rounded-xl border border-slate-100/50">
                                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: pillar.color }} />
                                  <span className="text-slate-600 text-sm font-semibold">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section id="training" className="py-24 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-xs font-bold tracking-widest text-accent-600 uppercase mb-3">Process</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Training Methodology</h3>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
                We combine experiential learning with continuous performance evaluation.
              </p>
            </div>

            <div className="relative border-l border-slate-100 ml-4 md:ml-0 md:pl-0">
              {phases.map((phase, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
                >
                  <div className="md:grid md:grid-cols-5 gap-8 items-start">
                    <div className="hidden md:block col-span-1 text-right pt-2 relative">
                      <span className="text-5xl font-display font-black text-slate-300 group-hover:text-accent-300 transition-colors">0{index + 1}</span>
                      <div className="absolute right-[-2.35rem] top-5 w-4 h-4 rounded-full bg-white border-4 border-slate-200 group-hover:border-accent-400 transition-colors z-10" />
                    </div>

                    <div className="md:hidden absolute left-[-0.3rem] top-2 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-accent-400 transition-colors z-10" />

                    <div className="md:col-span-4 bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:border-accent-100 transition-all duration-300">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider mb-4 group-hover:bg-accent-50 group-hover:text-accent-600 transition-colors">
                        {phase.phase}
                      </div>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-4 tracking-tight group-hover:text-accent-700 transition-colors">
                        {phase.title}
                      </h3>
                      <ul className="space-y-3">
                        {phase.points.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0 opacity-70" />
                            <span className="text-slate-600 text-sm leading-relaxed">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section Modularized Marquee */}
        <section id="partners" className="py-24 bg-emerald-50 border-t border-emerald-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-widest text-accent-600 uppercase mb-3">Trust</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight">Our Elite Partners</h3>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">Trusted by leading academic institutions and corporate giants.</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
            <div className="space-y-32">
              {/* Academic Partners 3D Carousel */}
              <div className="relative group">
                <div className="flex items-center space-x-4 mb-16 relative z-10">
                  <div className="h-px bg-emerald-100 flex-grow" />
                  <h4 className="text-sm font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-4">Academic Institutions</h4>
                  <div className="h-px bg-emerald-100 flex-grow" />
                </div>

                <div className="h-[300px] flex items-center justify-center perspective-1500 relative">
                  <motion.div
                    className="flex transform-style-3d relative w-full h-full items-center justify-center"
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    {academicList.map((partner, idx) => {
                      const angle = (idx / academicList.length) * 360;
                      return (
                        <div
                          key={idx}
                          className="absolute w-44 md:w-56 h-28 backface-hidden"
                          style={{
                            transform: `rotateY(${angle}deg) translateZ(450px)`,
                          }}
                        >
                          <motion.div
                            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-emerald-100 shadow-lg flex items-center justify-center text-center h-full hover:border-accent-400 hover:shadow-glow-accent transition-all cursor-default group"
                            whileHover={{ scale: 1.1, y: -10 }}
                          >
                            <span className="text-sm font-display font-bold text-slate-800 group-hover:text-accent-800 transition-colors">
                              {partner}
                            </span>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                  {/* Glass floor effect */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-emerald-100/20 to-transparent blur-2xl rounded-full" />
                </div>
              </div>

              {/* Corporate Partners 3D Carousel (Reverse) */}
              <div className="relative group pt-10">
                <div className="flex items-center space-x-4 mb-16 relative z-10">
                  <div className="h-px bg-slate-200 flex-grow" />
                  <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase bg-emerald-50 px-4">Corporate Giants</h4>
                  <div className="h-px bg-slate-200 flex-grow" />
                </div>

                <div className="h-[300px] flex items-center justify-center perspective-[1500px] relative">
                  <motion.div
                    className="flex transform-style-3d relative w-full h-full items-center justify-center"
                    animate={{ rotateY: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  >
                    {corporateList.map((client, idx) => {
                      const angle = (idx / corporateList.length) * 360;
                      return (
                        <div
                          key={idx}
                          className="absolute w-44 md:w-56 h-28 backface-hidden"
                          style={{
                            transform: `rotateY(${angle}deg) translateZ(450px)`,
                          }}
                        >
                          <motion.div
                            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl flex items-center justify-center text-center h-full hover:border-accent-600 hover:shadow-glow-accent transition-all cursor-default group"
                            whileHover={{ scale: 1.1, y: -10 }}
                          >
                            <span className="text-sm font-display font-bold text-slate-200 group-hover:text-white transition-colors">
                              {client}
                            </span>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                  {/* Shadow effect */}
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-t from-black/5 to-transparent blur-2xl rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12 pr-8">
                <div>
                  <h2 className="text-xs font-bold tracking-widest text-accent-400 uppercase mb-3">Connect</h2>
                  <h3 className="text-4xl md:text-5xl text-white font-display font-bold mb-6 tracking-tight">Let's shape the future together.</h3>
                  <p className="text-lg text-slate-300 font-light leading-relaxed">
                    Whether you're looking to elevate your institution's employability or a corporate seeking to train freshers, we have the framework you need.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-6 group cursor-pointer glass-panel-dark p-4 rounded-2xl w-max">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</h4>
                      <p className="text-lg font-display font-medium">7338626988</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group cursor-pointer glass-panel-dark p-4 rounded-2xl w-max">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-accent-400 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</h4>
                      <p className="text-lg font-display font-medium">info.trianglehrsolutions@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel-dark p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl relative">
                <h3 className="text-2xl font-display font-bold mb-8">Send us a message</h3>

                {formStatus === 'success' ? (
                  <div className="text-center py-16 animate-fadeIn">
                    <div className="w-20 h-20 bg-accent-500/20 text-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Message Received!</h4>
                    <p className="text-slate-400 mb-8">Thank you. Our team will get back to you shortly.</p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-accent-50 hover:text-accent-700 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="filter drop-shadow-sm">
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-5 py-4 bg-slate-950/50 rounded-xl border border-slate-800 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 font-light"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-5 py-4 bg-slate-950/50 rounded-xl border border-slate-800 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 font-light"
                        placeholder="Email Address"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="organization"
                        className="w-full px-5 py-4 bg-slate-950/50 rounded-xl border border-slate-800 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 font-light"
                        placeholder="Institution / Company"
                      />
                    </div>
                    <div>
                      <textarea
                        rows="4"
                        name="message"
                        required
                        className="w-full px-5 py-4 bg-slate-950/50 rounded-xl border border-slate-800 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:outline-none transition-all duration-300 text-white placeholder-slate-500 font-light resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-rose-400 text-sm text-center font-medium bg-rose-400/10 py-2 rounded-lg">Failed to send message. Please try again.</p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full py-4 bg-accent-500 text-white rounded-xl hover:bg-accent-400 transition-all duration-300 shadow-[0_4px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_8px_30px_rgba(20,184,166,0.5)] font-bold tracking-wide uppercase text-sm disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                    >
                      {formStatus === 'sending' ? 'Transmitting...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Minimalist */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Triangle HR Solutions Company Logo" width="24" height="24" loading="lazy" className="w-8 h-8 object-contain opacity-90" />
              </div>
              <span className="font-display font-medium text-slate-300 tracking-wide text-sm">Triangle HR Solutions</span>
            </div>

            <div className="flex space-x-8 text-sm font-medium">
              {['Home', 'About', 'Services', 'Training'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-accent-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs font-light">
            <p>&copy; {new Date().getFullYear()} Triangle HR Solutions. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Associated with NAMANAM Trust</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TriangleHRWebsite;
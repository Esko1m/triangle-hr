import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, LogOut, ChevronRight, Home, Info, Briefcase, GraduationCap, Heart, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Import all content
import homeData from '../content/home.json';
import aboutData from '../content/about.json';
import servicesData from '../content/services.json';
import trainingData from '../content/training.json';
import impactData from '../content/impact.json';
import contactData from '../content/contact.json';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [isSaving, setIsSaving] = useState(false);
  const [content, setContent] = useState<any>({
    home: homeData,
    about: aboutData,
    services: servicesData,
    training: trainingData,
    impact: impactData,
    contact: contactData,
  });

  // Login Check
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Triangle2026') { // We can move this to env later
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      toast.error('Incorrect Password');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    const pathMap: any = {
      home: 'src/content/home.json',
      about: 'src/content/about.json',
      services: 'src/content/services.json',
      training: 'src/content/training.json',
      impact: 'src/content/impact.json',
      contact: 'src/content/contact.json',
    };

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: pathMap[activeTab],
          content: content[activeTab],
          password: password || 'Triangle2026',
        }),
      });

      if (response.ok) {
        toast.success('Changes saved successfully! The site will update in about a minute.');
      } else {
        const err = await response.json();
        toast.error(`Error: ${err.error}`);
      }
    } catch (error) {
      toast.error('Failed to connect to the server');
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (section: string, field: string, value: any, subfield?: string, index?: number, nestedField?: string) => {
    const newContent = { ...content };
    if (index !== undefined && nestedField) {
      newContent[activeTab][section][field][index][nestedField] = value;
    } else if (index !== undefined) {
      newContent[activeTab][section][field][index] = value;
    } else if (subfield) {
      newContent[activeTab][section][field][subfield] = value;
    } else if (field) {
      newContent[activeTab][section][field] = value;
    } else {
      newContent[activeTab][section] = value;
    }
    setContent(newContent);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#01416d] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 shadow-2xl max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
            <Briefcase size={40} />
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Admin Portal</h1>
          <p className="text-slate-500 mb-8">Enter your credentials to manage Triangle HR content.</p>
          
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Access Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <Button className="w-full h-14 rounded-xl text-lg font-bold" type="submit">
              Sign In
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'home', label: 'Homepage', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'training', label: 'Training', icon: GraduationCap },
    { id: 'impact', label: 'Social Impact', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col fixed h-full">
        <div className="p-8 border-b border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
            <Briefcase size={20} />
          </div>
          <h2 className="text-xl font-display font-bold text-slate-900">Editor</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <button 
            onClick={() => {
              sessionStorage.removeItem('admin_auth');
              setIsLoggedIn(false);
            }}
            className="w-full flex items-center justify-center gap-3 py-3 text-slate-400 hover:text-rose-500 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 ml-80 p-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
                {tabs.find(t => t.id === activeTab)?.label}
              </h1>
              <p className="text-slate-500 font-medium">Update the content for this section of your website.</p>
            </div>
            <Button 
              onClick={handleSave} 
              disabled={isSaving}
              className="h-14 px-10 rounded-2xl gap-3 shadow-xl hover:scale-105 transition-transform"
            >
              {isSaving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12 pb-24"
            >
              {/* HOMEPAGE EDITOR */}
              {activeTab === 'home' && (
                <div className="space-y-8">
                  <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-xs">1</span>
                      Hero Section
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Main Title (Use commas for new lines)</label>
                        <input 
                          value={content.home.hero.title}
                          onChange={(e) => updateField('hero', 'title', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Description</label>
                        <textarea 
                          value={content.home.hero.description}
                          rows={4}
                          onChange={(e) => updateField('hero', 'description', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ABOUT EDITOR */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xs">1</span>
                      Introduction
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Main Headline</label>
                        <input 
                          value={content.about.about.title}
                          onChange={(e) => updateField('about', 'title', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Main Paragraph</label>
                        <textarea 
                          value={content.about.about.mainText}
                          rows={6}
                          onChange={(e) => updateField('about', 'mainText', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTACT EDITOR */}
              {activeTab === 'contact' && (
                <div className="space-y-8">
                  <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                      <span className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-xs">1</span>
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                        <input 
                          value={content.contact.contact.email}
                          onChange={(e) => updateField('contact', 'email', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Location</label>
                        <input 
                          value={content.contact.contact.location}
                          onChange={(e) => updateField('contact', 'location', e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center bg-slate-100 rounded-3xl p-10 border border-dashed border-slate-300">
                <AlertCircle size={24} className="mx-auto text-slate-400 mb-4" />
                <p className="text-sm text-slate-500">More advanced fields (like images and list items) will be added soon based on your needs.</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

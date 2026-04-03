import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Pencil, Trash2, X, Calendar, Clock, MapPin, Users, ChevronLeft, Save, Tag, Loader2, Link as LinkIcon } from 'lucide-react';
import logo from '@/assets/logo.png';

interface Workshop {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  capacity: string;
  description: string;
  instructor: string;
  price: string;
}


const CATEGORY_COLORS: Record<string, string> = {
  'Resume Writing': 'bg-blue-100 text-blue-700',
  'Interview Prep': 'bg-emerald-100 text-emerald-700',
  'Career Coaching': 'bg-purple-100 text-purple-700',
  'Networking': 'bg-amber-100 text-amber-700',
  'LinkedIn Optimization': 'bg-sky-100 text-sky-700',
  'Job Search Strategy': 'bg-rose-100 text-rose-700',
  'Other': 'bg-gray-100 text-gray-700',
};

const CATEGORIES = Object.keys(CATEGORY_COLORS);

const EMPTY_FORM: Omit<Workshop, 'id'> = {
  title: '',
  category: 'Resume Writing',
  date: '',
  time: '',
  duration: '',
  location: '',
  capacity: '',
  description: '',
  instructor: '',
  price: '',
};

const WorkshopsPage = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load
    setIsLoading(true);

    const fetchWorkshops = async () => {
      try {
        // Fetch directly from Google Sheets to bypass proxy caches and get 100% live data
        const res = await fetch(`https://docs.google.com/spreadsheets/d/1JqUPupC5K5Dj4j6fTQBiU05B-vACQJURgAyO3pkcQhg/gviz/tq?tqx=out:json&sheet=Sheet1&t=${Date.now()}`);
        const text = await res.text();
        
        // The API returns a JSONP response wrapped in a function call. Extract the raw JSON.
        const jsonString = text.substring(text.indexOf('{'), text.lastIndexOf('}') + 1);
        const data = JSON.parse(jsonString);
        
        const formatString = (str: string | undefined | null) => {
          if (!str) return "";
          return str.replace(/\n{2,}/g, '\n').trim();
        };

        if (!data?.table?.rows) {
          throw new Error("Invalid data format from Google Sheets");
        }

        const formatted = data.table.rows.map((row: any) => {
          // Columns: 0=Title, 1=Date, 2=Location, 3=Description
          const rowData = row.c || [];
          const getVal = (colData: any) => {
             if (!colData) return "";
             // Prefer the formatted value (.f) e.g. "2026-04-10" over the internal value (.v) e.g. "Date(2026,3,10)"
             return colData.f || colData.v || "";
          };

          return {
            id: crypto.randomUUID(),
            title: formatString(getVal(rowData[0])),
            category: "Other",
            date: formatString(getVal(rowData[1])),
            time: "",
            duration: "",
            location: formatString(getVal(rowData[2])),
            capacity: "",
            description: formatString(getVal(rowData[3])),
            instructor: "",
            price: ""
          };
        });

        setWorkshops(formatted);
      } catch (err) {
        console.error("Failed to load workshops", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkshops();

    // Set up polling interval (every 30 seconds)
    const intervalId = setInterval(fetchWorkshops, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);



  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm sticky top-0 z-40 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Triangle HR Solutions" className="h-10 w-auto" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
          >
            <ChevronLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Page Hero */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 70% 50%, hsl(220 60% 43% / 0.06) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, hsl(220 55% 55% / 0.05) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="gold-bar" />
              <h1 className="section-heading mb-4">Workshops &amp; Events</h1>
              <p className="section-subheading">
                Explore our upcoming career development workshops — from resume writing to interview prep and beyond.
              </p>
            </div>
            
          </div>
        </div>
      </section>      {/* Workshop Grid */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-lg font-medium text-muted-foreground animate-pulse">Loading workshops...</p>
          </div>
        ) : workshops.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center bg-card rounded-3xl border border-border/50 shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Calendar size={36} className="text-primary/60" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No workshops found</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
              We couldn't find any upcoming workshops at the moment. Please check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map(w => (
              <WorkshopCard
                key={w.id}
                workshop={w}
                formatDate={formatDate}
                categoryColor={CATEGORY_COLORS[w.category] ?? CATEGORY_COLORS['Other']}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

/* ── Sub-components ── */

const WorkshopCard = ({
  workshop,
  formatDate,
  categoryColor,
}: {
  workshop: Workshop;
  formatDate: (d: string) => string;
  categoryColor: string;
}) => (
  <div className="group relative flex flex-col bg-card rounded-2xl border border-border/40 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
    {/* Decorative Top Gradient Line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="p-6 md:p-8 flex flex-col flex-1">
      {/* Title & Instructor */}
      <h3 className="text-2xl font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
        {workshop.title}
      </h3>
      {workshop.instructor && (
        <p className="text-sm font-medium text-foreground/70 mb-4 inline-flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
            {workshop.instructor.charAt(0)}
          </span>
          {workshop.instructor}
        </p>
      )}

      {/* Description */}
      {workshop.description && (
        <div className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">
          {workshop.description.split('\n').map((paragraph, index) => (
            <p key={index} className={index > 0 ? 'mt-2' : ''}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Key Details Grid */}
      <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 py-5 border-t border-border/50">
        {workshop.date && (
          <MetaRow icon={<Calendar size={16} />} text={formatDate(workshop.date)} />
        )}
        {workshop.time && (
          <MetaRow
            icon={<Clock size={16} />}
            text={[
              new Date(`2000-01-01T${workshop.time}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
              workshop.duration,
            ].filter(Boolean).join(' · ')}
          />
        )}
        {workshop.location && (
          <MetaRow icon={<MapPin size={16} />} text={workshop.location} className="sm:col-span-2" />
        )}
        {workshop.capacity && (
          <MetaRow icon={<Users size={16} />} text={workshop.capacity} />
        )}
      </div>

      {/* Price badge */}
      <div className="mt-6 pt-6 border-t border-border/50">
        {workshop.price ? (
          <span className="text-lg font-extrabold text-foreground">
            {workshop.price}
          </span>
        ) : (
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
            Free Event
          </span>
        )}
      </div>
    </div>
  </div>
);

const MetaRow = ({ icon, text, className = "" }: { icon: React.ReactNode; text: string; className?: string }) => (
  <div className={`flex items-start gap-3 text-sm text-muted-foreground ${className}`}>
    <span className="mt-0.5 text-primary/70 bg-primary/5 p-1.5 rounded-md flex-shrink-0">
      {icon}
    </span>
    <span className="font-medium leading-relaxed">{text}</span>
  </div>
);

export default WorkshopsPage;

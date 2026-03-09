/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone, Shield, Bug, MapPin, Star, CheckCircle2, ArrowRight,
  Menu, X, Leaf, PawPrint, Clock, Award, ChevronLeft, ChevronRight,
  Zap, MousePointer2, ShieldCheck, CalendarCheck, PhoneCall,
  Sparkles, ThumbsUp, Users, RefreshCw, BadgeCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Professional pest silhouette icons
const AntIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Head */}
    <ellipse cx="50" cy="18" rx="10" ry="9" />
    {/* Antennae */}
    <path d="M44 12 C40 4, 30 2, 24 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M56 12 C60 4, 70 2, 76 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Thorax */}
    <ellipse cx="50" cy="38" rx="8" ry="10" />
    {/* Abdomen */}
    <ellipse cx="50" cy="65" rx="14" ry="18" />
    {/* Legs left */}
    <path d="M42 32 L22 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 38 L18 38" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M42 44 L22 56" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Legs right */}
    <path d="M58 32 L78 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M58 38 L82 38" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M58 44 L78 56" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const SpiderIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Cephalothorax */}
    <circle cx="50" cy="34" r="12" />
    {/* Abdomen */}
    <ellipse cx="50" cy="62" rx="16" ry="20" />
    {/* Eyes */}
    <circle cx="46" cy="30" r="2.5" fill="white" /><circle cx="54" cy="30" r="2.5" fill="white" />
    {/* Left legs */}
    <path d="M40 28 L20 10 L12 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 34 L14 26 L8 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M38 38 L14 46 L8 56" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M40 42 L22 60 L16 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right legs */}
    <path d="M60 28 L80 10 L88 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M62 34 L86 26 L92 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M62 38 L86 46 L92 56" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M60 42 L78 60 L84 72" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RodentIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Body */}
    <ellipse cx="52" cy="52" rx="28" ry="20" />
    {/* Head */}
    <ellipse cx="22" cy="40" rx="14" ry="12" />
    {/* Ear front */}
    <ellipse cx="16" cy="26" rx="7" ry="9" />
    <ellipse cx="16" cy="26" rx="4" ry="6" fill="white" opacity="0.3" />
    {/* Ear back */}
    <ellipse cx="30" cy="24" rx="6" ry="8" />
    {/* Eye */}
    <circle cx="16" cy="38" r="3" fill="white" /><circle cx="16" cy="38" r="1.5" />
    {/* Nose */}
    <circle cx="9" cy="42" r="2.5" />
    {/* Whiskers */}
    <path d="M12 40 L2 36" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 43 L1 43" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 46 L2 50" fill="none" stroke="currentColor" strokeWidth="1.5" />
    {/* Tail */}
    <path d="M80 50 C88 44, 94 50, 90 58 C86 66, 92 72, 96 68" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Feet */}
    <ellipse cx="34" cy="70" rx="5" ry="3" />
    <ellipse cx="62" cy="72" rx="5" ry="3" />
  </svg>
);

const TermiteIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Head */}
    <circle cx="50" cy="20" r="10" />
    {/* Mandibles */}
    <path d="M44 14 L38 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M56 14 L62 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    {/* Antennae */}
    <path d="M43 16 C36 10, 28 12, 24 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M57 16 C64 10, 72 12, 76 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Thorax */}
    <ellipse cx="50" cy="40" rx="10" ry="12" />
    {/* Abdomen */}
    <ellipse cx="50" cy="68" rx="14" ry="18" />
    {/* Segment lines on abdomen */}
    <path d="M36 62 L64 62" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
    <path d="M37 70 L63 70" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
    <path d="M38 78 L62 78" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
    {/* Legs */}
    <path d="M40 34 L24 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 40 L22 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 46 L24 54" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 34 L76 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 40 L78 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 46 L76 54" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const CockroachIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Head */}
    <ellipse cx="50" cy="16" rx="8" ry="7" />
    {/* Antennae */}
    <path d="M44 12 C38 4, 28 2, 20 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M56 12 C62 4, 72 2, 80 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Pronotum / shield */}
    <ellipse cx="50" cy="32" rx="14" ry="10" />
    {/* Body - oval flat shape */}
    <ellipse cx="50" cy="62" rx="18" ry="26" />
    {/* Wing line */}
    <path d="M50 36 L50 86" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
    {/* Legs left */}
    <path d="M34 28 L14 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 36 L10 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 50 L10 58" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Legs right */}
    <path d="M66 28 L86 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M68 36 L90 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M68 50 L90 58" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    {/* Cerci (tail feelers) */}
    <path d="M44 86 L38 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M56 86 L62 96" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MosquitoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    {/* Head */}
    <circle cx="50" cy="14" r="6" />
    {/* Proboscis */}
    <path d="M50 8 L50 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Thorax */}
    <ellipse cx="50" cy="30" rx="8" ry="10" />
    {/* Abdomen - striped */}
    <ellipse cx="50" cy="58" rx="10" ry="22" />
    <path d="M40 50 L60 50" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
    <path d="M40 56 L60 56" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
    <path d="M41 62 L59 62" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
    <path d="M42 68 L58 68" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" />
    {/* Wings */}
    <ellipse cx="30" cy="28" rx="16" ry="6" transform="rotate(-30 30 28)" opacity="0.3" />
    <ellipse cx="70" cy="28" rx="16" ry="6" transform="rotate(30 70 28)" opacity="0.3" />
    {/* Legs left */}
    <path d="M42 26 L18 14 L10 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 32 L14 36 L6 46" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 38 L20 54 L12 68" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Legs right */}
    <path d="M58 26 L82 14 L90 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M58 32 L86 36 L94 46" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M58 38 L80 54 L88 68" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SERVICES = [
  { id: 'ants', name: 'Ant Control', icon: AntIcon, description: 'We eliminate entire colonies at the source — not just the ants you see. One treatment, lasting protection. Guaranteed.' },
  { id: 'spiders', name: 'Spider Control', icon: SpiderIcon, description: 'Black widows and brown recluses removed safely from your home. We seal entry points so they don\'t come back.' },
  { id: 'rodents', name: 'Rodent Control', icon: RodentIcon, description: 'Complete exclusion, trapping, and sanitization. We seal every gap so mice and rats can\'t re-enter your home.' },
  { id: 'termites', name: 'Termite Control', icon: TermiteIcon, description: 'Caught early, termite damage is 100% preventable. Free inspections with advanced baiting systems and a 2-year warranty.' },
  { id: 'cockroaches', name: 'Cockroach Control', icon: CockroachIcon, description: 'German, American, or Oriental — we identify the species and apply targeted treatments that break the breeding cycle.' },
  { id: 'mosquitos', name: 'Mosquito Control', icon: MosquitoIcon, description: 'Take back your backyard. Our seasonal barrier treatments reduce mosquito populations by up to 90% around your property.' },
];

const REVIEWS = [
  { id: 1, name: 'Sarah J.', date: '2 days ago', rating: 5, text: 'Called at 9 AM about an ant invasion in my kitchen. They were at my door by noon. The tech explained everything he was doing and even showed me the entry points. Haven\'t seen a single ant since. Worth every penny.', city: 'Irvine' },
  { id: 2, name: 'Michael C.', date: '1 week ago', rating: 5, text: 'We have two golden retrievers and a toddler, so pet-safe was non-negotiable for us. Elite used botanical-based products and our dogs never even noticed. The rodent problem is completely gone.', city: 'Newport Beach' },
  { id: 3, name: 'Jessica M.', date: '2 weeks ago', rating: 5, text: 'Google Guaranteed for a reason. Showed up on time in a clean branded truck, uniformed tech, fixed our rodent problem in one visit. They even came back 2 weeks later to check — for free.', city: 'Laguna Niguel' },
  { id: 4, name: 'David T.', date: '3 weeks ago', rating: 5, text: 'Had termites and was terrified of the cost. They did a free inspection, showed me photos of the damage, and the quote was $400 less than the other company. Plus a 2-year warranty. No brainer.', city: 'Mission Viejo' },
  { id: 5, name: 'Emily R.', date: '1 month ago', rating: 5, text: 'As a mom of three, I was worried about chemicals. They explained their eco-friendly IPM approach and let me read the product labels. My kids played in the yard that same afternoon.', city: 'San Clemente' },
  { id: 6, name: 'Robert W.', date: '1 month ago', rating: 5, text: 'Third pest company I\'ve tried in 2 years. The first two would spray and leave. Elite actually found WHERE the cockroaches were coming from and sealed the entry points. Problem solved for good.', city: 'Aliso Viejo' },
  { id: 7, name: 'Linda G.', date: '2 months ago', rating: 5, text: 'Our realtor recommended them for a pre-sale termite inspection. They found damage the other inspector missed, treated it, and gave us a clean clearance report. Saved our home sale.', city: 'Dana Point' },
  { id: 8, name: 'James T.', date: '2 months ago', rating: 5, text: 'Been on their quarterly plan for a year now. Haven\'t seen a single spider, ant, or roach since they started. The tech even texts me before he comes. Best service experience I\'ve had.', city: 'Rancho Santa Margarita' },
  { id: 9, name: 'Karen W.', date: '2 months ago', rating: 5, text: 'I found a black widow near my daughter\'s playhouse. Called in a panic. They came QUICKLY and treated the entire perimeter. True professionals who actually care.', city: 'Tustin' },
  { id: 10, name: 'Steven H.', date: '3 months ago', rating: 5, text: 'Spider webs everywhere — inside, outside, garage. One treatment and they were all gone. They also installed door sweeps and sealed cracks I never would have noticed. Above and beyond.', city: 'Costa Mesa' },
  { id: 11, name: 'Nancy A.', date: '3 months ago', rating: 5, text: 'Moved into a new home and wanted preventive treatment. They did a full inspection, treated inside and out, and set us up on quarterly service. Peace of mind from day one.', city: 'Huntington Beach' },
  { id: 12, name: 'Paul B.', date: '4 months ago', rating: 5, text: 'Had mosquitoes so bad we couldn\'t use our backyard. After their barrier treatment, we hosted a BBQ the next weekend with zero bites. Unbelievable difference.', city: 'San Juan Capistrano' },
  { id: 13, name: 'Betty C.', date: '4 months ago', rating: 5, text: 'The price was fair, the service was fast, and they actually followed up. When I found one ant two weeks later, they came back at no charge. That\'s their guarantee and they honor it.', city: 'Lake Forest' },
  { id: 14, name: 'Mark L.', date: '5 months ago', rating: 5, text: 'I manage 12 rental properties. Elite handles all of them. Tenants love them because they\'re professional and communicate well. Best vendor relationship I have.', city: 'Laguna Hills' },
  { id: 15, name: 'Sandra Y.', date: '5 months ago', rating: 5, text: 'My neighbor recommended them and I see why. Professional, punctual, and the results speak for themselves. No more spiders in my garage. Finally.', city: 'Orange' },
  { id: 16, name: 'George K.', date: '6 months ago', rating: 5, text: 'We had a German cockroach problem that two other companies couldn\'t fix. Elite identified the species, used targeted bait, and they were gone in two treatments. Should have called them first.', city: 'Anaheim' },
];

const CITIES = [
  'Irvine', 'Newport Beach', 'Laguna Beach', 'Dana Point', 'San Clemente',
  'Mission Viejo', 'Aliso Viejo', 'Laguna Niguel', 'Lake Forest', 'Tustin',
  'Costa Mesa', 'Huntington Beach', 'San Juan Capistrano', 'Rancho Santa Margarita',
  'Orange', 'Laguna Hills', 'Foothill Ranch', 'Ladera Ranch',
  'Yorba Linda', 'Seal Beach', 'Anaheim Hills'
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextReview = () => setActiveReview((prev) => (prev + 1) % REVIEWS.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-primary">
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end"
      >
        <AnimatePresence>
          {scrolled && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={() => setIsModalOpen(true)}
              type="button"
              className="bg-accent text-primary px-6 py-4 rounded-full font-bold shadow-2xl hover:shadow-accent/40 hover:brightness-110 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-5 h-5 fill-primary" />
              <span>Quick Quote</span>
            </motion.button>
          )}
        </AnimatePresence>
        <a
          href="tel:1-800-555-0123"
          aria-label="Call Elite Pest Shield"
          className="bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/50 hover:brightness-125 transition-all duration-200 border-4 border-white/10 cursor-pointer"
        >
          <Phone className="w-7 h-7" />
        </a>
      </motion.div>

      {/* Quote Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} aria-label="Close modal"
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button onClick={() => setIsModalOpen(false)} type="button" aria-label="Close quote form"
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 cursor-pointer">
                <X className="w-5 h-5 text-primary" />
              </button>
              <div className="p-10 pt-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4"><ShieldCheck className="text-primary w-8 h-8" /></div>
                  <h3 id="quote-modal-title" className="text-3xl font-serif text-primary font-bold mb-2">Get Your Free Quote</h3>
                  <p className="text-primary/60">Fast, local response. No obligation, no contracts.</p>
                </div>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label htmlFor="quote-fname" className="sr-only">First Name</label><input id="quote-fname" type="text" placeholder="First Name" autoComplete="given-name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" /></div>
                    <div><label htmlFor="quote-lname" className="sr-only">Last Name</label><input id="quote-lname" type="text" placeholder="Last Name" autoComplete="family-name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" /></div>
                  </div>
                  <div><label htmlFor="quote-email" className="sr-only">Email</label><input id="quote-email" type="email" placeholder="Email Address" autoComplete="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" /></div>
                  <div><label htmlFor="quote-phone" className="sr-only">Phone</label><input id="quote-phone" type="tel" placeholder="Phone Number" autoComplete="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" /></div>
                  <div><label htmlFor="quote-pest" className="sr-only">Pest Problem</label>
                    <select id="quote-pest" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 text-primary/60 cursor-pointer">
                      <option>Select Your Pest Problem</option><option>Ants</option><option>Spiders</option><option>Rodents</option><option>Termites</option><option>Cockroaches</option><option>Mosquitoes</option><option>Bed Bugs</option><option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all duration-200 shadow-lg mt-4 cursor-pointer">Send My Quote Request</button>
                </form>
                <p className="mt-6 text-[10px] text-primary/40 text-center uppercase tracking-widest font-bold">Secure & Confidential • Response in 15 Min</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav aria-label="Main navigation" className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg"><Shield className="text-primary w-6 h-6" /></div>
            <span className="text-2xl font-serif font-bold tracking-tight text-white">Elite<span className="text-accent">Pest</span>Shield</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-white/80 hover:text-accent transition-colors font-medium">How It Works</a>
            <a href="#services" className="text-white/80 hover:text-accent transition-colors font-medium">Services</a>
            <a href="#guarantee" className="text-white/80 hover:text-accent transition-colors font-medium">Our Guarantee</a>
            <a href="#reviews" className="text-white/80 hover:text-accent transition-colors font-medium">Reviews</a>
            <a href="#areas" className="text-white/80 hover:text-accent transition-colors font-medium">Service Areas</a>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:1-800-555-0123" className="flex items-center gap-2 text-accent font-bold hover:brightness-125 transition-all duration-200">
              <Phone className="w-5 h-5" /><span>(800) 555-0123</span>
            </a>
            <button onClick={() => setIsModalOpen(true)} type="button" className="bg-accent text-primary px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-white transition-all duration-200 cursor-pointer">Get Free Quote</button>
          </div>
          <button type="button" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} className="md:hidden text-white cursor-pointer p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 bg-primary pt-24 px-6 md:hidden">
            <div className="flex flex-col gap-6 text-center">
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">How It Works</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Services</a>
              <a href="#guarantee" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Our Guarantee</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Reviews</a>
              <a href="#areas" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Service Areas</a>
              <hr className="border-white/10" />
              <a href="tel:1-800-555-0123" className="text-accent text-2xl font-bold flex items-center justify-center gap-2"><Phone /> (800) 555-0123</a>
              <button onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }} type="button" className="bg-accent text-primary py-4 rounded-xl font-bold text-xl cursor-pointer">Get Free Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content">
        {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-home.png" alt="Beautiful Southern California home with lush green yard" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-40 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent px-4 py-1.5 rounded-full">
                    <Leaf className="w-4 h-4" /><span className="text-sm font-bold uppercase tracking-wider">Pet & Family Safe</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full">
                    <ShieldCheck className="w-4 h-4 text-accent" /><span className="text-sm font-bold uppercase tracking-wider">Pest-Free Guarantee</span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-6">
                  Your Home,<br /><span className="text-accent italic">Pest-Free</span><br /><span className="text-white/90">Guaranteed.</span>
                </h1>
                <p className="text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                  Orange County's #1 rated pest control. Eco-friendly, pet-safe treatments with a <strong className="text-white">100% Pest-Free Guarantee</strong> — if they come back, so do we. Free.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:1-800-555-0123" className="bg-accent text-primary px-8 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
                    <Phone className="w-6 h-6" /> (800) 555-0123
                  </a>
                  <button onClick={() => setIsModalOpen(true)} type="button" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer">
                    Get Free Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
                <div className="flex items-center gap-6 text-white/50 text-sm">
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /><span>Free inspections</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /><span>No contracts</span></div>
                  <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /><span>$50 off today</span></div>
                </div>
              </motion.div>

              {/* Inline Lead Form — top sites all have this above the fold */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden md:block">
                <div className="bg-white/95 backdrop-blur-lg rounded-[2rem] p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-1">Get Your Free Quote</h3>
                    <p className="text-primary/50 text-sm">Most quotes delivered in under 15 minutes</p>
                  </div>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-3">
                      <div><label htmlFor="hero-fname" className="sr-only">First Name</label><input id="hero-fname" type="text" placeholder="First Name" autoComplete="given-name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" /></div>
                      <div><label htmlFor="hero-lname" className="sr-only">Last Name</label><input id="hero-lname" type="text" placeholder="Last Name" autoComplete="family-name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" /></div>
                    </div>
                    <div><label htmlFor="hero-phone" className="sr-only">Phone</label><input id="hero-phone" type="tel" placeholder="Phone Number" autoComplete="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" /></div>
                    <div><label htmlFor="hero-zip" className="sr-only">Zip Code</label><input id="hero-zip" type="text" placeholder="Zip Code" autoComplete="postal-code" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50" /></div>
                    <div><label htmlFor="hero-pest" className="sr-only">Pest Problem</label>
                      <select id="hero-pest" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer">
                        <option>What pest problem do you have?</option><option>Ants</option><option>Spiders</option><option>Rodents</option><option>Termites</option><option>Cockroaches</option><option>Mosquitoes</option><option>Bed Bugs</option><option>Other</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 shadow-lg cursor-pointer flex items-center justify-center gap-2">Get My Free Quote <ArrowRight className="w-5 h-5" /></button>
                  </form>
                  <p className="mt-4 text-[10px] text-primary/40 text-center uppercase tracking-widest font-bold">Secure & Confidential • No Obligation</p>
                </div>
              </motion.div>
            </div>
          </div>
          {/* Stats Bar */}
          <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10 py-5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div><p className="text-3xl font-bold text-accent">8,247</p><p className="text-white/60 text-sm font-medium">5-Star Reviews</p></div>
              <div><p className="text-3xl font-bold text-accent">15+</p><p className="text-white/60 text-sm font-medium">Years in SoCal</p></div>
              <div><p className="text-3xl font-bold text-accent">Free</p><p className="text-white/60 text-sm font-medium">Home Inspections</p></div>
              <div><p className="text-3xl font-bold text-accent">100%</p><p className="text-white/60 text-sm font-medium">Satisfaction Guaranteed</p></div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ TRUST BADGES ═══════════════════════ */}
        <section className="bg-white py-8 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-primary/60 font-bold"><Award className="text-accent w-6 h-6" /> BBB A+ Accredited</div>
            <div className="flex items-center gap-2 text-primary/60 font-bold"><ShieldCheck className="text-accent w-6 h-6" /> Google Guaranteed</div>
            <div className="flex items-center gap-2 text-primary/60 font-bold"><BadgeCheck className="text-accent w-6 h-6" /> NPMA Member</div>
            <div className="flex items-center gap-2 text-primary/60 font-bold"><Leaf className="text-accent w-6 h-6" /> EcoSMART Certified</div>
            <div className="flex items-center gap-2 text-primary/60 font-bold"><Star className="text-accent w-6 h-6 fill-accent" /> Best of OC 2025</div>
          </div>
        </section>

        {/* ═══════════════════════ HOW IT WORKS (NEW) ═══════════════════════ */}
        <section id="how-it-works" className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Pest-Free in 3 Simple Steps</h2>
            <p className="text-primary/60 max-w-2xl mx-auto text-lg">No hassle, no upsells, no surprises. Here's exactly what happens when you call.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Bug, title: 'Free Comprehensive Inspection', desc: 'A licensed specialist will thoroughly inspect your property\'s interior and exterior to identify the exact species, locate nests, and find entry points.' },
              { step: '02', icon: Leaf, title: 'Custom Treatment Plan', desc: 'Based on our findings, we create a targeted, family-safe action plan to eliminate your specific pest problem at the source—not just cover it up.' },
              { step: '03', icon: ShieldCheck, title: 'Year-Round Protection', desc: 'We don\'t just eliminate the current infestation. We create a protective barrier around your home and provide ongoing maintenance to ensure pests stay gone for good.' }
            ].map((item) => (
              <motion.div key={item.step} whileHover={{ y: -6 }} className="relative bg-white p-8 pt-10 rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all duration-300 overflow-hidden group">
                {/* Gold top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />
                {/* Step number */}
                <div className="absolute top-5 right-6 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">{item.step}</span>
                </div>
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-primary/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setIsModalOpen(true)} type="button" className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-white hover:shadow-2xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2 group">
              Schedule Your Free Inspection <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </section>

        {/* ═══════════════════════ SERVICES ═══════════════════════ */}
        <section id="services" className="bg-slate-50">
          <div className="section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">We Don't Just Spray — We Solve.</h2>
              <p className="text-primary/60 max-w-2xl mx-auto text-lg">Targeted treatments that address the root of your pest problem. Every service includes a free follow-up if pests return.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <motion.div key={service.id} whileHover={{ y: -6 }} className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 cursor-pointer text-center">
                  <div className="w-24 h-24 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-12 h-12 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
                  <p className="text-primary/60 leading-relaxed mb-6">{service.description}</p>
                  <button onClick={() => setIsModalOpen(true)} type="button" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors duration-200 cursor-pointer group/btn">
                    Get a Free Quote <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ GUARANTEE (NEW) ═══════════════════════ */}
        <section id="guarantee" className="bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-4 py-1.5 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Promise to You</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Pest-Free <br /><span className="text-accent italic">Guarantee.</span>
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We're so confident in our work that we back every treatment with a named guarantee. If pests return between scheduled visits, we come back and re-treat — at absolutely no cost to you. No questions asked. No fine print.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { icon: RefreshCw, text: 'Unlimited free re-treatments if pests return' },
                  { icon: Clock, text: 'Fast response times and flexible scheduling' },
                  { icon: ThumbsUp, text: 'No long-term contracts — cancel anytime' },
                  { icon: PawPrint, text: '100% pet-safe and child-safe products' },
                  { icon: Sparkles, text: '2-year warranty on all termite treatments' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-accent" /></div>
                    <span className="text-lg font-medium text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsModalOpen(true)} type="button" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white transition-all duration-200 cursor-pointer">
                Claim Your Free Inspection
              </button>
            </div>
            <div className="relative hidden md:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/family-yard.png" alt="Happy family with dog playing in a pest-free Southern California backyard" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-3xl shadow-xl text-primary">
                <div className="flex items-center gap-4 mb-2"><PawPrint className="w-8 h-8" /><span className="text-3xl font-bold">100%</span></div>
                <p className="font-bold uppercase tracking-wider text-sm">Pet & Family Safe</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ REVIEWS ═══════════════════════ */}
        <section id="reviews" className="bg-white overflow-hidden">
          <div className="section-padding">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
                  <Star className="w-4 h-4 text-accent fill-accent" /><span className="text-sm font-bold text-primary uppercase tracking-wider">4.9 out of 5 stars</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Based on 8,247 Reviews</h2>
                <p className="text-primary/60 text-lg">Real stories from real homeowners across Orange County and LA.</p>
              </div>
              <div className="flex gap-4">
                <button onClick={prevReview} type="button" aria-label="Previous review" className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"><ChevronLeft /></button>
                <button onClick={nextReview} type="button" aria-label="Next review" className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"><ChevronRight /></button>
              </div>
            </div>
            <div className="relative" aria-live="polite" aria-atomic="false">
              <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeReview * 33.33}%)` }}>
                {REVIEWS.map((review) => (
                  <div key={review.id} className="min-w-[100%] md:min-w-[33.33%] bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <div className="flex items-center gap-1 mb-4">{[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-accent fill-accent" />))}</div>
                    <p className="text-primary font-medium mb-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center justify-between">
                      <div><h4 className="font-bold text-primary">{review.name}</h4><p className="text-primary/40 text-sm">{review.city} • {review.date}</p></div>
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-100"><img src="https://www.google.com/favicon.ico" alt="Verified Google review" className="w-5 h-5 opacity-50" loading="lazy" /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ ECO-FRIENDLY ═══════════════════════ */}
        <section className="bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"><Leaf className="w-full h-full rotate-12" /></div>
          <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <Leaf className="w-4 h-4 text-accent" /><span className="text-sm font-bold uppercase tracking-wider">Eco-Friendly Approach</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Kills Pests. <br /><span className="text-accent italic">Not Your Lawn.</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Your kids, your pets, and your garden are safe with us. We use EcoSMART-certified, botanical-based products and Integrated Pest Management (IPM) techniques — the same approach used by the nation's top hospitals and schools.
              </p>
              <div className="space-y-4 mb-10">
                {['EcoSMART-certified botanical treatments', 'Safe for pets, children, and gardens', 'No harsh chemical residue in your home', 'IPM methods that prevent future infestations'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-primary" /></div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsModalOpen(true)} type="button" className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white transition-all duration-200 cursor-pointer">
                Book an Eco-Safe Treatment
              </button>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/images/pest-tech.png" alt="Professional pest control technician greeting happy homeowner at front door with service truck" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center"><Award className="text-primary" /></div>
                <div><p className="font-bold text-primary">Certified Pros</p><p className="text-xs text-primary/40 uppercase tracking-widest">State Licensed</p></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════ SERVICE AREAS ═══════════════════════ */}
        <section id="areas" className="bg-primary text-white">
          <div className="section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Protecting Homes Across Orange County</h2>
              <p className="text-white/60 text-lg">Local technicians who know your neighborhood. Fast response times because we're already nearby.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
              {CITIES.map((city) => (
                <a key={city} href={`#${city.toLowerCase().replace(/\s+/g, '-')}`} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-accent hover:text-primary hover:border-accent transition-all duration-200 font-medium cursor-pointer text-sm">
                  {city}
                </a>
              ))}
            </div>

            {/* Final CTA */}
            <div className="mt-16 bg-accent rounded-3xl text-primary px-8 md:px-14 py-10 md:py-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Don't Let Pests Win Another Night.</h3>
                  <p className="text-primary/70">Schedule your free inspection today and get <strong>$50 off</strong> your first service.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <button onClick={() => setIsModalOpen(true)} type="button" className="bg-primary text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all duration-200 cursor-pointer text-base">Get Free Quote</button>
                  <a href="tel:1-800-555-0123" className="bg-white text-primary px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base">
                    <Phone className="w-4 h-4" /> (800) 555-0123
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="bg-slate-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center"><Shield className="text-accent w-5 h-5" /></div>
              <span className="text-xl font-serif font-bold tracking-tight text-primary">Elite<span className="text-accent">Pest</span>Shield</span>
            </div>
            <p className="text-primary/60 mb-6">Orange County's #1 rated pest control. Family owned. Pet safe. Eco-friendly. Guaranteed results since 2010.</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" aria-label="Yelp" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-200 cursor-pointer">
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Pest Solutions</h4>
            <ul className="space-y-4 text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">Ant Control</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Termite Inspections</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Rodent Exclusion</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Spider Removal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mosquito Barrier</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bed Bug Treatment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4 text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#guarantee" className="hover:text-accent transition-colors">Our Guarantee</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Eco-Safe Approach</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-primary/60">
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-accent" /><a href="tel:1-800-555-0123" className="hover:text-accent transition-colors">(800) 555-0123</a></li>
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-accent" /><span>Irvine, CA 92618</span></li>
              <li className="flex items-center gap-3"><Clock className="w-5 h-5 text-accent" /><span>Mon-Sat: 7am - 7pm</span></li>
              <li className="flex items-center gap-3"><ShieldCheck className="w-5 h-5 text-accent" /><span className="text-accent font-bold">Fully licensed & insured</span></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary/40 text-sm">© {new Date().getFullYear()} Elite Pest Shield. All rights reserved. Licensed & Insured. CA License #PR-12345</p>
          <div className="flex items-center gap-8 grayscale opacity-50">
            <img src="https://www.google.com/favicon.ico" alt="Google partner" className="w-6 h-6" loading="lazy" />
            <img src="https://www.bbb.org/favicon.ico" alt="BBB accredited" className="w-6 h-6" loading="lazy" />
            <span className="font-bold text-xs uppercase tracking-widest">NPMA Member</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Shield, 
  Bug, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Leaf, 
  PawPrint, 
  Clock, 
  Award,
  ChevronLeft,
  ChevronRight,
  Search,
  Zap,
  Home,
  MousePointer2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  { id: 'ants', name: 'Ant Control', icon: Bug, description: 'Complete elimination of ant colonies and prevention of future invasions.' },
  { id: 'spiders', name: 'Spider Control', icon: Bug, description: 'Safe removal of venomous and common spiders from your living spaces.' },
  { id: 'rodents', name: 'Rodent Control', icon: MousePointer2, description: 'Exclusion and removal of mice and rats to protect your home structure.' },
  { id: 'termites', name: 'Termite Control', icon: Shield, description: 'Advanced baiting and treatment systems to stop wood-destroying pests.' },
  { id: 'cockroaches', name: 'Cockroach Control', icon: Bug, description: 'Sanitization and targeted treatments for persistent roach infestations.' },
  { id: 'mosquitos', name: 'Mosquito Control', icon: Zap, description: 'Seasonal barrier treatments to reclaim your outdoor living areas.' },
];

const REVIEWS = [
  { id: 1, name: 'Sarah Jenkins', date: '2 days ago', rating: 5, text: 'Elite Pest Shield was amazing! They were so professional and the tech explained everything. No more ants!', city: 'Irvine' },
  { id: 2, name: 'Michael Chen', date: '1 week ago', rating: 5, text: 'Best pest control in SoCal. We have two dogs and their pet-safe approach gave us peace of mind.', city: 'Newport Beach' },
  { id: 3, name: 'Jessica Miller', date: '2 weeks ago', rating: 5, text: 'Google Guaranteed for a reason. They showed up on time and fixed our rodent problem in one visit.', city: 'Laguna Niguel' },
  { id: 4, name: 'David Thompson', date: '3 weeks ago', rating: 5, text: 'Very impressed with the service. The tech was uniformed and the truck was clean. Very professional.', city: 'Mission Viejo' },
  { id: 5, name: 'Emily Rodriguez', date: '1 month ago', rating: 5, text: 'Eco-friendly and effective. I highly recommend them for anyone with small children.', city: 'San Clemente' },
  { id: 6, name: 'Robert Wilson', date: '1 month ago', rating: 5, text: 'Great experience from start to finish. The free quote was accurate and the service was top-notch.', city: 'Aliso Viejo' },
  { id: 7, name: 'Linda Garcia', date: '2 months ago', rating: 5, text: 'They saved our home from termites. Professional, thorough, and very knowledgeable.', city: 'Dana Point' },
  { id: 8, name: 'James Taylor', date: '2 months ago', rating: 5, text: 'Prompt and reliable. We haven\'t seen a single bug since they started their quarterly service.', city: 'Rancho Santa Margarita' },
  { id: 9, name: 'Karen White', date: '2 months ago', rating: 5, text: 'Excellent service! The technician was very polite and thorough. Highly recommend.', city: 'Tustin' },
  { id: 10, name: 'Steven Hall', date: '3 months ago', rating: 5, text: 'Very satisfied with the results. They handled our spider problem quickly and efficiently.', city: 'Costa Mesa' },
  { id: 11, name: 'Nancy Adams', date: '3 months ago', rating: 5, text: 'Great company to work with. They are always on time and do a fantastic job.', city: 'Huntington Beach' },
  { id: 12, name: 'Paul Baker', date: '4 months ago', rating: 5, text: 'The best pest control service I have ever used. Professional and effective.', city: 'San Juan Capistrano' },
  { id: 13, name: 'Betty Clark', date: '4 months ago', rating: 5, text: 'Highly recommend Elite Pest Shield. They are very reliable and their prices are fair.', city: 'Lake Forest' },
  { id: 14, name: 'Mark Lewis', date: '5 months ago', rating: 5, text: 'Very professional and knowledgeable. They solved our pest problem in no time.', city: 'Laguna Hills' },
  { id: 15, name: 'Sandra Young', date: '5 months ago', rating: 5, text: 'Great service and friendly staff. I am very happy with the results.', city: 'Orange' },
  { id: 16, name: 'George King', date: '6 months ago', rating: 5, text: 'Excellent experience. They were very thorough and professional. No more bugs!', city: 'Anaheim' },
];

const CITIES = [
  'Irvine', 'Newport Beach', 'Laguna Beach', 'Dana Point', 'San Clemente', 
  'Mission Viejo', 'Aliso Viejo', 'Laguna Niguel', 'Lake Forest', 'Tustin', 
  'Costa Mesa', 'Huntington Beach', 'San Juan Capistrano', 'Rancho Santa Margarita'
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
              className="bg-accent text-primary px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              <Zap className="w-5 h-5 fill-primary" />
              <span>Quick Quote</span>
            </motion.button>
          )}
        </AnimatePresence>
        <a 
          href="tel:1-800-ELITE-SHIELD" 
          className="bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border-4 border-white/10"
        >
          <Phone className="w-7 h-7" />
        </a>
      </motion.div>

      {/* Quote Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
              
              <div className="p-10 pt-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-serif text-primary font-bold mb-2">Get Your Free Quote</h3>
                  <p className="text-primary/60">Protect your home with Southern California's #1 rated pest shield.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                    <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-primary/60">
                    <option>Select Your Pest Problem</option>
                    <option>Ants</option>
                    <option>Spiders</option>
                    <option>Rodents</option>
                    <option>Termites</option>
                    <option>Other</option>
                  </select>
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg mt-4">
                    Send My Quote Request
                  </button>
                </form>
                <p className="mt-6 text-[10px] text-primary/40 text-center uppercase tracking-widest font-bold">
                  Secure & Confidential • Response in 15 Min
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="text-primary w-6 h-6" />
            </div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
              Elite<span className="text-accent">Pest</span>Shield
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/80 hover:text-accent transition-colors font-medium">Services</a>
            <a href="#about" className="text-white/80 hover:text-accent transition-colors font-medium">Eco-Safe</a>
            <a href="#reviews" className="text-white/80 hover:text-accent transition-colors font-medium">Reviews</a>
            <a href="#areas" className="text-white/80 hover:text-accent transition-colors font-medium">Service Areas</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:1-800-ELITE-SHIELD" className="flex items-center gap-2 text-accent font-bold hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
              <span>(800) 555-0123</span>
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-accent text-primary px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Free Quote
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Eco-Safe</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Reviews</a>
              <a href="#areas" onClick={() => setIsMenuOpen(false)} className="text-2xl text-white font-serif">Service Areas</a>
              <hr className="border-white/10" />
              <a href="tel:1-800-ELITE-SHIELD" className="text-accent text-2xl font-bold flex items-center justify-center gap-2">
                <Phone /> (800) 555-0123
              </a>
              <button 
                onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}
                className="bg-accent text-primary py-4 rounded-xl font-bold text-xl"
              >
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/socal-home/1920/1080" 
            alt="Beautiful Southern California Home" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent px-4 py-1.5 rounded-full mb-6 mx-auto">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Google Guaranteed • BBB A+ Rated</span>
            </div>
            <h1 className="text-5xl md:text-8xl text-white font-bold leading-tight mb-6">
              Protect What <br />
              <span className="text-accent italic">Matters Most.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Premium, pet-safe, and eco-friendly pest control solutions for your Southern California home. Guaranteed results or we return for free.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-2 group"
              >
                Get Your Free Quote <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:1-800-ELITE-SHIELD" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Phone className="w-6 h-6" /> (800) 555-0123
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges Floating */}
        <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Award className="text-accent" /> BBB ACCREDITED A+
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Shield className="text-accent" /> GOOGLE GUARANTEED
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <CheckCircle2 className="text-accent" /> NPMA MEMBER
            </div>
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Star className="text-accent fill-accent" /> 4.9/5 GOOGLE RATING
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Comprehensive Pest Solutions</h2>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            We don't just spray; we solve. Our targeted treatments address the root of the problem for lasting results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -10 }}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-accent transition-all duration-300"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
              <p className="text-primary/60 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eco-Friendly / About Section */}
      <section id="about" className="bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Leaf className="w-full h-full rotate-12" />
        </div>
        
        <div className="section-padding grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img 
                src="https://picsum.photos/seed/happy-dog/800/800" 
                alt="Happy dog in a clean yard" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-3xl shadow-xl text-primary hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <PawPrint className="w-8 h-8" />
                <span className="text-3xl font-bold">100%</span>
              </div>
              <p className="font-bold uppercase tracking-wider text-sm">Pet & Family Safe</p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold uppercase tracking-wider">Eco-Friendly Approach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Effective Pest Control <br />
              <span className="text-accent italic">Without the Harsh Chemicals.</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              At Elite Pest Shield, we believe you shouldn't have to choose between a pest-free home and the safety of your family. Our Integrated Pest Management (IPM) approach uses botanical-based products and targeted techniques that are lethal to pests but safe for your loved ones.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                'Botanical-based treatments',
                'Pet and child-safe application',
                'Minimal environmental impact',
                'Long-term prevention strategies'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white transition-all">
              Our Safety Standards
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="bg-slate-50 overflow-hidden">
        <div className="section-padding">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Your Neighbors Say</h2>
              <p className="text-primary/60 text-lg">Join 5,000+ happy homeowners in Southern California.</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevReview}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={nextReview}
                className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeReview * 33.33}%)` }}>
              {REVIEWS.map((review) => (
                <div key={review.id} className="min-w-[100%] md:min-w-[33.33%] bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-primary font-medium mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-primary">{review.name}</h4>
                      <p className="text-primary/40 text-sm">{review.city} • {review.date}</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                      <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 opacity-50" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branded Truck / Team Section */}
      <section className="section-padding grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Professional Service, <br />Every Single Time.</h2>
          <p className="text-primary/60 text-lg mb-8 leading-relaxed">
            When an Elite Pest Shield technician arrives at your home, you'll know it. Our branded trucks are fully equipped, and our technicians are uniformed, background-checked, and highly trained. We treat your home with the same respect we treat our own.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <Clock className="text-accent w-8 h-8 mb-4" />
              <h4 className="font-bold text-primary mb-1">On-Time Arrival</h4>
              <p className="text-sm text-primary/60">We value your time and stick to our schedule.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <Shield className="text-accent w-8 h-8 mb-4" />
              <h4 className="font-bold text-primary mb-1">Background Checked</h4>
              <p className="text-sm text-primary/60">Safety and trust are our top priorities.</p>
            </div>
          </div>
          <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2">
            Meet Our Team <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/pest-truck/1000/800" 
              alt="Elite Pest Shield Branded Truck" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <Award className="text-primary" />
            </div>
            <div>
              <p className="font-bold text-primary">Certified Pros</p>
              <p className="text-xs text-primary/40 uppercase tracking-widest">State Licensed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="bg-primary text-white">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serving Southern California</h2>
            <p className="text-white/60 text-lg">We dominate local search because we dominate local service.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {CITIES.map((city) => (
              <a 
                key={city} 
                href={`#${city.toLowerCase().replace(' ', '-')}`}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-accent hover:text-primary hover:border-accent transition-all font-medium"
              >
                {city}
              </a>
            ))}
          </div>

          <div className="mt-20 p-12 bg-accent rounded-[3rem] text-primary flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Ready to reclaim your home?</h3>
              <p className="text-primary/70 text-lg">Schedule your free inspection today and get $50 off your first service.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-primary/90 transition-all"
              >
                Get Free Quote
              </button>
              <a href="tel:1-800-ELITE-SHIELD" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Phone /> (800) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Shield className="text-accent w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-primary">
                Elite<span className="text-accent">Pest</span>Shield
              </span>
            </div>
            <p className="text-primary/60 mb-6">
              Premium pest control services for Southern California. Family owned, pet safe, and eco-friendly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Services</h4>
            <ul className="space-y-4 text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">Residential Pest Control</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Commercial Pest Control</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Termite Inspections</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Rodent Exclusion</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Mosquito Barrier</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Company</h4>
            <ul className="space-y-4 text-primary/60">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Standards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contact</h4>
            <ul className="space-y-4 text-primary/60">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:1-800-ELITE-SHIELD" className="hover:text-accent transition-colors">(800) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Irvine, CA 92618</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span>Mon-Sat: 7am - 7pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary/40 text-sm">
            © {new Date().getFullYear()} Elite Pest Shield. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex items-center gap-8 grayscale opacity-50">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            <img src="https://www.bbb.org/favicon.ico" alt="BBB" className="w-6 h-6" />
            <span className="font-bold text-xs uppercase tracking-widest">NPMA Member</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

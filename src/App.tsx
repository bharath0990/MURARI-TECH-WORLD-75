import React, { useEffect, useState } from 'react';
import { Shield, BookOpen, Users, Award, Clock, Star, CheckCircle, ArrowRight, Menu, X, Instagram, Linkedin, Youtube, Github, Send } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnrollNow = () => {
    const message = "Hi! I'm interested in the Bug Bounty Training Master Course. Can you provide more details?";
    const phoneNumber = "916305727175"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/murari_tech_world_75?igsh=NzYycGloa241cmxj", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/thota-murari-1abb92285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Youtube, href: "https://linktw.in/bYBovk", label: "YouTube" },
    { icon: Github, href: "https://github.com/thotamurari", label: "GitHub" },
    { icon: Send, href: "https://t.me/Ethical_Hacker_Murari_75", label: "Telegram" }
  ];

  const courseContent = [
    {
      category: "Introduction",
      topics: ["Overview", "Setting up Lab Environment"]
    },
    {
      category: "Recon / Information Gathering",
      topics: ["GHDB", "Google", "Shodan", "Automating Information Gathering"]
    },
    {
      category: "Building Methodologies",
      topics: ["Checklist will be shared", "Notes will be shared"]
    },
    {
      category: "Cross Site Scripting",
      topics: ["Stored", "DOM", "Blind"]
    },
    {
      category: "POST Based",
      topics: ["Business Logic Vulnerabilities"]
    },
    {
      category: "Bypasses",
      topics: ["401 Bypass", "403 Bypass", "JWT", "OTP", "Rate Limit", "Captcha", "File Upload", "WAF", "Input Validation Systems"]
    },
    {
      category: "CSRF (with Bypasses)",
      topics: ["XXE", "Interface Design Vulnerabilities"]
    },
    {
      category: "Authentic",
      topics: ["CSRF", "Requesting Technologies like", "ReactJS", "Angular", "WordPress", "OSCP", "GraphQL", "Apache", "Ruby", "Springboot", "Grafana"]
    },
    {
      category: "IDOR",
      topics: ["AI and Hacking", "Building Automations", "Personal Tools (Scripts will be shared)"]
    },
    {
      category: "CSRF",
      topics: ["Types", "Chaining", "Bypasses"]
    },
    {
      category: "Race",
      topics: ["Types", "Chaining", "Bypasses"]
    },
    {
      category: "Password Reset Exploitation",
      topics: ["Account Takeover", "Access Control Vulnerabilities", "Session Related Vulnerabilities"]
    }
  ];

  const features = [
    "Certificate will be Provided",
    "Lifetime Recordings will be provided",
    "Methodology Breakdown",
    "Guest Sessions",
    "Notes will be Provided",
    "Real Industry Secrets",
    "Automations Tools will be shared"
  ];

  const additionalFeatures = [
    "Exclusive Resources by Ethical Hacker Murari",
    "Live Classes",
    "Limited Seats",
    "Community Groups",
    "Program Suggestions will be given",
    "Lifetime access Support"
  ];

  const testimonials = [
    {
      name: "Akshay Jain",
      role: "Cloud Security Architect",
      content: "Enrolling in this course of Murari was the best decision. His teaching taught practically and in-depth Alongside providing detailed explanations of real-world scenarios. His way I genuinely recommend enrolling into this course. Information is transmitted in having great focus! 🔥",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Student Name",
      role: "Security Researcher",
      content: "Amazing course content and practical approach. The methodologies shared are industry-standard and the community support is excellent.",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <button
                className="flex items-center space-x-2 focus:outline-none"
                onClick={() => window.location.reload()}
                aria-label="Refresh Home"
              >
                <img src="/mainlogo.jpg" alt="Main Logo" className="h-12 w-12 rounded-full object-contain bg-black mr-2" />
                <span className="text-xl font-bold">MURARI TECH WORLD 75</span>
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#content" className="hover:text-gray-300 transition-colors">Content</a>
              <a href="#features" className="hover:text-gray-300 transition-colors">Features</a>
              <a href="#testimonials" className="hover:text-gray-300 transition-colors">Reviews</a>
              
              {/* Social Media Links */}
              <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-gray-700">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded-md">About</a>
              <a href="#content" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Content</a>
              <a href="#features" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Features</a>
              <a href="#testimonials" className="block px-3 py-2 hover:bg-gray-800 rounded-md">Reviews</a>
              
              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-4 pt-4 pb-2 border-t border-gray-700 mt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-800/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Bug Bounty{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Training
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Master Course for Web Pentesters
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleEnrollNow}
                  className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/25"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={() => {
                    const el = document.getElementById('content');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Learn More
                </button>
              </div>

              {/* Hero Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <span className="text-gray-400 text-sm">Follow me:</span>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative w-full max-w-md mx-auto">
                <img 
                  src="/anonymous.jpg" 
                  alt="Anonymous" 
                  className="w-72 h-72 object-cover rounded-full border-4 border-gray-700 shadow-2xl mx-auto bg-black" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About this Training</h2>
              <p className="text-gray-300 leading-relaxed">
                Kickstart your bug hunting journey with our <span className="text-white font-semibold">0 to 100 day Bug Bounty Master Course</span>. Learn hands-on techniques, dive into live hunting sessions to discover new exploits. Discover 2500+ tested methodologies that give you a hacker's advantage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With this training you will increase your hunting skills exponentially. Whether you're just starting out or already hunting bugs, our course will take you to the next level. Ray ahead of the game and become a top bug hunter with us!
              </p>
            </div>

            <div className="relative">
              <img 
                src="/channels4_banner.jpg" 
                alt="Murari Tech World 75 Banner" 
                className="w-full h-auto rounded-xl border border-gray-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section id="content" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Course Content</h2>
            <p className="text-gray-400 text-lg">Comprehensive curriculum covering all aspects of bug bounty hunting</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseContent.map((section, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-700 hover:border-white/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{section.category}</h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Features</h2>
            <p className="text-gray-400 text-lg">What makes our course special</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...features, ...additionalFeatures].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-900 to-black rounded-lg border border-gray-700 hover:border-white/50 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Timings</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-700">
              <Clock className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Duration</h3>
              <p className="text-gray-400">8+ to 10 Weeks</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-700">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <p className="text-gray-400">Wednesday to Sunday Every week</p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-700">
              <Award className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sessions</h3>
              <p className="text-gray-400">6 to 10 hours + Live Hunting Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What People Are Saying</h2>
            <p className="text-gray-400 text-lg">Real feedback from our students</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-700 hover:border-white/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-white text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900/80 to-black/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Unlock Your Future with Our Premium Course
          </h2>
          
          <div className="mb-8">
            <p className="text-2xl font-semibold mb-2">
              Get lifetime access to our exclusive course for just <span className="text-white">₹499 INR or 75 USD</span>
            </p>
            <p className="text-gray-400">
              This price includes full access to all materials, updates, and expert guidance. Transform your skills and reach new heights in your career.
            </p>
          </div>

          <button 
            onClick={handleEnrollNow}
            className="inline-flex items-center px-12 py-4 bg-white text-black hover:bg-gray-200 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 mb-6"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-6 h-6" />
          </button>

          <p className="text-sm text-gray-400">
            Limited Offer! Get access today and start mastering the skills that will set you apart.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-2">
              <img src="/mainlogo.jpg" alt="Main Logo" className="h-12 w-12 rounded-full object-contain bg-black mr-2" />
              <span className="text-xl font-bold">MURARI TECH WORLD 75</span>
            </div>
            
            <div className="flex justify-center">
              <div className="flex items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 whitespace-nowrap overflow-x-auto">
                © 2025 MURARI TECH WORLD 75 . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
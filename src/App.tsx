import React from 'react';
import { Flame, Target, Sparkles, Brain, ArrowRight, ChevronRight, Users, Star, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold">PowerTalk</span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-semibold transition-all">
          Ignite Your Journey
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Achieve Your
            <span className="text-orange-500"> Goals</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          With PowerTalk, you'll receive personalized motivational pep talks crafted specifically for you and your goals.
          It’s time to supercharge your productivity, silence procrastination, and finally turn your dreams into reality.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 mx-auto">
            Unlock Your Potential Today <ArrowRight className="w-5 h-5" />
          </button>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Life-Changing Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PowerTalk isn't just another app. It's a transformation catalyst that delivers real, 
              measurable changes to your life, work, and wellbeing.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Anti-Procrastination Dose */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-10 rounded-3xl border-2 border-orange-500 h-full transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-8">
                  <Target className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Anti-Procrastination Dose</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Break free from the cycle of delay and regret. PowerTalk's personalized motivation 
                  targets the root causes of your procrastination, giving you the exact push you need 
                  to start—and finish—what matters most.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-orange-400 font-semibold">Users report:</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>73% reduction in task avoidance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>2.4x increase in project completion rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Anti-Burnout Pill */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-10 rounded-3xl border-2 border-orange-500 h-full transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-8">
                  <Flame className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Anti-Burnout Pill</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Reclaim your energy and passion. When exhaustion and overwhelm threaten to consume you, 
                  PowerTalk provides the perfect blend of encouragement, perspective, and practical wisdom 
                  to help you recover and thrive.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-orange-400 font-semibold">Users report:</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>68% improvement in work-life balance</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>Renewed sense of purpose within 2 weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Productivity Boost */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-gray-900 p-10 rounded-3xl border-2 border-orange-500 h-full transform transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-8">
                  <Sparkles className="w-10 h-10 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Productivity Boost</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Unlock your full potential. PowerTalk's tailored motivation helps you achieve 
                  laser-sharp focus, eliminate distractions, and tap into flow states that multiply 
                  your output while making work feel effortless.
                </p>
                <div className="pt-4 border-t border-gray-700">
                  <p className="text-orange-400 font-semibold">Users report:</p>
                  <ul className="mt-3 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>3.1x increase in daily task completion</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <span>87% reduction in distraction time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-full font-semibold text-xl transition-all flex items-center gap-3 mx-auto">
              Transform Your Life Today <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Personas Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Your Goals, Your Journey, Your Victory</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're climbing corporate ladders or breaking athletic records, PowerTalk adapts 
              to your unique path, providing the fuel you need to reach new heights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold">Unstoppable Entrepreneurs</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "When doubt creeps in during those late nights, PowerTalk reminds me why I started. 
                It's the partner that keeps me pushing forward, no matter what."
              </p>
              <div className="flex items-center gap-1 text-orange-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold">Elite Athletes</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "PowerTalk is my secret weapon. When my body says stop, these personalized messages 
                remind me I've got another gear. Every. Single. Time."
              </p>
              <div className="flex items-center gap-1 text-orange-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold">Driven Students</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "From pulling all-nighters to acing finals, PowerTalk keeps me focused on my goals. 
                It's like having a personal success coach in my pocket."
              </p>
              <div className="flex items-center gap-1 text-orange-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-6 py-20 bg-gray-800/30 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Champions Who Dared to Dream</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These aren't just success stories - they're blueprints for your own transformation. 
              See how PowerTalk has ignited unstoppable momentum in others.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl relative">
              <Quote className="w-10 h-10 text-orange-500/20 absolute top-4 right-4" />
              <div className="mb-6">
                <div className="flex items-center gap-1 text-orange-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-300 italic">
                  "PowerTalk turned my moments of doubt into fuel for success. Every morning, it ignites 
                  that fire inside me to push harder, dream bigger, and achieve more."
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Sarah Mitchell" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Sarah Mitchell</p>
                  <p className="text-sm text-gray-400">Tech Entrepreneur</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl relative">
              <Quote className="w-10 h-10 text-orange-500/20 absolute top-4 right-4" />
              <div className="mb-6">
                <div className="flex items-center gap-1 text-orange-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-300 italic">
                  "When others see limits, PowerTalk shows me possibilities. It's not just motivation - 
                  it's the voice that reminds me I'm built for greatness."
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Marcus Chen" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Marcus Chen</p>
                  <p className="text-sm text-gray-400">Professional Athlete</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl relative">
              <Quote className="w-10 h-10 text-orange-500/20 absolute top-4 right-4" />
              <div className="mb-6">
                <div className="flex items-center gap-1 text-orange-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-gray-300 italic">
                  "PowerTalk transformed my creative blocks into breakthroughs. It's like having a 
                  personal mentor who knows exactly what to say to unleash your full potential."
                </p>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Emma Rodriguez" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-gray-400">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why PowerTalk Works Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-8">The Science of Unstoppable Success</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              "Your potential is limitless - but sometimes you need that extra push to realize it. 
              PowerTalk's AI understands your unique journey, delivering powerful, personalized 
              motivation that ignites your inner fire and propels you toward your dreams. This isn't 
              just motivation - it's your personal catalyst for greatness."
            </p>
            <button className="bg-black hover:bg-gray-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
              Begin Your Transformation <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Your Legacy Starts Now</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Don't let another day pass without unleashing your full potential. 
              Join the ranks of achievers who turned their dreams into reality with PowerTalk.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Achieve Your Dreams and Goals
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-10 text-center text-gray-400">
        <p>&copy; 2025 PowerTalk. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
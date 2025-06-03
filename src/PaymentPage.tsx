import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield,
  CreditCard,
  Smartphone,
  Users
} from 'lucide-react';

interface PaymentPageProps {
  userData: {
    name: string;
    age: string;
    gender: string;
    goal: string;
    motivation: string;
    obstacles: string[];
  };
}

const PaymentPage: React.FC<PaymentPageProps> = ({ userData }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [customerNumber] = useState(Math.floor(Math.random() * 50) + 30); // Random number between 30-80

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePayment = (plan: string) => {
    console.log(`Processing payment for ${plan} plan`);
    alert(`Processing payment for ${plan} plan. This would integrate with Stripe/PayPal in production.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header with urgency */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
            <Crown className="w-6 h-6" />
            <span>EXCLUSIVE: Customer #{customerNumber} of 100 Today!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Your New Life, <span className="text-orange-500">{userData.name}!</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your personalized pep talk system is ready. Choose your plan and start your transformation journey today.
          </p>

          {/* Countdown Timer */}
          <div className="bg-red-900/30 border border-red-500/50 rounded-2xl p-6 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-semibold">Limited Time Offer Expires In:</span>
            </div>
            <div className="text-4xl font-bold text-red-400">{formatTime(timeLeft)}</div>
            <p className="text-sm text-gray-400 mt-2">This exclusive discount won't last long!</p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Monthly Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-600 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Monthly Motivation</h3>
                <div className="mb-4">
                  <span className="text-gray-400 line-through text-xl">$29.99</span>
                  <div className="text-4xl font-bold text-white">
                    $19.99
                    <span className="text-lg text-gray-400 font-normal">/month</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                    Save $10/month
                  </div>
                </div>
                <p className="text-gray-300">Perfect for getting started on your journey</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Daily personalized pep talks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Goal-specific motivation content</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Mobile app access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Progress tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </div>
              </div>

              <button 
                onClick={() => handlePayment('Monthly')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Monthly Plan <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Annual Plan - Most Popular */}
            <div className="bg-gradient-to-br from-orange-900/30 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500 relative">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
              </div>

              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-4">Annual Transformation</h3>
                <div className="mb-4">
                  <span className="text-gray-400 line-through text-xl">$359.88</span>
                  <div className="text-4xl font-bold text-white">
                    $149.99
                    <span className="text-lg text-gray-400 font-normal">/year</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                    Save $209.89 (58% OFF)
                  </div>
                </div>
                <p className="text-gray-300">Best value for serious goal achievers</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span><strong>Everything in Monthly</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Advanced AI personalization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Weekly goal review sessions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Priority customer support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Exclusive bonus content</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>

              <button 
                onClick={() => handlePayment('Annual')}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-orange-500/30"
              >
                Get Annual Plan <Zap className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gray-800/30 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-12 h-12 text-green-500 mb-4" />
                <h4 className="font-bold mb-2">Secure Payment</h4>
                <p className="text-gray-400 text-sm">256-bit SSL encryption protects your data</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-12 h-12 text-blue-500 mb-4" />
                <h4 className="font-bold mb-2">10,000+ Happy Users</h4>
                <p className="text-gray-400 text-sm">Join thousands who've transformed their lives</p>
              </div>
              <div className="flex flex-col items-center">
                <Smartphone className="w-12 h-12 text-purple-500 mb-4" />
                <h4 className="font-bold mb-2">Works Everywhere</h4>
                <p className="text-gray-400 text-sm">Access on phone, tablet, or computer</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">Secure payment powered by:</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                <span className="font-semibold">Stripe</span>
              </div>
              <div className="text-2xl font-bold">PayPal</div>
              <div className="text-lg font-semibold">Apple Pay</div>
              <div className="text-lg font-semibold">Google Pay</div>
            </div>
          </div>

          {/* Personalized Message */}
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4 text-center">Your Personalized Journey Awaits</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Your Goal:</h4>
                <p className="text-gray-300">"{userData.goal}"</p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Your Why:</h4>
                <p className="text-gray-300">"{userData.motivation}"</p>
              </div>
            </div>
            <p className="text-center text-gray-300 mt-6">
              We'll craft every pep talk specifically for <strong>{userData.name}</strong> to help you overcome {userData.obstacles.slice(0, 2).join(' and ')} and achieve your dreams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Clock, 
  CheckCircle, 
  Shield, 
  Users, 
  Zap,
  CreditCard,
  Star,
  Target,
  Heart
} from 'lucide-react';

interface QuizData {
  name: string;
  age: string;
  gender: string;
  goal: string;
  motivation: string;
  email: string;
}

interface PaymentPageProps {
  userData: QuizData;
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

  const handlePayment = () => {
    console.log('Processing one-time payment');
    alert('Processing your one-time payment. This would integrate with Stripe/PayPal in production.');
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
            Join 1000+ Motivated People, <span className="text-orange-500">{userData.name}!</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your personalized pep talk system is ready. Get lifetime access today with our exclusive launch discount.
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

        {/* Single Payment Plan */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-orange-500/30 relative overflow-hidden mb-12">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                LAUNCH SPECIAL
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">PowerTalk Lifetime Access</h3>
              <div className="mb-6">
                <span className="text-gray-400 line-through text-2xl">$39.99</span>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  $11.99
                  <span className="text-lg text-gray-400 font-normal"> one-time</span>
                </div>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-lg font-semibold inline-block">
                  Save $28.99 - 73% OFF!
                </div>
              </div>
              <p className="text-xl text-gray-300">Complete access to your personalized motivation system</p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>4 personalized pep talks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>1 Direct & Tough Love Motivation Speech</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>1 Inspiring & Uplifting Pep Talk</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>1 Logical & Strategic Pep Talk</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>1 Gentle & Encouraging Pep Talk</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Lifetime access - No recurring fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Mobile & desktop access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Instant download</span>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <button 
              onClick={handlePayment}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 py-6 rounded-full font-bold text-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-orange-500/30 transform hover:scale-105"
            >
              <CreditCard className="w-6 h-6" />
              Get Lifetime Access Now - $47
            </button>

            <p className="text-center text-gray-400 text-sm mt-4">
              One-time payment • No hidden fees • Instant access
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-semibold mb-2">Secure Payment</h4>
              <p className="text-gray-400 text-sm">256-bit SSL encryption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="font-semibold mb-2">10,000+ Users</h4>
              <p className="text-gray-400 text-sm">Join our community</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="font-semibold mb-2">4.9/5 Rating</h4>
              <p className="text-gray-400 text-sm">Highly rated by users</p>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">We accept:</p>
            <div className="flex items-center justify-center gap-6 text-gray-500">
              <span className="text-2xl font-bold">STRIPE</span>
              <span className="text-2xl font-bold">PayPal</span>
              <span className="text-xl"> Pay</span>
              <span className="text-xl">G Pay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

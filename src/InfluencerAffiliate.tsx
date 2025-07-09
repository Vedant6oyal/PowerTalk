import React, { useState } from 'react';
import { 
  Flame, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Instagram,
  Youtube,
  Twitter,
  Globe,
  Mail,
  User,
  Phone,
  Link
} from 'lucide-react';

interface AffiliateFormData {
  name: string;
  email: string;
  phone: string;
  platform: string;
  followers: string;
  website: string;
  instagram: string;
  youtube: string;
  twitter: string;
  experience: string;
  motivation: string;
}

const InfluencerAffiliate: React.FC = () => {
  const [formData, setFormData] = useState<AffiliateFormData>({
    name: '',
    email: '',
    phone: '',
    platform: '',
    followers: '',
    website: '',
    instagram: '',
    youtube: '',
    twitter: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your interest in joining our affiliate program. We'll review your application and get back to you within 24-48 hours.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-8 h-8 text-orange-500" />
          <span className="text-2xl font-bold">PowerTalk</span>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Back to Home
        </button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Affiliate Program
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with PowerTalk and earn industry-leading commissions while helping people transform their lives through personalized motivation.
          </p>
          
          {/* Commission Highlight */}
          <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <DollarSign className="w-12 h-12 text-orange-500" />
              <span className="text-6xl font-bold text-orange-500">65%</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Commission Rate</h3>
            <p className="text-gray-300">
              Earn 65% commission on every sale - one of the highest rates in the industry!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Partner With PowerTalk?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">High Converting Product</h3>
              <p className="text-gray-300">
                PowerTalk has a proven track record of high conversion rates with personalized motivational content that truly resonates.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                Get access to exclusive marketing materials, personalized support, and regular performance insights.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 text-center">
              <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Premium Brand</h3>
              <p className="text-gray-300">
                Promote a product that genuinely helps people achieve their goals and transform their mindset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Apply to Join</h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll review your application within 24-48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-800/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Primary Platform *
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select your main platform</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="tiktok">TikTok</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="blog">Blog/Website</option>
                  <option value="podcast">Podcast</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Follower Count *
                </label>
                <select
                  name="followers"
                  value={formData.followers}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select follower range</option>
                  <option value="1k-10k">1K - 10K</option>
                  <option value="10k-50k">10K - 50K</option>
                  <option value="50k-100k">50K - 100K</option>
                  <option value="100k-500k">100K - 500K</option>
                  <option value="500k-1m">500K - 1M</option>
                  <option value="1m+">1M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <Globe className="w-4 h-4 inline mr-2" />
                  Website/Blog
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Social Media Profiles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Instagram className="w-4 h-4 inline mr-2" />
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="@yourusername"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Youtube className="w-4 h-4 inline mr-2" />
                    YouTube
                  </label>
                  <input
                    type="text"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="Channel name or URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Twitter className="w-4 h-4 inline mr-2" />
                    Twitter/X
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="@yourusername"
                  />
                </div>
              </div>
            </div>

            {/* Experience and Motivation */}
            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Affiliate Marketing Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Why do you want to promote PowerTalk? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your motivation and how PowerTalk aligns with your audience..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl hover:shadow-orange-500/30 transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-10 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2025 PowerTalk. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InfluencerAffiliate;

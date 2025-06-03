import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Target, Heart, Zap, User, Calendar, Trophy } from 'lucide-react';

interface QuizData {
  name: string;
  age: string;
  gender: string;
  goal: string;
  motivation: string;
  obstacles: string[];
}

interface OnboardingQuizProps {
  onComplete: (data: QuizData) => void;
}

const OnboardingQuiz: React.FC<OnboardingQuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    name: '',
    age: '',
    gender: '',
    goal: '',
    motivation: '',
    obstacles: []
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: keyof QuizData, value: string | string[]) => {
    setQuizData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Auto-progress for single choice questions
  const handleSingleChoiceChange = (field: keyof QuizData, value: string) => {
    handleInputChange(field, value);
    // Auto-progress after a short delay for better UX
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  const handleObstacleToggle = (obstacle: string) => {
    const currentObstacles = quizData.obstacles;
    if (currentObstacles.includes(obstacle)) {
      handleInputChange('obstacles', currentObstacles.filter(o => o !== obstacle));
    } else {
      handleInputChange('obstacles', [...currentObstacles, obstacle]);
    }
  };

  const handleSubmit = () => {
    console.log('Quiz Data:', quizData);
    // Call the completion callback with the quiz data
    onComplete(quizData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Let's Get to Know You!</h2>
            <p className="text-gray-300">What should we call you?</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={quizData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full max-w-md mx-auto p-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
          </div>
        );

      case 1:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">How old are you?</h2>
            <p className="text-gray-300">This helps us tailor the motivation style</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {['Under 18', '18-25', '26-35', '36-45', '46-55', '55+'].map((ageRange) => (
                <button
                  key={ageRange}
                  onClick={() => handleSingleChoiceChange('age', ageRange)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    quizData.age === ageRange
                      ? 'border-orange-500 bg-orange-500/20 text-orange-300'
                      : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-orange-400'
                  }`}
                >
                  {ageRange}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">What's your gender?</h2>
            <p className="text-gray-300">This helps us personalize your experience</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {['Male', 'Female', 'Prefer not to say'].map((gender) => (
                <button
                  key={gender}
                  onClick={() => handleSingleChoiceChange('gender', gender)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    quizData.gender === gender
                      ? 'border-orange-500 bg-orange-500/20 text-orange-300'
                      : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-orange-400'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">What's Your Main Goal?</h2>
            <p className="text-gray-300">Be specific - the more detail, the better we can help!</p>
            <textarea
              placeholder="e.g., Lose 20 pounds in 6 months, Start my own business, Learn Spanish fluently..."
              value={quizData.goal}
              onChange={(e) => handleInputChange('goal', e.target.value)}
              rows={4}
              className="w-full max-w-2xl mx-auto p-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
            />
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">What's Your Why?</h2>
            <p className="text-gray-300">What deeply motivates you to achieve this goal?</p>
            <textarea
              placeholder="e.g., I want to be healthy for my kids, I want financial freedom, I want to prove to myself I can do it..."
              value={quizData.motivation}
              onChange={(e) => handleInputChange('motivation', e.target.value)}
              rows={4}
              className="w-full max-w-2xl mx-auto p-4 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
            />
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold">What Holds You Back?</h2>
            <p className="text-gray-300">Select all obstacles that typically challenge you</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                'Procrastination',
                'Self-doubt',
                'Lack of time',
                'Lack of motivation',
                'Fear of failure',
                'Perfectionism',
                'Distractions',
                'Lack of support',
                'Past failures',
                'Overwhelm',
                'Comparison to others',
                'Lack of confidence'
              ].map((obstacle) => (
                <button
                  key={obstacle}
                  onClick={() => handleObstacleToggle(obstacle)}
                  className={`p-3 rounded-xl border-2 transition-all text-sm ${
                    quizData.obstacles.includes(obstacle)
                      ? 'border-orange-500 bg-orange-500/20 text-orange-300'
                      : 'border-gray-600 bg-gray-800 text-gray-300 hover:border-orange-400'
                  }`}
                >
                  {obstacle}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 0: return quizData.name.trim() !== '';
      case 1: return quizData.age !== '';
      case 2: return quizData.gender !== '';
      case 3: return quizData.goal.trim() !== '';
      case 4: return quizData.motivation.trim() !== '';
      case 5: return quizData.obstacles.length > 0;
      default: return false;
    }
  };

  const isMultipleChoiceStep = () => {
    return currentStep === 5; // Only obstacles step allows multiple selections
  };

  const isSingleChoiceStep = () => {
    return currentStep === 1 || currentStep === 2; // Age and gender steps
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-400">Step {currentStep + 1} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round(((currentStep + 1) / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700">
            {renderStep()}
          </div>

          {/* Navigation - Only show for text input and multiple choice steps */}
          {!isSingleChoiceStep() && (
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  currentStep === 0
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              {currentStep === totalSteps - 1 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepComplete()}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${
                    isStepComplete()
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Generate My Pep Talk
                  <Zap className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isStepComplete()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                    isStepComplete()
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingQuiz;

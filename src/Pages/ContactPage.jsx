import React, { useState } from 'react';

export default function FreelancerContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    serviceType: '',
    businessGoal: '',
    projectScope: '',
    budget: '',
    timeline: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  const services = [
    { id: 'web-design', label: 'Web Design', description: 'Website design & UI/UX' },
    { id: 'web-dev', label: 'Web Development', description: 'Frontend/Backend development' },
    { id: 'mobile-app', label: 'Mobile App Development', description: 'iOS/Android apps' },
    { id: 'branding', label: 'Branding', description: 'Logo, brand identity design' },
    { id: 'content-writing', label: 'Content Writing', description: 'Blog posts, copywriting' },
    { id: 'seo', label: 'SEO Services', description: 'Search engine optimization' }
  ];

  const budgetRanges = [
    { value: '1000-5000', label: '$1,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000-50000', label: '$25,000 - $50,000' },
    { value: '50000+', label: '$50,000+' }
  ];

  const timelines = [
    { value: 'urgent', label: '1 Week or Less' },
    { value: 'short', label: '1-2 Months' },
    { value: 'medium', label: '2-3 Months' },
    { value: 'long', label: '3+ Months' }
  ];

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    }

    if (currentStep === 2) {
      if (!formData.businessGoal.trim()) newErrors.businessGoal = 'Business goal is required';
      if (!formData.projectScope.trim()) newErrors.projectScope = 'Project scope is required';
      if (!formData.budget) newErrors.budget = 'Budget range is required';
      if (!formData.timeline) newErrors.timeline = 'Timeline is required';
    }

    if (currentStep === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(3)) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setStep(1);
        setFormData({
          serviceType: '', businessGoal: '', projectScope: '',
          budget: '', timeline: '', fullName: '', email: '',
          phone: '', company: '', additionalNotes: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-8 border-2 border-black">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl">
          <div className="text-center py-12 sm:py-16 px-4 sm:px-8">
            <div className="text-5xl sm:text-6xl mb-4">✅</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-3">Booking Request Received!</h2>
            <p className="text-textPrimary mb-2 text-sm sm:text-base">
              Thank you for your interest in {formData.serviceType}
            </p>
            <p className="text-textPrimary text-xs sm:text-sm opacity-80">
              I'll review your project details and get back to you within 24 hours at {formData.email}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 px-[8px]  md:px-[40px] lg:px-[80px] mt-24 w-full max-w-[1980px]">
      <div className="w-full max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex justify-between gap-2 sm:gap-4 mb-8 sm:mb-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold mb-2 text-sm sm:text-base transition-all ${
                step >= i ? 'bg-RPrimary text-RonPrimary' : 'bg-RonPrimary text-RPrimary border-2 border-RPrimary'
              }`}>
                {i}
              </div>
              <span className="text-xs sm:text-sm font-medium text-RPrimary text-center">
                {i === 1 ? 'Service' : i === 2 ? 'Details' : 'Contact'}
              </span>
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl border-2 border-RPrimary overflow-hidden">
          {/* Header */}
          <div className="bg-RPrimary text-RonPrimary px-4 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Book a Service</h1>
            <p className="text-RonPrimary opacity-90 text-sm sm:text-base">
              {step === 1 && 'What service are you interested in?'}
              {step === 2 && 'Tell me about your project'}
              {step === 3 && 'How can I reach you?'}
            </p>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-8 py-6 sm:py-8 min-h-96">
            {/* STEP 1: Service Selection */}
            {step === 1 && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {services.map(service => (
                    <button
                      key={service.id}
                      onClick={() => handleInputChange('serviceType', service.id)}
                      className={`p-4 sm:p-5 rounded-lg border-2 transition-all text-left ${
                        formData.serviceType === service.id
                          ? 'border-RPrimary bg-slate-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <p className="font-semibold text-RPrimary text-sm sm:text-base">{service.label}</p>
                      <p className="text-xs sm:text-sm text-RPrimary opacity-70 mt-1">{service.description}</p>
                    </button>
                  ))}
                </div>
                {errors.serviceType && <p className="text-red-500 text-xs sm:text-sm">⚠️ {errors.serviceType}</p>}
              </div>
            )}

            {/* STEP 2: Project Details */}
            {step === 2 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    What is your main business goal?
                  </label>
                  <p className="text-xs text-RPrimary opacity-60 mb-2">
                    E.g., Increase sales, improve brand awareness, automate processes
                  </p>
                  <textarea
                    placeholder="Describe your main business goal..."
                    value={formData.businessGoal}
                    onChange={(e) => handleInputChange('businessGoal', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none resize-none text-sm sm:text-base transition-colors ${
                      errors.businessGoal ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    }`}
                  />
                  {errors.businessGoal && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.businessGoal}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    What is the scope of work?
                  </label>
                  <p className="text-xs text-RPrimary opacity-60 mb-2">
                    E.g., Number of pages, features, deliverables
                  </p>
                  <textarea
                    placeholder="Describe the project scope in detail..."
                    value={formData.projectScope}
                    onChange={(e) => handleInputChange('projectScope', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none resize-none text-sm sm:text-base transition-colors ${
                      errors.projectScope ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    }`}
                  />
                  {errors.projectScope && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.projectScope}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    What is your budget?
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none text-sm sm:text-base transition-colors ${
                      errors.budget ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    } bg-white text-RPrimary cursor-pointer`}
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                  {errors.budget && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.budget}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    What is your timeline?
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none text-sm sm:text-base transition-colors ${
                      errors.timeline ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    } bg-white text-RPrimary cursor-pointer`}
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(time => (
                      <option key={time.value} value={time.value}>{time.label}</option>
                    ))}
                  </select>
                  {formData.timeline === 'urgent' && (
                    <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 mt-3 text-xs sm:text-sm text-amber-900">
                      ⚠️ Very tight timelines may impact quality. Let's discuss feasibility.
                    </div>
                  )}
                  {errors.timeline && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.timeline}</p>}
                </div>
              </div>
            )}

            {/* STEP 3: Contact Details */}
            {step === 3 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none text-sm sm:text-base transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none text-sm sm:text-base transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.email}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none text-sm sm:text-base transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-slate-200 focus:border-RPrimary'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">⚠️ {errors.phone}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your company or business name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-RPrimary text-sm sm:text-base transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-RPrimary text-sm sm:text-base mb-2">
                    Additional Details
                  </label>
                  <p className="text-xs text-RPrimary opacity-60 mb-2">Anything else I should know?</p>
                  <textarea
                    placeholder="Share any other relevant details..."
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:outline-none focus:border-RPrimary text-sm sm:text-base transition-colors resize-none min-h-20 sm:min-h-24"
                  />
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg border-2 border-slate-300 bg-white text-RPrimary font-semibold text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={handleNext}
                  className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg bg-RPrimary text-RonPrimary font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2.5 sm:py-3 rounded-lg bg-green-600 text-RonPrimary font-semibold text-sm sm:text-base hover:bg-green-700 transition-colors"
                >
                  Book Meeting
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-RPrimary opacity-70 mt-6 sm:mt-8 px-4">
          Your information is safe and secure. We'll only use it to discuss your project.
        </p>
      </div>
    </div>
  );
}
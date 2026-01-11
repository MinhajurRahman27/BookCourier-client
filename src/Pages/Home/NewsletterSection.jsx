import { Mail, Gift, Bell, Star } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Discounts",
      description: "Get up to 30% off on new releases"
    },
    {
      icon: Bell,
      title: "Early Access",
      description: "Be the first to know about new arrivals"
    },
    {
      icon: Star,
      title: "Curated Recommendations",
      description: "Personalized book suggestions just for you"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    toast("Thank you for subscribing!");
  };

  return (
    <section className="py-16 mb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Stay Updated with BookCourier
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Subscribe to our newsletter and never miss out on the latest books, exclusive deals, 
                and reading recommendations tailored just for you.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg mt-1">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Form */}
            <div>
              <div className="rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  Join Our Reading Community
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-3xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Subscribe Now
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </section>
  );
};

export default NewsletterSection;
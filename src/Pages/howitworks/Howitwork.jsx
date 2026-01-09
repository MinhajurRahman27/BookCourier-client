import React, { useState, useEffect } from "react";
import {
  Search,
  BookOpen,
  ShoppingCart,
  Truck,
  CheckCircle,
  Star,
  Clock,
  Shield,
} from "lucide-react";
import { Link } from "react-router";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Browse Books",
      description:
        "Explore our extensive collection of books across various genres. Use our search and filter options to find exactly what you're looking for.",
      icon: Search,
      color: "bg-orange-50",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    },
    {
      number: "02",
      title: "View Details",
      description:
        "Click on any book to see detailed information including description, author, price, and customer reviews to make an informed decision.",
      icon: BookOpen,
      color: "bg-orange-50",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
    },
    {
      number: "03",
      title: "Order Book",
      description:
        "Add your favorite books to cart and proceed to checkout. We accept multiple payment methods for your convenience.",
      icon: ShoppingCart,
      color: "bg-orange-50",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    },
    {
      number: "04",
      title: "Delivery Process",
      description:
        "Sit back and relax while we deliver your books right to your doorstep. Track your order in real-time until it reaches you.",
      icon: Truck,
      color: "bg-orange-50",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      text: "Get your books within 3-5 days",
    },
    { icon: Shield, title: "Secure Payment", text: "100% safe and encrypted" },
    {
      icon: Star,
      title: "Quality Books",
      text: "Verified and authentic editions",
    },
    {
      icon: CheckCircle,
      title: "Easy Returns",
      text: "Hassle-free 30-day returns",
    },
  ];

  const stats = [
    { number: "50K+", label: "Books Available" },
    { number: "10K+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen  overflow-hidden">
      {/* Hero Section with Background Pattern */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-orange-100 rounded-full">
            <span className="text-orange-600 font-semibold text-sm">
              Simple & Easy Process
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Getting your favorite books delivered to your doorstep is simple and
            straightforward. Follow these easy steps to start your reading
            journey.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className=" py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold  mb-2">
                {stat.number}
              </div>
              <div className=" text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section with Images */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col  ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center transition-all duration-700 ${
                activeStep >= index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Side */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-orange-500 font-bold text-lg">
                      Step {step.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1">
                <div className="relative">
                  

                  <div
                    className={`${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:rotate-12 transition-all duration-300`}
                  >
                    <step.icon className="w-10 h-10 text-orange-500" />
                  </div>

                  <h3 className="text-4xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="flex items-center text-orange-500 font-semibold group cursor-pointer">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className=" py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We provide the best book delivery experience with these amazing
              features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-orange-100"
              >
                <div className=" w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-500">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with Image Background */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80"
            alt="Books background"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 "></div>
        </div>

        <div
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Ready to Get Started?
          </h2>
          <p className=" text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of book lovers who trust bookCourier for their
            reading needs. Start browsing our collection today.
          </p>
          <Link to={'/books'}  className="text-white bg-orange-500 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 hover:scale-105 active:scale-95 inline-flex items-center gap-3 cursor-pointer">
            Browse Books Now
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(249, 115, 22, 0.6);
          }
        }
      `}</style>
    </div>
  );
}

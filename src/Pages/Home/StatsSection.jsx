import { Users, BookOpen, Truck, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Happy Customers",
      description: "Readers trust us nationwide"
    },
    {
      icon: BookOpen,
      number: "100,000+",
      label: "Books Available",
      description: "Across all genres and languages"
    },
    {
      icon: Truck,
      number: "25,000+",
      label: "Orders Delivered",
      description: "Successfully delivered this month"
    },
    {
      icon: Award,
      number: "99.5%",
      label: "Customer Satisfaction",
      description: "Based on verified reviews"
    }
  ];

  return (
    <section className="py-20 mb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            See how we're making reading more accessible and enjoyable for book lovers everywhere. 
            These numbers represent our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group relative"
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </h3>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {stat.label}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block rounded-3xl p-8 shadow-xl border border-primary/20 backdrop-blur-sm">
            <p className="text-gray-700 font-semibold text-lg mb-4">
              Join thousands of satisfied readers today!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
              Start Your Reading Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
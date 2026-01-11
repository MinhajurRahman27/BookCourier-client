import { Search, ShoppingCart, Truck, BookOpen } from "lucide-react";
import { Link } from "react-router";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      step: "01",
      title: "Browse & Search",
      description: "Explore our vast collection of books across all genres. Use our smart search to find exactly what you're looking for.",
      color: "bg-primary"
    },
    {
      icon: ShoppingCart,
      step: "02", 
      title: "Add to Whishlist",
      description: "Found your perfect book? Add it to your cart with just one click. Review your selection and proceed to checkout.",
      color: "bg-primary"
    },
    {
      icon: Truck,
      step: "03",
      title: "Fast Delivery",
      description: "We process your order immediately and deliver your books within 2-3 business days right to your doorstep.",
      color: "bg-primary"
    },
    {
      icon: BookOpen,
      step: "04",
      title: "Enjoy Reading",
      description: "Unbox your new books and dive into amazing stories, knowledge, and adventures. Happy reading!",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-16 mb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            How BookCourier Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Getting your favorite books delivered is simple and hassle-free. Here's how we make it happen in just 4 easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group p-6 rounded-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to start your reading journey?
          </p>
          <Link to={"/books"} className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
            Explore Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
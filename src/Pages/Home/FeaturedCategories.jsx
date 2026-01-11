import { BookOpen, GraduationCap, Heart, Zap, Users, Globe } from "lucide-react";

const FeaturedCategories = () => {
  const categories = [
    {
      icon: BookOpen,
      title: "Fiction & Literature",
      description: "Bestselling novels, classics, and contemporary fiction",
      bookCount: "2,500+",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Textbooks, academic resources, and study materials",
      bookCount: "1,800+",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Self-Help & Wellness",
      description: "Personal development, health, and lifestyle books",
      bookCount: "950+",
      color: "bg-pink-500"
    },
    {
      icon: Zap,
      title: "Technology & Science",
      description: "Programming, engineering, and scientific literature",
      bookCount: "1,200+",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Business & Finance",
      description: "Entrepreneurship, investing, and business strategy",
      bookCount: "800+",
      color: "bg-orange-500"
    },
    {
      icon: Globe,
      title: "History & Culture",
      description: "World history, biographies, and cultural studies",
      bookCount: "1,100+",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 mb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover your next great read from our carefully curated collection across various genres and subjects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${category.color} bg-opacity-10`}>
                    <IconComponent className={`h-6 w-6 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500">
                        {category.bookCount} books
                      </span>
                      <span className="text-xs text-primary font-medium group-hover:underline">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02]">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
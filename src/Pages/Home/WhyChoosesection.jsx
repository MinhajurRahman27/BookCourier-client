import { Truck, Shield, BookOpen, Sparkles } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FaFaceGrinStars } from "react-icons/fa6";
import { MdCollectionsBookmark, MdDeliveryDining } from "react-icons/md";
import { SiAegisauthenticator } from "react-icons/si";

const WhyChooseBookCourier = () => {
  const features = [
    {
      icon: Truck,
      title: "Lightning Fast Delivery",
      description:
        "Get your favorite books delivered to your doorstep within 2-3 days. We understand the excitement of a new read!",
      color: "orange",
    },
    {
      icon: Shield,
      title: "100% Authentic Books",
      description:
        "Every book is sourced directly from verified publishers. No counterfeits, no compromises on quality.",
      color: "amber",
    },
    {
      icon: BookOpen,
      title: "Vast Collection",
      description:
        "From timeless classics to latest bestsellers, explore over 50,000+ titles across all genres and languages.",
      color: "orange",
    },
    {
      icon: Sparkles,
      title: "Unbeatable Prices",
      description:
        "Enjoy competitive prices with regular discounts and offers. Quality reading shouldn't break the bank.",
      color: "amber",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-center md:text-5xl  mb-4">
            Why Choose Book Courier?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just delivering books—we're delivering knowledge,
            adventure, and endless possibilities right to your door.
          </p>
        </div>

        <div className="flex gap-2">
          <div className="rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
            <FaShippingFast className="text-5xl  rounded-4xl bg-orange-500 mb-7 p-1" />

            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Lightning Fast Delivery
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Get your favorite books delivered to your doorstep within 2-3
              days. We understand the excitement of a new read!
            </p>
          </div>
          <div className="rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
            <FaFaceGrinStars className="text-5xl  rounded-4xl bg-orange-500 mb-7 p-1" />

            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Unbeatable Prices
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Enjoy competitive prices with regular discounts and offers.
              Quality reading shouldn't break the bank
            </p>
          </div>
          <div className="rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
            <MdCollectionsBookmark className="text-5xl  rounded-4xl bg-orange-500 mb-7 p-1" />

            <h1 className="text-xl font-bold text-gray-900 mb-3">
              Vast Collection
            </h1>
            <p className="text-gray-600 leading-relaxed">
              From timeless classics to latest bestsellers, explore over 50,000+
              titles across all genres and languages.
            </p>
          </div>
          <div className="rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300">
            <SiAegisauthenticator className="text-5xl  rounded-4xl bg-orange-500 mb-7 p-1" />

            <h1 className="text-xl font-bold text-gray-900 mb-3">
              100% Authentic Books
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Every book is sourced directly from verified publishers. No
              counterfeits, no compromises on quality.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-1">
            <div className="bg-white rounded-full px-8 py-4">
              <p className="text-gray-900 font-semibold">
                Join <span className="text-orange-600 font-bold">10,000+</span>{" "}
                happy readers who trust Book Courier
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBookCourier;

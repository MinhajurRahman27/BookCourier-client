import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "We offer fast delivery within 2-3 business days for most locations. Express delivery options are also available for same-day or next-day delivery in select areas."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within the country only. We're working on expanding our international shipping options and will update our customers once available."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for books in original condition. If you're not satisfied with your purchase, you can return it for a full refund or exchange."
    },
    {
      question: "Are all books authentic and new?",
      answer: "Yes, all our books are 100% authentic and sourced directly from verified publishers. We guarantee that every book you receive is genuine and in new condition."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email and SMS. You can also track your order status through your account dashboard on our website."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer special discounts for bulk orders, educational institutions, and libraries. Contact our customer service team for custom pricing on large orders."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 mb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our services, delivery, and policies.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-200" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
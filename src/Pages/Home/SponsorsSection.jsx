const ScrollingTextSection = () => {
  const scrollingTexts = [
    { text: "FAST DELIVERY", color: "text-gray-600" },
    { text: "AUTHENTIC BOOKS", color: "text-gray-600" },
    { text: "BEST PRICES", color: "text-gray-600" },
    { text: "TRUSTED SERVICE", color: "text-gray-600" },
    { text: "HAPPY READERS", color: "text-gray-600" },
    { text: "QUALITY GUARANTEED", color: "text-gray-600" },
    { text: "NATIONWIDE DELIVERY", color: "text-gray-600" },
    { text: "24/7 SUPPORT", color: "text-gray-600" }
  ];

  // Duplicate the texts array for seamless infinite scroll
  const duplicatedTexts = [...scrollingTexts, ...scrollingTexts];

  return (
    <>
      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="py-16 mb-16 overflow-hidden ">
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full  z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full  z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {duplicatedTexts.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
              >
                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black ${item.color} hover:scale-110 transition-transform duration-300 cursor-default select-none`}>
                  {item.text}
                </h2>
                <span className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-300 mx-8">•</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full  z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full  z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll-left whitespace-nowrap">
            {duplicatedTexts.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
              >
                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black ${item.color} hover:scale-110 transition-transform duration-300 cursor-default select-none`}>
                  {item.text}
                </h2>
                <span className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-300 mx-8">•</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollingTextSection;
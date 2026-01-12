const About = () => {
  return (
    <div className="pt-20 min-h-screen bg-base-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our digital library - your gateway to knowledge, learning, and literary exploration.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-primary">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe that knowledge should be accessible to everyone. Our mission is to provide a comprehensive digital library platform that connects readers with books, resources, and learning materials from around the world.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through innovative technology and user-friendly design, we're building bridges between authors, readers, and knowledge seekers in the digital age.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-primary">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To become the world's most trusted and comprehensive digital library platform, fostering a global community of learners and knowledge enthusiasts.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where geographical boundaries don't limit access to quality educational content and literature.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-primary">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-primary/5">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Vast Collection</h3>
              <p className="text-gray-600">Access thousands of books across multiple genres and categories.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-primary/5">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Search</h3>
              <p className="text-gray-600">Find exactly what you're looking for with our advanced search features.</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-primary/5">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">Join a community of readers and share your reading experiences.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-primary">Our Team</h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're a passionate team of developers, librarians, and book enthusiasts working together to create the best digital library experience. Our diverse backgrounds in technology, education, and literature help us understand and serve our community better.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
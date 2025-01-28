const About = () => {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white p-6">
        <div className="w-full max-w-3xl mt-10 mx-auto">
          <div className="bg-gray-900 h-auto flex flex-col text-center p-8 rounded-2xl shadow-2xl">
            <h1 className="font-bold font-serif text-4xl mb-4">About Us</h1>
            <p className="font-medium font-serif text-lg leading-relaxed">
              Welcome to our perfume company, where sophistication meets fragrance artistry.  
              Our brand is dedicated to curating an exceptional collection of premium fragrances,  
              designed for those who value elegance and quality.  
            </p>
            <p className="font-medium font-serif text-lg leading-relaxed mt-4">
              We exclusively sell our products through our beautifully designed website, ensuring  
              that every purchase provides a seamless and memorable experience. With a focus on  
              modern aesthetics and functionality, we aim to make your fragrance shopping delightful.  
            </p>
          </div>
          {/* Copyright Section */}
          <div className="text-center mt-8 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} My Perfume Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  
const Contact = () => {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col items-center text-white p-6">
        <div className="w-full max-w-3xl mt-10">
          <div className="bg-gray-900 h-auto flex flex-col text-center p-8 rounded-2xl shadow-2xl">
            <h1 className="font-bold font-serif text-4xl mb-4">Contact Us</h1>
            <p className="font-medium font-serif text-lg leading-relaxed">
              We’d love to hear from you! Whether you have questions, feedback,  
              or need assistance, feel free to reach out to us.  
            </p>
  
            <form className="mt-8 space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-left font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
  
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-left font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
  
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-left font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full mt-2 p-3 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 py-3 rounded-lg text-white font-bold hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
  
        {/* Contact Details */}
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Email us at: <a href="" className="text-red-500">it.20203050@gmail.com</a>
          </p>
          <p className="text-gray-400">
            Call us: <span className="text-red-500">+123 456 7890</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Contact;
  
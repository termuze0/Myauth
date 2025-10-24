import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div >
      
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />

      
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-indigo-400">MyAuth</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Secure and seamless authentication for your applications.  
          MyAuth makes user management and login integration effortless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/register"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 border border-indigo-400 hover:bg-indigo-500/10 rounded-lg font-semibold"
          >
            Sign In
          </a>
        </div>
      </section>

      
      <section className="py-16 bg-gray-800/60">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose MyAuth?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-2xl shadow-lg">
              <i className="ri-lock-2-line text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-400">
                We ensure your data and user credentials are protected with modern encryption.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-2xl shadow-lg">
              <i className="ri-flashlight-line text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Fast Integration</h3>
              <p className="text-gray-400">
                MyAuth is easy to set up and integrates smoothly into your existing applications.
              </p>
            </div>
            <div className="p-6 bg-gray-900 rounded-2xl shadow-lg">
              <i className="ri-user-smile-line text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p className="text-gray-400">
                Simple and clean interface that provides a great experience for both users and developers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
              <i className="ri-login-box-line text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Custom Authentication</h3>
              <p className="text-gray-400">
                Tailor authentication systems for your business needs with full control and security.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
              <i className="ri-shield-keyhole-line text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">OAuth & JWT Support</h3>
              <p className="text-gray-400">
                Integrate third-party logins and token-based authentication easily.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition">
              <i className="ri-user-settings-line text-4xl text-indigo-400 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">User Management</h3>
              <p className="text-gray-400">
                Manage roles, permissions, and user data with a simple admin interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-800/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-400 mb-10">
            Have questions, feedback, or partnership ideas? We’d love to hear from you.
          </p>
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-indigo-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-indigo-500 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-indigo-500 outline-none resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold w-fit mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
}

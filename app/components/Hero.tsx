
'use client';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Hero Card */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-8 border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-medium">Available for work</span>
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span className="text-blue-600 dark:text-blue-400">John</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  Senior UI/UX Designer
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  I create beautiful, functional, and user-centered digital experiences that solve real problems and drive business growth.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-briefcase-line mr-2"></i>
                  View My Work
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-mail-line mr-2"></i>
                  Let's Talk
                </button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-blue-600 dark:text-blue-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">New York, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <i className="ri-time-line text-purple-600 dark:text-purple-400"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Response Time</p>
                    <p className="font-medium text-gray-900 dark:text-white">Within 24hrs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20UI%20UX%20designer%20at%20modern%20workspace%2C%20creative%20professional%20portrait%2C%20contemporary%20office%20environment%2C%20confident%20and%20approachable%20expression%2C%20natural%20lighting%2C%20clean%20minimal%20background%2C%20modern%20technology%20setup%2C%20professional%20headshot%20style&width=500&height=600&seq=hero-portrait-redesign-001&orientation=portrait"
                  alt="Designer portrait"
                  className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <i className="ri-trophy-line text-green-600 dark:text-green-400"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Award Winner</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Design Excellence 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <i className="ri-user-heart-line text-blue-600 dark:text-blue-400"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">100% Satisfied</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorations */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-20 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"></div>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"></div>
                <div className="absolute top-40 left-10 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

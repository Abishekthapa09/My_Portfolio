
'use client';

export default function About() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Card */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  With over 5 years of experience in UI/UX design, I've had the privilege of working with startups, 
                  established companies, and everything in between. My journey began with a curiosity about how 
                  people interact with technology and has evolved into a passion for creating intuitive, 
                  accessible experiences.
                </p>
                <p>
                  I believe great design isn't just about making things look beautiful—it's about solving real 
                  problems and making complex tasks feel effortless. Every project I work on is an opportunity 
                  to bridge the gap between user needs and business objectives.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new design tools, reading about emerging 
                  technologies, or mentoring aspiring designers. I'm always eager to learn and grow, 
                  constantly pushing the boundaries of what's possible in digital design.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What I Do</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <i className="ri-palette-line text-blue-600 dark:text-blue-400 text-sm"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <i className="ri-smartphone-line text-green-600 dark:text-green-400 text-sm"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Mobile Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <i className="ri-computer-line text-purple-600 dark:text-purple-400 text-sm"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Web Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                      <i className="ri-lightbulb-line text-orange-600 dark:text-orange-400 text-sm"></i>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Bachelor of Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Design Institute</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2016 - 2020</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">UX Certification</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Google UX Design</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">2020</p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <i className="ri-award-line text-blue-600 dark:text-blue-400 text-xs"></i>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Adobe Certified Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <i className="ri-medal-line text-green-600 dark:text-green-400 text-xs"></i>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Figma Professional</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <i className="ri-star-line text-purple-600 dark:text-purple-400 text-xs"></i>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">UX Research Specialist</span>
                </div>
              </div>
            </div>
            
            {/* Fun Facts */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Fun Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="ri-coffee-line text-orange-600 dark:text-orange-400"></i>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Coffee enthusiast</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-camera-line text-blue-600 dark:text-blue-400"></i>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Photography hobbyist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-plane-line text-green-600 dark:text-green-400"></i>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Travel lover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

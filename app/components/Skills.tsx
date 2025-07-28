
'use client';

export default function Skills() {
  const skills = [
    { name: 'UI/UX Design', level: 95, color: 'bg-blue-500' },
    { name: 'Figma', level: 90, color: 'bg-purple-500' },
    { name: 'Adobe Creative Suite', level: 85, color: 'bg-red-500' },
    { name: 'Prototyping', level: 90, color: 'bg-green-500' },
    { name: 'User Research', level: 80, color: 'bg-yellow-500' },
    { name: 'Wireframing', level: 85, color: 'bg-indigo-500' },
  ];

  const tools = [
    { name: 'Figma', icon: 'ri-pen-nib-line', category: 'Design' },
    { name: 'Adobe XD', icon: 'ri-artboard-line', category: 'Design' },
    { name: 'Sketch', icon: 'ri-pencil-line', category: 'Design' },
    { name: 'InVision', icon: 'ri-eye-line', category: 'Prototype' },
    { name: 'Principle', icon: 'ri-play-line', category: 'Animation' },
    { name: 'Framer', icon: 'ri-code-line', category: 'Code' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Tools</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          {/* Skills */}
          {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          
          {/* Tools */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tools & Software</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all duration-200 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <i className={`${tool.icon} text-blue-600 dark:text-blue-400`}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{tool.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tool.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills */}
        {/* <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Additional Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-2xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Research</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Conducting interviews, surveys, and usability testing to understand user needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-layout-line text-2xl text-green-600 dark:text-green-400"></i>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Information Architecture</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Organizing and structuring content for optimal user experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mobile-download-line text-2xl text-purple-600 dark:text-purple-400"></i>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Design</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Creating responsive designs optimized for mobile devices</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

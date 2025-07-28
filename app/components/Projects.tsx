
'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Mobile App',
      category: 'mobile',
      description: 'A modern shopping app with intuitive navigation and seamless checkout process',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20mobile%20app%20interface%2C%20clean%20shopping%20cart%20design%2C%20product%20gallery%2C%20mobile%20UI%20design%2C%20contemporary%20app%20mockup%2C%20user-friendly%20interface%2C%20minimalist%20design&width=400&height=300&seq=project-001&orientation=landscape',
      tags: ['UI/UX', 'Mobile', 'E-commerce'],
      status: 'Live',
      link: '#'
    },
    {
      id: 2,
      title: 'Banking Dashboard',
      category: 'web',
      description: 'Clean and secure financial dashboard with data visualization and user management',
      image: 'https://readdy.ai/api/search-image?query=Banking%20dashboard%20interface%2C%20financial%20data%20visualization%2C%20clean%20web%20design%2C%20charts%20and%20graphs%2C%20professional%20dashboard%20UI%2C%20modern%20banking%20app%20design%2C%20secure%20interface&width=400&height=300&seq=project-002&orientation=landscape',
      tags: ['Web', 'Dashboard', 'Finance'],
      status: 'In Progress',
      link: '#'
    },
    {
      id: 3,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Intuitive food ordering app with real-time tracking and personalized recommendations',
      image: 'https://readdy.ai/api/search-image?query=Food%20delivery%20mobile%20app%20interface%2C%20restaurant%20ordering%20app%2C%20food%20menu%20design%2C%20delivery%20tracking%20UI%2C%20colorful%20food%20app%20design%2C%20user-friendly%20interface&width=400&height=300&seq=project-003&orientation=landscape',
      tags: ['Mobile', 'Food', 'Delivery'],
      status: 'Live',
      link: '#'
    },
    {
      id: 4,
      title: 'SaaS Platform',
      category: 'web',
      description: 'Comprehensive business management platform with team collaboration features',
      image: 'https://readdy.ai/api/search-image?query=SaaS%20platform%20interface%2C%20business%20management%20dashboard%2C%20team%20collaboration%20tools%2C%20professional%20web%20design%2C%20modern%20software%20interface%2C%20clean%20UI%20design&width=400&height=300&seq=project-004&orientation=landscape',
      tags: ['Web', 'SaaS', 'Business'],
      status: 'Live',
      link: '#'
    },
    {
      id: 5,
      title: 'Healthcare App',
      category: 'mobile',
      description: 'Patient management app with appointment scheduling and medical records',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20mobile%20app%20interface%2C%20medical%20appointment%20app%2C%20patient%20management%20system%2C%20clean%20health%20app%20design%2C%20medical%20UI%20design%2C%20professional%20healthcare%20interface&width=400&height=300&seq=project-005&orientation=landscape',
      tags: ['Mobile', 'Healthcare', 'Medical'],
      status: 'Coming Soon',
      link: '#'
    },
    {
      id: 6,
      title: 'Learning Platform',
      category: 'web',
      description: 'Online education platform with interactive courses and progress tracking',
      image: 'https://readdy.ai/api/search-image?query=Online%20learning%20platform%20interface%2C%20educational%20website%20design%2C%20course%20management%20system%2C%20e-learning%20dashboard%2C%20modern%20education%20UI%2C%20interactive%20learning%20design&width=400&height=300&seq=project-006&orientation=landscape',
      tags: ['Web', 'Education', 'Learning'],
      status: 'Live',
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Coming Soon': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing design solutions for various industries
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-2 shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors cursor-pointer"
                  >
                    View Project
                  </a>
                  <button className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                    <i className="ri-external-link-line text-gray-600 dark:text-gray-400"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with thoughtful design and user experience
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer whitespace-nowrap"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

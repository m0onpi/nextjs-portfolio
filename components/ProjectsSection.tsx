"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare, BsMusicNote, BsRobot, BsGraphUp, BsTruck, BsLightning } from "react-icons/bs"
import { HiSparkles, HiCode, HiTrendingUp, HiCog, HiBadgeCheck } from "react-icons/hi"

const projects = [
  {
    name: "SoundCloud-Bot",
    description: "Generates a small music video based on a souncloud link.",
    image: "/dntlogo.png",
    github: "https://github.com/m0onpi/soundcloud-bot-v2",
    link: "https://dntmedia-v2.web.app/",
    tech: ["Python", "FFmpeg", "API"],
    color: "from-orange-500 to-red-500",
    icon: BsMusicNote,
    category: "Automation"
  },
  {
    name: "Chess-Bot",
    description: "Automated Youtube channel with a chess niche",
    image: "/chess.png",
    github: "https://github.com/m0onpi/chess",
    link: "https://www.youtube.com/@sigma_chess/shorts",
    tech: ["Python", "YouTube API", "Chess.js"],
    color: "from-gray-700 to-gray-900",
    icon: BsRobot,
    category: "AI/Automation"
  },
  {
    name: "TradeLogger",
    description: "Modern trading journal with AI-powered trade analysis. Upload screenshots to track trades, analyze performance, and get insights to improve trading strategies with 40% better win rates.",
    image: "/tradelogger.png",
    github: "https://github.com/tradelogger/tradelogger",
    link: "https://tradelogger.dev",
    tech: ["React", "AI/ML", "Charts.js"],
    color: "from-green-500 to-emerald-600",
    icon: BsGraphUp,
    category: "FinTech"
  },
  {
    name: "Justice Valeting",
    description: "Mobile car valeting service based in Nottingham, UK. Offering exterior, full, and interior valet services with top-notch care for vehicles and convenient online booking.",
    image: "/justice-valeting.png",
    github: "https://github.com/justicevaleting/website",
    link: "https://justicevaleting.co.uk",
    tech: ["Next.js", "Tailwind", "Booking System"],
    color: "from-blue-500 to-cyan-500",
    icon: BsTruck,
    category: "Business"
  },
  {
    name: "AI Mike",
    description: "AI-driven business solutions including custom AI chatbots, automated appointment setters, and lead outreach automation. 24/7 availability with immediate responses and consistent support.",
    image: "/ai-mike.png",
    github: "https://github.com/aimike/aimike",
    link: "https://aimike.dev",
    tech: ["AI/ML", "NLP", "Automation"],
    color: "from-purple-500 to-pink-500",
    icon: BsLightning,
    category: "AI Solutions"
  },
]

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-4">
          <HiSparkles size={30} />
          <span className="text-sm font-semibold uppercase tracking-wider">Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
          My <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Masterpieces</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Each project tells a story of innovation, creativity, and technical excellence
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const IconComponent = project.icon
            const isLarge = idx === 0 || idx === 2 // Make first and third projects larger
            
            return (
              <div
                key={idx}
                className={`group relative ${isLarge ? 'lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Card */}
                <div className={`relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                  hoveredProject === idx ? 'shadow-3xl' : ''
                }`}>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content Layout */}
                  <div className={`${isLarge ? 'lg:flex lg:items-center' : 'block'} p-8`}>
                    
                    {/* Image Section */}
                    <div className={`relative ${isLarge ? 'lg:w-1/2 lg:pr-8' : 'mb-6'}`}>
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        {/* Glow Effect */}
                        <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        <Link href={project.link} target="_blank">
                          <Image
                            src={project.image}
                            alt={project.name}
                            width={600}
                            height={400}
                            className="relative w-full h-64 object-cover rounded-2xl shadow-xl transform transition-all duration-500 hover:shadow-2xl"
                          />
                        </Link>
                        
                        {/* Floating Category Badge */}
                        <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-bold rounded-full shadow-lg`}>
                          {project.category}
                        </div>
                        
                        {/* Project Icon */}
                        <div className={`absolute -bottom-4 -right-4 p-3 bg-gradient-to-r ${project.color} rounded-2xl shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isLarge ? 'lg:w-1/2' : ''}`}>
                      {/* Project Name */}
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-purple-600 transition-all duration-300">
                        {project.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="group/btn flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-200"
                        >
                          <BsGithub className="group-hover/btn:rotate-12 transition-transform duration-200" />
                          Code
                        </Link>
                        
                        <Link
                          href={project.link}
                          target="_blank"
                          className={`group/btn flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                        >
                          <BsArrowUpRightSquare className="group-hover/btn:rotate-12 transition-transform duration-200" />
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <HiCode size={40} className="text-gray-600" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Interested in working together?
        </p>
        <Link
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-2xl font-bold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          <HiSparkles className="animate-spin" />
          Let's Create Something Amazing
        </Link>
      </div>
    </section>
  )
}

export default ProjectsSection

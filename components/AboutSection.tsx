"use client"
import React, { useState } from "react"
import Image from "next/image"
import { HiAcademicCap, HiLocationMarker, HiSparkles, HiCode, HiLightBulb, HiHeart } from "react-icons/hi"
import { BsChevronDown } from "react-icons/bs"

const skills = [
  { skill: "HTML", level: 90, color: "from-orange-500 to-red-500" },
  { skill: "CSS", level: 85, color: "from-blue-500 to-cyan-500" },
  { skill: "JavaScript", level: 88, color: "from-yellow-400 to-orange-500" },
  { skill: "TypeScript", level: 82, color: "from-blue-600 to-blue-800" },
  { skill: "Python", level: 90, color: "from-green-500 to-blue-600" },
  { skill: "React", level: 85, color: "from-cyan-400 to-blue-500" },
  { skill: "Next.js", level: 80, color: "from-gray-700 to-gray-900" },
  { skill: "Tailwind CSS", level: 88, color: "from-teal-400 to-blue-500" },
  { skill: "Git", level: 85, color: "from-orange-600 to-red-600" },
  { skill: "GitHub", level: 85, color: "from-gray-800 to-black" },
  { skill: "Jupyter Notebooks", level: 75, color: "from-orange-500 to-yellow-500" },
  { skill: "PHP", level: 70, color: "from-purple-600 to-indigo-600" },
  { skill: "Magento", level: 65, color: "from-orange-600 to-red-500" },
  { skill: "GO", level: 60, color: "from-cyan-500 to-blue-600" },
  { skill: "Wails", level: 55, color: "from-green-600 to-teal-600" },
  { skill: "API", level: 88, color: "from-purple-500 to-pink-500" },
]

const AboutSection = () => {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 8)

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e0e7ff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        ></div>
      </div>  

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-4">
            <HiSparkles size={30} />
            <span className="text-sm font-semibold uppercase tracking-wider">About</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Get to <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Know Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate developer with a love for creating amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <HiAcademicCap className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Michael</h3>
                  <p className="text-teal-600 font-semibold">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <HiLocationMarker className="text-teal-500" size={20} />
                  <span>Nottingham, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiAcademicCap className="text-purple-500" size={20} />
                  <span>University of Nottingham Student</span>
                </div>
              </div>
            </div>

            {/* Story Cards */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-teal-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-l-4 border-teal-500">
                <div className="flex items-center gap-3 mb-3">
                  <HiLightBulb className="text-teal-600" size={24} />
                  <h4 className="font-bold text-gray-900 dark:text-white">My Journey</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a <span className="font-bold text-teal-600">highly ambitious</span>, 
                  <span className="font-bold text-purple-600"> self-motivated</span>, and 
                  <span className="font-bold text-indigo-600"> driven</span> software engineer 
                  currently studying at the University of Nottingham, seeking an entry-level role in software development.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-3 mb-3">
                  <HiHeart className="text-purple-600" size={24} />
                  <h4 className="font-bold text-gray-900 dark:text-white">What I Love</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I have a passion for chess, coding personal projects, and bringing wild ideas to life. 
                  Every project is an opportunity to learn something new and push the boundaries of what's possible.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 border-l-4 border-indigo-500">
                <div className="flex items-center gap-3 mb-3">
                  <HiCode className="text-indigo-600" size={24} />
                  <h4 className="font-bold text-gray-900 dark:text-white">Learning Journey</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Built this portfolio following Hosna Qasmei's guidance, which helped me dive deeper into Next.js 
                  and modern web development practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <HiCode className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                {displayedSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(idx)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {skill.skill}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform transition-all duration-1000 ease-out ${
                          hoveredSkill === idx ? 'scale-105' : ''
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          boxShadow: hoveredSkill === idx ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Button */}
              {skills.length > 8 && (
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <span>{showAllSkills ? 'Show Less' : 'Show All Skills'}</span>
                  <BsChevronDown className={`transition-transform duration-300 ${showAllSkills ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

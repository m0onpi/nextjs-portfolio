"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown, HiCode, HiLightningBolt, HiSparkles } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>
            
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <HiCode className="text-teal-400 opacity-60" size={40} />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-75">
        <HiLightningBolt className="text-yellow-400 opacity-60" size={35} />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-150">
        <HiSparkles className="text-pink-400 opacity-60" size={30} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col text-center items-center justify-center min-h-screen px-4 md:flex-row md:space-x-12 md:text-left">
        {/* Profile Image with Glow */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <Image
              src="/chess.png"
              alt="Profile"
              width={350}
              height={350}
              className="relative rounded-full shadow-2xl border-4 border-white/20 transform transition-all duration-500 hover:scale-105 hover:rotate-3"
            />
            {/* Floating badges around image */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 animate-spin-slow">
              <HiSparkles className="text-white" size={20} />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          {/* Greeting with typing effect */}
          <div className="space-y-2">
            <p className="text-teal-300 text-lg md:text-xl font-medium animate-fadeIn">
              👋 Hello World! I'm
            </p>
            <h1 className="text-4xl md:text-7xl font-black bg-gradient-to-r from-white via-teal-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Michael
            </h1>
          </div>

          {/* Role with glitch effect */}
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack
              </span>{" "}
              <span className="relative">
                Developer
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent animate-pulse opacity-70">
                  Developer
                </span>
              </span>
            </h2>
          </div>

          {/* Description with animated underline */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I craft{" "}
            <span className="relative font-bold text-white">
              digital magic
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-purple-400 animate-pulse"></span>
            </span>{" "}
            with code, turning{" "}
            <span className="font-semibold text-teal-300">wild ideas</span> into{" "}
            <span className="font-semibold text-purple-300">reality</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-purple-600 rounded-xl font-bold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <HiSparkles className="group-hover:animate-spin" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-teal-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              to="about"
              className="px-8 py-4 border-2 border-teal-400 text-teal-400 rounded-xl font-bold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm opacity-70">Scroll Down</span>
          <HiArrowDown size={30} />
        </div>
      </div>
    </section>
  )
}

export default HeroSection

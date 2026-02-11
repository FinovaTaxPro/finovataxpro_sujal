// import Hero from '../components/home/hero'
// import Services from '../components/home/Services'
// import WhyChooseUs from '../components/home/WhyChooseUs'
// import Testimonials from '../components/home/Testimonial'
// import CTA from '../components/home/CTA'

// import { Suspense } from 'react'

// export default function Page() {
//   return (
//     <>
//       <Hero />
//       <ValueProposition />
//       <Services />
//       <WhyChooseUs />
//       <Testimonials />
//       <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
//         <CTA />
//       </Suspense>
//     </>
//   )
// }

// // Value Proposition Section (inline component)
// function ValueProposition() {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Everything You Need to File and Grow
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             We simplify the complexities of tax compliance so you can focus on what you do best
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
//             <p className="text-gray-600">
//               Our specialists are here to help you navigate every step of the process, ensuring everything is done right.
//             </p>
//           </div>

//           <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
//             <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
//             <p className="text-gray-600">
//               No hidden fees or surprises. We provide clear, upfront costs for all our services.
//             </p>
//           </div>

//           <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
//             <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
//               <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Support</h3>
//             <p className="text-gray-600">
//               We're with you for the long haul, offering support and resources throughout your business journey.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client"
import Hero from '../components/home/hero'
import Services from '../components/home/Services'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonial'
import CTA from '../components/home/CTA'
import { Suspense } from 'react'
export default function Page(){
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
       <CTA />
    </Suspense>
    </>
  )
}

// Value Proposition Section (inline component)
function ValueProposition() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to File and Grow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We simplify the complexities of tax compliance so you can focus on what you do best
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
            <p className="text-gray-600">
              Our specialists are here to help you navigate every step of the process, ensuring everything is done right.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden fees or surprises. We provide clear, upfront costs for all our services.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lifetime Support</h3>
            <p className="text-gray-600">
              We're with you for the long haul, offering support and resources throughout your business journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Team Section with background image and live animations
function Team() {
  const teamMembers = [
    {
      name: "CA Shruti Dang",
      role: "Senior Tax Consultant",
      image: "images/team/cashrutidang.png",
      bio: "15+ years of experience helping businesses optimize their tax strategies and ensure compliance.",
      color: "blue",
      accent: "from-blue-500 to-blue-600"
    },
    {
      name: "Jogendra Taneja",
      role: "Business Filing Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Expert in LLC formation and corporate structuring with a focus on startup growth strategies.",
      color: "emerald",

      accent: "from-emerald-500 to-emerald-600"
    },
    {
      name: "CS Jitendra Jain",
      role: "Client Success Manager",
      image: "/images/team/csjitendrajain.jpeg",
      bio: "Dedicated to providing personalized support and guidance throughout your business journey.",
      color: "pink",
      accent: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        ></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-blue-900/95"></div>
        
        {/* Animated grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern animate-grid-flow"></div>
        </div>
      </div>

      {/* Floating animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Meet The Experts Behind
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
              Your Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delayed">
            Dedicated professionals committed to making your business journey seamless and successful
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in-scale"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Card with hover effect */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                
                {/* Image container with overlay effect */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  />
                  
                  {/* Floating role badge with animation */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 animate-bounce-subtle">
                    <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold bg-white text-${member.color}-600 shadow-xl`}>
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Animated underline */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 via-emerald-600 to-pink-600 transition-all duration-700 rounded-full"></div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA text */}
        <div className="text-center mt-16 animate-fade-in-up-delayed-2">
          <p className="text-gray-300 text-lg">
            Ready to work with us?{" "}
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-300 transition-colors">
              Get in touch today
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Fade in animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Floating animations */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.95);
          }
        }

        @keyframes floatDelayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.05);
          }
          66% {
            transform: translate(30px, -20px) scale(0.98);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.08);
          }
        }

        /* Particle animations */
        @keyframes particleFloat {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, -1000px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Grid pattern animation */
        @keyframes gridFlow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        /* Gradient shift animation */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Pulse animation */
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        /* Bounce subtle */
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .animate-fade-in-up-delayed {
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .animate-fade-in-up-delayed-2 {
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out backwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: floatSlow 12s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .animate-grid-flow {
          animation: gridFlow 20s linear infinite;
        }

        /* Grid pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        /* Particles */
        .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          border-radius: 50%;
        }

        .particle-1 {
          width: 4px;
          height: 4px;
          left: 10%;
          animation: particleFloat 15s ease-in infinite;
          animation-delay: 0s;
        }

        .particle-2 {
          width: 6px;
          height: 6px;
          left: 30%;
          animation: particleFloat 18s ease-in infinite;
          animation-delay: 3s;
        }

        .particle-3 {
          width: 3px;
          height: 3px;
          left: 50%;
          animation: particleFloat 20s ease-in infinite;
          animation-delay: 6s;
        }

        .particle-4 {
          width: 5px;
          height: 5px;
          left: 70%;
          animation: particleFloat 16s ease-in infinite;
          animation-delay: 2s;
        }

        .particle-5 {
          width: 4px;
          height: 4px;
          left: 85%;
          animation: particleFloat 19s ease-in infinite;
          animation-delay: 5s;
        }

        .particle-6 {
          width: 3px;
          height: 3px;
          left: 95%;
          animation: particleFloat 17s ease-in infinite;
          animation-delay: 8s;
        }
      `}</style>
    </section>
  );
}

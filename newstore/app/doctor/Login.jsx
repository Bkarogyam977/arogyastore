

'use client'
import React, { useState } from 'react'
import LoginWithPhonedoctor from './LoginwithPhone'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  const [isIndividual, setIsIndividual] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Floating card with subtle shadow */}
        <div className="relative bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
          {/* Floating logo bubble */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="w-28 h-28 rounded-full bg-white border-4 border-blue-100 shadow-md flex items-center justify-center">
              <Image 
                src="/images/imageBox/icons/Arogyabharat-icon.png" 
                alt="Logo" 
                width={80} 
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Role toggle with unique pill design */}
          <div className="flex justify-center mb-4 mt-12">
            <div className="relative inline-flex bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setIsIndividual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isIndividual ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setIsIndividual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isIndividual ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600'
                }`}
              >
                Professional
              </button>
            </div>
          </div>

          {/* Dynamic greeting */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {isIndividual ? 'Welcome back!' : 'Doctor Login'}
            </h2>
            <p className="text-gray-500 mt-1">
              {isIndividual 
                ? 'Sign in to access your health records'
                : 'Access your professional dashboard'
              }
            </p>
          </div>

          {/* Login form */}
          <LoginWithPhonedoctor isIndividual={isIndividual} />

          {/* Divider with text */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-sm text-gray-500">
                New to Arogyam?
              </span>
            </div>
          </div>

          {/* Sign up link */}
          <Link 
            href="/register"
            className="block w-full text-center py-2.5 px-4 bg-white border border-gray-200 hover:border-blue-300 rounded-lg text-blue-600 font-medium text-sm transition-colors shadow-sm hover:shadow-md"
          >
            Create Free Account
          </Link>
        </div>

        {/* Subtle footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Arogyam. All rights reserved.
        </div>
      </div>
    </div>
  )
}














// 'use client'
// import React, { useState } from 'react'
// import LoginWithPhonedoctor from './LoginwithPhone'
// import Image from 'next/image'
// import Link from 'next/link'

// export default function Login() {
//   const [isIndividual, setIsIndividual] = useState(true)
//   const [switchBgPosition, setSwitchBgPosition] = useState('left-0')

//   const handleRoleSwitch = (isIndividual) => {
//     setIsIndividual(isIndividual)
//     setSwitchBgPosition(isIndividual ? 'left-0' : 'left-1/2')
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 flex items-center justify-center p-4">
//       <div className="relative w-full max-w-6xl mx-auto rounded-3xl lg:rounded-[40px] overflow-hidden shadow-2xl">
//         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 backdrop-blur-lg" />
        
//         <div className="relative flex flex-col lg:flex-row bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl lg:rounded-[40px] overflow-hidden">
//           {/* Decorative Elements */}
//           <div className="absolute top-0 left-0 w-1/3 h-full bg-cyan-500/10 -skew-x-12 -translate-x-20 opacity-50 lg:opacity-100" />
//           <div className="absolute bottom-0 right-0 w-1/3 h-full bg-blue-500/10 skew-x-12 translate-x-20 opacity-50 lg:opacity-100" />

//           {/* Illustration Section */}
//           <div className="lg:w-1/2 p-6 lg:p-12 flex items-center justify-center relative">
//             <div className="relative w-full max-w-[280px] lg:max-w-md aspect-square">
//               <Image
//                 src="/favicon.ico"
//                 alt="Arogyam Logo"
//                 fill
//                 className="object-contain drop-shadow-2xl"
//                 priority
//               />
//               <div className="absolute inset-0 animate-pulse-slow bg-cyan-500/20 rounded-full blur-xl lg:blur-3xl" />
//             </div>
//             <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8 bg-black/30 p-3 lg:p-4 rounded-xl backdrop-blur-sm">
//               <h2 className="text-lg lg:text-2xl font-bold text-white text-center">
//                 Your Health, Our Priority
//               </h2>
//               <p className="text-cyan-200 text-center mt-1 lg:mt-2 text-xs lg:text-sm hidden md:block">
//                 Comprehensive care for a healthier tomorrow
//               </p>
//             </div>
//           </div>

//           {/* Login Section */}
//           <div className="lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center space-y-6 lg:space-y-8">
//             {/* Role Switch */}
//             <div className="relative bg-slate-800/30 rounded-full p-1 lg:p-2 h-12 lg:h-16">
//               <div className="relative flex h-full">
//                 <div 
//                   className={`absolute top-0.5 lg:top-1 bottom-0.5 lg:bottom-1 w-1/2  bg-cyan-500/30 backdrop-blur-sm rounded-full transition-all duration-300 ease-out ${switchBgPosition}`}
//                   style={{ width: 'calc(50% - 4px)' }}
//                 />
//                 <button
//                   onClick={() => handleRoleSwitch(true)}
//                   className={`flex-1 flex items-center justify-center text-md lg:text-md font-medium transition-colors duration-200 ${
//                     isIndividual ? 'text-slate-300' : 'text-cyan-300'
//                   }`}
//                 >
//                   Individual
//                 </button>
//                 <button
//                   onClick={() => handleRoleSwitch(false)}
//                   className={`flex-1 flex items-center justify-center text-md lg:text-md font-medium transition-colors duration-200 ${
//                     !isIndividual ? 'text-white' : 'text-cyan-300'
//                   }`}
//                 >
//                   Professional
//                 </button>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="space-y-6 lg:space-y-8">
//               <div className="text-center">
//                 <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">
//                   Welcome{!isIndividual && ' Doctor'}
//                 </h1>
//                 <p className="text-slate-300 text-sm lg:text-base">
//                   {isIndividual 
//                     ? 'Sign in to access your health records'
//                     : 'Access your professional dashboard'
//                   }
//                 </p>
//               </div>

//               <LoginWithPhonedoctor />

//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-white/10" />
//                 </div>
//                 <div className="relative flex justify-center">
//                   <span className="bg-slate-800/50 px-3 lg:px-4 text-xs lg:text-sm text-cyan-300 rounded-full backdrop-blur-sm">
//                     New to Arogya Bharat?
//                   </span>
//                 </div>
//               </div>

//               <Link 
//                 href="/register"
//                 className="block w-full text-center py-2 lg:py-3 px-4 lg:px-6 bg-cyan-600/30 hover:bg-cyan-600/40 active:scale-95 transition-all rounded-lg lg:rounded-xl border border-cyan-500/30 text-cyan-300 font-medium shadow-lg hover:shadow-cyan-500/10 text-sm lg:text-base"
//               >
//                 Create Free Account
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
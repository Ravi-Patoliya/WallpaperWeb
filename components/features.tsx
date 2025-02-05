"use client";

// import { Zap, DollarSign, Wifi, HardDrive } from 'lucide-react';
// import Image from 'next/image';

// const features = [
//   {
//     icon: <Zap className="h-6 w-6" />,
//     title: 'Fast Processing',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
//   },
//   {
//     icon: <DollarSign className="h-6 w-6" />,
//     title: 'Save Money',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
//   },
//   {
//     icon: <Wifi className="h-6 w-6" />,
//     title: 'Wifi Compatibility',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
//   },
//   {
//     icon: <HardDrive className="h-6 w-6" />,
//     title: 'Unlimited Storage',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
//   },
// ];

// export function Features() {
//   return (
//     <section id="features" className="py-20">
//       <div className="container">
//         <div className="text-center mb-16">
//           <div className="inline-block">
//             <h2 className="font-heading text-3xl font-bold mb-2">Features</h2>
//             <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
//           </div>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Sed quis nisi nisl. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-center">
//           <div className="space-y-16">
//             {features.slice(0, 2).map((feature, index) => (
//               <div key={index} className="flex items-start gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-heading text-lg font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="relative mx-auto lg:order-2">
//             <div className="relative w-[280px] h-[560px] bg-gradient-to-b from-primary/5 to-purple-600/5 rounded-[2.5rem] p-4">
//               <Image
//                 src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop"
//                 alt="App Interface"
//                 fill
//                 className="object-cover rounded-[2rem]"
//               />
//             </div>
//           </div>

//           <div className="space-y-16 lg:order-3">
//             {features.slice(2, 4).map((feature, index) => (
//               <div key={index} className="flex items-start gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="font-heading text-lg font-semibold mb-2">
//                     {feature.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Download,
  Zap,
  Wallpaper,
  RefreshCw,
  Radar,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-[#eb0071]" />,
    title: "Fast Processing",
    description:
      "Quick and efficient wallpaper processing for instant application.",
  },
  {
    icon: <Wallpaper className="w-6 h-6 text-[#eb0071]" />,
    title: "4K Quality Wallpapers",
    description: "High-resolution wallpapers that look stunning on any device.",
  },
  {
    icon: <Radar className="w-6 h-6 text-[#eb0071]" />,
    title: "Diverse Anime Styles",
    description: "our collection caters to all anime preferences.",
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-[#eb0071]" />,
    title: "Smart Categories",
    description: "Easily navigate through intelligently organized themes and genres.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#eb0071]" />,
    title: "Regular Updates",
    description: "Fresh content and new features added regularly.",
  },
  {
    icon: <Download className="w-6 h-6 text-[#eb0071]" />,
    title: "One-Tap Downloads",
    description: "Instantly save your favourite wallpapers with a single touch.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold mb-2">
            Powerful Features for the Perfect Experience
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our app is packed with features that make finding and applying
            wallpapers a breeze. Discover why millions of users choose us for
            their device customization.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="grid grid-cols-1 gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // className="flex items-start space-x-4 p-4 rounded-xl backdrop-blur-sm border border-gray-800 hover:border-[#eb0071]/50 transition-colors"
                className="flex items-start space-x-4 p-4 rounded-xl backdrop-blur-sm border border-[#eb0071]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative w-full max-w-[240px] mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#eb0071] to-purple-600 rounded-[3rem] blur opacity-30"></div>
            <img
              src="/iphone_x_category_mockup.png"
              alt="App Mockup Image"
              className="relative rounded-[2.5rem] shadow-3xl w-full max-h-[480px] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl backdrop-blur-sm border border-[#eb0071]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#eb0071]/10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

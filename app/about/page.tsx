'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Code, Shield, Globe, Zap, ChevronRight, Linkedin, Twitter, Github } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every line of code is audited. Every transaction is verified. Trust is our foundation.',
  },
  {
    icon: Code,
    title: 'Open Source',
    description: 'Transparency through open source. Our smart contracts are public and verifiable.',
  },
  {
    icon: Globe,
    title: 'Decentralized',
    description: 'No single point of failure. True decentralization for maximum resilience.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge blockchain technology and solutions.',
  },
];

// const team = [
//   {
//     name: 'Ganesh Jambhulakar',
//     role: 'Founder',
//     avatar: 'https://i.pravatar.cc/150?img=68',
//     bio: 'Leading the vision for decentralized payments and NFT subscriptions. Specialist in smart contract security and cross-chain interoperability.',
//     social: { twitter: '#', linkedin: '#', github: '#' },
//   },
//   {
//     name: 'Pramod Chavhan',
//     role: 'Data Scientist',
//     avatar: 'https://i.pravatar.cc/150?img=15',
//     bio: 'Expert in data analytics and machine learning models for financial systems.',
//     social: { twitter: '#', linkedin: '#', github: '#' },
//   },
//   {
//     name: 'Chetan Gujjar',
//     role: 'Senior Python Developer',
//     avatar: 'https://i.pravatar.cc/150?img=27',
//     bio: 'Specializing in backend infrastructure and high-performance Python services.',
//     social: { twitter: '#', linkedin: '#' },
//   },
//   {
//     name: 'Vishal Maske',
//     role: 'MERN Expert',
//     avatar: 'https://i.pravatar.cc/150?img=32',
//     bio: 'Full-stack JavaScript expert focusing on scalable React and Node.js architectures.',
//     social: { twitter: '#', github: '#' },
//   },
// ];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    items: ['NFT Subscription Smart Contracts', 'Checkout System MVP', 'Multi-chain Support (ETH, Polygon)'],
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    status: 'current',
    items: ['Fiat On-ramp Integration', 'Advanced Analytics Dashboard', 'elite-pass Mobile Support'],
  },
  {
    phase: 'Phase 3',
    title: 'Scale',
    status: 'upcoming',
    items: ['Ride-hailing Payment Integration', 'Food Delivery Partnerships', 'Layer 2 Optimizations'],
  },
  {
    phase: 'Phase 4',
    title: 'Ecosystem',
    status: 'upcoming',
    items: ['DAO Governance Launch', 'Cross-chain Bridge', 'Global Merchant Network'],
  },
];

const techStack = [
  { name: 'Ethereum', category: 'Blockchain' },
  { name: 'Polygon', category: 'Blockchain' },
  { name: 'Solidity', category: 'Smart Contracts' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flux', category: 'Architecture' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute inset-0 network-bg opacity-30" />
        
        <div className="relative container-custom text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
          >
            About ExcellionDao
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-responsive-xl font-bold text-white mb-6"
          >
            Pioneering the Future of
            <br />
            <span className="gradient-text">Blockchain Payments</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-dark-300 max-w-2xl mx-auto"
          >
            We&apos;re a team of blockchain enthusiasts, developers, and visionaries 
            dedicated to making cryptocurrency payments accessible to everyone.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-dark-400 leading-relaxed">
                To democratize blockchain payments by building intuitive, secure, and 
                scalable solutions that empower businesses and individuals to embrace 
                the future of finance. We believe in removing barriers and making 
                cryptocurrency accessible to everyone, everywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-dark-400 leading-relaxed">
                A world where blockchain payments are as simple as swiping a card. 
                Where every transaction is transparent, secure, and instant. We envision 
                ExcellionDao at the forefront of this revolution, powering payments for 
                ride-hailing, food delivery, e-commerce, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dark-950" />
        <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-responsive-md font-bold text-white">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-dark-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-responsive-md font-bold text-white mb-4">
              Meet the <span className="gradient-text">Builders</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              A passionate team of blockchain experts, engineers, and innovators
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-hover p-6 text-center group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-500/30 mx-auto mb-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-primary-400 text-sm mb-3">{member.role}</p>
                <p className="text-dark-400 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="p-2 rounded-lg bg-dark-800 hover:bg-primary-500/20 text-dark-400 hover:text-white transition-all">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="p-2 rounded-lg bg-dark-800 hover:bg-primary-500/20 text-dark-400 hover:text-white transition-all">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="p-2 rounded-lg bg-dark-800 hover:bg-primary-500/20 text-dark-400 hover:text-white transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Roadmap */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-dark-950" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Roadmap
            </span>
            <h2 className="text-responsive-md font-bold text-white mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto">
              From NFT subscriptions to global payment infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-6 relative ${
                  phase.status === 'current' ? 'border-primary-500/50' : ''
                }`}
              >
                {phase.status === 'current' && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1 text-xs font-medium bg-primary-500 text-white rounded-full">
                      Current
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <Rocket className={`w-5 h-5 ${
                    phase.status === 'completed' ? 'text-emerald-400' :
                    phase.status === 'current' ? 'text-primary-400' :
                    'text-dark-500'
                  }`} />
                  <span className="text-sm text-dark-500">{phase.phase}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-4">{phase.title}</h3>
                
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-dark-400">
                      <ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        phase.status === 'completed' ? 'text-emerald-400' :
                        phase.status === 'current' ? 'text-primary-400' :
                        'text-dark-600'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
              Technology
            </span>
            <h2 className="text-responsive-md font-bold text-white">
              Built with the <span className="gradient-text">Best</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-3 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/30 transition-all group"
              >
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-dark-500 text-sm ml-2 group-hover:text-primary-400 transition-colors">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-responsive-md font-bold text-white mb-4">
              Ready to <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto mb-8">
              Whether you&apos;re looking to integrate our solutions or join our team,
              we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


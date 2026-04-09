"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-silver/30 selection:text-white relative overflow-hidden flex flex-col items-center justify-start pt-24 pb-12 px-6">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-light-gray to-brand-silver mb-6 leading-tight drop-shadow-md">
            Privacy Policy, Terms & Conditions, and Cookie Policy
          </h1>
          <p className="text-brand-silver font-mono tracking-widest text-sm mb-12 opacity-80 uppercase">
            Effective Date: April 2026
          </p>

          <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-12 pb-16">
            <section className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-brand-silver/40 transition-colors duration-500 overflow-hidden relative group">
              <div className="absolute -inset-x-0 -bottom-0 h-1/2 bg-gradient-to-t from-brand-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <p className="leading-relaxed font-light">
                This website is operated by Rafsan Rohan. By accessing or using this portfolio website, you agree to the terms outlined below.
              </p>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-brand-silver/40 transition-colors duration-500 overflow-hidden relative group">
              <div className="absolute -inset-x-0 -bottom-0 h-1/2 bg-gradient-to-t from-brand-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand-silver pl-4 py-1">1. Privacy Policy</h2>
              
              <div className="space-y-8 pl-4">
                <div>
                  <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Information We Collect</h3>
                  <p className="text-gray-400 font-light mb-2">We may collect limited personal information when you:</p>
                  <ul className="list-disc pl-5 font-light space-y-1 text-gray-400">
                    <li>Contact us via email or contact form</li>
                    <li>Reach out through WhatsApp or other linked platforms</li>
                  </ul>
                  <p className="text-gray-400 font-light mt-4 mb-2">This may include:</p>
                  <ul className="list-disc pl-5 font-light space-y-1 text-gray-400">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Message content</li>
                  </ul>
                  <p className="text-gray-400 font-light mt-4 italic">We do not collect sensitive or unnecessary personal data.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-light-gray mb-3">How Your Information Is Used</h3>
                  <p className="text-gray-400 font-light mb-2">Your information is used only to:</p>
                  <ul className="list-disc pl-5 font-light space-y-1 text-gray-400">
                    <li>Respond to inquiries</li>
                    <li>Communicate regarding projects or collaborations</li>
                  </ul>
                  <p className="text-gray-400 font-light mt-4">We do not sell, rent, or share your personal information with third parties.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Data Protection</h3>
                  <p className="text-gray-400 font-light mb-2">
                    We take reasonable measures to protect your information. However, no online system can guarantee complete security.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Your Rights</h3>
                  <p className="text-gray-400 font-light mb-2">You may request:</p>
                  <ul className="list-disc pl-5 font-light space-y-1 text-gray-400">
                    <li>Access to your data</li>
                    <li>Correction or deletion of your data</li>
                  </ul>
                  <p className="text-gray-400 font-light mt-4">Contact us to make such requests.</p>
                </div>
              </div>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-brand-silver/40 transition-colors duration-500 overflow-hidden relative group">
              <div className="absolute -inset-x-0 -bottom-0 h-1/2 bg-gradient-to-t from-brand-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand-silver pl-4 py-1">2. Terms & Conditions</h2>
              <div className="space-y-4 pl-4">
                <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Use of Content</h3>
                <p className="text-gray-400 font-light mb-4">
                  All visuals, case studies, code, and content displayed on this portfolio form a singular identity for Rafsan Rohan. Unauthorized reproduction, modification, or distribution is strictly prohibited without explicit permission.
                </p>
                <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Prohibited Behavior</h3>
                <p className="text-gray-400 font-light mb-4">
                  Users agree not to misuse this site, distribute harmful material, or attempt to compromise the website’s integrity. Any abusive behavior will result in a loss of access to services.
                </p>
                <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Changes to Terms</h3>
                <p className="text-gray-400 font-light">
                  We reserve the right to modify these terms at any time. Changes will be updated on this page with the effective date indicated at the top.
                </p>
              </div>
            </section>

            <section className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-brand-silver/40 transition-colors duration-500 overflow-hidden relative group">
              <div className="absolute -inset-x-0 -bottom-0 h-1/2 bg-gradient-to-t from-brand-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand-silver pl-4 py-1">3. Cookie Policy</h2>
              <div className="space-y-4 pl-4">
                <h3 className="text-xl font-semibold text-brand-light-gray mb-3">What Are Cookies?</h3>
                <p className="text-gray-400 font-light mb-4">
                  Cookies are small text files stored on your device to help websites run effectively and improve your user experience.
                </p>
                <h3 className="text-xl font-semibold text-brand-light-gray mb-3">How We Use Cookies</h3>
                <p className="text-gray-400 font-light mb-2">We use cookies primarily for:</p>
                <ul className="list-disc pl-5 font-light space-y-1 text-gray-400 mb-4">
                  <li><strong>Essential Functions:</strong> Required to provide seamless navigation.</li>
                  <li><strong>Analytics:</strong> Aggregated, anonymous data to understand website traffic and interaction.</li>
                </ul>
                <h3 className="text-xl font-semibold text-brand-light-gray mb-3">Managing Your Preferences</h3>
                <p className="text-gray-400 font-light">
                  You can manage or disable cookies through your browser settings. Be aware that disabling essential cookies might affect the functionality of the website.
                </p>
              </div>
            </section>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 mb-16 flex justify-center pb-24"
          >
            <Link href="/" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-silver/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-brand-silver hover:text-black hover:bg-brand-silver hover:shadow-[0_0_20px_rgba(230,236,245,0.3)] transition-all duration-300 uppercase group">
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} />
              Return to Core
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

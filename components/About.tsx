"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-16 lg:px-24">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Brand Identity / Left Column */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h2 className="section-subheading !text-logo">
                Our Identity
              </h2>
              <h3 className="section-heading mb-10 !text-white">
                Delonti. <br />
                Intelligent <br />
                Infrastructure.
              </h3>
            </motion.div>
          </div>

          {/* Mission & Expertise / Right Column */}
          <div className="lg:w-1/2 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="section-body !text-white">
                We are a premier technology solutions provider dedicated to bridging the gap between complex infrastructure needs and cutting-edge innovation.
              </p>
              
              <div className="h-px w-24 bg-primary/50" />
              
              <p className="section-body !text-white">
                With a decade of specialized experience serving both the public and private sectors, Delonti specializes in high-stakes environments where security and reliability are non-negotiable. Our expertise encompasses <span className="font-bold">Advanced RFID & IoT ecosystems</span>, <span className="font-bold">Cybersecurity Infrastructure</span>, and <span className="font-bold">Mission-Critical Public Safety Networks</span>.
              </p>

              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">10+</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2">Global</h4>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Service Reach</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

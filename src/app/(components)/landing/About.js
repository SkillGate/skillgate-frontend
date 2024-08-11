import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' >
      <div className="relative isolate overflow-hidden container mx-auto">
        <div className="mx-auto max-w-7xl padding-container py-10 sm:py-20">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className='relative max-w-4xl mt-12'>
              <div className="flex gap-2 mb-5 items-start"><FaArrowAltCircleRight style={{ color: 'purple', width: '50px' }}/><p className="text-lg font-semiBold">We offer an AI-powered recruitment system connecting HR managers and candidates seamlessly.</p></div>
              <div className="flex gap-2 mb-5 items-start"><FaArrowAltCircleRight style={{ color: 'purple', width: '50px' }}/><p className="text-lg font-semiBold">Our platform automatically matches candidate personas with company job posts and benefits, simplifying the selection process.</p></div>
              <div className="flex gap-2 mb-5 items-start"><FaArrowAltCircleRight style={{ color: 'purple', width: '50px' }}/><p className="text-lg font-semiBold">Candidates can create detailed CVs and personas, while HR managers can craft job posts and company profiles, ensuring personalized matches.</p></div>
              <div className="flex gap-2 mb-5 items-start"><FaArrowAltCircleRight style={{ color: 'purple', width: '50px' }}/><p className="text-lg font-semiBold">SkillGate automating candidate shortlisting, providing transparent reasons for selections, making the recruitment process more efficient and fair.</p></div>
            </div>
            <div className="text-center mt-10 text-lg max-w-2xl">
              <h2 className="text-5xl font-bold mb-10">Our mission</h2>
              <span className="text-xl font-semiBold">is to bridge the gap between top-notch talent and exceptional opportunities. We strive to revolutionize the recruitment process and make hiring efficient, effective, and enjoyable for both employers and candidates.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
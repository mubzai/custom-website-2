import React from 'react'
import Navbar from '@/Components/navbar'


const Page = () => {
  return (
    <main>
      <Navbar />
      <div className="about-section">
        <div className="container">
          <div className="text-center">
            <h1 className="title">About Us</h1>
            <p className="description">
              At [Your Company Name], we are committed to delivering excellence through innovative solutions and unparalleled customer service. Our focus is on empowering businesses with the tools they need to succeed in a competitive and rapidly changing market.
            </p>
          </div>
          <div className="mission-vision">
            <div className="card">
              <h2 className="card-title">Our Mission</h2>
              <p className="card-text">
                Our mission is to help organizations unlock their full potential by providing bespoke solutions that are tailored to their unique challenges. We believe in driving innovation, enhancing productivity, and fostering growth.
              </p>
            </div>

            <div className="card">
              <h2 className="card-title">Our Vision</h2>
              <p className="card-text">
                We envision a future where businesses of all sizes have the technological resources and strategic insights needed to thrive. Our goal is to be at the forefront of this transformation, providing the guidance and tools to shape tomorrow's business leaders.
              </p>
            </div>
          </div>

          <div className="core-values">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="card text-center">
                <h3 className="card-title">Integrity</h3>
                <p className="card-text">
                  We uphold the highest standards of integrity in all our actions and business practices.
                </p>
              </div>

              <div className="card text-center">
                <h3 className="card-title">Innovation</h3>
                <p className="card-text">
                  We embrace new ideas and innovation, constantly looking for ways to improve our services and solutions.
                </p>
              </div>

              <div className="card text-center">
                <h3 className="card-title">Excellence</h3>
                <p className="card-text">
                  Excellence is at the heart of everything we do, from delivering results to building long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page

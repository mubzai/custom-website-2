import Image from "next/image";
import Navbar from "@/Components/navbar";
import { global } from "styled-jsx/css";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-container">
        
        {/* Services Section */}
        <section className="section light-bg dark:bg-gray-900">
          <div className="container mx-auto">
            <h2 className="title text-center dark:title-dark">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="service-card">
                <h3 className="title">Consulting</h3>
                <p>Expert guidance to streamline your business strategy and optimize operational efficiency.</p>
              </div>
              
              <div className="service-card">
                <h3 className="title">Custom Solutions</h3>
                <p>Tailored software solutions to meet the unique needs of your organization, driving innovation.</p>
              </div>
              
              <div className="service-card">
                <h3 className="title">Support & Maintenance</h3>
                <p>Reliable technical support and maintenance services to ensure seamless operations.</p>
              </div>
              
            </div>
          </div>
        </section>
        
     {/* Testimonials Section */}
<section className="section dark-bg">
  <div className="container mx-auto">
    <h2 className="title text-center dark:title-dark">Client Testimonials</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      
      <div className="testimonial-card">
        <p>"Their expertise and professionalism were beyond our expectations. They delivered outstanding results."</p>
        <h4>- Alex Johnson, CEO of TechCorp</h4>
      </div>
      
      <div className="testimonial-card">
        <p>"From concept to execution, the team was highly collaborative and results-driven."</p>
        <h4>- Maria Lopez, Marketing Director, Innovate Inc.</h4>
      </div>
      
      <div className="testimonial-card">
        <p>"Reliable, professional, and dedicated to excellence. I highly recommend their services."</p>
        <h4>- James Parker, Founder of StartUpX</h4>
      </div>
      
    </div>
  </div>
</section>

        
        {/* Footer Section */}
        <footer className="footer">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <div className="mt-4">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </footer>
        
      </div>
    </main>
  );
}

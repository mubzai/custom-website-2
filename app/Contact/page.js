import React from 'react';
import Navbar from '@/Components/navbar';

const Page = () => {
  return (
    <main>
      <Navbar />
      <div className="main-container">
        <div className="container">
          <div className="header-text">
            <div className="title">Contact Us</div>
            <div className="description">
              We are here to help. Feel free to reach out to us for any inquiries, and we’ll get back to you promptly.
            </div>
          </div>

          <div className="grid">
            <div className="card">
              <div className="card-title">Contact Information</div>
              <div className="card-content">
                <div><strong>Email:</strong> contact@yourcompany.com</div>
                <div><strong>Phone:</strong> +1 234 567 8901</div>
                <div><strong>Address:</strong> 123 Business St., Suite 100, City, Country</div>
              </div>
            </div>

            <div className="card">
              <div className="card-title">Other Ways to Reach Us</div>
              <div className="card-content">
                You can also reach us through our social media platforms or leave us a message via email, and we will respond as soon as possible. We value your communication and look forward to assisting you.
              </div>
              <div className="social">
                <strong>Social Media:</strong> @yourcompany
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;

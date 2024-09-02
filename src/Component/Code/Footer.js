import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Basweshwar Madhavrao Gubge
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
            {/* <Link to="/privacy-policy">Privacy Policy</Link>   */}
            {/* OR */}
            {/* <a href="https://myvyay.com/">Privacy Policy</a>   */}
            <a href="https://myvyay.com/mobileappprivacypolicy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>

          </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

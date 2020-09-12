import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the CSSA newsletter to receive our upcomming event
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">license</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Events</h2>
            <Link to="/">Past </Link>
            <Link to="/">Upcomming </Link>
            <Link to="/">guide</Link>
            <Link to="/">policy</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contract</Link>
            <Link to="/">Support</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="https://werss.app/accounts/NTE1MjU4NTM1MzUyNTU=">Wechat</a>
            <a href="https://www.facebook.com/TASCSSA">Facebook</a>
            <a href="https://www.youtube.com/channel/UCY58Gjd_ulKQbsO4K4LTgjw">Youtube</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              CSSA
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">CSSA © 2020</small>
          <div class="social-icons">
              
          <Link
              class="social-icon-link weixin"
              to="/"
              target="_blank"
              aria-label="Weixin"
            >
              <i class="fab fa-weixin" />
            </Link>
            <Link
              class="social-icon-link weibo"
              to="/"
              target="_blank"
              aria-label="Weibo"
            >
              <i class="fab fa-weibo" />
            </Link>
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            
            

            
            
              
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

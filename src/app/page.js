"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    setDomain(window.location.hostname);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a {
          text-decoration: none;
          color: gray;
        }

        a:hover {
          text-decoration: underline;
        }

        .wrapper {
          width: 100%;
          height: 100vh;
        }

        .box-wrapper {
          height: 100%;
          display: flex;
          padding: 1rem;
          justify-content: center;
          align-items: center;
          background: rgb(255, 236, 251);
          background: linear-gradient(
            120deg,
            rgb(255, 238, 252) 0%,
            rgba(223, 250, 249, 1) 35%,
            rgb(255, 245, 222) 100%
          );
          border-radius: 1rem;
        }

        .left-container {
          width: 55%;
          height: 70%;
        }

        .right-container {
          padding: 2rem;
          width: 45%;
        }

        .right-container img {
          width: 100%;
          max-height: auto;
        }

        .content {
          padding: 1rem;
        }

        .title {
          font-size: 2.6rem;
          font-weight: 600;
          margin: 1rem 0;
        }

        .footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0.7rem;
          text-align: center;
          font-weight: 500;
          box-shadow: 0 -1px 5px 5px rgba(128, 128, 128, 0.1);
          z-index: 1;
          background-color: white;
        }

        .contact-info {
          padding: 1rem;
          display: flex;
          justify-content: start;
          align-items: start;
          gap: 2rem;
        }

        /* media queries */
        @media only screen and (max-width: 768px) {
          html {
            font-size: 62.5%;
          }

          .box-wrapper {
            flex-direction: column;
          }

          .left-container {
            width: 100%;
            height: 40%;
          }

          .right-container {
            width: 100%;
            height: 60%;
          }
        }
      `}</style>

      <section className="wrapper">
        <div className="box-wrapper">
          <div className="left-container">
            <div className="content">
              <p className="title">
                www.<span className="domain-text">{domain}</span> <br />
                Under Maintenance.
              </p>
              <p className="description">
                We apologize for any inconvenience caused, but our website is
                currently undergoing scheduled maintenance to enhance your
                browsing experience.
              </p>
            </div>
            <div className="contact-info">
              <div className="email">
                <strong>Email</strong> <br />
                <a href="mailto:hello@rsinfotechsys.com">
                  hello@rsinfotechsys.com
                </a>
              </div>
            </div>
          </div>
          <div className="right-container">
            <img
              src="/image/MAINTENANCE.png"
              alt="under maintenance"
              loading="lazy"
            />
          </div>
        </div>
        <div className="footer">
          <p>
            © 2023 All Rights Reserved by <span>{domain}</span> <span>
              Designed & Developed By{' '}
              <a href="https://rsinfotechsys.com">
                Right Serve Infotech System Pvt. Ltd.
              </a>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

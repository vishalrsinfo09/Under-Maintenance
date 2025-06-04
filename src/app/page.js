"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [domain, setDomain] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomain(window.location.hostname);
    }
  }, []);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .wrapper {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .box-wrapper {
          flex: 1;
          display: flex;
          flex-direction: row;
          padding: 2rem;
          background: linear-gradient(
            120deg,
            rgb(255, 238, 252) 0%,
            rgba(223, 250, 249, 1) 35%,
            rgb(255, 245, 222) 100%
          );
          border-radius: 1rem;
          gap: 2rem;
        }

        .left-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;
        }

        .right-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .right-container img {
          width: 100%;
          height: auto;
          max-width: 500px;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .contact-info {
          font-size: 1rem;
          color: #444;
        }

        .contact-info a {
          color: gray;
          text-decoration: none;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        .footer {
          width: 100%;
          padding: 1rem;
          text-align: center;
          background-color: white;
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: 0 -1px 5px rgba(128, 128, 128, 0.1);
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .title {
            font-size: 2.2rem;
          }

          .description {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .box-wrapper {
            flex-direction: column;
            padding: 1rem;
          }

          .right-container,
          .left-container {
            width: 100%;
          }

          .title {
            font-size: 1.8rem;
            text-align: center;
          }

          .description,
          .contact-info {
            text-align: center;
          }

          .right-container img {
            max-width: 300px;
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 1.6rem;
          }

          .description {
            font-size: 1rem;
          }

          .footer {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <section className="wrapper">
        <div className="box-wrapper">
          <div className="left-container">
            <p className="title">
              www.<span className="domain-text">{domain}</span> <br />
              Under Maintenance
            </p>
            <p className="description">
              We apologize for any inconvenience caused. Our website is
              currently undergoing scheduled maintenance to enhance your
              experience.
            </p>
            <div className="contact-info">
              <strong>Email:</strong> <br />
              <a href="mailto:hello@rsinfotechsys.com">
                hello@rsinfotechsys.com
              </a>
            </div>
          </div>

          <div className="right-container">
            <img
              src="/image/MAINTENANCE.png"
              alt="Under Maintenance Illustration"
              loading="lazy"
            />
          </div>
        </div>

        <div className="footer">
          © 2023 All Rights Reserved by <strong>{domain}</strong> | Designed &
          Developed by{" "}
          <a href="https://rsinfotechsys.com" target="_blank">
            Right Serve Infotech System Pvt. Ltd.
          </a>
        </div>
      </section>
    </>
  );
}
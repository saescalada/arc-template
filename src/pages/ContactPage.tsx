import { useState, type FormEvent } from "react";
import SocialLinks from "../components/SocialLinks";
import "../styles/contact.css";

function ContactPage() {
  const [prepared, setPrepared] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `AOne Games — ${data.get("reason")}`;
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "—"}\n\n${data.get("message")}`;
    window.location.href = `mailto:contact@aonegames.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <header className="contact-heading">
          <span className="contact-label">CONTACT / AONE GAMES</span>
          <h1>Let's build something<br /><span>great together.</span></h1>
          <p>Have a project in mind, a collaboration to explore or a question about our games? We'd love to hear from you.</p>
        </header>

        <div className="contact-grid">
          <section className="contact-info" aria-labelledby="contact-info-title">
            <span className="contact-label">LET'S CONNECT</span>
            <h2 id="contact-info-title">A conversation is<br />a good place to start.</h2>
            <p>From development and art services to press inquiries and player support, tell us how we can help.</p>
            <div className="contact-info-item">
              <span>EMAIL US</span>
              <a href="mailto:contact@aonegames.com">contact@aonegames.com <span aria-hidden="true">↗</span></a>
            </div>
            <div className="contact-info-item">
              <span>OUR STUDIO</span>
              <p className="contact-location">Santiago, Chile</p>
              <p>Creating games. Working together.</p>
            </div>
            <div className="contact-socials">
              <span>FOLLOW AONE GAMES</span>
              <SocialLinks className="contact-social-links" />
            </div>
          </section>

          <section className="contact-form-panel" aria-labelledby="contact-form-title">
            <div className="contact-form-heading">
              <h2 id="contact-form-title">Tell us about it.</h2>
              <p>Required fields are marked with an asterisk (*).</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} onChange={() => setPrepared(false)}>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name *</label>
                  <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" maxLength={100} required />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Email *</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-company">Company <span>(optional)</span></label>
                <input id="contact-company" name="company" autoComplete="organization" placeholder="Your studio or company" maxLength={120} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-reason">What would you like to discuss? *</label>
                <select id="contact-reason" name="reason" defaultValue="" required>
                  <option value="" disabled>Select a topic</option>
                  <option>Development & art services</option>
                  <option>Partnerships & collaboration</option>
                  <option>Press & media</option>
                  <option>Game support</option>
                  <option>Other inquiry</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Message *</label>
                <textarea id="contact-message" name="message" placeholder="A little about your project or question…" rows={5} maxLength={2000} required />
              </div>
              <p className="contact-form-note" id="contact-email-note">This form opens a draft in your email app. Review it there before sending.</p>
              <button className="contact-submit" type="submit" aria-describedby="contact-email-note">PREPARE EMAIL <span aria-hidden="true">↗</span></button>
              <p className="contact-form-status" role="status">{prepared ? "Your email app was requested. If it did not open, you can copy your message and email contact@aonegames.com directly. Nothing has been sent from this page." : ""}</p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;


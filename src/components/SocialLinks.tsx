import "./SocialLinks.css";
export default function SocialLinks({ className = "" }: { className?: string }) {
  return (<ul className={`footer-socials ${className}`} aria-label="AOne Games social media">
          <li><a className="footer-social footer-social--x" href="https://x.com/aonegames" target="_blank" rel="noopener noreferrer" aria-label="AOne Games on X (opens in a new tab)" title="X">
            <svg className="footer-sprite" viewBox="0 0 19 19" aria-hidden="true"><use href="/icons.svg#x-icon" /></svg>
          </a></li>
          <li><a className="footer-social footer-social--youtube" href="https://www.youtube.com/@AOneGames" target="_blank" rel="noopener noreferrer" aria-label="AOne Games on YouTube (opens in a new tab)" title="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.1a3 3 0 0 0-2.1-2.2C17.6 4.4 12 4.4 12 4.4s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.2A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.9 3 3 0 0 0 2.1 2.2c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.2A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.9ZM10 15.5v-7l6 3.5-6 3.5Z" /></svg>
          </a></li>
          <li><a className="footer-social footer-social--instagram" href="https://www.instagram.com/aonegames/" target="_blank" rel="noopener noreferrer" aria-label="AOne Games on Instagram (opens in a new tab)" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
          </a></li>
          <li><a className="footer-social footer-social--facebook" href="https://www.facebook.com/aonegamespage" target="_blank" rel="noopener noreferrer" aria-label="AOne Games on Facebook (opens in a new tab)" title="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M24 12a12 12 0 1 0-13.875 11.855v-8.386H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.386A12.003 12.003 0 0 0 24 12Z" /></svg>
          </a></li>
        </ul>);
}
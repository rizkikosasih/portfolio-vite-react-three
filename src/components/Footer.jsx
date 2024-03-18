import { Link, useLocation } from 'react-router-dom';
import { socialLinks, listFooter } from '../constants';

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={`footer font-poppins ${listFooter.includes(location.pathname) ? '' : 'hidden'}`}>
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          Created By <strong>Rizki Kosasih</strong>.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`w-6 h-6 object-contain ${location.pathname == '/contact' && link.link == '/contact' ? 'hidden' : ''}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

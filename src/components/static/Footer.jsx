import React from 'react';
import './Footer1.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faGifts, faHandHolding, faLadderWater, faShoppingBag, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

const Footer1 = () => {

  const footerData = [
    {
      title: 'About',
      links: [
        {
          path: '/About-us',
          text: 'About us'
        },
        {
          path: '/Contact-us',
          text: 'Contact us'
        },
        {
          path: '/career',
          text: 'Career',
        },
        {
          path: '/TechFarming-Stories',
          text: 'TechFarming Stories'
        },
        {
          path: '/press-and-media',
          text: 'Press and Media'
        },
        {
          path: '/TechFarming-farms-and-warehouse', text: 'TechFarming Farms & Warehouse'
        },
        {
          path: '/TechFarming-lab',
          text: 'TechFarming Laboratory'
        },
        {
          path: '/TechFarming-learning-center', text: 'TechFarming Learning Center'
        },
        {
          path: '/TechFarming-corporate-information', text: 'TechFarming Corp. Information'
        },
        {
          path: '/ethical-and-environmental-considerations',
          text: 'Ethical and Environment',
        },
      ],
    },
    {
      title: 'Help',
      links: [
        {
          path: '/Payment-questions',
          text: 'Payment'
        },
        {
          path: '/Cancellation-and-returns',
          text: 'Cancellation & Returns',
        },
        {
          path: '/customer-support-and-contact-information',
          text: 'Customer Support and Contact',
        },
        {
          path: '/shipping',
          text: 'Shipping',
        },
        {
          path: '/FAQ',
          text: 'FAQ',
        },
        {
          path: '/Report-infringement',
          text: 'Report Infringement',
        },
      ],
    },
    {
      title: 'Consumer Policy',
      links: [
        {
          path: '/Cancellation-and-returns',
          text: 'Cancellation & Returns',
        },
        {
          path: '/privacy-policy',
          text: 'Privacy Policy',
        },
        {
          path: '/terms-of-use',
          text: 'Terms of Use',
        },
        {
          path: '/security',
          text: 'Security',
        },
        {
          path: '/site-map',
          text: 'Site Map',
        },
        {
          path: '/grievance-redressal',
          text: 'Grievance Redressal',
        },
        {
          path: '/epr-compliance',
          text: 'EPR compliance',
        },
        {
          path: '/compliance-with-regulations',
          text: 'Compliance with Regulations',
        },
        {
          path: '/updates-and-amendments',
          text: 'Updates and Amendments',
        },
        {
          path: '/products-warranty-and-support',
          text: 'Products Warranty and Support',
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          path: 'https://www.facebook.com/',
          text: 'Facebook',
        },
        {
          path: 'https://www.twitter.com/',
          text: 'Twitter',
        },
        {
          path: 'https://www.youtube/',
          text: 'YouTube',
        },
        {
          path: 'https://www.linkedin.com/',
          text: 'LinkedIn',
        },
        {
          path: 'https://www.instagram.com/',
          text: 'Instagram',
        },

      ],
    },
  ];

  const createFooterItem = (title, links) => (
    <div className="footer-item">
      <p>{title}</p>
      <div className='footer-item-links'>
        {links.map((link, index) => (
          <div className='footer-item-links-text' key={index}>
            {link ? <Link to={link.path}>{link.text}</Link> : null}
          </div>
        ))}
      </div>
    </div>
  );

  const shortcutLinks = [
    {
      text: 'Become a Seller',
      icon: faShoppingBag,
      path: '/become-a-seller',
    },
    {
      text: 'Advertise',
      icon: faStarOfDavid,
      path: '/advertise',
    },
    {
      text: 'Help Center',
      icon: faHandHolding,
      path: '/help-center',
    },
    {
      text: 'Learning Hub',
      icon: faLadderWater,
      path: '/learning-hub',
    },
    {
      text: 'Gift Card',
      icon: faGifts,
      path: '/gift-card',
    },
  ];

  const fastNavigation = [
    {
      text: 'Press and Conferences',
      path: ''
    },
    {
      text: 'AI and ML Services',
      path: ''
    },
    {
      text: 'Marketing Team',
      path: ''
    },
    {
      text: 'Aquaponics & Hydroponics',
      path: ''
    },
    {
      text: 'Developer',
      path: ''
    },
    {
      text: 'Judicial & Laws',
      path: ''
    },
  ];


  return (
    <div id='footer-one'>
      <div className="footer-upper-component">
        <div className="footer-items">
          {footerData.map((item, index) => (
            <React.Fragment key={index}>
              {createFooterItem(item.title, item.links)}
            </React.Fragment>
          ))}
          <div className="footer-item-divider"></div>
          <div className="footer-item">
            <p className='title'>Mail Us:</p>
            <p className="address">
              TechFarming Company Limited, <br />Building TechFarming,<br /> Riammei Tech Village, <br />Tamenlong, 500098, <br />Manipur, India
            </p>
          </div>
          <div className="footer-item">
            <p className='title'>Registered Office Address:</p>
            <p className="address">
              TechFarming Company Limited, <br />Building TechFarming, <br />Riammei Tech Village, <br />Tamenlong, 500098, <br />Manipur, India
              <br />CIN:tr8765434567yt <br />Telephone: <span>040-7654356</span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="footer-lower-component">
        <div className="shortcut-links">
          {shortcutLinks.map((shortlink, index) => (
            <div className="link" key={index}>
              <p>
                <Link to={shortlink.path}>
                  <span><FontAwesomeIcon icon={shortlink.icon} className='short-icon' /></span>{shortlink.text}
                </Link>
              </p>
            </div>
          ))}
          <div className="copyright">
            <p><span><FontAwesomeIcon icon={faCopyright} /></span>2023-2024 TechFarming.com</p>
          </div>
        </div>
        <div className="payment-methods">
        </div>
      </div>
      <div className="footer-line"></div>
      <div className="fast-navigation">
        <ul>
          {fastNavigation.map((navigation, index) => (
            <li key={index}>
              <Link to={navigation.path}>{navigation.text}</Link>
            </li>
          ))}
        </ul>
        <div className="version">
          <Link to='/version-info'>
            TechFarming December 22 Version
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
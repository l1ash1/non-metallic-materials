import React from 'react';

import vkIcon from 'assets/icons/vk-icon.svg';
import facebookIcon from 'assets/icons/facebook-icon.svg';
import whatsappIcon from 'assets/icons/whatsapp-icon.svg';
import './BaseFooterContacts.scss';

const footerContacts = [
  {
    link: 'https://vk.com/li_ashi',
    imgSrc: vkIcon,
  },
  {
    link: 'https://vk.com/li_ashi',
    imgSrc: facebookIcon,
  },
  {
    link: 'https://vk.com/li_ashi',
    imgSrc: whatsappIcon,
  },
];

const BaseFooterContacts: React.FC = () => {
  return (
    <div className='base-footer-contacts'>
      <div className='base-footer-contacts__soc-media'>
        {footerContacts.map(({ link, imgSrc }, index) => (
          <a
            key={index}
            className='base-footer-contacts__soc-media__link'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <img src={imgSrc} alt='icon' />
          </a>
        ))}
      </div>
      <div className='base-footer-contacts__number'>+7 928 245 15 20</div>
    </div>
  );
};

export default BaseFooterContacts;

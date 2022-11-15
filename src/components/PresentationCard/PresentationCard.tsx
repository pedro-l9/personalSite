import React from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';

import './PresentationCard.css';
import br from './flags/br.png';
import usa from './flags/usa.png';

import { useTranslation } from 'react-i18next';

interface PresentationCardProps {
  isMobile: boolean;
  dismissedState: number;
  dismiss: Function;
}

function logEvent(event: string) {
  firebase.analytics().logEvent(event);
}

const languagesSupported = [
  {
    lang: 'br',
    flag: br,
    alt: 'Brazil Flag',
  },
  {
    lang: 'en',
    flag: usa,
    alt: 'USA flag',
  },
];

function PresentationCard({
  isMobile,
  dismissedState,
  dismiss,
}: PresentationCardProps) {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="presentation-card"
      className={`
        card nes-container with-title is-dark is-centered animate__animated
        ${isMobile ? '' : 'is-rounded'} 
        ${dismissedState > 0 ? 'animate__hinge' : 'animate__fast'}
      `}
    >
      {isMobile ? null : (
        <button
          className="nes-btn is-error dismiss-btn"
          type="button"
          onClick={() => dismiss()}
        >
          X
        </button>
      )}
      <p className="title">
        {t('helloWorld')}
        {languagesSupported.map(({ lang, flag, alt }) => (
          <img
            className="nes-pointer"
            src={flag}
            alt={alt}
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
          />
        ))}
      </p>
      <div className="card-container">
        <div className="presentation">
          {t('myNameIs')}
          <h1>Pedro Lacerda</h1>{' '}
          <span>
            {t('role')}
            <br />
            <span id="airdev">
              <a
                href="https://airdev.co/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logEvent('airdev-access')}
              >
                Airdev
              </a>
            </span>
          </span>
        </div>
        <div className="checkMeOut">{t('checkMeOut')}</div>

        <div className="social">
          <a
            href="https://in.placerda.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent('linkedin-access')}
          >
            <i className="nes-icon linkedin is-large" />
          </a>
          <a
            href="https://gh.placerda.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent('github-access')}
          >
            <i className="nes-icon github is-large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;

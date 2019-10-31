import React from "react";
import firebase from "firebase/app";
import "firebase/analytics";

import "./PresentationCard.css";
import br from "./flags/br.png";
import usa from "./flags/usa.png";

import { useTranslation } from "react-i18next";

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
    lang: "br",
    flag: br,
    alt: "Brazil Flag"
  },
  {
    lang: "en",
    flag: usa,
    alt: "USA flag"
  }
];

function PresentationCard(props: PresentationCardProps) {
  const { t, i18n } = useTranslation();

  return (
    <div
      id="presentation-card"
      className={`
        card nes-container with-title is-dark is-centered 
        ${props.isMobile ? "" : "is-rounded"} 
        ${props.dismissedState ? "animated hinge" : ""}
      `}
    >
      <p className="title">
        {t("helloWorld")}
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
        <div className="avatar">
          <img
            className="nes-avatar is-rounded"
            alt="Avatar"
            src="https://www.gravatar.com/avatar/1774f7db0ce16124fd9505f0e6851e6a?s=600"
          />
        </div>
        <div className="presentation">
          {t("myNameIs")}
          <h1>Pedro Lacerda</h1>{" "}
          <span>
            {t("backendEngineer")}
            <span id="dito">
              <a
                href="https://dito.com.br"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logEvent("dito-access")}
              >
                Dito
              </a>
            </span>
          </span>
        </div>
        <div className="checkMeOut">{t("checkMeOut")}</div>
        <div className="dismiss">
          <button
            type="button"
            className="nes-btn is-error"
            onClick={() => props.dismiss()}
          >
            {t("dismiss")}
          </button>
        </div>
        <div className="social">
          <a
            href="https://in.placerda.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent("linkedin-access")}
          >
            <i className="nes-icon linkedin is-large" />
          </a>
          <a
            href="https://github.placerda.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent("github-access")}
          >
            <i className="nes-icon github is-large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;

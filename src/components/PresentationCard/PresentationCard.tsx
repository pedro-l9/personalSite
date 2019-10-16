import React from "react";
import firebase from "firebase/app";
import "firebase/analytics";

import "./PresentationCard.css";
import br from "./flags/br.png";
import usa from "./flags/usa.png";

import { useTranslation } from "react-i18next";
import { i18n } from "i18next";

function logEvent(event: string) {
  firebase.analytics().logEvent(event);
}

const changeLang = (i18next: i18n, lang: string) => () => {
  i18next.changeLanguage(lang);
};

const PresentationCard = (props: {
  isMobile: boolean;
  isDismissed: boolean;
  dismiss: Function;
}) => {
  const { t, i18n } = useTranslation();

  console.log(i18n.language);

  return (
    <div
      className={`
        card nes-container with-title is-dark is-centered 
        ${props.isMobile ? "" : "is-rounded"} 
        ${props.isDismissed ? "animated hinge" : ""}
      `}
    >
      <p className="title">
        {t("helloWorld")}
        <button onClick={changeLang(i18n, "br")}>
          <img src={br} alt="Brazil Flag" />
        </button>
        <button onClick={changeLang(i18n, "en")}>
          <img src={usa} alt="USA flag" />
        </button>
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
            href="https://github.com/pedro-l9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent("github-access")}
          >
            <i className="nes-icon github is-large" />
          </a>
          <a
            href="https://www.linkedin.com/in/phenriquel/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => logEvent("linkedin-access")}
          >
            <i className="nes-icon linkedin is-large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;

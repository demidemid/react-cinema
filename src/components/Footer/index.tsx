import React from "react";
import CommonUtils from "../../utils/common";

interface IFooterProps {
  movieCounter: number;
}

const Footer: React.FC<IFooterProps> = ({ movieCounter }: IFooterProps) => (
  <footer className="footer">
    <section className="footer__logo logo logo--smaller">Cinemaddict</section>
    <section className="footer__statistics">
      <p>
        {movieCounter} movie{CommonUtils.getPlural(movieCounter)} inside
      </p>
    </section>
  </footer>
);

export default Footer;

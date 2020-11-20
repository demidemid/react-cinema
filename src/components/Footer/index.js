import React from "react";

const Footer = ({movieCounter}) => {
  return (
    <footer class="footer">
      <section class="footer__logo logo logo--smaller">Cinemaddict</section>
      <section class="footer__statistics">
        <p>130 291 movies inside ( {movieCounter} )</p>
      </section>
    </footer>
  );
};

export default Footer;
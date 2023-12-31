import React from "react";
import footer1 from '../pictures/footer1.png'
import footer2 from '../pictures/footer2.png'

const Footer = () => {
  return (
    < footer>
      <section className="containerFooter">
        <div>
            <img src={footer1} alt="img" />
        </div>
        <div> <img src={footer2} alt="img" /></div>
      </section>
    </footer>
  );
};

export default Footer;

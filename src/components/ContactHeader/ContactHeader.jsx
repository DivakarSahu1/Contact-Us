import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>CONTACT US</h1>
      <p>
        LET'S CONNECT : WE'RE HERE TO HELP YOU, AND WE'D LOVETO HEAR FROM YOU !
        WHETHER YOU HAVE A QUESTON, COMMENT,OR <br /> JUST WANT TO CHAT, YOU CAN
        REACT OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE , OR BY PHONE,
        EMAIL, OR <br /> SOCIAL MEDIA.{" "}
      </p>
    </div>
  );
};

export default ContactHeader;

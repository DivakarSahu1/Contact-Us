import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.Contact_Form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button
            text="VIA SUPPORT CALL"
            icon={<BiSolidPhoneCall fontSize={"24px"} />}
          />
        </div>{" "}
        <Button
          isSecondary_btn={true}
          text="VIA EMAIL"
          icon={<MdAttachEmail fontSize={"24px"} />}
        />
        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={5} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contact_Images}>
        <img
          src="https://sourceindia-electronics.com/front-assets/images/img/img2.png"
          alt="contact image"
          width={"450px"}
        />
      </div>
    </section>
  );
};

export default ContactForm;

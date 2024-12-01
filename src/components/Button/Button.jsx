import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={
        props.isSecondary_btn ? styles.Secondary_btn : styles.primary_btn
      }
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;

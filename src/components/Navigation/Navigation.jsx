import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img
          src="/images/Fitness.png"
          alt="Hindustani Fitness logo"
          width={80}
          height={70}
        />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;

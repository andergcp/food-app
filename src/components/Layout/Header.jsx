import mealsImg from "../../assets/meals.jpg";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Ander's Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Meals in a table" />
      </div>
    </>
  );
};

export default Header;

import classes from "../../styles/common/navbar.module.scss";

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav_buttons}>
        <button
          className={activePage === 0 ? classes.is_active : undefined}
          onClick={() => {
            setActivePage(0);
          }}
        >
          Challenges
        </button>
        <button
          className={activePage === 1 ? classes.is_active : undefined}
          onClick={() => {
            setActivePage(1);
          }}
        >
          About Challenges
        </button>
        <button
          className={activePage === 2 ? classes.is_active : undefined}
          onClick={() => {
            setActivePage(2);
          }}
        >
          Helpful Links
        </button>
      </div>
    </div>
  );
};

export default Navbar;

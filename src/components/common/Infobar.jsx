import classes from "../../styles/common/infobar.module.scss";

const Infobar = () => {
  return (
    <div className={classes.infobar}>
      <p>
        <span>Gmail Address:</span>
        codereviewer99@gmail.com
      </p>
      <p>
        <span>Telegram ID:</span>@Classicplayer
      </p>
    </div>
  );
};

export default Infobar;

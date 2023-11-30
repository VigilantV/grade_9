import challengesInfo from "../assets/data files/challengesInfo";

import classes from "../styles/challenges.module.scss";
const Challenges = ({ setActivePage }) => {
  return (
    <div className={classes.challenges}>
      <div className={classes.title_row}>
        <p className={`${classes.first_col} ${classes.title_element}`}>Row</p>
        <p className={`${classes.second_col} ${classes.title_element}`}>
          Challenge Link
        </p>
        <p className={`${classes.third_col} ${classes.title_element}`}>
          Deadline
        </p>
      </div>
      {challengesInfo.map((challenge, i) => (
        <div
          key={i}
          className={classes.challenge}
          onClick={() => {
            setActivePage(i + 3);
          }}
        >
          <p className={classes.first_col}>{i + 1}</p>
          <p className={classes.second_col}>{challenge.name}</p>
          <p className={classes.third_col}>{challenge.deadline}</p>
        </div>
      ))}
    </div>
  );
};

export default Challenges;

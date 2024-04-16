import classes from "../../styles/challenges/challenge_1.module.scss";
import challenge_3 from "../../assets/images/challenges/challenge_3.jpg";

const Challenge_3 = () => {
  return (
    <div className={classes.question}>
      <h2>
        برنامه ای بنویسید که مشابه شکل رو به رو یک مانند یک counter کار کند:
      </h2>
      <img style={{width: "30rem", marginRight: "10rem"}} src={challenge_3} />
    </div>
  );
};

export default Challenge_3;

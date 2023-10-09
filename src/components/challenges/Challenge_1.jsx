import classes from "../../styles/challenges/challenge_1.module.scss";
import challenge_1 from "../../assets/images/challenges/challenge_1.jpg";

const Challenge_1 = () => {
  return (
    <div className={classes.question}>
      <h2>کدی بنویسید که مشابه عکس مقابل را در خروجی تولید کند:</h2>
      <img src={challenge_1} />
    </div>
  );
};

export default Challenge_1;

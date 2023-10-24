import classes from "../../styles/challenges/challenge_1.module.scss";
import challenge_2 from "../../assets/images/challenges/challenge_2.jpg";

const Challenge_2 = () => {
  return (
    <div className={classes.question}>
      <h2>کدی بنویسید که مشابه عکس مقابل را در خروجی تولید کند:</h2>
      <img src={challenge_2} />
    </div>
  );
};

export default Challenge_2;

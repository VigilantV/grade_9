import classes from "../../styles/challenges/challenge_1.module.scss";
import challenge_3 from "../../assets/images/challenges/challenge_3.jpg";

const Challenge_3 = () => {
  return (
    <div style={{marginLeft: "15vw"}} className={classes.question}>
      <h2>کدی بنویسید که مشابه عکس مقابل را در خروجی تولید کند:</h2>
      <img style={{width: "45vw", height: "25vw",  marginRight: "2vw"}} src={challenge_3} />
    </div>
  );
};

export default Challenge_3;

import classes from "../../styles/challenges/challenge_1.module.scss";
import proj_1_1 from "../../assets/images/challenges/proj_1_1.jpg";

const Project_1 = () => {
  return (
    <>
      <div style={{ marginLeft: "15vw" }} className={classes.question}>
        <h2>کدی بنویسید که مشابه عکس مقابل را در خروجی تولید کند:</h2>
        <img
          style={{ width: "45vw", height: "25vw", marginRight: "2vw" }}
          src={proj_1_1}
        />
      </div>
      <div style={{ marginRight: "7vw", fontSize: "1.7vw", direction: "rtl" }}>
        <h3>سوال 2:</h3>
        <p>
          برنامه ای بنویسید که nامین عدد اول را مطابق با خواست کاربر نمایش دهد.
        </p>
        <p>اگر کاربر عدد 4 را وارد کند خروجی باید 4امین عدد اول باشد یعنی: 7</p>
        <p>
          اگر کاربر عدد 11 را وارد کند خروجی باید 11امین عدد اول باشد یعنی: 31
        </p>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Project_1;

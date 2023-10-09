import classes from "../styles/aboutChallenges.module.scss";
import zip from "../assets/images/zip.png";

const AboutChallenges = () => {
  return (
    <>
      <div className={classes.content}>
        <h2 className={classes.title}>اصول ارسال تکالیف:</h2>
        <ul>
          <li>مهلت ارسال تمرین ها مطابق با تاریخ اعلام شده در هر ردیف هست.</li>
          <li>تمرینات انجام شده را به آدرس ایمیل بالای صفحه ارسال کنید.</li>
          <li>
            پیش از ارسال، فولدر نهایی را zip کرده و آن را مطابق با نمونه‌ی
            روبه‌رو، تغییر نام دهید
          </li>
          <li>
            برای پرسیدن سوال هاتون میتونید از طریق آیدی تلگرام یا آدرس ایمیل در
            بالای صفحه به من پیام بدید.
          </li>
        </ul>
      </div>
      <div className={classes.sample_content}>
        <img src={zip} />
        <p>Ali_Salehi_9_2_1</p>
        <p>( شماره تمرین_شماره کلاس_مقطع تحصیلی_نام خانوادگی_نام )</p>
      </div>
    </>
  );
};

export default AboutChallenges;

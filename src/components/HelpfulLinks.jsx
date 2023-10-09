import helpfulLinks from "../assets/data files/helpfulLinks";
import teachedFiles from "../assets/data files/teachedFiles";
import downloadFile from "./common/downloadFile";

import classes from "../styles/helpfulLinks.module.scss";

const HelpfulLinks = () => {
  return (
    <div className={classes.content}>
      <div className={classes.head}>
        <p>
          از اون جایی که مهارت search کردن یک هنره، توصیه همیشگی من اینه که تمام
          مشکلات نرم افزاری و برنامه نویسیتون رو داخل گوگل سرچ کنید.
        </p>
        <p>
          اما جهت آسون کردن بخشی از مسیر یادگیریتون، برخی از منابع آموزشی مفید
          رو اینجا براتون قرار میدم.
        </p>
      </div>
      <ul>
        {helpfulLinks.map((helpfulLink, i) => (
          <li key={i}>
            <div className={classes.circle}></div>
            <p>{helpfulLink.title}</p>
            <a
              href={helpfulLink.link}
              target="_blank"
              className={classes.links}
            >
              کلیک کنید
            </a>
          </li>
        ))}
        <li className={classes.python_edu}>
          <div className={classes.circle}></div>
          <p>آموزش html به زبان فارسی:</p>
          <div>
            <p>
              وارد
              <a
                href="https://roocket.ir/series/learn-html"
                target="_blank"
                className={classes.links}
              >
                این لینک‌
              </a>
              شده و داخل سایت ثبت نام کنید.
              <br /> سپس میتوانید از دوره های آموزشی استفاده کنید.
            </p>
            <p style={{ marginTop: "0.8vw" }}>
              (این دوره رایگان، اختیاریست و شما میتوانید برای یادگیری شخصی از هر
              منبع دیگری استفاده کنید.)
            </p>
          </div>
        </li>
      </ul>
      <div>
        <p className={classes.teached_file_title}>
          دانلود فایل های کار شده داخل کلاس:
        </p>
        {teachedFiles.map((teachedFile, i) => (
          <li key={i}>
            <div className={classes.circle}></div>
            <p>{teachedFile.title}:</p>
            <p
              onClick={() =>
                downloadFile(teachedFile.fileName, teachedFile.file)
              }
              className={classes.links}
            >
              کلیک کنید
            </p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HelpfulLinks;

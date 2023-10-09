import { Fragment, useState } from "react";

import Infobar from "./components/common/Infobar";
import Navbar from "./components/common/Navbar";
import Challenges from "./components/Challenges";
import AboutChallenges from "./components/AboutChallenges";
import HelpfulLinks from "./components/HelpfulLinks";
import challengesInfo from "./assets/data files/challengesInfo";

const App = () => {
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <Infobar />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div style={{ height: "1px" }}></div>
      {activePage === 0 && <Challenges setActivePage={setActivePage} />}
      {activePage === 1 && <AboutChallenges />}
      {activePage === 2 && <HelpfulLinks />}
      {challengesInfo.map((challenge, i) => (
        <Fragment key={i}>
          {activePage === i + 3 && <>{challenge.content}</>}
        </Fragment>
      ))}
    </>
  );
};

export default App;

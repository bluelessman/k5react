import LogoImg from "./LogoImg";
import LogoP from "./LogoP";
import LogoA from "./LogoA";

function LogoHeader() {

  return (
    <header className="App-header">
      <LogoImg />
      <LogoP msg={"부산대학교"} />
      <LogoP msg={"K-digital 5기"} />
      <LogoP msg={"김경민"} />
      <LogoA />
    </header>
  );
}

export default LogoHeader;
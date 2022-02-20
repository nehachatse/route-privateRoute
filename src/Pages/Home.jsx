import Navbar from "../Components/Navbar";
import welcome from "../img/welcome.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <img src={welcome} alt="welcome" width="100%" />
    </div>
  );
}

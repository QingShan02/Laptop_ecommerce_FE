import { Link } from "react-router-dom";
import UserLayout from "../components/Layout/UserLayout";
const Home = () => {
  return (
    <UserLayout>
      <div>
        <h1>Hello World</h1>
        <Link to="/about">About Us</Link>
      </div>
    </UserLayout>
  );
}
export default Home;
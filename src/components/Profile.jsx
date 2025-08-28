import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return <div>Profile Page</div>;
};

export default Profile;

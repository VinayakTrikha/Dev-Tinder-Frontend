import { useSelector } from "react-redux";

const Feed = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return <div>Feed Page</div>;
};

export default Feed;

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../utils/constants";
import { addFeedData } from "../slices/feedSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feedArr = useSelector((store) => store.feed);

  const fetchFeed = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/feed?page=1&limit=10`, {
        withCredentials: true,
      });
      const feedData = response.data;
      dispatch(addFeedData(feedData.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const user = useSelector((store) => store.user);
  console.log(user);
  return feedArr?.length > 0 ? (
    <div className="flex justify-center my-20">
      <UserCard feedData={feedArr[0]} />
    </div>
  ) : (
    <></>
  );
};

export default Feed;

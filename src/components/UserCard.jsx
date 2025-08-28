const UserCard = ({
  feedData,
  showBtn1 = false,
  showBtn2 = false,
  btn1Txt = "Interested",
  btn2Txt = "Ignore",
}) => {
  if (!feedData) return;

  const { firstName, lastName, age, gender, photoUrl, about, skills } =
    feedData;

  return (
    <div className="card bg-base-300 w-96 shadow-sm ">
      <img
        src={photoUrl}
        alt="Shoes"
        className="w-40 object-cover mx-auto mt-4"
      />
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        <p>{about}</p>
        {skills.length > 0 && (
          <div>
            {skills.map((skill) => (
              <div className="badge badge-primary mr-3 mb-2">Primary</div>
            ))}
          </div>
        )}
        <div className="card-actions justify-center mt-8 ">
          {showBtn1 && <button className="btn btn-secondary">{btn1Txt}</button>}
          {showBtn2 && <button className="btn btn-primary">{btn2Txt}</button>}
        </div>
      </div>
    </div>
  );
};

export default UserCard;

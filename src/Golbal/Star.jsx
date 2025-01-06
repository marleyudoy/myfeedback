import StarImage from "../assets/icons/star.png";

function Star({ starCount }) {
  const stars = [];
  const getRivew = (value) => {
    for (let i = 0; i < value; i++) {
      stars.push(<img key={i} className="w-[16px] h-[16px]" src={StarImage} />);
    }
  };
  getRivew(starCount);

  return stars;
}

export default Star;

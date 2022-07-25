import { useParams } from "react-router-dom";

function StayPage() {
  const { stayId } = useParams();

  return <main>Stay</main>;
}

export default StayPage;

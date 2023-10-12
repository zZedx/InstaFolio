import { useParams } from "react-router-dom";

const Story = () => {
  const {id} = useParams();
  console.log(id)
  return <div>{id}</div>;
};

export default Story;

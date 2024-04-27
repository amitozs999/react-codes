import { useParams } from "react-router-dom";

const Ids = () => {
  /* using useparams can extract /Ids/4 id=4 */

  const { id } = useParams();

  return (
    <div className="display">
      <h3>Extracted Id in Ids component : {id}</h3>
    </div>
  );
};

export default Ids;

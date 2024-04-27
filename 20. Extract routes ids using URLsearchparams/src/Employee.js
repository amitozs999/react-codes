import { useParams } from "react-router-dom";

const Employee = () => {
  {
    /* using useparams can extract /ram name=ram */
  }
  const { name } = useParams();

  return (
    <div className="display">
      <h3>Extracted Employee in emp component: {name}</h3>
    </div>
  );
};

export default Employee;

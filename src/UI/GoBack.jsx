import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoBack({ children, type }) {
  const navigate = useNavigate();

  return (
    <Button type={type} onClick={() => navigate(-1)}>
      {children}
    </Button>
  );
}

export default GoBack;

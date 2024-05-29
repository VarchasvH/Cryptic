import { CircularProgress } from "@mui/material";
import "./styles.css";
const Loader = () => {
  return (
    <div className='loader-container'>
      <CircularProgress />
    </div>
  );
};

export default Loader;

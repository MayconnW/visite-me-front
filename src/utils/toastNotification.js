import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const successMessage = ({ message, duration = 3000 }) => {
  toast.success(message, {
    autoClose: duration,
  });
};

const infoMessage = ({ message, duration = 3000 }) => {
  toast.info(message, {
    autoClose: duration,
  });
};

const errorMessage = ({ message, duration = 3000 }) => {
  toast.error(message, {
    autoClose: duration,
  });
};

export { infoMessage, successMessage, errorMessage };

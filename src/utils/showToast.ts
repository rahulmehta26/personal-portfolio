import { Bounce, toast, type TypeOptions } from "react-toastify";

type ToastProps = {
  type: TypeOptions;
  message: string;
};

export const showToast = ({ type, message }: ToastProps) => {
  toast(message, {
    type, // 'success' | 'error' | 'info' | 'warning'
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

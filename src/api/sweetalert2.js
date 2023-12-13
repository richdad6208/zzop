import Swal from "sweetalert2";

export const authError = () => {
  return Swal.fire({
    title: "Error!",
    text: "로그인이 필요한 서비스입니다",
    icon: "error",
    confirmButtonText: "ok",
  });
};

import { useEffect } from "react";
import { checkUserState } from "@api/firebase";
import { useNavigate } from "react-router-dom";
import { authError } from "@api/sweetalert2";

export default function PrivateRouter({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    checkUserState((user) => {
      if (!user) {
        authError();
        navigate("/");
      }
    });
  }, []);

  return <>{children}</>;
}

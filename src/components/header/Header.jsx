import styles from "./Header.module.scss";
import cs from "classnames/bind";
import IMAGES from "@assets/images/images";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { signInWidthGoogle, signOutWidthGoogle } from "@lib";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const cx = cs.bind(styles);

export default function Header() {
  const auth = getAuth();
  const [loginUser, setLoginUser] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoginUser(user);
    } else {
      setLoginUser("");
    }
  });

  async function handleLogin() {
    const result = await signInWidthGoogle(auth);
    console.log(result);
  }
  function handleLogout() {
    signOutWidthGoogle(auth);
  }
  return (
    <header className={cx("wrapper")}>
      <h1>
        <Link to="/">
          <img src={IMAGES.logo} alt="" />
          <span>zzop</span>
        </Link>
      </h1>
      <nav>
        <ul className={cx("primary-navigation")}>
          <li>
            <Link to="/products">
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <span>Carts</span>
            </Link>
          </li>
          <li>
            <Link to="/products/new">
              <span>
                <BsPencilFill />
              </span>
            </Link>
          </li>
          {loginUser && (
            <li className={cx("user-photo")}>
              <img src={loginUser.photoURL} />
              <span>{loginUser.displayName}</span>
            </li>
          )}

          <li>
            {loginUser ? (
              <span className={cx("login")} onClick={handleLogout}>
                Logout
              </span>
            ) : (
              <span className={cx("login")} onClick={handleLogin}>
                Login
              </span>
            )}
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          console.log(auth);
        }}
      >
        auth
      </button>
    </header>
  );
}

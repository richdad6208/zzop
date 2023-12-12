import styles from "./Header.module.scss";
import cs from "classnames/bind";
import IMAGES from "@assets/images/images";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
import { login, logout, checkUserState } from "@api/firebase";
import { useEffect, useState } from "react";
import { User } from "@components";
const cx = cs.bind(styles);

export default function Header() {
  const [loginUser, setLoginUser] = useState();
  useEffect(() => {
    checkUserState(setLoginUser);
  }, []);

  async function handleLogin() {
    login();
  }
  async function handleLogout() {
    logout();
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
            <li>
              <User user={loginUser} />
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
    </header>
  );
}

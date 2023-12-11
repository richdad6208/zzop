import styles from "./Header.module.scss";
import cs from "classnames/bind";
import IMAGES from "@assets/images/images";
import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";
const cx = cs.bind(styles);

export default function Header() {
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
          <li>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

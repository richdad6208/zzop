import styles from "./User.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className={cx("wrapper")}>
      <img src={photoURL || ""} alt="" />
      <p>{displayName || ""}</p>
    </div>
  );
}

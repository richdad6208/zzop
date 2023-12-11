import styles from "./MaxWidth.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function MaxWidth({ children }) {
  return <div className={cx("wrapper")}>{children}</div>;
}

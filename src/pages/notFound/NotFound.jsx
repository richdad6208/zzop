import React from "react";
import styles from "./NotFound.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

export default function NotFound() {
  return (
    <div className={cx("wrapper")}>
      <h1>죄송합니다 찾으시는 페이지가 없습니다.</h1>
    </div>
  );
}

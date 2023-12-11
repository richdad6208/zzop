import { Header, MaxWidth } from "./components";
import { Outlet } from "react-router-dom";
import "@styles/index.scss";

export default function Root() {
  return (
    <>
      <MaxWidth>
        <Header />
      </MaxWidth>
      <MaxWidth>
        <main>
          <Outlet />
        </main>
      </MaxWidth>
    </>
  );
}

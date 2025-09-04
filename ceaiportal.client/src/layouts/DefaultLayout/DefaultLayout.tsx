import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./DefaultLayout.less";

const DefaultLayout = () => {
  return (
    <Layout className={"default-layout"}>
      <Outlet />
    </Layout>
  );
};

export default DefaultLayout;

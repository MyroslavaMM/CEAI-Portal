import { type FC, Fragment, type PropsWithChildren, useState } from "react";
import "./ContentLayout.less";
import { Button, Image, Layout, Row } from "antd";
import AsideMenu from "../../components/asideMenu/index";
import menuLogo from "../../../public/logo/logo-mobile.svg";
import { NavLink } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const ContentLayout: FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={"content-layout"}>
      <Layout.Sider
        width={280}
        className={"layout-sider"}
        theme={"light"}
        collapsible
        collapsed={collapsed}
        trigger={null}
        collapsedWidth={0}
        style={{ background: "#fff", position: "relative" }}
      >
        <Row className={"aside-menu-logo-block"}>
          {!collapsed && (
            <Fragment>
              <Row className={"aside-menu-logo"}>
                <NavLink className={"menu-logo-link"} to={"/"}>
                  <Image
                    preview={false}
                    src={menuLogo}
                    width={20}
                    height={20}
                  />
                  CEAI Portal
                </NavLink>
              </Row>

              <div style={{ textAlign: "center" }}>
                <Button
                  type="text"
                  onClick={() => setCollapsed(true)}
                  icon={<MenuFoldOutlined />}
                />
              </div>
            </Fragment>
          )}
        </Row>
        {!collapsed && <AsideMenu />}
      </Layout.Sider>
      {collapsed && (
        <div
          style={{
            width: 40,
            background: "#fbfafb",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px 0",
          }}
        >
          <Button
            type="text"
            onClick={() => setCollapsed(false)}
            icon={<MenuUnfoldOutlined />}
          />
        </div>
      )}
      <Layout.Content className={"layout-content"}>
        <Fragment>
          <Row className={"content"}>{children}</Row>
        </Fragment>
      </Layout.Content>
    </Layout>
  );
};

export default ContentLayout;

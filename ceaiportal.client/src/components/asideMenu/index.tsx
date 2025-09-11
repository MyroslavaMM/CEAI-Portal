import { useEffect, useState, type FC } from "react";
import "./index.less";
import { Menu, Image } from "antd";
import ExpandArrow from "../../../public/icons/select-arrow.svg";
import type { MenuProps } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { aiTools } from "../../data";
import TwoByTwoAssistantIcon from "../../../public/icons/TwoByTwo.png";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "aiTools",
    label: "AI Tools",
    children: [
      ...aiTools
        .filter(({ name }) => !name.startsWith("Two By Two"))
        .map(({ id, name, icon }) => ({
          key: `/agents/${id}`,
          label: (
            <NavLink to={`/agents/${id}`} className={"menu-link"}>
              <Image
                width={20}
                height={20}
                preview={false}
                src={icon}
                className={"menu-icon"}
              />
              {name}
            </NavLink>
          ),
        })),
      {
        key: "twoByTwo",
        className: "two-by-two-submenu",
        label: (
          <div className={"submenu-title-wrapper"}>
            <Image
              width={20}
              height={20}
              preview={false}
              src={TwoByTwoAssistantIcon}
              className={"menu-icon"}
            />
            <span className={"submenu-title"}>Two By Two</span>
          </div>
        ),
        children: aiTools
          .filter(({ name }) => name.startsWith("Two By Two"))
          .map(({ name, id, type }) => ({
            key: type === "assistant" ? `/agents/${id}` : `/tools/${id}`,
            label: (
              <NavLink
                to={type === "assistant" ? `/agents/${id}` : `/tools/${id}`}
                className={"menu-link submenu-link"}
              >
                {name.replace("Two By Two ", "")}{" "}
              </NavLink>
            ),
          })),
      },
    ],
  },
];

const AsideMenu: FC = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  useEffect(() => {
    const path = location.pathname;

    setSelectedKeys([path]);

    if (path.startsWith("/agents/") || path.startsWith("/tools/")) {
      if (path.includes("tools")) {
        setOpenKeys(["twoByTwo", "aiTools"]);
      } else {
        setOpenKeys(["aiTools"]);
      }
    }
  }, [location]);

  return (
    <Menu
      rootClassName={"aside-menu"}
      mode="inline"
      items={items}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={(keys) => setOpenKeys(keys as string[])}
      expandIcon={({ isOpen }) => (
        <Image
          preview={false}
          src={ExpandArrow}
          alt="expand"
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      )}
    />
  );
};

export default AsideMenu;

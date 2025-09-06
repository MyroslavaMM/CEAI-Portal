import { useEffect, useState, type FC } from "react";
import "./index.less";
import { Menu, Image } from "antd";
import ExpandArrow from "../../../public/icons/select-arrow.svg";
import type { MenuProps } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { agentsData, toolsData } from "../../data";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "agents",
    label: "Agents",
    children: agentsData?.map(({ id, name, icon }) => ({
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
  },
  {
    type: "divider",
  },
  {
    key: "tools",
    label: "AI tools",
    children: toolsData.map(({ id, name, icon }) => ({
      key: `/tools/${id}`,
      label: (
        <NavLink to={"/tools/1"} className={"menu-link"}>
          <Image width={20} height={20} preview={false} src={icon} />
          {name}
        </NavLink>
      ),
    })),
  },
];

const AsideMenu: FC = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    setSelectedKeys([location.pathname]);

    if (location.pathname.startsWith("/agents")) {
      setOpenKeys(["agents"]);
    } else if (location.pathname.startsWith("/tools")) {
      setOpenKeys(["tools"]);
    }
  }, [location]);

  return (
    <Menu
      rootClassName={"aside-menu"}
      mode="inline"
      items={items}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={(keys) => setOpenKeys(keys)}
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
    ></Menu>
  );
};

export default AsideMenu;

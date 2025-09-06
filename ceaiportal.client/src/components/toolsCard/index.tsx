import type { FC } from "react";
import "./index.less";
import { Card, Col, Image } from "antd";
import { NavLink } from "react-router-dom";

const ToolsCard: FC<{
  name: string;
  icon: string;
  description: string;
  link: string;
}> = ({ name, icon, description, link }) => {
  return (
    <Col>
      <Card rootClassName={"tools-card"} variant="borderless">
        <NavLink to={link}>
          <Card.Meta
            avatar={<Image preview={false} src={icon} />}
            title={name}
            description={description}
          ></Card.Meta>
        </NavLink>
      </Card>
    </Col>
  );
};

export default ToolsCard;

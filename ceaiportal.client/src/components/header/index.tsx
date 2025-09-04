import type { FC } from "react";
import "./index.less";
import { Row, Image, Typography } from "antd";

const { Text } = Typography;

const Header: FC<{ name: string; icon: string }> = ({ name, icon }) => {
  return (
    <Row className={"content-header"}>
      <Image preview={false} src={icon} rootClassName={"agent-header-logo"} />
      <Text className={"agent-header-title"}>{name}</Text>
    </Row>
  );
};

export default Header;

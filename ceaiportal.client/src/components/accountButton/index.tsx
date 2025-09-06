import { Avatar, Button, Row, Typography } from "antd";
import { type FC } from "react";
import "./index.less";
import { EllipsisOutlined } from "@ant-design/icons";
const { Text } = Typography;

const getInitials = (name: string) => {
  if (!name) return "";
  const nameParts = name.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return `${nameParts[0].charAt(0)}${nameParts[nameParts.length - 1].charAt(0)}`.toUpperCase();
};

const AccountButton: FC = () => {
  return (
    <Row className={"account-button-wrapper"}>
      <Row className={"account-avatar-wrapper"}>
        <Avatar rootClassName={"account-avatar"}>
          {getInitials("Teresa Nguyen")}
        </Avatar>
        <Text className={"account-name"}>Teresa Nguyen</Text>
      </Row>
      <Button
        rootClassName={"account-more-button"}
        icon={<EllipsisOutlined />}
      />
    </Row>
  );
};

export default AccountButton;

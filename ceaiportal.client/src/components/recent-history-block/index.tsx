import { Row, Image, Typography, Button } from "antd";
import "./index.less";
import chatIcon from "../../../public/icons/chat-icon.png";
import type { FC } from "react";
const { Text, Paragraph } = Typography;

const RecentHistoryBlock: FC<{
  message: string;
  title: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ message, title, setMessage }) => {
  return (
    <Button
      className={"recent-history-block"}
      onClick={() => setMessage(message)}
    >
      <Row>
        <Row className={"recent-history-title-block"}>
          <Image
            preview={false}
            src={chatIcon}
            className={"recent-history-icon"}
            width={20}
            height={20}
          />
          <Text className={"recent-history-title"}>{title}</Text>
        </Row>
        <Paragraph
          className={"recent-history-details"}
          ellipsis={{ rows: 2, expandable: false, symbol: "..." }}
        >
          {message}
        </Paragraph>
      </Row>
    </Button>
  );
};

export default RecentHistoryBlock;

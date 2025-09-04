import { Row, Typography, Image, Input, Button } from "antd";
import { useState, type FC, type PropsWithChildren } from "react";
import "./AgentLayout.less";
import RecentHistoryBlock from "../../components/recent-history-block";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import { agentsData } from "../../data";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AgentsLayout: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const [message, setMessage] = useState<string>("");
  const agent = agentsData.find((it) => it.id === id)!;

  const messageEnterButton = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("enter submitted");
    }
  };

  return (
    <Row className={"agent-layout"}>
      <Header name={agent.name} icon={agent.icon} />
      <Row className={"agent-layout-content"}>
        <Row className={"agent-name-block"}>
          <Row className={"agent-title-block"}>
            <Image preview={false} src={agent?.icon} className={"agent-logo"} />
            <Title level={1} className={"agent-title"}>
              {agent?.name}
            </Title>
          </Row>
        </Row>
        <Row className={"message-block"}>
          <Row className={"message-window-wrapper"}>
            <Input.TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rootClassName={"message-window"}
              name={"message"}
              rows={3}
              placeholder={"Message Copilot"}
              onKeyDown={(e) => messageEnterButton(e)}
            />
            <Button
              onClick={() => {
                console.log("enter submitted");
              }}
              icon={<ArrowRightOutlined />}
              className={"message-enter-button"}
            />
          </Row>
          <Row className={"history-block"}>
            <RecentHistoryBlock
              setMessage={setMessage}
              title={"Lumen Christy Award Winner"}
              message={"Who was the Lumen Christy Award Winner in 1992?"}
            />
            <RecentHistoryBlock
              setMessage={setMessage}
              title={"Rural Ministry"}
              message={
                "Find all the articles related to rural ministries between 2010-2020"
              }
            />
            <RecentHistoryBlock
              setMessage={setMessage}
              title={"Youth Ministry"}
              message={
                "I vaguely recall an article about youth ministry in the early 2000. Check ellipsis"
              }
            />
          </Row>
        </Row>
      </Row>
      {children}
    </Row>
  );
};

export default AgentsLayout;

import type { FC } from "react";
import "./index.less";
import { Row, Typography } from "antd";
import Header from "../header";
const { Title, Paragraph } = Typography;
import HomeIcon from "../../../public/icons/home.svg";
import ToolsCard from "../toolsCard";
import { agentsData, toolsData } from "../../data";

const DashboardContent: FC = () => {
  const tools = agentsData.concat(toolsData);
  return (
    <Row className={"dashboard-wrapper"}>
      <Header name={"Dashboard"} icon={HomeIcon} />

      <Row className={"dashboard-header-wrapper"}>
        <Title className={"dashboard-title"} level={1}>
          Welcome to the Catholic Extension AI Portal
        </Title>
        <Paragraph className={"dashboard-subtitle"}>
          Discover easy-to-use AI tools designed to support your work and our
          mission.
        </Paragraph>
      </Row>
      <Row>
        <Paragraph>
          This portal gives you quick access to Catholic Extension’s AI tools.
          Each tool is designed to help you find answers, work more efficiently,
          and explore new ways to support our mission.
        </Paragraph>
      </Row>
      <Row gutter={16} className={"card-tools-wrapper"}>
        {tools.map(({ name, icon, id, type }) => (
          <ToolsCard
            name={name}
            description="Ask questions and get instant answers based on CE magazine archive."
            icon={icon}
            link={type === "agents" ? `/agents/${id}` : `/tools/${id}`}
          />
        ))}
      </Row>
    </Row>
  );
};

export default DashboardContent;

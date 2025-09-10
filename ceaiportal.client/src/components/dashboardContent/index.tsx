import type { FC } from "react";
import "./index.less";
import { Col, Row, Typography } from "antd";
import Header from "../header";
const { Title, Paragraph } = Typography;
import HomeIcon from "../../../public/icons/home.svg";
import ToolsCard from "../toolsCard";
import { aiTools } from "../../data";

const DashboardContent: FC = () => {
  return (
    <Row className={"dashboard-wrapper"}>
      <Header name={"Dashboard"} icon={HomeIcon} />
      <Row className={"dashboard-content-wrapper"}>
        <Col style={{ maxWidth: 600 }}>
          <Row className={"dashboard-header-wrapper"}>
            <Title className={"dashboard-title"} level={1}>
              Welcome to the Catholic Extension AI Portal
            </Title>
            <Paragraph className={"dashboard-subtitle"}>
              Discover easy-to-use AI tools designed to support
              <br /> your work and our mission.
            </Paragraph>
            <Paragraph className={"dashboard-about-section"}>
              This portal gives you quick access to Catholic Extension’s AI
              tools.
              <br />
              Each tool is designed to help you find answers, work more
              efficiently, and explore new ways to support our mission.
            </Paragraph>
          </Row>
        </Col>
        <Col className={"card-tools-col"}>
          <Row gutter={16} className={"card-tools-wrapper"}>
            {aiTools.map(({ name, icon, id }) => (
              <ToolsCard
                name={name}
                description="Ask questions and get instant answers based on CE magazine archive."
                icon={icon}
                link={
                  name !== "TwoByTwoStewardship"
                    ? `/agents/${id}`
                    : `/tools/${id}`
                }
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default DashboardContent;

import { useState, type FC } from "react";
import "./index.less";
import { Row, Table, Typography } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import EmailDrawer from "../emailDrawer";
import { NavLink } from "react-router-dom";

const { Paragraph } = Typography;

interface RowData {
  id: number;
  contactId: string;
  emailOptions: any;
}

const data = [
  {
    id: 1,
    contactId: "957946",
    workflowExecutionId: "WF-5001",
    executionDate: "2025-08-29",
    opportunityScore: 87,
    recommendedEmailAction: "Send follow-up email",
    keyDataPoints: "High engagement, opened last 3 emails",
    emailPersonalizationNotes: "Mention recent webinar attendance",
    emailStrategicRationale: "Nurture lead towards demo booking",
    emailTiming: "Morning (9-11am)",
    optimalEmailExamples: "Product demo invite, case study follow-up",
    emailOptions: [
      {
        subject:
          "Your Gift is Bringing New Hope to Brownsville’s Catholic Community",
        body: "Hi Mr. Sullivan, I wanted to take a moment to thank you once again for your generous gift on July 29. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.I thought you might be inspired by a story from Brownsville, Texas, part of one of the poorest dioceses in the country. Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.This new church isn’t just bricks and mortar; it’s a beacon of community and sanctuary. It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. We’ll keep you updated on similar stories from Mundelein and also look forward to sharing special moments from the upcoming seminarian dinner—an event that celebrates the next generation of priests who your generosity helps prepare. Thank you again for walking this journey with us. Your friendship and commitment mean the world. Warm blessings,Catholic Extension Society",
      },
    ],

    workflowStatus: "in progress",
    createdDate: "2025-08-28",
  },
  {
    id: 2,
    contactId: "1018371",
    workflowExecutionId: "WF-5001",
    executionDate: "2025-08-29",
    opportunityScore: 87,
    recommendedEmailAction: "Send follow-up email",
    keyDataPoints: "High engagement, opened last 3 emails",
    emailPersonalizationNotes: "Mention recent webinar attendance",
    emailStrategicRationale: "Nurture lead towards demo booking",
    emailTiming: "Morning (9-11am)",
    optimalEmailExamples: "Product demo invite, case study follow-up",
    emailOptions: [
      {
        subject:
          "Your Gift is Bringing New Hope to Brownsville’s Catholic Community",
        body: "Hi Mr. Sullivan, I wanted to take a moment to thank you once again for your generous gift on July 29. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.I thought you might be inspired by a story from Brownsville, Texas, part of one of the poorest dioceses in the country. Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.This new church isn’t just bricks and mortar; it’s a beacon of community and sanctuary. It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. We’ll keep you updated on similar stories from Mundelein and also look forward to sharing special moments from the upcoming seminarian dinner—an event that celebrates the next generation of priests who your generosity helps prepare. Thank you again for walking this journey with us. Your friendship and commitment mean the world. Warm blessings,Catholic Extension Society",
      },
    ],

    createdDate: "2025-08-28",
  },
];

const ToolsContent: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Contact ID",
      dataIndex: "contactId",
      key: "contactId",
      render: (_: any, record: RowData) => (
        <NavLink
          key={_.index}
          className={"table-cotact-id"}
          to={`https://app.virtuoussoftware.com/Generosity/Contact/View/${record.contactId}`}
        >
          {record.contactId}
        </NavLink>
      ),
      fixed: true,
    },
    {
      title: "Workflow Execution ID",
      dataIndex: "workflowExecutionId",
      key: "workflowExecutionId",
    },
    {
      title: "Execution Date",
      dataIndex: "executionDate",
      key: "executionDate",
    },
    {
      title: "Opportunity Score",
      dataIndex: "opportunityScore",
      key: "opportunityScore",
    },
    {
      title: "Recommended Email Action",
      dataIndex: "recommendedEmailAction",
      key: "recommendedEmailAction",
    },
    {
      title: "Key Data Points",
      dataIndex: "keyDataPoints",
      key: "keyDataPoints",
    },
    {
      title: "Email Personalization Notes",
      dataIndex: "emailPersonalizationNotes",
      key: "emailPersonalizationNotes",
    },
    {
      title: "Email Strategic Rationale",
      dataIndex: "emailStrategicRationale",
      key: "emailStrategicRationale",
    },
    { title: "Email Timing", dataIndex: "emailTiming", key: "emailTiming" },
    {
      title: "Optimal Email Examples",
      dataIndex: "optimalEmailExamples",
      key: "optimalEmailExamples",
    },
    {
      title: "Email",
      key: "emailOptions",
      render: (_: any, record: RowData) => (
        <div style={{ display: "grid", gap: 15 }} key={_.index}>
          {record.emailOptions.map((opt: any, idx: any) => (
            <button
              key={idx}
              className={"email-button"}
              onClick={() => setOpenDrawer(true)}
            >
              <div>
                <Paragraph
                  className={"email-subject"}
                  ellipsis={{
                    rows: 2,
                  }}
                >
                  <b>Subject:</b> {opt.subject}
                </Paragraph>
                <Paragraph
                  rootClassName={"email-body"}
                  ellipsis={{
                    rows: 2,
                  }}
                >
                  <b>Body:</b> {opt.body}
                </Paragraph>
              </div>
              <DoubleRightOutlined
                style={{
                  transform: "rotate(90deg)",
                  marginBottom: 5,
                  opacity: 0.4,
                }}
              />
            </button>
          ))}
        </div>
      ),
    },
    { title: "Created Date", dataIndex: "createdDate", key: "createdDate" },
  ];

  return (
    <Row className={"tools-table-wrapper"}>
      <Table
        rootClassName={"tools-table"}
        columns={columns}
        dataSource={data}
        rowKey="id"
        pagination={{ position: ["bottomLeft"] }}
        scroll={{ x: true }}
        bordered
      />
      <EmailDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </Row>
  );
};

export default ToolsContent;

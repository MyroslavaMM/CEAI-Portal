import { useState, type FC } from "react";
import "./index.less";
import { Row, Table, Typography } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import EmailDrawer from "../emailDrawer";
import { NavLink } from "react-router-dom";
import dayjs from "dayjs";
import EmailModal from "../emailModal";

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
    workflowExecutionId: "9b14267e-2143-4bf9-90e8-a3b90531d4e9",
    executionDate: "03.08.2025 06:00:40",
    opportunityScore: 87,
    recommendedEmailAction: "Email Cultivation",
    keyDataPoints: [
      "Total gifts: 360, totaling $625,619.16, average $1,737.83",
      "Last gift on 2025-07-29 for $500, recent and significant",
      "Email sent count 2, responded once showing good email engagement",
      "Recent staff notes include thank you call and plans to send news about Mundelein or seminarian dinner",
      "Engaged donor with high giving history and recent positive communication",
    ],
    emailPersonalizationNotes:
      "Reference recent gift and thank you call. Include personalized updates about Mundelein or seminarian news as per staff notes to deepen engagement. Highlight impact of gift and upcoming events relevant to donor interests. Use appreciative and warm tone acknowledging long-term support.",
    emailStrategicRationale:
      "Mr. Sullivan is a highly engaged major donor with a very strong giving history and recent donation. He has shown positive email response and was recently personally thanked via call. An email with cultivation content including personalized news about Mundelein or upcoming seminarian dinner will reinforce his connection and encourage further involvement. Timing this in a way to build on recent contacts is optimal to maintain engagement momentum.",
    emailTiming: "11.08.2025 00:00:00",
    optimalEmailExamples: "2700,2727,2716",
    emailOptions: [
      {
        subject:
          "Your Gift is Bringing New Hope to Brownsville’s Catholic Community",
        body: "Hi Mr. Sullivan, I wanted to take a moment to thank you once again for your generous gift on July 29. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.I thought you might be inspired by a story from Brownsville, Texas, part of one of the poorest dioceses in the country. Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.This new church isn’t just bricks and mortar; it’s a beacon of community and sanctuary. It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. We’ll keep you updated on similar stories from Mundelein and also look forward to sharing special moments from the upcoming seminarian dinner—an event that celebrates the next generation of priests who your generosity helps prepare. Thank you again for walking this journey with us. Your friendship and commitment mean the world. Warm blessings,Catholic Extension Society",
      },
    ],

    workflowStatus: "in progress",
    createdDate: "02.08.2025 06:00:40",
  },
  {
    id: 2,
    contactId: "1018371",
    workflowExecutionId: "bc5f27b1-ad8c-4ce1-b489-bdbca08d3f00",
    executionDate: "04.08.2025 06:13:28",
    opportunityScore: 55,
    recommendedEmailAction:
      "Send a personalized stewardship email appreciation recognizing the donor's recent large gift and long-term commitment, emphasizing the impact of their support on mission and community, and inviting deeper engagement.",
    keyDataPoints: [
      "75 gifts totaling $75,950 since 2010",
      "Most recent gift of $2,000 on 2025-07-29",
      "No prior emails sent or responded to",
      "No previous email stewardship despite high donation history",
      "Personalized calls and letters already attempted",
      "High value donor with deep mission engagement potential",
    ],
    emailPersonalizationNotes:
      "Reference recent gift and long-term generosity, highlight specific mission stories like Sister Mary Lisa Renfer’s work to connect donation impact, acknowledge prior personal contact (letter and voicemail), and invite ongoing communication and updates.",
    emailStrategicRationale:
      "The donor is a major donor with significant giving history but zero prior email stewardship. Engaging him now via personalized appreciation emails will acknowledge his importance, build trust, and open pathways for further email engagement and cultivation. This approach fills an email stewardship gap and leverages his demonstrated giving generosity and responsiveness to other outreach channels.",
    emailTiming: "11.08.2025 13:00:00",
    optimalEmailExamples: "2700,2704,2703",
    emailOptions: [
      {
        subject:
          "Your Gift is Bringing New Hope to Brownsville’s Catholic Community",
        body: "Hi Mr. Sullivan, I wanted to take a moment to thank you once again for your generous gift on July 29. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.I thought you might be inspired by a story from Brownsville, Texas, part of one of the poorest dioceses in the country. Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.This new church isn’t just bricks and mortar; it’s a beacon of community and sanctuary. It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. We’ll keep you updated on similar stories from Mundelein and also look forward to sharing special moments from the upcoming seminarian dinner—an event that celebrates the next generation of priests who your generosity helps prepare. Thank you again for walking this journey with us. Your friendship and commitment mean the world. Warm blessings,Catholic Extension Society",
      },
    ],

    createdDate: "01.08.2025 06:13:28",
  },
];

const ToolsContent: FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: any, b: any) => a.id - b.id,
    },
    {
      title: "Contact ID",
      dataIndex: "contactId",
      key: "contactId",
      render: (_: any, record: RowData) => (
        <NavLink
          target={"_blank"}
          key={_.index}
          className={"table-cotact-id"}
          to={`https://app.virtuoussoftware.com/Generosity/Contact/View/${record.contactId}`}
        >
          {record.contactId}
        </NavLink>
      ),
      fixed: true,
      sorter: (a: any, b: any) => a.contactId - b.contactId,
    },
    {
      title: "Workflow Execution ID",
      dataIndex: "workflowExecutionId",
      key: "workflowExecutionId",
      sorter: (a: any, b: any) =>
        a.workflowExecutionId.localeCompare(b.workflowExecutionId),
    },
    {
      title: "Execution Date",
      dataIndex: "executionDate",
      key: "executionDate",
      sorter: (a: any, b: any) =>
        dayjs(a.executionDate, "DD.MM.YYYY HH:mm:ss").valueOf() -
        dayjs(b.executionDate, "DD.MM.YYYY HH:mm:ss").valueOf(),
    },
    {
      title: "Opportunity Score",
      dataIndex: "opportunityScore",
      key: "opportunityScore",
      sorter: (a: any, b: any) => a.opportunityScore - b.opportunityScore,
    },
    {
      title: "Recommended Email Action",
      dataIndex: "recommendedEmailAction",
      key: "recommendedEmailAction",
      sorter: (a: any, b: any) =>
        a.recommendedEmailAction.localeCompare(b.recommendedEmailAction),
    },
    {
      title: "Key Data Points",
      dataIndex: "keyDataPoints",
      key: "keyDataPoints",
      sorter: (a: any, b: any) =>
        (a.keyDataPoints.join(" ") || "").localeCompare(
          b.keyDataPoints.join(" ") || ""
        ),
    },
    {
      title: "Email Personalization Notes",
      dataIndex: "emailPersonalizationNotes",
      key: "emailPersonalizationNotes",
      sorter: (a: any, b: any) =>
        a.emailPersonalizationNotes.localeCompare(b.emailPersonalizationNotes),
    },
    {
      title: "Email Strategic Rationale",
      dataIndex: "emailStrategicRationale",
      key: "emailStrategicRationale",
      sorter: (a: any, b: any) =>
        a.emailStrategicRationale.localeCompare(b.emailStrategicRationale),
    },
    {
      title: "Email Timing",
      dataIndex: "emailTiming",
      key: "emailTiming",
      sorter: (a: any, b: any) =>
        dayjs(a.emailTiming, "DD.MM.YYYY HH:mm:ss").valueOf() -
        dayjs(b.emailTiming, "DD.MM.YYYY HH:mm:ss").valueOf(),
    },
    {
      title: "Optimal Email Examples",
      dataIndex: "optimalEmailExamples",
      key: "optimalEmailExamples",
      sorter: (a: any, b: any) =>
        a.optimalEmailExamples.localeCompare(b.optimalEmailExamples),
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
    {
      title: "Created Date",
      dataIndex: "createdDate",
      key: "createdDate",
      sorter: (a: any, b: any) =>
        dayjs(a.emailTiming, "DD.MM.YYYY HH:mm:ss").valueOf() -
        dayjs(b.emailTiming, "DD.MM.YYYY HH:mm:ss").valueOf(),
    },
  ];

  const onCloseModal = () => {
    setOpenModal(false);
    setOpenDrawer(true);
  };

  const onOpenModal = () => {
    setOpenModal(true);
    setOpenDrawer(false);
  };

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
      <EmailDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        setOpenModal={onOpenModal}
      />
      <EmailModal open={openModal} onClose={onCloseModal} width={840} />
    </Row>
  );
};

export default ToolsContent;

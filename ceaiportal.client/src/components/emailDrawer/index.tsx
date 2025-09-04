import { useState, type FC } from "react";
import "./index.less";
import { Button, Divider, Drawer, Row, Typography, Input } from "antd";
import { SendOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
const { Paragraph, Text } = Typography;

const EmailDrawer: FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const htmlContent = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <p style="margin: 0 0 16px 0;">Hi <strong>Mr. Sullivan</strong>,</p>

  <p style="margin: 0 0 16px 0;">
    I wanted to take a moment to <span style="color:#0066cc; font-weight: bold;">thank you once again</span> for your generous gift on 
    <span style="font-style: italic;">July 29</span>. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. 
    I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.
  </p>

  <p style="margin: 0 0 16px 0;">
    I thought you might be inspired by a story from <span style="font-weight: bold;">Brownsville, Texas</span>, part of one of the poorest dioceses in the country. 
    Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. 
    The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.
  </p>

  <p style="margin: 0 0 16px 0;">
    This new church isn’t just <span style="font-style: italic;">bricks and mortar</span>; it’s a beacon of community and sanctuary. 
    It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. 
    We’ll keep you updated on similar stories from <span style="font-weight: bold;">Mundelein</span> and also look forward to sharing special moments from the upcoming 
    <span style="text-decoration: underline;">seminarian dinner</span>—an event that celebrates the next generation of priests who your generosity helps prepare.
  </p>

  <p style="margin: 0 0 16px 0;">
    Thank you again for walking this journey with us. <span style="color:#0066cc;">Your friendship and commitment mean the world.</span>
  </p>

  <p style="margin: 0;">
    Warm blessings,<br>
    <span style="font-weight: bold;">Catholic Extension Society</span>
  </p>
</div>
`;

  const [subjectText, setSubjectText] = useState(
    "Your Gift is Bringing New Hope to Brownsville’s Catholic Community"
  );
  const [bodyText, setBodyText] = useState(htmlContent);
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
  };

  const closeDrawer = () => {
    setEditMode(false);
    onClose();
  };

  return (
    <Drawer
      open={open}
      title={"Email Details"}
      styles={{ header: { textAlign: "center" } }}
      onClose={closeDrawer}
      closable={{ "aria-label": "Close Button" }}
      width={740}
      footer={
        editMode ? (
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={() => setEditMode(false)}
              style={{ marginRight: 8 }}
            >
              Cancel
            </Button>
            <Button type="primary" onClick={handleSave} icon={<SaveOutlined />}>
              Save
            </Button>
          </div>
        ) : (
          <Row
            style={{ textAlign: "right", justifyContent: "flex-end", gap: 10 }}
          >
            <Button
              type="primary"
              onClick={() => setEditMode(true)}
              icon={<EditOutlined />}
            >
              Edit
            </Button>
            <Button icon={<SendOutlined />}>Send</Button>
          </Row>
        )
      }
    >
      <Row className={"email-details-wrapper"}>
        <Text className={"email-subject"}>Subject:</Text>
        {editMode ? (
          <Input
            value={subjectText}
            onChange={(e) => setSubjectText(e.target.value)}
          />
        ) : (
          <Paragraph className={"email-details-text"}>{subjectText}</Paragraph>
        )}
      </Row>

      <Divider className={"email-details-divider"} />

      <Row className={"email-details-wrapper"}>
        <Text className={"email-subject"}>Body:</Text>
        {editMode ? (
          <div
            className={"email-details-text editable-body"}
            contentEditable
            suppressContentEditableWarning
            dangerouslySetInnerHTML={{ __html: bodyText }}
            onInput={(e) => setBodyText((e.target as HTMLElement).innerHTML)}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              borderRadius: "6px",
              minHeight: "200px",
              width: "100%",
              backgroundColor: "#fff",
            }}
          />
        ) : (
          <>
            <div
              className={"email-details-text"}
              dangerouslySetInnerHTML={{ __html: bodyText }}
            />
          </>
        )}
      </Row>
    </Drawer>
  );
};

export default EmailDrawer;

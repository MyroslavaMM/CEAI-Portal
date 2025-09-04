import { Button, Divider, Row, Typography, Modal } from "antd";
import { SendOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
const { Paragraph, Text } = Typography;
import "./index.less";
import { useState, type FC } from "react";

const EmailModal: FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const [subjectText, setSubjectText] = useState(
    "Your Gift is Bringing New Hope to Brownsville’s Catholic Community"
  );
  const [bodyText, setBodyText] = useState(
    "Hi Mr. Sullivan, I wanted to take a moment to thank you once again for your generous gift on July 29. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.I thought you might be inspired by a story from Brownsville, Texas, part of one of the poorest dioceses in the country. Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.This new church isn’t just bricks and mortar; it’s a beacon of community and sanctuary. It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. We’ll keep you updated on similar stories from Mundelein and also look forward to sharing special moments from the upcoming seminarian dinner—an event that celebrates the next generation of priests who your generosity helps prepare. Thank you again for walking this journey with us. Your friendship and commitment mean the world. Warm blessings,Catholic Extension Society Hi Mr. Sullivan, I wanted to take a moment to thank you once again for your generous gift on July 29. Your support continues to be a vital part of building vibrant Catholic communities in places that need it most. I also appreciated our recent call where we got to share some updates – I hope you found it meaningful.I thought you might be inspired by a story from Brownsville, Texas, part of one of the poorest dioceses in the country. Thanks to supporters like you, Catholics from across the U.S. united their prayers and resources to build a new church there. The diocese, home to many Latino immigrants living below the poverty line, is seeing hope and faith flourish as a result.This new church isn’t just bricks and mortar; it’s a beacon of community and sanctuary. It demonstrates how your partnership in this mission transforms lives and strengthens faith where challenges are greatest. We’ll keep you updated on similar stories from Mundelein and also look forward to sharing special moments from the upcoming seminarian dinner—an event that celebrates the next generation of priests who your generosity helps prepare. Thank you again for walking this journey with us. Your friendship and commitment mean the world. Warm blessings,Catholic Extension Society"
  );
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <Modal
      title={"Email Details"}
      styles={{ header: { textAlign: "center" } }}
      centered
      open={open}
      closable={{ "aria-label": "Custom Close Button" }}
      onCancel={onClose}
      onOk={onClose}
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
      <Row>
        <Row className={"email-details-wrapper"}>
          <Text className={"email-subject"}>Subject:</Text>
          {editMode ? (
            <Paragraph
              editable={{
                editing: true,
                onChange: setSubjectText,
                enterIcon: null,
                // autoSize: { minRows: 3, maxRows: 6 },
              }}
            >
              {subjectText}
            </Paragraph>
          ) : (
            <Paragraph className={"email-details-text"}>
              {subjectText}
            </Paragraph>
          )}
        </Row>
        <Divider className={"email-details-divider"} />

        <Row className={"email-details-wrapper"}>
          <Text className={"email-subject"}>Body:</Text>
          {editMode ? (
            <Paragraph
              editable={{
                editing: true,
                onChange: setBodyText,
                enterIcon: null,
                // autoSize: { minRows: 3, maxRows: 6 },
              }}
            >
              {bodyText}
            </Paragraph>
          ) : (
            <Paragraph className={"email-details-text"}>{bodyText}</Paragraph>
          )}
        </Row>
      </Row>
    </Modal>
  );
};

export default EmailModal;

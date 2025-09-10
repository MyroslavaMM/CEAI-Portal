import "./index.less";
import parse from "html-react-parser";
import type { MenuProps } from "antd";
import { useState, type FC } from "react";
import { Drawer, Row, Typography, Button, Divider, Dropdown } from "antd";
import {
  SendOutlined,
  EditOutlined,
  SaveOutlined,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnorderedListOutlined,
  UndoOutlined,
  RedoOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import {
  useEditor,
  EditorContent,
  useEditorState,
  Editor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const { Paragraph, Text } = Typography;

const htmlContent = `
<div style="font-family: Arial, sans-serif; line-height: 1.6">
  <p style="margin: 0 0 16px 0;">Hi <strong>Mr. Sullivan</strong>,</p>

  <p style="margin: 0 0 16px 0;">
    I wanted to take a moment to <span font-weight: bold;">thank you once again</span> for your generous gift on
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
    Thank you again for walking this journey with us. <span>Your friendship and commitment mean the world.</span>
  </p>

  <p style="margin: 0;">
    Warm blessings,<br>
    <span style="font-weight: bold;">Catholic Extension Society</span>
  </p>
</div>
`;

const MenuBar = ({ editor }: { editor: Editor }) => {
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor?.isActive("bold") ?? false,
        canBold: ctx.editor?.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor?.isActive("italic") ?? false,
        canItalic: ctx.editor?.can().chain().toggleItalic().run() ?? false,
        isStrike: ctx.editor?.isActive("strike") ?? false,
        canStrike: ctx.editor?.can().chain().toggleStrike().run() ?? false,
        isHeading1: ctx.editor?.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor?.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor?.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor?.isActive("heading", { level: 4 }) ?? false,
        isHeading5: ctx.editor?.isActive("heading", { level: 5 }) ?? false,
        isHeading6: ctx.editor?.isActive("heading", { level: 6 }) ?? false,
        isBulletList: ctx.editor?.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor?.isActive("orderedList") ?? false,
        isBlockquote: ctx.editor?.isActive("blockquote") ?? false,
        canUndo: ctx.editor?.can().chain().undo().run() ?? false,
        canRedo: ctx.editor?.can().chain().redo().run() ?? false,
      };
    },
  });

  const headerItems: MenuProps["items"] = [
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={editorState.isHeading1 ? "is-active" : ""}
        >
          H1
        </Button>
      ),
      key: 0,
    },
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={editorState.isHeading2 ? "is-active" : ""}
        >
          H2
        </Button>
      ),
      key: 1,
    },
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={editorState.isHeading3 ? "is-active" : ""}
        >
          H3
        </Button>
      ),
      key: 2,
    },
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={editorState.isHeading3 ? "is-active" : ""}
        >
          H4
        </Button>
      ),
      key: 3,
    },
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={editorState.isHeading5 ? "is-active" : ""}
        >
          H5
        </Button>
      ),
      key: 4,
    },
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={editorState.isHeading5 ? "is-active" : ""}
        >
          H6
        </Button>
      ),
      key: 5,
    },
  ];

  const listItems: MenuProps["items"] = [
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<UnorderedListOutlined />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isBulletList ? "is-active" : ""}
        >
          Bullet list
        </Button>
      ),
      key: 0,
    },
    {
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<OrderedListOutlined />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? "is-active" : ""}
        >
          Ordered list
        </Button>
      ),
      key: 1,
    },
  ];

  return (
    <div className="control-group">
      <div className="button-group">
        <Dropdown menu={{ items: headerItems }}>
          <Button>Heading</Button>
        </Dropdown>
        <Button
          icon={<BoldOutlined />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={editorState.isBold ? "is-active" : ""}
        />
        <Button
          icon={<ItalicOutlined />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          className={editorState.isItalic ? "is-active" : ""}
        />
        <Button
          icon={<StrikethroughOutlined />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          className={editorState.isStrike ? "is-active" : ""}
        />
        <Dropdown menu={{ items: listItems }} trigger={["hover"]}>
          <Button icon={<UnorderedListOutlined />}>List</Button>
        </Dropdown>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editorState.isBlockquote ? "is-active" : ""}
        >
          Blockquote
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Horizontal rule
        </Button>
        <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </Button>
        <Button
          icon={<UndoOutlined />}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
        />
        <Button
          icon={<RedoOutlined />}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
        />
      </div>
    </div>
  );
};

const EmailDrawer: FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [activeEditor, setActiveEditor] = useState<any>(null);
  const [subjectText, setSubjectText] = useState(
    "<p>Your Gift is Bringing New Hope to Brownsville’s Catholic Community</p>"
  );
  const [bodyText, setBodyText] = useState(htmlContent);

  const subjectEditor = useEditor({
    extensions: [StarterKit, Underline],
    content: subjectText,
    editorProps: {
      attributes: {
        style: "min-height: 60px; border: 1px solid #ddd; padding: 6px;",
      },
    },
    onFocus: ({ editor }) => setActiveEditor(editor),
  });

  const bodyEditor = useEditor({
    extensions: [StarterKit, Underline],
    content: bodyText,
    editorProps: {
      attributes: {
        style: "min-height: 200px; border: 1px solid #ddd; padding: 12px;",
      },
    },
    onFocus: ({ editor }) => setActiveEditor(editor),
  });

  const handleSave = () => {
    setEditMode(false);
    const subjectHTML = subjectEditor?.getHTML();
    const bodyHTML = bodyEditor?.getHTML();
    setBodyText(bodyHTML);
    setSubjectText(subjectHTML);
    console.log("Subject HTML:", subjectHTML);
    console.log("Body HTML:", bodyHTML);
  };

  return (
    <Drawer
      rootClassName={`${editMode ? "eddited-cotent-drawer edit-email-drawer" : "edit-email-drawer"}`}
      open={open}
      title="Email Details"
      width={740}
      onClose={() => {
        setEditMode(false);
        onClose();
      }}
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
          <Row style={{ justifyContent: "flex-end", gap: 10 }}>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={() => setEditMode(true)}
            >
              Edit
            </Button>
            <Button icon={<SendOutlined />}>Send</Button>
          </Row>
        )
      }
    >
      {editMode && (
        <>
          <MenuBar editor={activeEditor} />
          <Divider />
        </>
      )}
      <Row className={"email-details-wrapper"}>
        <Text className={"email-subject"}>Subject:</Text>
        {editMode ? (
          <EditorContent editor={subjectEditor} />
        ) : (
          <Paragraph className={"email-details-text"}>
            {parse(subjectText)}
          </Paragraph>
        )}
      </Row>

      <Divider className={"email-details-divider"} />

      <Row className={"email-details-wrapper"}>
        <Text className={"email-subject"}>Body:</Text>
        {editMode ? (
          <EditorContent editor={bodyEditor} />
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

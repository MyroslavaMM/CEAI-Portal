import { Button, Row, Modal, Form, Dropdown, Image } from "antd";
import "./index.less";
import { useState, type FC } from "react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import {
  BackgroundColor,
  TextStyle,
  FontFamily,
  FontSize,
  Color,
} from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "../../../public/icons/blockquote.png";

import {
  SendOutlined,
  SaveOutlined,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnorderedListOutlined,
  UndoOutlined,
  RedoOutlined,
  OrderedListOutlined,
  MinusOutlined,
  EnterOutlined,
  AlignLeftOutlined,
  BgColorsOutlined,
  FontColorsOutlined,
} from "@ant-design/icons";
import {
  useEditor,
  EditorContent,
  useEditorState,
  Editor,
} from "@tiptap/react";

import FloatingInput from "../floatingInput";
import { htmlContent } from "../emailDrawer";

const { Item } = Form;
import { headerItems } from "./toolbarItemsLists/headerItems";
import { fontSizeItems } from "./toolbarItemsLists/fontSizeItems";
import { textAlignItems } from "./toolbarItemsLists/textAlignItems";
import { backgroundColorItems } from "./toolbarItemsLists/backgroundColorItems";
import { textColorItems } from "./toolbarItemsLists/textColorItems";

export const MenuBar = ({ editor }: { editor: Editor }) => {
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
        fontSize: ctx.editor?.getAttributes("textStyle").fontSize ?? null,
        backgroundColor: ctx.editor?.getAttributes("textStyle").backgroundColor,
        isPurple:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#800080",
          }) ?? false,
        isRed:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#F98181",
          }) ?? false,
        isOrange:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#FBBC88",
          }) ?? false,
        isYellow:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#FAF594",
          }) ?? false,
        isBlue:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#70CFF8",
          }) ?? false,
        isTeal:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#94FADB",
          }) ?? false,
        isGreen:
          ctx.editor?.isActive("textStyle", {
            backgroundColor: "#B9F18D",
          }) ?? false,
        color: ctx.editor?.getAttributes("textStyle").color,
        textPurple:
          ctx.editor?.isActive("textStyle", { color: "#958DF1" }) ?? false,
        textRed:
          ctx.editor?.isActive("textStyle", { color: "#F98181" }) ?? false,
        textOrange:
          ctx.editor?.isActive("textStyle", { color: "#FBBC88" }) ?? false,
        textYellow:
          ctx.editor?.isActive("textStyle", { color: "#FAF594" }) ?? false,
        textBlue:
          ctx.editor?.isActive("textStyle", { color: "#70CFF8" }) ?? false,
        textTeal:
          ctx.editor?.isActive("textStyle", { color: "#94FADB" }) ?? false,
        textGreen:
          ctx.editor?.isActive("textStyle", { color: "#B9F18D" }) ?? false,
      };
    },
  });

  return (
    <div className="control-group">
      <div className="button-group">
        <Dropdown
          overlayClassName={"bg-dropdown"}
          menu={{ items: backgroundColorItems(editor, editorState) }}
        >
          <Button icon={<BgColorsOutlined />} />
        </Dropdown>
        <Dropdown
          overlayClassName={"bg-dropdown"}
          menu={{ items: textColorItems(editor, editorState) }}
        >
          <Button icon={<FontColorsOutlined />} />
        </Dropdown>
        <Dropdown menu={{ items: fontSizeItems(editor) }}>
          <Button>
            {!editorState?.fontSize ? "14px" : editorState?.fontSize}
          </Button>
        </Dropdown>
        <Dropdown menu={{ items: textAlignItems(editor) }}>
          <Button icon={<AlignLeftOutlined />} />
        </Dropdown>
        <Dropdown menu={{ items: headerItems(editor) }}>
          <Button>H</Button>
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
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<UnorderedListOutlined />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editorState.isBulletList ? "is-active" : ""}
        />
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<OrderedListOutlined />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editorState.isOrderedList ? "is-active" : ""}
        />
        <Button
          icon={<MinusOutlined />}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        />
        <Button
          icon={
            <Image
              src={Blockquote}
              alt={"blockquote icon"}
              preview={false}
              width={12}
              height={12}
              className={"toolbar-icon"}
            />
          }
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editorState.isBlockquote ? "is-active" : ""}
        />
        <Button
          icon={<EnterOutlined />}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        />

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

const EmailModal: FC<{
  open: boolean;
  onClose: () => void;
  width?: number;
}> = ({ open, onClose, width }) => {
  const [subjectText, setSubjectText] = useState(
    "Your Gift is Bringing New Hope to Brownsville’s Catholic Community"
  );
  const [bodyText, setBodyText] = useState(htmlContent);
  const [activeEditor, setActiveEditor] = useState<any>(null);

  const handleSave = () => {
    setBodyText(bodyEditor?.getHTML());
    onClose();
    console.log(setSubjectText);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSend = () => {
    onClose();
  };

  const bodyEditor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      BackgroundColor,
      Color,
      FontFamily,
      FontSize,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: bodyText,
    editorProps: {
      attributes: {
        style: "min-height: 200px; border: 1px solid #ddd; padding: 12px;",
      },
    },
    onFocus: ({ editor }) => setActiveEditor(editor),
  });

  return (
    <Modal
      width={width ?? 540}
      title={"New Email"}
      styles={{ header: { textAlign: "start" } }}
      centered
      open={open}
      closable={{ "aria-label": "Custom Close Button" }}
      rootClassName={"custom-modal"}
      onCancel={onClose}
      onOk={onClose}
      footer={
        <Row style={{ justifyContent: "space-between", gap: 10 }}>
          <Row style={{ gap: 10 }}>
            <Button onClick={handleCancel} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={handleSave} icon={<SaveOutlined />}>
              Save
            </Button>
          </Row>
          <Button type="primary" icon={<SendOutlined />} onClick={handleSend}>
            Send
          </Button>
        </Row>
      }
    >
      <Row>
        <Form layout={"vertical"} name={"email"}>
          <Item className={"email-form-item"} name={"from"}>
            <FloatingInput label="From" name={"from"} />
          </Item>
          <Item className={"email-form-item"} name={"to"}>
            <FloatingInput label="To" name={"to"} />
          </Item>

          <Item
            className={"email-form-item"}
            name={"subject"}
            initialValue={subjectText}
          >
            <FloatingInput label="Subject" name={"subject"} />
          </Item>
          <Row className={"email-details-wrapper"}>
            <MenuBar editor={activeEditor} />
            <EditorContent editor={bodyEditor} />
          </Row>
        </Form>
      </Row>
    </Modal>
  );
};

export default EmailModal;

import type { Editor } from "@tiptap/react";
import { Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

export const backgroundColorItems = (editor: Editor, editorState: any) => {
  return [
    {
      key: "purple",
      label: (
        <Button
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#800080").run()
          }
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "purple" }}
          className={editorState.isPurple ? "is-active" : ""}
          data-testid="setPurple"
        />
      ),
    },
    {
      key: "red",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "#F98181" }}
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#F98181").run()
          }
          className={editorState.isRed ? "is-active" : ""}
          data-testid="setRed"
        />
      ),
    },
    {
      key: "orange",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "#FBBC88" }}
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#FBBC88").run()
          }
          className={editorState.isOrange ? "is-active" : ""}
          data-testid="setOrange"
        />
      ),
    },
    {
      key: "yellow",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "#FAF594" }}
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#FAF594").run()
          }
          className={editorState.isYellow ? "is-active" : ""}
          data-testid="setYellow"
        />
      ),
    },
    {
      key: "blue",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "#70CFF8" }}
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#70CFF8").run()
          }
          className={editorState.isBlue ? "is-active" : ""}
          data-testid="setBlue"
        />
      ),
    },
    {
      key: "teal",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "#94FADB" }}
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#94FADB").run()
          }
          className={editorState.isTeal ? "is-active" : ""}
          data-testid="setTeal"
        />
      ),
    },
    {
      key: "green",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item bg-button"}
          style={{ backgroundColor: "#B9F18D" }}
          onClick={() =>
            editor.chain().focus().setBackgroundColor("#B9F18D").run()
          }
          className={editorState.isGreen ? "is-active" : ""}
          data-testid="setGreen"
        />
      ),
    },
    {
      key: "unset",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item  bg-button"}
          icon={<StopOutlined />}
          onClick={() => editor.chain().focus().unsetBackgroundColor().run()}
          data-testid="unsetBackgroundColor"
        />
      ),
    },
  ];
};

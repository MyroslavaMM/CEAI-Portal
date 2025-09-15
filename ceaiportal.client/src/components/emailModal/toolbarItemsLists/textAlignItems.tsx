import type { Editor } from "@tiptap/react";
import { Button } from "antd";
import {
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";

export const textAlignItems = (editor: Editor) => {
  return [
    {
      key: "left",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<AlignLeftOutlined />}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        />
      ),
    },
    {
      key: "center",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<AlignCenterOutlined />}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        />
      ),
    },
    {
      key: "right",
      label: (
        <Button
          rootClassName={"toolbar-dropdown-item"}
          icon={<AlignRightOutlined />}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        />
      ),
    },
  ];
};

import type { Editor } from "@tiptap/react";
import { Button } from "antd";

export const headerItems = (editor: Editor) => {
  return [1, 2, 3, 4, 5, 6].map((level: any) => ({
    key: level - 1,
    label: (
      <Button
        className={`toolbar-dropdown-item ${editor?.isActive("heading", { level }) ? "is-active" : ""}`}
        onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
      >
        H{level}
      </Button>
    ),
  }));
};

// const headerItems: MenuProps["items"] = [
//   {
//     label: (
//       <Button
//         rootClassName={"toolbar-dropdown-item"}
//         onClick={() =>
//           editor.chain().focus().toggleHeading({ level: 1 }).run()
//         }
//         className={editorState.isHeading1 ? "is-active" : ""}
//       >
//         H1
//       </Button>
//     ),
//     key: 0,
//   },
//   {
//     label: (
//       <Button
//         rootClassName={"toolbar-dropdown-item"}
//         onClick={() =>
//           editor.chain().focus().toggleHeading({ level: 2 }).run()
//         }
//         className={editorState.isHeading2 ? "is-active" : ""}
//       >
//         H2
//       </Button>
//     ),
//     key: 1,
//   },
//   {
//     label: (
//       <Button
//         rootClassName={"toolbar-dropdown-item"}
//         onClick={() =>
//           editor.chain().focus().toggleHeading({ level: 3 }).run()
//         }
//         className={editorState.isHeading3 ? "is-active" : ""}
//       >
//         H3
//       </Button>
//     ),
//     key: 2,
//   },
//   {
//     label: (
//       <Button
//         rootClassName={"toolbar-dropdown-item"}
//         onClick={() =>
//           editor.chain().focus().toggleHeading({ level: 4 }).run()
//         }
//         className={editorState.isHeading4 ? "is-active" : ""}
//       >
//         H4
//       </Button>
//     ),
//     key: 3,
//   },
//   {
//     label: (
//       <Button
//         rootClassName={"toolbar-dropdown-item"}
//         onClick={() =>
//           editor.chain().focus().toggleHeading({ level: 5 }).run()
//         }
//         className={editorState.isHeading5 ? "is-active" : ""}
//       >
//         H5
//       </Button>
//     ),
//     key: 4,
//   },
//   {
//     label: (
//       <Button
//         rootClassName={"toolbar-dropdown-item"}
//         onClick={() =>
//           editor.chain().focus().toggleHeading({ level: 6 }).run()
//         }
//         className={editorState.isHeading6 ? "is-active" : ""}
//       >
//         H6
//       </Button>
//     ),
//     key: 5,
//   },
// ];

import type { Editor } from "@tiptap/react";
import { Button } from "antd";

export const fontSizeItems = (editor: Editor) => {
  const fontSizes = [
    8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,
  ];

  return fontSizes.map((size) => ({
    key: size,
    label: (
      <Button
        rootClassName="toolbar-dropdown-item"
        onClick={() => editor.chain().focus().setFontSize(`${size}px`).run()}
      >
        {size}
      </Button>
    ),
  }));
};

//   const fontSizeItems: MenuProps["items"] = [
//     {
//       key: "8",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("8px").run()}
//         >
//           8
//         </Button>
//       ),
//     },
//     {
//       key: "9",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("9px").run()}
//         >
//           9
//         </Button>
//       ),
//     },
//     {
//       key: "10",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("10px").run()}
//         >
//           10
//         </Button>
//       ),
//     },
//     {
//       key: "11",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("11px").run()}
//         >
//           11
//         </Button>
//       ),
//     },
//     {
//       key: "12",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("12px").run()}
//         >
//           12
//         </Button>
//       ),
//     },
//     {
//       key: "14",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("14px").run()}
//         >
//           14
//         </Button>
//       ),
//     },
//     {
//       key: "16",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("16px").run()}
//         >
//           16
//         </Button>
//       ),
//     },
//     {
//       key: "18",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("18px").run()}
//         >
//           18
//         </Button>
//       ),
//     },
//     {
//       key: "20",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("20px").run()}
//         >
//           20
//         </Button>
//       ),
//     },
//     {
//       key: "22",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("22px").run()}
//         >
//           22
//         </Button>
//       ),
//     },
//     {
//       key: "24",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("24px").run()}
//         >
//           24
//         </Button>
//       ),
//     },
//     {
//       key: "26",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("26px").run()}
//         >
//           26
//         </Button>
//       ),
//     },
//     {
//       key: "28",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("28px").run()}
//         >
//           28
//         </Button>
//       ),
//     },
//     {
//       key: "36",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("36px").run()}
//         >
//           36
//         </Button>
//       ),
//     },
//     {
//       key: "48",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("48px").run()}
//         >
//           48
//         </Button>
//       ),
//     },
//     {
//       key: "72",
//       label: (
//         <Button
//           rootClassName={"toolbar-dropdown-item"}
//           onClick={() => editor.chain().focus().setFontSize("72px").run()}
//         >
//           72
//         </Button>
//       ),
//     },
//   ];

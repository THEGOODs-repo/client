import React, { useRef, useMemo } from "react";
import styled from "styled-components";
// import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ htmlStr, setHtmlStr }) => {
  const quillRef = useRef(null);

  const imageHandler = () => {
    /** const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("multipartFiles", file);

      const res = await axios.post(
        "http://localhost:8080/uploadImage",
        formData
      );

      if (quillRef.current) {
        const index = quillRef.current.getEditor().getSelection().index;
        const quillEditor = quillRef.current.getEditor();
        quillEditor.setSelection(index, 1);
        quillEditor.clipboard.dangerouslyPasteHTML(
          index,
          `<img src=${res.data} alt=${"alt text"} />`
        );
      }     };**/

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.onchange = () => {
      console.log(input.files[0]);
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "code-block",
            "formula",
          ],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          [{ align: [] }, { color: [] }, { background: [] }],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "formula",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "align",
    "color",
    "background",
  ];

  return (
    <CustomReactQuill
      ref={quillRef}
      theme="snow"
      modules={modules}
      formats={formats}
      value={htmlStr}
      placeholder="내용을 입력하세요."
      onChange={(content, delta, source, editor) =>
        setHtmlStr(editor.getHTML())
      }
    />
  );
};

export default Editor;

const CustomReactQuill = styled(ReactQuill)`
  height: ${500 / 19.2}vw;
`;

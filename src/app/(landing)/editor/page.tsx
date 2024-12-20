'use client'
// import React, { useEffect, useRef } from 'react';
// import EditorJS, { ToolConstructable } from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';

// const Editor = () => {
//   const editorInstance = useRef<EditorJS | null>(null);

//   useEffect(() => {
//     editorInstance.current = new EditorJS({
//       holder: 'editorjs',
//       placeholder: 'Type your content here...',
//       tools: {
//         header: {
//           class: Header as unknown as ToolConstructable,
//           inlineToolbar: ['link'],
//         },
//         list: {
//           class: List as unknown as ToolConstructable,
//           inlineToolbar: true,
//         },
//       },
//     });

//     return () => {
//       if (editorInstance.current) {
//         editorInstance.current.destroy();
//         editorInstance.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
//       <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>
//         Editor.js WYSIWYG Editor
//       </h1>
//       <div
//         id="editorjs"
//         style={{
//           border: '1px solid #ccc',
//           borderRadius: '6px',
//           padding: '15px',
//           minHeight: '300px',
//           backgroundColor: '#f9f9f9',
//           boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Editor;

import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
// import './App.css';

export default function Editors() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey='your-api-key'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}


// import React, { useEffect, useRef } from 'react'

// type IProps = {
//   onChange: (data: string) => void
//   editorLoaded: boolean
//   name: string
//   value: string
// }

// function TextEdior:React.FC<IProps>({ onChange, editorLoaded, name, value }) {
//   const editorRef = useRef()
//   const { CKEditor, ClassicEditor } = editorRef.current || {}

//   useEffect(() => {
//     editorRef.current = {
//       CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
//       ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
//     }
//   }, [])

//   return (
//     <div>
//       {editorLoaded ? (
//         <CKEditor
//           type=""
//           name={name}
//           editor={ClassicEditor}
//           config={{
//             ckfinder: {
//               // Upload the images to the server using the CKFinder QuickUpload command
//               // You have to change this address to your server that has the ckfinder php connector
//               uploadUrl: '' //Enter your upload url
//             }
//           }}
//           data={value}
//           onChange={(event, editor) => {
//             const data = editor.getData()
//             // console.log({ event, editor, data })
//             onChange(data)
//           }}
//         />
//       ) : (
//         <div>Editor loading</div>
//       )}
//     </div>
//   )
// }

// export default TextEdior

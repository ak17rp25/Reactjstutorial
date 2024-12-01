import {Editor} from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
function RTE() {
  return (
    <Editor
    initialValue='default Value'
    init={{
        branding:false,
        menubar:true,
        height:500,
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link image',
        plugins: 'link image',
        content_style: 'body { font-family: Arial, sans-serif; }'
    }}
    ></Editor>
  )
}

export default RTE;
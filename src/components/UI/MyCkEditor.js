'use client';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import 'ckeditor5/ckeditor5.css';

function MyCkEditor({value, onChange}) {
    return (
        <CKEditor
            editor={ ClassicEditor }
            data={value}
            onChange={(event, editor) => {
                const newData = editor.getData();
                onChange(newData);
            }}
            config={{
                toolbar: [
                    "undo", "redo", "|",
                    "heading", "|",
                    "bold", "italic", "|",
                    "link", "|",
                    "bulletedList", "numberedList", "|",
                    "insertTable", "|",
                ],
                plugins: [
                    "Essentials", "Paragraph", "Bold", "Italic", "Heading", "Link",
                    "List", "Table", "TableToolbar",
                ],
            }}
        />
    );
}

export default MyCkEditor;

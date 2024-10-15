import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function TinyEditor() {
    const editorRef = useRef(null);

    return (
        <>
            <Editor
                apiKey={import.meta.env.VITE_TINY_API_KEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                init={{
                    plugins: "anchor autolink charmap code codesample emoticons image link lists media searchreplace table visualblocks linkchecker wordcount preview",
                    toolbar:
                        "undo redo preview code | blocks fontfamily fontsize | bold italic underline strikethrough codesample| link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue="<p>Write your blog post here...</p>"
            />
        </>
    );
}

export default TinyEditor;

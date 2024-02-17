'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type TextEditorProps = {
  value: string
}

const TextEditor = ({ value }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
  })

  return <EditorContent editor={editor} />
}

export default TextEditor

'use client'

import { data } from '@/lib/example-data'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import invariant from 'tiny-invariant'

type TextRendererProps = {
  id: string
}

export default function TextRenderer({ id }: TextRendererProps) {
  const element = data.layers[id]
  invariant(element.props.type === 'text', 'Element must be a text type')

  const { position, boxSize, text, fontSize } = element.props

  const editor = useEditor({
    extensions: [StarterKit],
    content: text,
    editorProps: {
      attributes: {
        'data-editor-id': id,
      },
    },
  })

  return (
    <div
      data-element-id={id}
      style={{
        position: 'absolute',
        width: boxSize.width,
        height: boxSize.height,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <EditorContent editor={editor} />
    </div>
  )
}

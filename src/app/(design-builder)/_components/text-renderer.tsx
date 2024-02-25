'use client'

import { data } from '@/lib/example-data'
import { useEditor, EditorContent } from '@tiptap/react'
import invariant from 'tiny-invariant'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextStyle from '@tiptap/extension-text-style'

const CustomParagraph = Paragraph.extend({
  addAttributes: () => {
    return {
      style: {
        default: null,
      },
    }
  },
})

const CustomTextStyle = TextStyle.extend({
  addAttributes: () => {
    return {
      style: {
        default: null,
      },
    }
  },
})

type TextRendererProps = {
  id: string
}

export default function TextRenderer({ id }: TextRendererProps) {
  const element = data.layers[id]
  invariant(element.props.type === 'text', 'Element must be a text type')

  const { position, boxSize, text, fontSize } = element.props

  const editor = useEditor({
    extensions: [Document, CustomParagraph, Text, CustomTextStyle],
    content: text,
    editable: true,
    editorProps: {
      attributes: {
        'data-editor-id': id,
        class: 'hover:ring hover:ring-2 focus:ring-0',
      },
    },
  })

  console.log(editor?.options.element.getBoundingClientRect().width)

  const computeBoxWidth = () => {
    const editorWidth = editor?.options.element.getBoundingClientRect().width
    if (!editorWidth) {
      return boxSize.width
    }

    return 'auto'
  }

  return (
    <div
      data-element-id={id}
      className="absolute cursor-default focus-within:cursor-text"
      style={{
        width: computeBoxWidth(),
        maxWidth: boxSize.width,
        height: editor?.options.element.getBoundingClientRect().height || boxSize.height,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <EditorContent editor={editor} />
    </div>
  )
}

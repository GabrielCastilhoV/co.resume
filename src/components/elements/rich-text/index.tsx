import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaBold, FaItalic } from 'react-icons/fa'

import { RichTextProps } from './types'

import * as S from './styles'

export const RichText = ({
  initialValue = '',
  onRichTextChange
}: RichTextProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialValue
  })

  if (!editor) {
    return null
  }

  editor.on('update', ({ editor }) => {
    !!onRichTextChange && onRichTextChange(editor.getText())
  })

  return (
    <S.Wrapper>
      <S.Toolbar>
        <S.Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          type="button"
          isActive={editor.isActive('bold')}
        >
          <FaBold />
        </S.Button>

        <S.Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type="button"
          isActive={editor.isActive('italic')}
        >
          <FaItalic />
        </S.Button>
      </S.Toolbar>

      <S.Editor editor={editor} />
    </S.Wrapper>
  )
}

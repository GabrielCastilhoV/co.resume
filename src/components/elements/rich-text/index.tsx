import { useEffect, useState } from 'react'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaBold, FaItalic } from 'react-icons/fa'

import { RichTextProps } from './types'

import * as S from './styles'

export const RichText = ({
  initialValue = '',
  onRichTextChange
}: RichTextProps) => {
  const [mounted, setMounted] = useState(false)

  let editor = useEditor({
    extensions: [StarterKit],
    content: initialValue
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      editor?.commands?.setContent(initialValue)
    }
  }, [mounted])

  editor?.on('update', ({ editor }) => {
    !!onRichTextChange && onRichTextChange(editor.getHTML())
  })

  return (
    <S.Wrapper>
      <S.Toolbar>
        <S.Button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          type="button"
          isActive={editor?.isActive('bold')}
        >
          <FaBold />
        </S.Button>

        <S.Button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          type="button"
          isActive={editor?.isActive('italic')}
        >
          <FaItalic />
        </S.Button>
      </S.Toolbar>

      <S.Editor editor={editor} />
    </S.Wrapper>
  )
}

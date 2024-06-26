'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import { useState, useEffect, Fragment } from 'react'
import { TipTapEditorExtensions } from './extension'
import { TipTapEditorProps } from './props'
import { useDebouncedCallback } from 'use-debounce'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '@/store'
// import { titleAction } from "@/store/reducers/title";
// import docAPI from "@/api/doc";

type Props = {
  content: any
  setContent: any
  id: string
  editable: boolean
}

export default function Editor(props: Props) {
  const [saveStatus, setSaveStatus] = useState<string>('Saved')
  const { setContent, content, id, editable } = props
  // const titleState = useSelector((state: StateType) => state.titleState);
  const dispatch = useDispatch()

  // async function patchRequest(title: string, document: any) {
  //   const res = await docAPI.update(id, {
  //     data: {
  //       title: title,
  //       editorJson: document,
  //     },
  //   });
  //   return res;
  // }

  const debouncedEditorUpdate = useDebouncedCallback(async ({ editor }) => {
    const json = editor.getJSON()
    setContent(json)
    // await patchRequest(titleState.title, json);
    setSaveStatus('Saved')
  }, 1000)

  const debouncedTitleUpdate = useDebouncedCallback(async (title: string) => {
    // await patchRequest(title, content);
    setSaveStatus('Saved')
  }, 1000)

  const editor = useEditor({
    extensions: TipTapEditorExtensions,
    editorProps: TipTapEditorProps,
    onUpdate: e => {
      setSaveStatus('Saving...')
      debouncedEditorUpdate(e)
    },
    editable: editable,
    content: content
  })

  useEffect(() => {
    if (editor && content) {
      setTimeout(() => {
        editor.commands.setContent(content)
      })
    }
  }, [editor, content])

  return (
    <Fragment>
      <div className='relative flex min-h-[80dvh] w-full cursor-text flex-col items-center p-5 pt-10'>
        <div className=' w-full max-w-screen-lg'>
          {editable && (
            <div className='flex'>
              <div className='absolute top-0 rounded-lg bg-gray-100 px-2 py-1 text-gray-400 max-sm:text-xs sm:text-sm'>
                {saveStatus}
              </div>
              <div className='absolute top-0 ml-20 rounded-lg bg-gray-100 px-2 py-1 text-gray-400 max-sm:text-xs sm:text-sm'>
                {"Press '/' for commands, or enter some text..."}
              </div>
            </div>
          )}
          <div className='w-full font-semibold'></div>
          <div
            className='min-h-[80dvh] rounded-lg border-1 p-5'
            onClick={() => {
              editor?.chain().focus().run()
            }}>
            <EditorContent editor={editor} className='default-html' />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

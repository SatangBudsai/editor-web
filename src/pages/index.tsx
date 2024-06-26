import { Fragment, ReactElement, useState } from 'react'
import MainLayout from '@/layouts/main-layout'
import useLoaderGlobal from '@/hooks/useLoaderGlobal'
import EditorBlock from '@/components/EditorBlock'

type Props = {}

const Home = (props: Props) => {
  const loaderGlobal = useLoaderGlobal()
  const [content, setContent] = useState()
  return (
    <Fragment>
      <EditorBlock content={content} setContent={setContent} id={'editor'} editable={true} />
    </Fragment>
  )
}

export default Home
Home.auth = false

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

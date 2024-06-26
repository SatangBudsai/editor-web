import { Fragment, ReactElement } from 'react'
import MainLayout from '@/layouts/main-layout'
import useLoaderGlobal from '@/hooks/useLoaderGlobal'

type Props = {}

const Home = (props: Props) => {
  const loaderGlobal = useLoaderGlobal()

  return <Fragment></Fragment>
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

import { Fragment, ReactElement } from 'react'
import RootLayout from '@/layouts/root-layout'
import MainLayout from '@/layouts/main-layout'
type Props = {}

const ExamplePrivate = (props: Props) => {
  return (
    <Fragment>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-wrap items-center justify-center gap-5'>Tempalte NextJs and NextUI</div>
      </div>
    </Fragment>
  )
}

ExamplePrivate.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

ExamplePrivate.auth = true
export default ExamplePrivate

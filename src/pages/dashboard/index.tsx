import MainLayout from '@/layouts/main-layout'
import RootLayout from '@/layouts/root-layout'
import React, { Fragment, ReactElement } from 'react'
import { Select, SelectItem, Spacer } from '@nextui-org/react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import Department from './Department'
import CarbonUse from './CarbonUse'
import CarbonReduce from './CarbonReduce'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <h1 className='text-center text-4xl font-semibold'>DASHBOARD</h1>
      <h1 className='text-center text-2xl text-default-500'>
        สรุปการประเมินคาร์บอนฟุตพริ้นmNกิจกรรมของมหาลัยเชียงใหม่
      </h1>

      <Spacer y={5} />
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-4 rounded-xl border-2 bg-content1 py-10'>
          <h2 className='text-center text-3xl font-semibold'>ปรเภทกิจกรรม</h2>
          <PieChart />
        </div>
        <div className='col-span-8'>
          <div className='col-span-4 rounded-xl border-2 bg-content1 p-10'>
            <h2 className='text-center text-3xl font-semibold'>แสดงข้อมูลตลอดทั้งปี</h2>
            <Spacer y={5} />
            <BarChart />
          </div>
        </div>
        <div className='col-span-4 rounded-xl border-2 bg-content1 p-10'>
          <h2 className='text-center text-3xl font-semibold'>หน่วยผู้จัดงาน</h2>
          <Spacer y={5} />
          <Department />
        </div>
        <div className='col-span-8'>
          <div className='flex flex-col gap-5'>
            <CarbonUse />
            <CarbonReduce />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

Dashboard.auth = false

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
        <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}

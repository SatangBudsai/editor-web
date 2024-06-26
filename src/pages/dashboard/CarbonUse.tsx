import { Icon } from '@iconify/react/dist/iconify.js'
import { Spacer } from '@nextui-org/react'
import React, { Fragment } from 'react'

type Props = {}

const CarbonUse = (props: Props) => {
  return (
    <Fragment>
      <div className='rounded-xl border-2 bg-content1 p-10'>
        <h2 className='text-2xl font-semibold'>9 หมวดการประเมินคาร์บอนฟุตพริ้นท์</h2>
        <Spacer y={5} />
        <div className='grid grid-cols-4 gap-5'>
          <div className='rounded-xl border-2 p-3'>
            <div className='flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-3'>
                <Icon icon='fluent:food-32-filled' className=' text-white' width={32} />
              </div>
              <div className='flex flex-col'>
                <p className='-mb-1'>อาหาร</p>
                <div className='flex items-center gap-1 text-green-500'>
                  <p className='text-2xl font-bold'>320</p>
                  <Icon icon='ion:caret-up' width={20} />
                </div>
                <p className='-mt-1'>CO2</p>
              </div>
            </div>
          </div>

          <div className='rounded-xl border-2 p-3'>
            <div className='flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 p-3'>
                <Icon icon='fa6-solid:van-shuttle' className=' text-white' width={32} />
              </div>
              <div className='flex flex-col'>
                <p className='-mb-1'>พลังงาน</p>
                <div className='flex items-center gap-1 text-yellow-500'>
                  <p className='text-2xl font-bold'>320</p>
                  <Icon icon='ion:caret-up' width={20} />
                </div>
                <p className='-mt-1'>CO2</p>
              </div>
            </div>
          </div>

          <div className='rounded-xl border-2 p-3'>
            <div className='flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-violet-500 p-3'>
                <Icon icon='ph:lightning-fill' className=' text-white' width={32} />
              </div>
              <div className='flex flex-col'>
                <p className='-mb-1'>เดินทางโดยผู้จัด</p>
                <div className='flex items-center gap-1 text-violet-500'>
                  <p className='text-2xl font-bold'>320</p>
                  <Icon icon='ion:caret-up' width={20} />
                </div>
                <p className='-mt-1'>CO2</p>
              </div>
            </div>
          </div>

          <div className='rounded-xl border-2 p-3'>
            <div className='flex items-center gap-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 p-3'>
                <Icon icon='fa-solid:car' className=' text-white' width={32} />
              </div>
              <div className='flex flex-col'>
                <p className='-mb-1'>บริการขนส่ง</p>
                <div className='flex items-center gap-1 text-sky-500'>
                  <p className='text-2xl font-bold'>320</p>
                  <Icon icon='ion:caret-up' width={20} />
                </div>
                <p className='-mt-1'>CO2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CarbonUse

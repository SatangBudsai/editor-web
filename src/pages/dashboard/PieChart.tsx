import React, { Fragment } from 'react'
import {
  PieChart as PieChartRechart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  Label,
  LabelList
} from 'recharts'
import { Payload } from 'recharts/types/component/DefaultTooltipContent'

// Sample data
const data = [
  { name: 'การจัดประชุม', value: 300 },
  { name: 'กิจกรรมนอกอาคาร', value: 300 },
  { name: 'กิจกรรมในอาคาร', value: 300 },
  { name: 'ทัศนศึกษา', value: 900 }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className='rounded-xl border border-gray-300 bg-white p-2'>
        <p className='text-gray-700'>{label}</p>
        <p className='text-gray-600'>{`${payload[0].name} : ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

const CustomLegend = (props: any) => {
  const { payload } = props
  return (
    <div className='flex flex-col justify-center gap-1'>
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className='mr-2 flex items-center'>
          <div style={{ backgroundColor: entry.color, marginRight: 5 }} className='h-4 w-6 rounded-lg' />
          {entry.value}
        </div>
      ))}
    </div>
  )
}

type Props = {}

const PieChart = (props: Props) => {
  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0)
  return (
    <Fragment>
      <ResponsiveContainer width='100%' height={400}>
        <PieChartRechart>
          <Pie data={data} cx='50%' cy='50%' innerRadius={70} outerRadius={100} paddingAngle={1} dataKey='value'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} style={{ outline: 'none' }} />
            ))}
            <Label width={30} position='centerBottom' className='fill-secondary text-4xl font-semibold'>
              {totalValue.toLocaleString()}
            </Label>
            <Label width={30} position='centerTop' className='translate-y-3'>
              รวมทั้งหมด
            </Label>
          </Pie>
          <Tooltip content={CustomTooltip} />
          <Legend content={CustomLegend} layout='vertical' align='right' verticalAlign='middle' />
        </PieChartRechart>
      </ResponsiveContainer>
    </Fragment>
  )
}

export default PieChart

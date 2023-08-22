import BarChart from '@/components/BarChart'
import Header from '@/components/Header'
import RecentOrders from '@/components/RecentOrders'
import TopCards from '@/components/TopCards'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <Header/>
      <TopCards/>
      <div className='p-4 grid md:grid-cols-4 grid-cols-1 gap-4'>
        <BarChart />
        <RecentOrders/>
        <RecentOrders/>
      </div>
    </main>
  )
}

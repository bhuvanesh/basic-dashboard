import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo, RxPerson, RxDashboard} from 'react-icons/rx'

const Sidebar = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 w-45  basis-2/12 px-4 pt-4 text-white'>
        <div className='flex flex-col items-start'>
            <Link href='/'>
                <div className='flex justify-between mt-5'>
                    <RxSketchLogo size={20}/>
                    <p className='px-5'>Dashboard Home</p>
                </div>
            </Link>
            <Link href='/dashb'>
                <div className='flex justify-between mt-5'>
                    <RxDashboard size={20}/>
                    <p className='px-5'>Tremor Dashboard</p>
                </div>
            </Link>
            <Link href='/customers'>
                <div className='flex justify-between mt-5'>
                    <RxPerson size={20}/>
                    <p className='px-5'>Customers</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
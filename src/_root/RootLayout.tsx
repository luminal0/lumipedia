import Bottombar from '@/components/ui/shared/BottomBar'
import LeftSideBar from '@/components/ui/shared/LeftSideBar'
import Topbar from '@/components/ui/shared/Topbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSideBar />

      <section className='flex flex-1 h-full'>
        <Outlet/>
      </section>

     < Bottombar />
    </div>
  )
}

export default RootLayout
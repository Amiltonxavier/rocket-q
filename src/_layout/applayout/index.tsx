import { Outlet } from "react-router-dom";
import { Header } from "../../app/components/ui/header";



export default function AppLayout() {
  return (
    <>
      <div className='relative w-full top-9 px-5 sm:px-40 mb-16'>
        <Header />
      </div>
      <div className='mx-auto px-5 sm:px-40 py-7 w-full h-screen max-w-[1600px]'>
        <div className='space-y-5'>
          <Outlet />
        </div>
      </div>
    </>
  )
}


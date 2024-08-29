import { Header } from '../../app/components/ui/header'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <>
            <div className='fixed w-full top-9 px-5 sm:px-40'>
                <Header />
            </div>
            <div className="mx-auto px-5 sm:px-40 py-7 w-full h-screen max-w-[1600px]">
                <div className="grid lg:grid-cols-2 h-full">
                    <section className='h-full hidden lg:block'>
                        <div className="sm:flex items-center justify-center h-full">
                            <span className="z-30 absolute sm:size-[150px] md:size-[300px] bg-blue-500 rounded-full" />
                            <img
                                className="z-[1000]"
                                src="/Saly-6.png"
                                alt="saly"
                                width={600}
                                height={600}
                            />
                        </div>
                    </section>
                    <aside className='flex justify-center items-center h-full'>
                        <Outlet />
                    </aside>
                </div>
            </div>
        </>
    )
}

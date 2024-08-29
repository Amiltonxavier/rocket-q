import { CopyIcon, Users } from 'lucide-react'
import { Link } from 'react-router-dom'


export function Header() {
    return (
        <nav className='flex flex-wrap justify-between items-center w-full'>
            <Link className='' to={'/'}>
                <img src="/Logo.svg" alt="logo" width={167} height={44} />
            </Link>
            <div className='flex gap-5 items-center justify-center'>
                <div className='border border-blue-500 rounded-md py-2 px-3 text-blue-500'>
                    <span className="text-sm font-mono ">
                        #ABCD-1234
                    </span>
                    <button
                        className="  font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        <CopyIcon className='size-4' />
                    </button>
                </div>
                <button className='flex items-center justify-center text-white bg-blue-500 py-2 px-3 rounded-md'><Users className='size-5' /> Criar sala</button>
            </div>
        </nav>
    )
}

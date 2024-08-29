import { Check, Trash, User } from 'lucide-react'


export function Message() {
    return (
        <div className='h-[136px] bg-blue-200 rounded-b-md pt-6 pl-6'>
            <div className='flex items-center gap-4'>
                <span className=' bg-blue-500 flex items-center p-2 justify-center rounded-full size-12'>
                    <User className='size-8 text-white' />
                </span>
                <div className='flex-1 h-full'>
                    <p className='text-sm text-little-blue'>O que é typescript ?</p>
                </div>
            </div>
            <div className='flex justify-end gap-4 mt-4 items-center mr-4 text-zinc-600'>
                <button className='flex items-center gap-2'>
                    <Check className='text-blue-600' />
                    <p>Marcar como lida</p>
                </button>
                <button className='flex items-center gap-2'>
                    <Trash className='text-red-500' />
                    <p>Excluir</p>
                </button>

            </div>
        </div>
    )
}


import { LockIcon } from 'lucide-react'
import { Message } from '../../app/components/ui/message'


export default function Dashboard() {
  return (
    <div className='h-full space-y-6'>
      <h2 className='text-3xl tracking-tight font-bold text-little-blue'>Faça sua pergunta</h2>
      <form className='border focus-within:border-blue-500 ring-zinc-400 w-full rounded-b-md'>
        <textarea name="" id="" placeholder='O que você quer perguntar?'
          className='w-full min-h-14 p-4 outline-none resize-none' />
        <div className='flex justify-between items-center py-6 px-4'>
          <div className='flex items-center justify-center text-zinc-400 gap-2'>
            <LockIcon className='size-4' />
            <span>Esta pergunta é anônima</span>
          </div>
          <button className='bg-blue-500 px-3 py-2 text-white font-bold rounded-md'>Enviar</button>
        </div>
      </form>
      <div className='space-y-2'>
      {
        Array.from({ length: 2 }).map((_, i) => {
          return(
            <Message key={i} />
          )
        })
      }
      </div>
     {/*  <NoMessage /> */}

    </div>
  )
}

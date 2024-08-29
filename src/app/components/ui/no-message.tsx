import Image from 'next/image'
import React from 'react'

export function NoMessage() {
  return (
    <div className='text-center flex flex-col items-center justify-center h-full'>
        <Image src="/msg.svg" alt='msg logo' width={100} height={100} quality={100} />
        <h3 className='text-little-blue text-xl font-semibold'>Nenhuma pergunta por aqui...</h3>
        <p className=' text-zinc-500'>
          Faça sua primeira pergunta e envie o<br />
          código dessa sala para outras pessoas!
        </p>
      </div>
  )
}

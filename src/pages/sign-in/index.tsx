import { LogOut, Users } from 'lucide-react'
import { Input } from '../../app/components/ui/input'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

  const navigate = useNavigate()

  async function authentication(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const data = formData.get('roomCode')

    if(data?.toString().includes('abc-123')){
      await new Promise((resolver) => setTimeout(resolver, 2000))
      navigate('/', { replace: true })
    }
  }


  function handleCreateRoom(){
    navigate('/create-room')
  }

  return (
    <div className='space-y-16'>
      <div className='space-y-4 w-full'>
        <h2 className="text-4xl font-bold tracking-tight text-little-blue">
          Entre como participante
        </h2>
        <form onSubmit={authentication} className="flex gap-4 flex-col w-full">
          <Input name='roomCode' placeholder='Código da sala' />
          <button type="submit"
            className="px-2 py-3 bg-blue-500 text-white font-semibold rounded-md flex items-center justify-center gap-2">
            <LogOut className='size-6' /> Entrar na sala
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center">
        <div className="border-t border-gray-300 flex-grow mr-2"></div>
        <span className="text-gray-500 px-2">ou</span>
        <div className="border-t border-gray-300 flex-grow ml-2"></div>
      </div>

      <div className='space-y-6'>
        <h2 className='text-little-blue text-3xl tracking-tight font-bold'>
          Crie sua própria sala, de<br /> forma fácil
        </h2>
        <button
        onClick={handleCreateRoom}
          className='flex items-center justify-center  gap-2 border border-blue-500 text-blue-500 py-3 px-2 w-full rounded-md'>
          <Users className='size-6' />
          Criar sala
        </button>
      </div>
    </div>
  )
}

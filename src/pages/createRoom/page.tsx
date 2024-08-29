//import { Users } from 'lucide-react';

import { Input } from "../../app/components/ui/input";



export default function CreateRoom() {
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center overflow-hidden">
      <div className=" overflow-hidden">
        <span className="z-30 absolute size-60 bg-blue-200 rounded-full -top-40 -right-10" />
      </div>
      <div className=" overflow-hidden">
        <span className="z-30 absolute size-60 bg-blue-200 rounded-full bottom-0 -right-40" />
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-little-blue">Crie sua própria sala</h2>
      <form className="flex gap-4 flex-col">
        <Input type="text" placeholder="Código da sala" />
        <button type="submit"
          className="px-2 py-3 bg-blue-500 text-white font-semibold rounded-md flex items-center justify-center gap-2">
          Criar sala
        </button>
      </form>
    </div>
  );
}

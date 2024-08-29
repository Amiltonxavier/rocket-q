import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'> & {

}

export function Input({ placeholder , ...props }: InputProps) {
    return (
        <div className='border text-base font-medium text-zinc-700 focus-within:border-blue-500 p-3 rounded-md placeholder:placeholder-zinc-400'>
            <input
                className="outline-none w-full"
                placeholder={placeholder}
                {...props}
            />
        </div>

    )
}

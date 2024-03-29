interface ButtonProps{
    label:string 
    fullWidth?:boolean
    secondary?:boolean
    large?:boolean
    onclick:()=> void
    disabled?:boolean
    outline?:boolean
}
export const Button = ({label,fullWidth,secondary,large,onclick,disabled,outline}:ButtonProps)=>{
    return <button 
    disabled={disabled}
    onClick={onclick}
    className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-full
        font-semibold
        hover:opacity-80
        transition
        border-2
        ${fullWidth ? 'w-full':'w-fit'}
        ${secondary ? 'bg-white':'bg-sky-500'}
        ${secondary ? 'text-black':'text-white'}
        ${secondary ? 'border-black':'border-sky-500'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'px-5':'px-5'}
        ${large ? 'py-2' : 'p-y2'}
        ${outline ? 'bg-transparent': ''}
        ${outline ? 'border-white': ''}
        ${outline ? 'text-white': ''}
    `}>
        {label}
    </button>
}
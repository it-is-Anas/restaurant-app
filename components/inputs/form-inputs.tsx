


export default function FormInput({placeholder,type='text',label}:{
    placeholder?: string,
    type?: string,
    label?: string,
}){
    return (
        <div className="flex flex-col my-[5px]">
            <label htmlFor="" className="text-[.8em] font-[500] px-[2.5px] py-[5px]">{label}</label>
            <input type={type} className="bg-[var(--white)] border-none outline-none px-[10px] py-[2.5px] rounded-[5px]" placeholder={placeholder} />
        </div>
    );
}
import Image from "next/image";
import PizzaImg from '@/public/foods/pizza-image.png';
import FireIcon from '@/public/icons/fire-icon.png';
import CartIcon from '@/public/icons/cart-icon.png';



export default function ProductCart(){
    return (
        <div className="w-[12em]  p-[10px] rounded-[10px]  my-[2em] mx-[auto] bg-[var(--gray)]">
            <div className="w-[100%] h-[5em] relative py-[10px]">
                <Image className="w-[7em] h-[7em] absolute top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" src={PizzaImg} alt='pizza image' />
            </div>
            <h3 className="font-[600] text-[1.3em]  text-[var(--dark-blue)] py-[4px]">Pizza Good Delicous</h3>
            <div className="flex justify-start items-center py-[4px]">
                <Image className="w-[1.3em] h-[1.3em] mr-[10px]" src={FireIcon} alt='' />
                <p className="font-[600] text-[var(--black)]">3.4</p>
            </div>
            <div className="py-[4px] flex justify-between items-center">
            <p className="font-[500] text-[var(--green)]">$ 40.5</p>
            <button className="">
                    <Image className="w-[1.3em] h-[1.3em]" src={CartIcon} alt='' />
            </button>
            </div>
        </div>
    );
}
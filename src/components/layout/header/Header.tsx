import BiGarsonLogo from '@/assets/images/bigarson-logo.svg';
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center h-[100px] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto w-full px-4 xl:p-0 flex justify-between items-center">
        <Image src={BiGarsonLogo} alt="BiGarson logo" width={147} height={50} />
        <Nav />
{/*         <div className="flex max-lg:hidden">
          <button className="text-[#1F2937] hover:text-[#5151F4] transition-colors">Kayıt Ol</button>
          <button className="ml-4 px-[38px] py-[14px] bg-[#5151F4] text-white rounded-2xl leading-[21px]">Giriş Yap</button>
        </div> */}
      </div>
    </header>

  )
}

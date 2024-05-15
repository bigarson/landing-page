import Image from "next/image";
import BiGarsonLogo from "@/assets/images/bigarson-logo.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] pt-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <div className=" flex items-start justify-between flex-nowrap">
          <div className="max-w-[180px]">
            <Image src={BiGarsonLogo} alt="bigarson-logo" height={50} width={147.5} />
            <p className="text-white text-sm">Yeni Nesil Dijital QR Menü Sistemi</p>
          </div>
          <div className="flex-[52%] grow-0 flex gap-[90px] text-white text-sm leading-[21px]">
            <p className="w-min">
              Bigarson
              Ankara/Çankaya
            </p>
            <div className="flex flex-col gap-2">
              <p>+0545 287 31 39</p>
              <p>info@bigarson.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <Link prefetch={false} className="underline" href="#home">Anasayfa</Link>
              <Link prefetch={false} className="underline" href="#features">Özellikler</Link>
              <Link prefetch={false} className="underline" href="#howToUse">Nasıl Kullanılır?</Link>
              <Link prefetch={false} className="underline" href="#faq">Sıkça Sorulan Sorular</Link>
            </div>
          </div>
        </div>

        <p className="text-white opacity-50 pt-14 pb-9 ">&copy; {new Date().getFullYear()} Bigarson. All Right Reserved.</p>
      </div>
    </footer>
  )
}
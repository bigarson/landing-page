"use client"
import Image from "next/image";
import BiGarsonLogo from '@/assets/images/bigarson-logo.svg'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./Header.scss";

export default function Header() {
  const [hash, setHash] = useState('')
  const params = useParams()

  useEffect(() => {
    if (typeof window !== undefined) {
      setHash(window.location.hash)
    }
  }, [params])

  return (
    <header className="flex items-center h-[100px] shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto w-full px-4 lg:p-0 flex justify-between items-center">
        <Image src={BiGarsonLogo} alt="BiGarson logo" width={147} height={50} />

        <nav className="flex-grow ml-[57px]">
          <ul className="flex gap-[30px]">
            <li><Link className={`text-[#1F2937] ${hash !== '#home' ? 'opacity-50' : ''}`} prefetch={false} href="#home">Anasayfa</Link></li>
            <li><Link className={`text-[#1F2937] ${hash !== '#features' ? 'opacity-50' : ''}`} prefetch={false} href="#features">Özellikler</Link></li>
            <li><Link className={`text-[#1F2937] ${hash !== '#howToUse' ? 'opacity-50' : ''}`} prefetch={false} href="#howToUse">Nasıl Kullanılır?</Link></li>
            <li><Link className={`text-[#1F2937] ${hash !== '#faq' ? 'opacity-50' : ''}`} prefetch={false} href="#faq">Sıkça Sorulan Sorular</Link></li>
          </ul>
        </nav>

        <div className="flex">
          <div>
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </label>
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <button className="text-[#1F2937] hover:text-[#5151F4] transition-colors">Kayıt Ol</button>
          <button className="ml-4 px-[38px] py-[14px] bg-[#5151F4] text-white rounded-2xl leading-[21px]">Giriş Yap</button>
        </div>
      </div>
    </header>

  )
}

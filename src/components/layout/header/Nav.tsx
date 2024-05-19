"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Nav() {
  const [hash, setHash] = useState('')
  const params = useParams()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: Event) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      setHash(window.location.hash)
    }
  }, [params])

  function toggleMenu() {
    setOpen(!open)
  }

  return (
    <>
      <nav className="flex-grow ml-[57px] hidden lg:block">
        <ul className="flex gap-[30px]">
          <li><Link className={`text-[#1F2937] ${hash !== '#home' ? 'opacity-50' : ''}`} prefetch={false} href="#home">Anasayfa</Link></li>
          <li><Link className={`text-[#1F2937] ${hash !== '#features' ? 'opacity-50' : ''}`} prefetch={false} href="#features">Özellikler</Link></li>
          <li><Link className={`text-[#1F2937] ${hash !== '#howToUse' ? 'opacity-50' : ''}`} prefetch={false} href="#howToUse">Nasıl Kullanılır?</Link></li>
          <li><Link className={`text-[#1F2937] ${hash !== '#faq' ? 'opacity-50' : ''}`} prefetch={false} href="#faq">Sıkça Sorulan Sorular</Link></li>
        </ul>
      </nav>

      <div className="menu-container relative flex grow lg:hidden items-center justify-end pl-4" ref={menuRef}>
        <button className={`flex flex-col justify-around w-8 gap-1 ${open ? 'active' : ''}`} onClick={() => toggleMenu()}>
          <div className={`bg-[#333] h-1 w-8 rounded-sm ${open ? 'absolute transition-all duration-[.5s] ease -rotate-45' : ''}`}></div>
          <div className={`bg-[#333] h-1 w-8 rounded-sm ${open ? 'absolute transition-all duration-[.5s] ease opacity-0' : 'opacity-100'}`}></div>
          <div className={`bg-[#333] h-1 w-8 rounded-sm ${open ? 'absolute transition-all duration-[.5s] ease rotate-45' : ''}`}></div>
        </button>
        <ul className={`menu p-0 m-0 bg-white top-8 transition-all duration-[.5s] ease ${open ? 'absolute right-0 block visible w-64 rounded-2xl text-center p-2 shadow-2xl border' : 'hidden invisible'}`}>
          <li className="list-none p-2"><Link className={`text-[#1F2937] ${hash !== '#home' ? 'opacity-50' : ''}`} prefetch={false} href="#home">Anasayfa</Link></li>
          <li className="list-none p-2"><Link className={`text-[#1F2937] ${hash !== '#features' ? 'opacity-50' : ''}`} prefetch={false} href="#features">Özellikler</Link></li>
          <li className="list-none p-2"><Link className={`text-[#1F2937] ${hash !== '#howToUse' ? 'opacity-50' : ''}`} prefetch={false} href="#howToUse">Nasıl Kullanılır?</Link></li>
          <li className="list-none p-2"><Link className={`text-[#1F2937] ${hash !== '#faq' ? 'opacity-50' : ''}`} prefetch={false} href="#faq">Sıkça Sorulan Sorular</Link></li>
          <li className="list-none p-2"><button className="text-[#1F2937] hover:text-[#5151F4] transition-colors">Kayıt Ol</button></li>
          <li className="list-none p-2"><button className="ml-4 px-[38px] py-[14px] bg-[#5151F4] text-white rounded-2xl leading-[21px]">Giriş Yap</button></li>
        </ul>
      </div>
    </>
  )
}
import Arrow1 from '@/assets/images/arrow1.svg';
import Arrow2 from '@/assets/images/arrow2.svg';
import HowToUse1 from '@/assets/images/how-to-use-1.svg';
import HowToUse2 from '@/assets/images/how-to-use-2.svg';
import HowToUse3 from '@/assets/images/how-to-use-3.svg';
import Image from "next/image";

export default function HowToUse() {
  return (
    <div className='section-how-to-use bg-[#F7F9FB] px-4 xl:px-0' id='howToUse'>
      <div className="max-w-[1200px] mx-auto py-[100px]">
        <div>
          <p className="text-[#5151F4] text-lg">Nasıl Kullanılır</p>
          <p className="text-[#1F2937] text-4xl leading-[58px] font-semibold">QR Kodla Sipariş: Hızlı, Kolay, Lezzetli!</p>
        </div>
        <div className="mt-[80px] flex flex-wrap justify-between md:gap-8">
          <div className="md:flex-[20%] grow-0 flex md:flex-col max-md:items-center max-md:justify-between max-md:w-full ">
            <div className='flex flex-col'>
              <span className="bg-[#5151F4] rounded-full text-xl text-white h-9 w-9 flex justify-center items-center">
                1
              </span>
              <span className="text-[#5151F4] text-2xl mt-2">Kaydolun</span>
              <span className="text-[#1F2937] opacity-80">Restoranınızın adını, ürünleri ve fiyat listesini giriniz</span>
            </div>
            <div className='md:grow flex items-end'>
              <Image className="mt-12" src={HowToUse1} alt="how-to-use" height={450} width={222.4} />
            </div>

          </div>
          <div className='flex max-md:w-full max-md:justify-center max-md:rotate-[18deg] max-md:h-14'>
            <Image src={Arrow1} alt="arrow1" width={107} height={20} />
          </div>
          <div className="md:flex-[20%] grow-0 flex md:flex-col max-md:items-center max-md:justify-between max-md:w-full max-md:flex-row-reverse">
            <div className='flex flex-col max-md:text-right max-md:items-end'>
              <span className="bg-[#5151F4] rounded-full text-xl text-white h-9 w-9 flex justify-center items-center">
                2
              </span>
              <span className="text-[#5151F4] text-2xl mt-2">Kategoriler ekleyin</span>
              <span className="text-[#1F2937] opacity-80">Menünüzü çeşitli menü öğeleri, fiyatlar vb. İle doldurunuz.</span>
            </div>
            <div className='md:grow flex items-end'>
              <Image className="mt-12" src={HowToUse2} alt="how-to-use" height={450} width={222.4} />
            </div>

          </div>
          <div className='flex max-md:w-full max-md:justify-center max-md:rotate-[-198deg] max-md:h-14'>
            <Image src={Arrow2} alt="arrow2" width={107} height={20} />
          </div>
          <div className="md:flex-[20%] grow-0 flex md:flex-col max-md:items-center max-md:justify-between max-md:w-full">
            <div className='flex flex-col'>
              <span className="bg-[#5151F4] rounded-full text-xl text-white h-9 w-9 flex justify-center items-center">
                3
              </span>
              <span className="text-[#5151F4] text-2xl mt-2">Sipariş almaya başla</span>
              <span className="text-[#1F2937] opacity-80">QR menüden ürünleri tek dokunuşla sipariş alabilirsiniz.</span>
            </div>
            <div className='md:grow flex items-end'>
              <Image className="mt-12" src={HowToUse3} alt="how-to-use" height={450} width={222.4} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
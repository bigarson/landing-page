import Graph from '@/assets/images/graph.svg';
import Phone from '@/assets/images/iPhone-13-Pro-Front.svg';
import Person1 from '@/assets/images/person1.png';
import Person2 from '@/assets/images/person2.png';
import Person3 from '@/assets/images/person3.png';
import Star from '@/assets/images/star.svg';
import Arrow from '@/assets/images/arrow-free.svg';
import Image from "next/image";
import Link from 'next/link';

export default function intro() {
  return (

    <div className="section-intro flex max-w-[1200px] mx-auto justify-center px-4 lg:justify-between xl:p-0" id='home'>
      <div className="mt-[108px] w-[588px] ">
        <p className="font-semibold text-5xl leading-[72px] mb-6">
          <span className="text-[#5151F4]">QR Koduyla </span>
          <span>Masanızda Sipariş Rahatlığı!</span>
        </p>
        <p className="text-base opacity-80">Restoran işletmecileri için müşteri memnuniyeti ve işletme verimliliği her zaman en önemli önceliklerden biridir. Restoranınızın menüsünü QR kodlarıyla pazarlamak, müşterilere benzersiz bir deneyim sunmanın yanı sıra işletmenizin etkisini artırmanın da harika bir yoludur.</p>
        <Link href="http://kratos.bigarson.com/self-service/login/browser">
        <button className="bg-[#5151F4] text-white rounded-2xl py-4 px-[60px] mt-9 relative" >
          QR Menü Oluştur

          <span className='bg-[#FFC759] text-[#061C3D] px-3 py-[6px] rounded-[3px] rotate-[-19deg] absolute top-[180%] left-[87%] after:content-[""] after:h-2 after:w-2 after:flex after:left-[calc(100%_-_4px)] after:absolute after:bg-[#FFC759] after:top-[calc((100%_-_8px)/2)] after:rotate-45 max-[480px]:left-[60%] max-[480px]:top-[210%]'>
            Ücretsiz
          </span>
          <Image src={Arrow} alt='arrow' width={98} height={61} className='absolute left-[100%] max-[480px]:left-[70%] max-[480px]:top-[100%]' />
        </button>
        </Link>
      </div>
      <div className="hidden lg:flex justify-center items-center relative w-[462px] h-[482px] mt-[90px]">
        <Image className="z-20 right-[58px] absolute" src={Phone} alt="app-display" height={600} width={290} />
        <span className="w-[384px] h-[379px] rounded-[500px] bg-[#DBE7F5] block absolute right-0 z-10"></span>
        <span className="w-[60px] h-[60px] rounded-[500px] bg-[#5151F4] block absolute right-[9px] top-[65px] z-0"></span>
        <div className="w-[360px] rounded-2xl shadow-[0_20px_40px_0_#00000040] absolute bg-white z-30 bottom-[60px] left-0 flex gap-[10px]">
          <div className="flex items-center w-[78px]">
            <Image className="border-2 border-solid border-white rounded-full h-9 w-9 absolute left-[16px]" src={Person1} alt="person1" height={36} width={36} />
            <Image className="border-2 border-solid border-white rounded-full h-9 w-9 absolute left-[36px]" src={Person2} alt="person2" height={36} width={36} />
            <Image className="border-2 border-solid border-white rounded-full h-9 w-9 absolute left-[56px]" src={Person3} alt="person3" height={36} width={36} />
          </div>
          <div className="py-[22px] flex gap-2 text-[#1F2937] text-base">
            <Image src={Star} alt="star" width={16} height={16} />
            <span className="font-semibold">5.0</span>
            <span className="opacity-50">(1000+ Değerlendirme)</span>
          </div>
        </div>
        <div className="p-6 rounded-2xl shadow-[0_20px_40px_0_#00000040] bg-white z-20 absolute top-[45px] left-[70px]">
          <Image src={Graph} alt="graph" height={32} width={32} />
        </div>
      </div>
    </div>
  )
}
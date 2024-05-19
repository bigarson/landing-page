import Uber from '@/assets/images/Uber.png';
import Google from '@/assets/images/google.png';
import Microsoft from '@/assets/images/ms.png';
import Shopify from '@/assets/images/shopify.png';
import Spotify from '@/assets/images/spotify.svg';
import Image from "next/image";

export default function Brands() {
  return (
    <div className="section-brands bg-[#5151F408] mt-[128px]" id='brands'>
      <div className='py-[60px] flex items-center justify-center lg:justify-between max-w-[1200px] mx-auto px-4 xl:p-0 flex-wrap lg:flex-nowrap gap-6 lg:gap-0'>
        <Image src={Spotify} height={48} alt="brand" />
        <Image src={Google} height={48} alt="brand" />
        <Image src={Uber} height={48} alt="brand" />
        <Image src={Microsoft} height={48} alt="brand" />
        <Image src={Shopify} height={48} alt="brand" />
      </div>
    </div>
  )
}
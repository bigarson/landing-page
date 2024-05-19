import ForkNKnife from '@/assets/images/forknknife.png';
import Refresh from '@/assets/images/refresh.png';
import Rocket from '@/assets/images/rocket.png';
import Wallet from '@/assets/images/wallet.png';
import Image from "next/image";

export default function features() {
  return (
    <div className="section-features max-w-[1200px] mx-auto py-[100px] px-4 xl:px-0" id='features'>
      <div>
        <p className="text-[#5151F4] text-lg">Özellikler</p>
        <p className="text-[#1F2937] text-4xl leading-[58px] font-semibold">Yeni Nesil Dijital QR Menü Sistemi</p>
      </div>
      <div className="mt-[60px] flex flex-wrap gap-6">
        <div className="bg-[#F7F9FB] p-9 rounded-2xl sm:flex-[calc((100%_-_24px)_/_2)] grow-0 ">
          <div className="bg-[#5151F4] flex justify-center items-center h-[60px] w-[60px] rounded-2xl">
            <Image src={ForkNKnife} alt="forknknife" height={24} width={18} />
          </div>
          <p className="mt-6 font-medium text-[#1F2937] text-2xl">
            Garson Çağırma
          </p>
          <p className="mt-4 opacity-80 text-[#1F2937]">
            Müşteriniz bulunduğu masaya Qr Kodu okutarak garson çağırabilir, bu çağrılar panelinizde sesli ve görüntülü şekilde otomatik belirecektir.
          </p>
        </div>
        <div className="bg-[#F7F9FB] p-9 rounded-2xl sm:flex-[calc((100%_-_24px)_/_2)] grow-0">
          <div className="bg-[#5151F4] flex justify-center items-center h-[60px] w-[60px] rounded-2xl">
            <Image src={Rocket} alt="forknknife" height={24} width={24} />
          </div>
          <p className="mt-6 font-medium text-[#1F2937] text-2xl">
            Anında Erişim
          </p>
          <p className="mt-4 opacity-80 text-[#1F2937]">
            Müşteriler, masalarında oturur oturmaz hızlıca menüye erişebilir ve seçimlerini yapabilirler, zamandan tasarruf ederler.
          </p>
        </div>
        <div className="bg-[#F7F9FB] p-9 rounded-2xl sm:flex-[calc((100%_-_24px)_/_2)] grow-0 ">
          <div className="bg-[#5151F4] flex justify-center items-center h-[60px] w-[60px] rounded-2xl">
            <Image src={Refresh} alt="forknknife" height={22} width={28} />
          </div>
          <p className="mt-6 font-medium text-[#1F2937] text-2xl">
            Kolay Güncelleme
          </p>
          <p className="mt-4 opacity-80 text-[#1F2937]">
            Menüdeki değişiklikleri anında ve kolayca yapabilir, mevsimsel veya günlük özel teklifleri hızlıca müşterilere sunabilirsiniz.
          </p>
        </div>
        <div className="bg-[#F7F9FB] p-9 rounded-2xl sm:flex-[calc((100%_-_24px)_/_2)] grow-0 ">
          <div className="bg-[#5151F4] flex justify-center items-center h-[60px] w-[60px] rounded-2xl">
            <Image src={Wallet} alt="forknknife" height={24} width={27} />
          </div>
          <p className="mt-6 font-medium text-[#1F2937] text-2xl">
            Maliyet ve Zamandan Tasarruf Edin!
          </p>
          <p className="mt-4 opacity-80 text-[#1F2937]">
            Her işletme sahibi maliyetleri efektif bir biçimde düşürmek ister. QR menülerimiz sayesinde baskı maliyetlerini bitirirken hızlı güncelleme özelliğiyle zaman kazanın.
          </p>
        </div>
      </div>
    </div>
  )
}
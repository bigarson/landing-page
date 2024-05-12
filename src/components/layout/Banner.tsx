export default function Banner() {
  return (

    <div className="section-banner max-w-[1200px] mx-auto py-[100px]">
      <div className="bg-[#5151F4] rounded-2xl w-full flex justify-between py-[122px] px-[79px] relative overflow-hidden">
        <p className="font-medium text-5xl text-white  leading-[64px] flex-grow-0 flex-[35%] z-50">Başlamaya Hazır Mısınız?</p>
        <span className="absolute left-[-36px] top-[-90px] w-[464px] h-[555px] rounded-[300px] bg-[linear-gradient(177.26deg,_#5151F4_10.7%,_#807AFF_103.87%)] rotate-90 z-30"></span>
        <span className="absolute left-[79px] top-[-90px] w-[464px] h-[555px] rounded-[300px] bg-[linear-gradient(177.26deg,_#5151F4_10.7%,_#807AFF_103.87%)] rotate-90 z-20"></span>
        <span className="absolute left-[213px] top-[-90px] w-[464px] h-[555px] rounded-[300px] bg-[linear-gradient(177.26deg,_#5151F4_10.7%,_#807AFF_103.87%)] rotate-90"></span>
        <div className="text-center">
          <p className="font-medium text-white text-2xl">Şimdi Menünüzü Oluşturun</p>
          <button className="font-semibold text-white rounded-2xl bg-[#FFFFFF33] shadow-[0_4px_24px_0_#5151F41A] mt-6 py-4 px-[60px]">
            QR Menü Oluştur
          </button>
        </div>
      </div>
    </div>
  )
}
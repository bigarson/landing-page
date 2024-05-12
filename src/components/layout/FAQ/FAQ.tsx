import CaretDown from "@/assets/images/caret-down.svg";
import Image from "next/image";
import './FAQ.scss'

export default function FAQ() {
  return (
    <div className="section-features max-w-[1200px] mx-auto py-[100px]" id="faq">
      <div>
        <p className="text-[#5151F4] text-lg">Sıkça Sorulan Sorular</p>
        <p className="text-[#1F2937] text-4xl leading-[58px] font-semibold">Daha Fazlası için Bizimle İletişime Geçebilirsiniz</p>
      </div>
      <div className="max-w-[994px] text-center m-auto mt-[80px] accordion">
        <input type="radio" id="accordion-none" name="accordion" className="hidden" defaultChecked />

        {/* FAQ 1 */}
        <div className="border-y border-[#6969843d]">
          {/* Radio button to open the section */}
          <input type="radio" id="faq-1" name="accordion" className="hidden peer" />

          {/* Label for toggling the accordion */}
          <label htmlFor="faq-1" className="flex justify-between w-full p-10 cursor-pointer group">
            <span className="font-semibold text-2xl text-[#1F2937]">
              Restoranlar için QR kodlu menü nedir?
            </span>
            <span className="rounded-full h-12 w-12 flex justify-center items-center">
              <Image src={CaretDown} alt="caret-up" width={12} height={7.5} />
            </span>
          </label>

          {/* Content that shows/hides based on the radio state */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96 px-10 peer-checked:pb-7 text-left text-base text-[#696984]">
            Restoranlar için QR kod menüsü, müşterilerin menü öğelerini görüntülemek için akıllı telefonlarıyla tarayabilecekleri bir hızlı yanıt (QR) kodu aracılığıyla erişilebilen dijital bir menüdür.
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="border-y border-[#6969843d]">
          {/* Radio button to open the section */}
          <input type="radio" id="faq-2" name="accordion" className="hidden peer" />

          {/* Label for toggling the accordion */}
          <label htmlFor="faq-2" className="flex justify-between w-full p-10 cursor-pointer">
            <span className="font-semibold text-2xl text-[#1F2937]">
              QR kodlu menüler restoranlarda nasıl çalışır?
            </span>

            <span className="peer-checked:bg-[#1F2937] peer-checked:text-white peer-checked:rotate-180 rounded-full h-12 w-12 flex justify-center items-center">
              <Image src={CaretDown} alt="caret-up" width={12} height={7.5} />
            </span>
          </label>

          {/* Content that shows/hides based on the radio state */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96 px-10 peer-checked:pb-7 text-left text-base text-[#696984]">
            Restoranlar için QR kod menüsü, müşterilerin menü öğelerini görüntülemek için akıllı telefonlarıyla tarayabilecekleri bir hızlı yanıt (QR) kodu aracılığıyla erişilebilen dijital bir menüdür.
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="border-y border-[#6969843d]">
          {/* Radio button to open the section */}
          <input type="radio" id="faq-3" name="accordion" className="hidden peer" />

          {/* Label for toggling the accordion */}
          <label htmlFor="faq-3" className="flex justify-between w-full p-10 cursor-pointer">
            <span className="font-semibold text-2xl text-[#1F2937]">
              QR kod menüleri güvenli ve emniyetli mi?
            </span>

            <span className="peer-checked:bg-[#1F2937] peer-checked:text-white peer-checked:rotate-180 rounded-full h-12 w-12 flex justify-center items-center">
              <Image src={CaretDown} alt="caret-up" width={12} height={7.5} />
            </span>
          </label>

          {/* Content that shows/hides based on the radio state */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96 px-10 peer-checked:pb-7 text-left text-base text-[#696984]">
            Restoranlar için QR kod menüsü, müşterilerin menü öğelerini görüntülemek için akıllı telefonlarıyla tarayabilecekleri bir hızlı yanıt (QR) kodu aracılığıyla erişilebilen dijital bir menüdür.
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="border-y border-[#6969843d]">
          {/* Radio button to open the section */}
          <input type="radio" id="faq-4" name="accordion" className="hidden peer" />

          {/* Label for toggling the accordion */}
          <label htmlFor="faq-4" className="flex justify-between w-full p-10 cursor-pointer">
            <span className="font-semibold text-2xl text-[#1F2937]">
              Restoranım için nasıl QR kod menüsü oluşturabilirim?
            </span>

            <span className="peer-checked:bg-[#1F2937] peer-checked:text-white peer-checked:rotate-180 rounded-full h-12 w-12 flex justify-center items-center">
              <Image src={CaretDown} alt="caret-up" width={12} height={7.5} />
            </span>
          </label>

          {/* Content that shows/hides based on the radio state */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96 px-10 peer-checked:pb-7 text-left text-base text-[#696984]">
            Restoranlar için QR kod menüsü, müşterilerin menü öğelerini görüntülemek için akıllı telefonlarıyla tarayabilecekleri bir hızlı yanıt (QR) kodu aracılığıyla erişilebilen dijital bir menüdür.
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="border-y border-[#6969843d]">
          {/* Radio button to open the section */}
          <input type="radio" id="faq-5" name="accordion" className="hidden peer" />

          {/* Label for toggling the accordion */}
          <label htmlFor="faq-5" className="flex justify-between w-full p-10 cursor-pointer">
            <span className="font-semibold text-2xl text-[#1F2937]">
              Restoranlarda QR kodlu menü kullanmanın faydaları nelerdir?
            </span>

            <span className="peer-checked:bg-[#1F2937] peer-checked:text-white peer-checked:rotate-180 rounded-full h-12 w-12 flex justify-center items-center">
              <Image src={CaretDown} alt="caret-up" width={12} height={7.5} />
            </span>
          </label>

          {/* Content that shows/hides based on the radio state */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96 px-10 peer-checked:pb-7 text-left text-base text-[#696984]">
            Restoranlar için QR kod menüsü, müşterilerin menü öğelerini görüntülemek için akıllı telefonlarıyla tarayabilecekleri bir hızlı yanıt (QR) kodu aracılığıyla erişilebilen dijital bir menüdür.
          </div>
        </div>

        {/* FAQ 6 */}
        <div className="border-y border-[#6969843d]">
          {/* Radio button to open the section */}
          <input type="radio" id="faq-6" name="accordion" className="hidden peer" />

          {/* Label for toggling the accordion */}
          <label htmlFor="faq-6" className="flex justify-between w-full p-10 cursor-pointer">
            <span className="font-semibold text-2xl text-[#1F2937]">
              Bir QR kod menüsünde hangi bilgiler yer almalıdır?
            </span>

            <span className="peer-checked:bg-[#1F2937] peer-checked:text-white peer-checked:rotate-180 rounded-full h-12 w-12 flex justify-center items-center">
              <Image src={CaretDown} alt="caret-up" width={12} height={7.5} />
            </span>
          </label>

          {/* Content that shows/hides based on the radio state */}
          <div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-96 px-10 peer-checked:pb-7 text-left text-base text-[#696984]">
            Restoranlar için QR kod menüsü, müşterilerin menü öğelerini görüntülemek için akıllı telefonlarıyla tarayabilecekleri bir hızlı yanıt (QR) kodu aracılığıyla erişilebilen dijital bir menüdür.
          </div>
        </div>

      </div>
    </div>
  )
}
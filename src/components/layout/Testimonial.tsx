"use client"

import ArrowLeft from '@/assets/images/arrow-left.svg';
import ArrowRight from '@/assets/images/arrow-right.svg';
import Image from "next/image";
import Testimony1 from "@/assets/images/testimony1.jpeg"
import { useRef } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      "name": "Anıl Esen",
      "title": "İşletme Yöneticisi",
      "testimony": "Bigarson ile vizyonum kolayca hayat buldu. Hem samimi hem de profesyonel yaklaşımlarıyla süreç adeta bir esinti gibi geçti. Yaratıcılık akıp gitti ve sonuçlar beklentilerimin ötesindeydi.",
      "image": Testimony1
    },
    {
      "name": "Ali Yılmaz",
      "title": "Restoran Sahibi",
      "testimony": "Bigarson sayesinde müşterilerime daha iyi hizmet sunabiliyorum. QR menü uygulaması sayesinde siparişler hızlanıyor ve müşteri memnuniyeti artıyor.",
      "image": Testimony1
    },
    {
      "name": "Ayşe Kaya",
      "title": "Şef",
      "testimony": "Bigarson ile menü yönetimi çok daha kolay hale geldi. Her zaman güncel kalmak ve yenilikleri müşterilere sunmak artık çok daha pratik.",
      "image": Testimony1
    },
    {
      "name": "Mehmet Demir",
      "title": "Müşteri",
      "testimony": "Bigarson sayesinde restoran deneyimim çok daha keyifli hale geldi. Menüyü görmek için QR kodunu taratmak hem hızlı hem de ilginç bir deneyim sunuyor.",
      "image": Testimony1
    },
    {
      "name": "Zeynep Tekin",
      "title": "Garson",
      "testimony": "Bigarson, işimi yapmayı çok daha kolay hale getirdi. Artık müşterilere menüleri fiziksel olarak vermekle uğraşmıyorum, sadece QR kodunu taratmaları yeterli oluyor.",
      "image": Testimony1
    }
  ]
  

  const testimonialRef = useRef<HTMLDivElement>(null)

  function moveTestimonial(direction: 1 | -1) {
    const container = testimonialRef.current;
    if (container) {
      const testimonialWidth = 510; // As given in min-w-[486px] from your styling
      const padding = 120; // Extra padding to apply at the end
      const numTestimonials = testimonials.length;
      const containerWidth = container.clientWidth;
      const maxScroll = container.scrollWidth - containerWidth;
      const currentScroll = container.scrollLeft;

      let newScrollPosition = currentScroll + (testimonialWidth * direction);

      // Handle scrolling towards the right end
      if (direction === 1) {
        if (newScrollPosition >= maxScroll - testimonialWidth) {
          newScrollPosition = maxScroll + padding; // Add padding when reaching the last testimonial
        }
      } else if (direction === -1) {
        // Handle scrolling towards the left end
        newScrollPosition = Math.max(0, newScrollPosition); // Ensure we do not scroll past the start
      }

      // Perform the scroll
      container.scroll({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  }


  return (

    <div className="section-feedback py-[100px] flex flex-col justify-start max-w-[1200px] mx-auto">
      <div className="flex justify-between">
        <div>
          <p className="text-[#5151F4] text-lg">Kullanıcı Yorumları</p>
          <p className="text-[#1F2937] text-4xl leading-[58px] font-semibold">Kullanıcılarımız Neler Söyledi?</p>
        </div>
        <div className="flex gap-6">
          <button className="h-[60px] w-[60px] rounded-full bg-[#F7F9FB] flex justify-center items-center" onClick={() => moveTestimonial(-1)}>
            <Image src={ArrowLeft} alt="arrow-left" width={16} height={14} />
          </button>
          <button className="h-[60px] w-[60px] rounded-full bg-[#5151F4] flex justify-center items-center" onClick={() => moveTestimonial(1)}>
            <Image src={ArrowRight} alt="arrow-right" width={16} height={14} />
          </button>
        </div>
      </div>
      <div className="flex flex-nowrap gap-6 overflow-hidden mt-[50px] w-[calc(100vw_-_120px)]" ref={testimonialRef}>
        {
          testimonials.map((testimony, key) =>
            <div key={key} className={`grow-0 min-w-[486px] rounded-2xl p-10 ${key % 2 === 0 ? 'bg-[#F7F9FB]' : 'bg-[#5151F4] text-white'}`}>
              <div className='flex gap-6'>
                {testimony.image && <Image src={testimony.image} alt={testimony.name} width={60} height={60} className='rounded-full h-[60px] w-[60px] object-cover' />}
                <div className='flex flex-col'>
                  <span className='font-semibold text-[28px]'>
                    {testimony.name}
                  </span>
                  <span className={`text-lg ${key % 2 === 0 && 'opacity-80'}`}>
                    {testimony.title}
                  </span>
                </div>
              </div>
              <p className={`mt-6 text-lg ${key % 2 === 0 && 'opacity-80'}`}>
                {testimony.testimony}
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}
"use client"

import ArrowLeft from '@/assets/images/arrow-left.svg';
import ArrowRight from '@/assets/images/arrow-right.svg';
import Image from "next/image";
import Testimony1 from "@/assets/images/testimony1.jpeg"
import { useRef } from 'react';

export default function Testimonial() {
  const testimonials = [
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
    },
    {
      name: 'Amelia Joseph',
      image: Testimony1,
      title: 'Chief Manager',
      testimony: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.'
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
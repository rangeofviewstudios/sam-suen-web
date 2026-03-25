'use client'

import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: unknown[]) { return twMerge(clsx(inputs)) }

interface ThreeDMarqueeProps {
  images?: string[]
  className?: string
}

const ThreeDMarquee = ({ images = [], className }: ThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(images.length / 3)
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return images.slice(start, start + chunkSize)
  })

  return (
    <div
      className={cn('relative mx-auto block h-[380px] md:h-[560px] w-full overflow-hidden', className)}
      style={{
        maskImage: [
          'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          'linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%)',
        ].join(', '),
        WebkitMaskImage: [
          'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          'linear-gradient(to right,  transparent 0%, black 18%, black 82%, transparent 100%)',
        ].join(', '),
        maskComposite: 'intersect',
        WebkitMaskComposite: 'destination-in',
      }}
    >
      <div className='flex size-full items-center justify-center'>
        <div className='aspect-square w-[480px] md:w-[720px] shrink-0 scale-[1.35]'>
          <div
            style={{
              transform: 'rotateX(45deg) rotateY(0deg) rotateZ(45deg)',
              transformStyle: 'preserve-3d',
            }}
            className='relative top-0 right-[-55%] grid size-full origin-top-left grid-cols-3 gap-5'
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? 60 : -60 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                key={colIndex + 'marquee'}
                className='flex flex-col items-start gap-6'
              >
                {subarray.map((src, imageIndex) => (
                  <div className='relative' key={imageIndex + src}>
                    <img
                      className='aspect-[3/4] h-full w-full rounded-lg object-cover object-top select-none'
                      src={src}
                      draggable={false}
                      alt={`Sam Suen ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDMarquee

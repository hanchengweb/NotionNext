import FlipCard from '@/components/FlipCard'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CONFIG from '../config'

/**
 * 社交卡片
 */
export default function TouchMeCard() {
  if (!JSON.parse(siteConfig('HEO_SOCIAL_CARD', null, CONFIG))) {
    return <></>
  }
  return (
    <div className='min-h-fit'>
      <FlipCard
        className='md:h-16 justify-center font-light'
        frontNode={
          <div id='flip-card-front' className='justify-center items-center flex h-full rounded-md w-full'>
            <div className='rounded-md flex justify-between items-center bg-[#388e3c] dark:bg-yellow-600 text-white px-4 py-3 w-full'>
              <div className='font-medium'>{siteConfig('HEO_SOCIAL_CARD_TITLE_1', null, CONFIG)}</div>
              <div className='ml-2 mr-0'>
                <div>{siteConfig('HEO_SOCIAL_CARD_TITLE_2', null, CONFIG)}</div>
              </div>
            </div>
          </div>
        }
        backNode={
          <div id='flip-card-back' className='text-center items-center flex justify-center w-full h-full'>
            <div
              onClick={() => window.open(social?.url)}
              className='cursor-pointer px-4 py-3 border rounded-md bg-[#388e3c] dark:bg-yellow-600 dark:border-gray-600 text-white w-full flex justify-between items-center'>
              <div>
                <Link href={siteConfig('HEO_SOCIAL_CARD_URL', null, CONFIG)}>
                  <div className='text-sm'>{siteConfig('HEO_SOCIAL_CARD_TITLE_3', null, CONFIG)}</div>
                </Link>
              </div>
              <div>
                <i className='fab fa-telegram text-lg' />
              </div>
            </div>
          </div>
        } />
    </div>
  )
}

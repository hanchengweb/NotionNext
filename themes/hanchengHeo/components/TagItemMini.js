import { HashTag } from '@/components/HeroIcons'
import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={
        'cursor-pointer inline-block hover:text-white hover:bg-[#2a9d8f] dark:hover:bg-[#40b3a2] px-2 py-1 rounded-2xl dark:text-white duration-200 text-sm whitespace-nowrap '
      }>
      <div className='font-light flex items-center'>
        <HashTag className='stroke-2 mr-0.5 w-3 h-3' />{' '}
        {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
      </div>
    </Link>
  )
}

export default TagItemMini

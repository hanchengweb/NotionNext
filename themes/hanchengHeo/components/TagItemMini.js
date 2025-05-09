import { HashTag } from '@/components/HeroIcons'
import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={
        'cursor-pointer inline-block hover:text-white hover:bg-green-600 dark:hover:bg-yellow-600 px-2 py-1 rounded-md dark:text-gray-200 text-gray-600 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 duration-200 text-xs whitespace-nowrap mr-2'
      }>
      <div className='font-light flex items-center'>
        <HashTag className='stroke-2 mr-1 w-3 h-3' />
        {tag.name}
      </div>
    </Link>
  )
}

export default TagItemMini

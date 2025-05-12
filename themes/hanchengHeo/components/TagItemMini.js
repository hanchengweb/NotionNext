import { HashTag } from '@/components/HeroIcons'
import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className='inline-block border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:text-white hover:bg-green-600 dark:hover:bg-yellow-600 rounded text-[10px] px-1.5 py-0 mr-1 mb-1 h-5 overflow-hidden leading-5'>
      <span className='flex items-center'>
        <HashTag className='w-2.5 h-2.5 mr-0.5' />
        {tag.name}
      </span>
    </Link>
  )
}

export default TagItemMini

import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
export default function LatestPostsGroupMini({ latestPosts, siteInfo }) {
  // 获取当前路径
  const currentPath = useRouter().asPath
  const { locale } = useGlobal()
  const SUB_PATH = siteConfig('SUB_PATH', '')

  return latestPosts ? (
    <>
      <div className='mb-3 px-1 flex flex-nowrap justify-between items-center'>
        <div className='font-bold'>
          <i className='mr-2 fas fas fa-history'></i>
          {locale.COMMON.LATEST_POSTS}
        </div>
      </div>
      <div className='space-y-3'>
        {latestPosts.map(post => {
          const selected = currentPath === `${SUB_PATH}/${post.slug}`
          const headerImage = post?.pageCoverThumbnail
            ? post.pageCoverThumbnail
            : siteInfo?.pageCover

          return (
            <Link
              key={post.id}
              title={post.title}
              href={post?.href}
              passHref
              className={`flex items-center border rounded-lg overflow-hidden hover:border-green-600 dark:hover:border-yellow-600 group shadow-sm hover:shadow-md transition-all duration-200 ${selected ? 'border-green-600 dark:border-yellow-600' : 'border-gray-200 dark:border-gray-700'}`}>
              <div className='w-16 h-16 overflow-hidden flex-shrink-0'>
                <LazyImage
                  src={`${headerImage}`}
                  className='object-cover w-full h-full group-hover:scale-105 group-hover:brightness-90 transition-all duration-500'
                />
              </div>
              <div className='flex flex-col px-3 py-2 w-full overflow-hidden'>
                <div className={`${selected ? 'text-green-500 dark:text-yellow-500' : 'dark:text-gray-200'} text-sm line-clamp-1 font-medium group-hover:text-green-600 dark:group-hover:text-yellow-600`}>
                  {post.title}
                </div>
                <div className='text-gray-400 text-xs mt-1'>
                  <i className='fa-regular fa-calendar mr-1'></i> {post.lastEditedDay}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  ) : null
}

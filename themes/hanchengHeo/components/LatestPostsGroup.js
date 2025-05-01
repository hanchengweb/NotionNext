import LazyImage from '@/components/LazyImage'
import Link from 'next/link'

/**
 * 最新文章列表
 * @param posts 所有文章数据
 * @param sliceCount 截取展示的数量 默认6
 * @constructor
 */
const LatestPostsGroup = ({ latestPosts, siteInfo }) => {
  // 获取当前路径

  if (!latestPosts) {
    return <></>
  }

  return (
    <div className='space-y-4'>
      {latestPosts.map(post => {
        const headerImage = post?.pageCoverThumbnail
          ? post.pageCoverThumbnail
          : siteInfo?.pageCover

        return (
          <Link
            key={post.id}
            passHref
            title={post.title}
            href={post?.href}
            className='flex flex-row items-center border rounded-lg bg-white dark:bg-[#1e1e1e] overflow-hidden hover:border-green-600 dark:hover:border-yellow-600 group shadow-sm hover:shadow-md transition-all duration-200'>
            <div className='w-20 h-20 overflow-hidden'>
              <LazyImage
                src={`${headerImage}`}
                className='object-cover w-full h-full group-hover:scale-105 group-hover:brightness-90 transition-all duration-500'
              />
            </div>

            <div className='flex flex-col py-2 px-3 w-full'>
              <div className='font-bold overflow-x-hidden dark:text-white group-hover:text-green-600 line-clamp-2 text-sm mb-1'>
                {post.title}
              </div>
              <div className='text-xs text-gray-500 dark:text-gray-400'>
                <i className='fa-regular fa-calendar mr-1'></i> {post.publishDay}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default LatestPostsGroup

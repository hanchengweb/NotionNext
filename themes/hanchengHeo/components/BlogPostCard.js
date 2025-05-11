import LazyImage from '@/components/LazyImage'
import NotionIcon from './NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview =
    siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover =
    siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail &&
    !showPreview

  const POST_TWO_COLS = siteConfig('HEO_HOME_POST_TWO_COLS', true, CONFIG)
  const COVER_HOVER_ENLARGE = siteConfig(
    'HEO_POST_LIST_COVER_HOVER_ENLARGE',
    true,
    CONFIG
  )

  return (
    <article
      className='wow fadeInUp mb-4'>
      <div
        data-wow-delay='.2s'
        className='border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-row h-40 md:h-48 group w-full dark:border-gray-600 hover:border-green-600 dark:hover:border-yellow-600 duration-300 transition-colors justify-between overflow-hidden rounded-lg shadow-sm hover:shadow-md'>
        {/* 图片封面 */}
        {showPageCover && (
          <Link href={post?.href} passHref legacyBehavior>
            <div
              className='w-40 md:w-56 lg:w-64 overflow-hidden cursor-pointer select-none'>
              <LazyImage
                priority={index === 0}
                src={post?.pageCoverThumbnail}
                alt={post?.title}
                className='h-full w-full object-cover group-hover:scale-105 group-hover:brightness-90 transition-all duration-500 ease-in-out' 
              />
            </div>
          </Link>
        )}

        {/* 文字区块 */}
        <div
          className='flex p-4 md:p-5 flex-col justify-between w-full'>
          <header className='mb-2 md:mb-3'>
            {/* 分类 */}
            {post?.category && (
              <div
                className='flex mb-1 md:mb-2 items-center text-xs text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-yellow-500'>
                <Link
                  passHref
                  href={`/category/${post.category}`}
                  className='cursor-pointer font-normal menu-link flex items-center'>
                  <i className='fas fa-folder mr-1'></i> {post.category}
                </Link>
              </div>
            )}

            {/* 标题和图标 */}
            <Link
              href={post?.href}
              passHref
              className='group-hover:text-green-700 dark:hover:text-yellow-700 dark:group-hover:text-yellow-600 text-black dark:text-gray-100 line-clamp-2 replace cursor-pointer text-xl md:text-2xl font-bold leading-tight'>
              <div className="flex items-center">
                {siteConfig('POST_TITLE_ICON') && (
                  <NotionIcon
                    icon={post.pageIcon}
                    className="heo-icon w-5 h-5 mr-2 flex-shrink-0" 
                  />
                )}
                <span className='menu-link'>{post.title}</span>
              </div>
            </Link>
          </header>

          {/* 摘要 */}
          {(!showPreview || showSummary) && (
            <main className='line-clamp-2 md:line-clamp-3 replace text-gray-700 dark:text-gray-300 text-sm md:text-base font-light leading-relaxed mb-3 md:mb-4'>
              {post.summary}
            </main>
          )}

          <div className='flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center'>
            <div className='flex items-center text-xs text-gray-500 dark:text-gray-400'>
              <div className='flex items-center mr-4'>
                <i className='fa-regular fa-calendar mr-1'></i> {post.publishDay}
              </div>
              {post.readTime && (
                <div className='flex items-center'>
                  <i className='fa-regular fa-clock mr-1'></i> {post.readTime}分钟
                </div>
              )}
            </div>
            <div className='text-xs flex mt-2 md:mt-0 flex-wrap'>
              {post.tagItems?.slice(0, 3).map(tag => (
                <TagItemMini key={tag.name} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard

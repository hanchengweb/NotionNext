import LazyImage from '@/components/LazyImage'
import NotionIcon from './NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'
import { useGlobal } from '@/lib/global'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const { isDarkMode } = useGlobal()
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
      className={` ${COVER_HOVER_ENLARGE} ? ' hover:transition-all duration-150' : ''}`}>
      <div
        data-wow-delay='.2s'
        className={
          (POST_TWO_COLS ? '2xl:h-96 2xl:flex-col' : '') +
          ' wow fadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-80 group w-full dark:border-gray-600 hover:border-[#2a9d8f] dark:hover:border-[#40b3a2] duration-300 transition-colors justify-between overflow-hidden rounded-xl'
        }>
        {/* 图片封面 */}
        {showPageCover && (
          <Link href={post?.href} passHref legacyBehavior>
            <div
              className={
                (POST_TWO_COLS ? ' 2xl:w-full' : '') +
                ' h-40 w-full overflow-hidden cursor-pointer select-none'
              }>
              <LazyImage
                priority={index === 0}
                src={post?.pageCoverThumbnail}
                alt={post?.title}
                className='h-full w-full object-cover group-hover:scale-105 group-hover:brightness-75 transition-all duration-500 ease-in-out' //宽高都调整为自适应,保证封面居中
              />
            </div>
          </Link>
        )}

        {/* 文字区块 */}
        <div
          className={
            (POST_TWO_COLS ? '2xl:p-4 2xl:h-48 2xl:w-full' : '') +
            ' flex p-4 flex-col justify-between h-full w-full'
          }>
          <div>
            {/* 分类 */}
            {post?.category && (
              <div
                className={`flex mb-2 items-center ${showPreview ? 'justify-center' : 'justify-start'} flex-wrap dark:text-gray-300 text-gray-600 hover:text-[#2a9d8f] dark:hover:text-[#57c4b5]`}>
                <Link
                  passHref
                  href={`/category/${post.category}`}
                  className='cursor-pointer text-sm font-normal menu-link '>
                  {post.category}
                </Link>
              </div>
            )}

            {/* 标题和图标 */}
            <Link
              href={post?.href}
              passHref
              className={
                'group-hover:text-[#2a9d8f] dark:hover:text-[#57c4b5] dark:group-hover:text-[#57c4b5] text-black dark:text-gray-100 line-clamp-2 replace cursor-pointer text-lg font-extrabold leading-tight'
              }>
              {siteConfig('POST_TITLE_ICON') && (
                <NotionIcon
                icon={post.pageIcon}
                className="heo-icon w-6 h-6 mr-1 align-middle transform translate-y-[-8%]" // 专门为 Heo 主题的图标设置样式
              />
              )}
              <span className='menu-link '>{post.title}</span>
            </Link>

            {/* 摘要 */}
            {(!showPreview || showSummary) && (
              <div className='line-clamp-2 replace text-gray-700 dark:text-gray-300 text-sm font-light leading-relaxed mt-4'>
                {post.summary}
              </div>
            )}
          </div>

          {/* 底部 */}
          <div className='mt-4 flex justify-between'>
            <div className='flex-nowrap overflow-x-auto'>
              {post.tagItems?.map(tag => (
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

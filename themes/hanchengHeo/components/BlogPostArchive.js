import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

/**
 * 博客归档列表
 * @param posts 所有文章
 * @param archiveTitle 归档标题
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostArchive = ({ posts = [], archiveTitle, siteInfo }) => {
  if (!posts || posts.length === 0) {
    return <></>
  } else {
    return (
      <div className='mb-8'>
        <div className='pb-4 text-xl font-bold dark:text-gray-300' id={archiveTitle}>
          {archiveTitle}
        </div>
        <ul className='space-y-6'>
          {posts?.map(post => {
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
            return (
              <Link
                key={post.id}
                title={post.title}
                href={`${siteConfig('SUB_PATH', '')}/${post.slug}`}
                passHref
                className='cursor-pointer flex flex-row h-40 md:h-48 group w-full dark:border-gray-600 hover:border-green-600 dark:hover:border-yellow-600 duration-300 transition-colors justify-between border rounded-lg bg-white dark:bg-[#1e1e1e] overflow-hidden shadow-sm hover:shadow-md'>
                {/* 图片封面 */}
                {showPageCover && (
                  <div className='w-40 md:w-56 lg:w-64 overflow-hidden'>
                      <LazyImage
                      className='object-cover w-full h-full group-hover:scale-105 group-hover:brightness-90 transition-all duration-500'
                        src={post?.pageCoverThumbnail}
                      />
                  </div>
                )}

                {/* 文字区块 */}
                <div className='flex px-4 md:p-5 py-4 flex-col justify-between w-full'>
                  {/* 分类 */}
                  {post?.category && (
                    <div className='flex mb-1 items-center text-xs text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-yellow-500'>
                      <i className='fas fa-folder mr-1'></i> {post.category}
                    </div>
                  )}
                  
                  {/* 标题 */}
                  <div className='group-hover:text-green-700 group-hover:dark:text-green-400 text-black dark:text-gray-100 dark:group-hover:text-yellow-600 line-clamp-1 replace text-xl md:text-2xl font-bold mb-2'>
                    {post.title}
                  </div>
                  
                  {/* 摘要 */}
                  <div className='line-clamp-3 replace text-gray-700 dark:text-gray-300 text-sm md:text-base font-light leading-relaxed mb-3'>
                    {post.summary}
                  </div>

                  <div className='md:flex flex-wrap justify-between flex items-center'>
                    <div className='flex items-center text-xs text-gray-500 dark:text-gray-400'>
                      <div className='flex items-center mr-4'>
                        <i className='fa-regular fa-calendar mr-1'></i> {post.lastEditedDay}
                      </div>
                      {post.readTime && (
                        <div className='flex items-center'>
                          <i className='fa-regular fa-clock mr-1'></i> {post.readTime}分钟
                        </div>
                      )}
                    </div>

                    {/* 标签 */}
                    <div className='text-xs flex mt-2 md:mt-0'>
                      {post.tagItems && post.tagItems.length > 0 && (
                        post.tagItems.slice(0, 3).map(tag => (
                          <TagItemMini key={tag.name} tag={tag} />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BlogPostArchive

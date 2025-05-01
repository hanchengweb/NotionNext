import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { getListByPage } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import CONFIG from '../config'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'

/**
 * 博客列表滚动分页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListScroll = ({
  posts = [],
  currentSearch,
  showSummary = siteConfig('HEO_POST_LIST_SUMMARY', null, CONFIG),
  siteInfo
}) => {
  const { locale, NOTION_CONFIG } = useGlobal()
  const [page, updatePage] = useState(1)
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const postsToShow = getListByPage(posts, page, POSTS_PER_PAGE)

  let hasMore = false
  if (posts) {
    const totalCount = posts.length
    hasMore = page * POSTS_PER_PAGE < totalCount
  }

  const handleGetMore = () => {
    if (!hasMore) return
    updatePage(page + 1)
  }

  // 监听滚动自动分页加载
  const scrollTrigger = () => {
    requestAnimationFrame(() => {
      const scrollS = window.scrollY + window.outerHeight
      const clientHeight = targetRef
        ? targetRef.current
          ? targetRef.current.clientHeight
          : 0
        : 0
      if (scrollS > clientHeight + 100) {
        handleGetMore()
      }
    })
  }

  // 监听滚动
  useEffect(() => {
    window.addEventListener('scroll', scrollTrigger)
    return () => {
      window.removeEventListener('scroll', scrollTrigger)
    }
  })

  const targetRef = useRef(null)
  // 始终使用单列布局
  if (!postsToShow || postsToShow.length === 0) {
    return <BlogPostListEmpty currentSearch={currentSearch} />
  } else {
    return (
      <div id='container' ref={targetRef} className='w-full px-2 md:px-4'>
        {/* 文章列表 */}
        <div className='space-y-6 my-6'>
          {postsToShow.map(post => (
            <BlogPostCard
              key={post.id}
              post={post}
              showSummary={showSummary}
              siteInfo={siteInfo}
            />
          ))}
        </div>

        {/* 更多按钮 */}
        <div>
          <div
            onClick={() => {
              handleGetMore()
            }}
            className='w-full my-6 py-4 text-center cursor-pointer rounded-xl dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'>
            {hasMore ? (
              <span className='flex items-center justify-center'>
                <i className='fas fa-sync-alt mr-2'></i> {locale.COMMON.MORE}
              </span>
            ) : (
              <span className='text-gray-400'>{locale.COMMON.NO_MORE}</span>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BlogPostListScroll

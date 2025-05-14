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
  const scrollTrigger = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        handleGetMore()
      }
    })

    const container = scrollTrigger.current
    if (container) {
      observer.observe(container)
  }

    return () => {
      observer.disconnect()
    }
  }, [scrollTrigger, hasMore, handleGetMore])

  // 监听搜索输入框变化
  useEffect(() => {
    updatePage(1)
  }, [currentSearch])

    return (
    <div id='post-list' className='mt-5 mb-2'>
      <div className='md:px-5'>
        {(!posts || posts.length === 0) && (
          <BlogPostListEmpty currentSearch={currentSearch} />
        )}
        {posts && posts.length > 0 && (
          <>
            <div className='flex flex-wrap space-y-4'>
          {postsToShow.map(post => (
            <BlogPostCard
              key={post.id}
              post={post}
              showSummary={showSummary}
              siteInfo={siteInfo}
            />
          ))}
        </div>
            <div ref={scrollTrigger} />
          <div
              onClick={handleGetMore}
              className={`w-full my-4 ${
                hasMore ? 'visible' : 'hidden'
              } flex justify-center cursor-pointer`}>
              <div className='bg-white dark:bg-[#1e1e1e] dark:text-gray-200 rounded-xl text-xl px-4 py-2 hover:text-[#2a9d8f] dark:hover:text-[#57c4b5] border'>
                {locale.COMMON.MORE}
          </div>
            </div>
          </>
        )}
        </div>
      </div>
    )
}

export default BlogPostListScroll

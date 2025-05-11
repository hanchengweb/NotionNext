/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background: #f8f9fa;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: #6c757d;
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, #495057 70%);
        mask-image: linear-gradient(to top, transparent 5%, #495057 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      // 修复顶部导航菜单样式
      #nav-mobile a, #nav-mobile .menu-link {
        color: inherit;
        text-decoration: none;
        transition: all 0.2s;
        padding: 0.35rem 0.75rem !important;
        border-radius: 4px;
        display: inline-block;
      }
      
      #nav-mobile a:hover, #nav-mobile .menu-link:hover {
        background-color: rgba(0,0,0,0.05) !important;
        color: #4CAF50 !important;
      }
      
      .dark #nav-mobile a:hover, .dark #nav-mobile .menu-link:hover {
        background-color: rgba(255,255,255,0.1) !important;
        color: #FFD700 !important;
      }
      
      // 专门修复子菜单样式，增加特异性，并使宽度自适应
      #nav-mobile > div > ul {
        padding: 0.5rem !important;
        min-width: 150px !important;
        width: auto !important;
        white-space: nowrap !important;
      }
      
      #nav-mobile > div > ul > li {
        margin: 0.25rem 0 !important;
        padding: 0 !important;
        background: transparent !important;
      }
      
      #nav-mobile > div > ul > li > a, 
      #nav-mobile > div > ul > li > span {
        display: block !important;
        padding: 0.5rem 0.75rem !important;
        border-radius: 4px !important;
        transition: all 0.2s !important;
        color: inherit !important;
        white-space: nowrap !important;
      }
      
      #nav-mobile > div > ul > li:hover > a,
      #nav-mobile > div > ul > li > a:hover,
      #nav-mobile > div > ul > li:hover > span,
      #nav-mobile > div > ul > li > span:hover {
        background-color: rgba(0,0,0,0.05) !important;
        color: #4CAF50 !important;
      }
      
      .dark #nav-mobile > div > ul > li:hover > a,
      .dark #nav-mobile > div > ul > li > a:hover,
      .dark #nav-mobile > div > ul > li:hover > span,
      .dark #nav-mobile > div > ul > li > span:hover {
        background-color: rgba(255,255,255,0.1) !important;
        color: #FFD700 !important;
      }
      
      // 移动端博客卡片样式优化
      @media (max-width: 767px) {
        article .border {
          flex-direction: column !important;
          height: auto !important;
          margin-bottom: 1.5rem !important;
        }
        
        article .border > div:first-child {
          width: 100% !important;
          height: 180px !important;
        }
        
        article .border > div:last-child {
          width: 100% !important;
          padding: 1rem 1.25rem !important;
        }
        
        // 移动端卡片内部标题样式
        article header {
          margin-bottom: 0.75rem !important;
        }
        
        article .group-hover\:text-green-700 {
          font-size: 1.25rem !important;
          line-height: 1.4 !important;
        }
        
        // 移动端卡片内部摘要
        article main {
          margin-bottom: 0.75rem !important;
          line-height: 1.5 !important;
        }
        
        // 移动端卡片底部信息
        article .md\:flex {
          flex-direction: column !important;
          align-items: flex-start !important;
        }
        
        article .md\:flex > div:last-child {
          margin-top: 0.5rem !important;
        }
      }
      
      // 修复博客列表中图标与标题的对齐
      article .heo-icon {
        vertical-align: middle;
        margin-right: 4px;
        display: inline-flex;
      }
      
      // 改进标签样式，使其更协调，降低高度
      article a[href^="/tag/"] {
        display: inline-block;
        margin-right: 0.5rem;
        margin-bottom: 0.25rem;
        padding: 0.15rem 0.4rem !important;
        font-size: 0.75rem;
        line-height: 1.2;
        border-radius: 3px;
        background-color: rgba(0,0,0,0.03);
        color: #666;
        border: 1px solid rgba(0,0,0,0.1);
        transition: all 0.2s;
        height: auto !important;
      }
      
      article a[href^="/tag/"]:hover {
        background-color: #4CAF50;
        color: white;
        border-color: #4CAF50;
      }
      
      .dark article a[href^="/tag/"] {
        background-color: rgba(255,255,255,0.05);
        color: #ccc;
        border-color: rgba(255,255,255,0.1);
      }
      
      .dark article a[href^="/tag/"]:hover {
        background-color: #FFD700;
        color: #1e1e1e;
        border-color: #FFD700;
      }
      
      // 修复标签内部样式
      article a[href^="/tag/"] div {
        display: flex;
        align-items: center;
        height: auto !important;
      }
      
      article a[href^="/tag/"] svg {
        margin-right: 0.25rem;
        width: 0.75rem;
        height: 0.75rem;
      }
    `}</style>
  )
}

export { Style }

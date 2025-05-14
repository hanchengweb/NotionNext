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
          background-color: #f0f5f4;
        }
  
        // 公告栏中的字体固定白色
        #theme-heo #announcement-content .notion {
          color: white;
        }
  
        ::-webkit-scrollbar-thumb {
          background: rgba(42, 157, 143, 0.5);
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
          -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
          mask-image: linear-gradient(to top, transparent 5%, black 70%);
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
  
        // 主题颜色变更 - 全局覆盖所有蓝色系元素
        #theme-heo .hover\:text-indigo-700:hover,
        #theme-heo .hover\:border-indigo-600:hover,
        #theme-heo .group-hover\:text-indigo-700,
        #theme-heo .group-hover\:border-indigo-600,
        #theme-heo .text-indigo-700,
        #theme-heo .text-indigo-600,
        #theme-heo .hover\:text-indigo-600:hover {
          color: #2a9d8f !important;
          border-color: #2a9d8f !important;
        }
  
        #theme-heo .bg-indigo-600,
        #theme-heo .bg-indigo-500,
        #theme-heo .hover\:bg-indigo-600:hover,
        #theme-heo .hover\:bg-indigo-500:hover {
          background-color: #2a9d8f !important;
        }
  
        // 边框颜色
        #theme-heo .border-indigo-600,
        #theme-heo .border-indigo-500 {
          border-color: #2a9d8f !important;
        }
  
        // 蓝色相关类
        #theme-heo .text-blue-600,
        #theme-heo .text-blue-500, 
        #theme-heo .hover\:text-blue-600:hover,
        #theme-heo .hover\:text-blue-500:hover {
          color: #2a9d8f !important;
        }
  
        #theme-heo .bg-blue-600,
        #theme-heo .bg-blue-500,
        #theme-heo .hover\:bg-blue-600:hover,
        #theme-heo .hover\:bg-blue-500:hover {
          background-color: #2a9d8f !important;
        }
  
        // 暗色模式颜色调整
        .dark #theme-heo .dark\:hover\:text-yellow-600:hover,
        .dark #theme-heo .dark\:hover\:text-yellow-500:hover,
        .dark #theme-heo .dark\:group-hover\:text-yellow-600,
        .dark #theme-heo .dark\:text-yellow-600,
        .dark #theme-heo .dark\:hover\:border-yellow-600:hover,
        .dark #theme-heo .dark\:border-yellow-600 {
          color: #57c4b5 !important;
          border-color: #57c4b5 !important;
        }
  
        // 覆盖特定组件的颜色
        #theme-heo .bg-\[\#4f65f0\],
        #banners #banner-cover,
        #hero .bg-gradient-to-r.from-blue-500,
        .bg-indigo-400 {
          background: #2a9d8f !important;
          background-color: #2a9d8f !important;
        }
  
        // 渐变色覆盖
        #hero .bg-gradient-to-r.from-blue-500.to-blue-400 {
          background-image: linear-gradient(to right, #2a9d8f, #40b3a2) !important;
        }
  
        .dark #theme-heo .bg-\[\#4f65f0\],
        .dark #theme-heo .bg-yellow-600,
        .dark #theme-heo .dark\:bg-yellow-600,
        .dark #theme-heo .dark\:bg-yellow-500,
        .dark #banners #banner-cover {
          background: #40b3a2 !important;
          background-color: #40b3a2 !important;
        }
  
        // 社交卡片背景
        .dark #theme-heo .bg-\[\#4f65f0\].dark\:bg-yellow-600 {
          background-color: #40b3a2 !important;
        }
  
        // 鼠标悬停效果覆盖
        #theme-heo .hover\:scale-110:hover {
          transform: scale(1.1);
        }
  
        // 英雄区域封面遮罩颜色
        #banner-cover.bg-\[\#4259efdd\] {
          background-color: rgba(42, 157, 143, 0.85) !important;
        }
        
        .dark #banner-cover.dark\:bg-\[\#dca846\] {
          background-color: rgba(64, 179, 162, 0.85) !important;
        }
  
        #announcement-content a {
          color: #fafafa !important;
          font-style: italic;
          border-bottom: 0.1em dashed !important;
          padding-bottom: 0.2em;
        }
  
        .dark .prose hr {
          border-color: rgba(125, 125, 125, 0.3);
        }
  
        .shadow-text-md {
          text-shadow: 1px 1px 3px rgb(0 0 0 / 40%);
        }
  
        /* 全局card开关 */
        .notion-switch {
          opacity: 0;
          position: absolute;
        }
  
        .notion-switch:checked + .notion-switch-label {
          background: #2a9d8f;
        }
  
        .notion-switch:checked + .notion-switch-label::after {
          left: calc(100% - 1.5rem);
        }
  
        .notion-switch-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          width: 6rem;
          height: 3rem;
          background: #f0f0f0;
          border-radius: 6rem;
          position: relative;
          transition: background-color 0.2s ease-in-out;
        }
  
        .notion-switch-label::after {
          content: '';
          display: block;
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          margin: 3px;
          background: #fff;
          box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
          transition: 0.2s;
        }
  
        /* 仅有切换 */
  
        .switch-toggle {
          opacity: 0;
          position: absolute;
        }
  
        .switch-toggle-local:checked + .switch-toggle-label {
          background: #2a9d8f;
        }
  
        .switch-toggle:checked + .switch-toggle-label::after {
          left: calc(100% - 1.4rem);
        }
  
        .switch-toggle-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          width: 5rem;
          height: 2.5rem;
          background: rgba(214, 213, 213, 0.432);
          border-radius: 4rem;
          position: relative;
          transition: background-color 0.2s;
        }
  
        .switch-toggle-label::after {
          content: '';
          display: block;
          border-radius: 50%;
          width: 1.8rem;
          height: 1.8rem;
          margin: 3px;
          background: #fff;
          box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
          transition: 0.2s;
        }
  
        /* 超链接 */
        .post-page.notion a {
          color: #2a9d8f !important;
          font-weight: 600;
          transition: all 0.1s linear;
          border-bottom: 0.1em solid #2a9d8f;
          padding-bottom: 0.1em;
          border-radius: 0.1em;
          text-decoration: none !important;
        }
  
        .post-page.notion .dark a {
          color: #57c4b5 !important;
          border-bottom: 0.1em solid #57c4b5;
        }
  
        .post-page.notion a:hover {
          background-color: #2a9d8f;
          color: white !important;
          border-radius: 0.2em;
        }
  
        .post-page.notion .dark a:hover {
          background-color: #57c4b5;
          color: #1e1e1e !important;
        }
  
        /* 行内代码块 */
        .post-page.notion code {
          color: #2a9d8f !important;
          position: relative;
          overflow-x: auto;
          line-height: 1.5em;
          padding: 0.2em 0.4em;
          border-radius: 0.3em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            'Liberation Mono', 'Courier New', monospace;
          font-size: small;
          background-color: rgba(0, 0, 0, 0.03);
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
        }
  
        .post-page.notion .dark code {
          color: #57c4b5 !important;
          background-color: rgba(255, 255, 255, 0.1);
          text-shadow: 0 0 1px rgba(255, 255, 255, 0.4);
        }
  
        .post-page.notion pre code {
          background-color: transparent;
          color: inherit !important;
          text-shadow: none;
        }
  
        /* prism 代码高亮 */
        .dark .notion-quote {
          border-left: 0.2em solid rgba(235, 235, 235, 0.8);
        }
  
        /* TODO */
        .notion-checkbox {
          width: 16px;
          height: 16px;
          border-radius: 100%;
          border: 2px solid !important;
        }
        .notion-checkbox svg {
          width: 1rem;
          height: 1rem;
        }
  
        .hover-text-color-2a9d8f:hover {
          color: #2a9d8f;
        }
        .dark .hover-text-color-2a9d8f:hover {
          color: #57c4b5;
        }
      `}</style>
    )
  }
  
  export { Style }
  
  
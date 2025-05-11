import Link from 'next/link'
import { useState } from 'react'

export const MenuItemDrop = ({ link }) => {
  const [show, changeShow] = useState(false)
  const hasSubMenu = link?.subMenus?.length > 0

  if (!link || !link.show) {
    return null
  }

  return (
    <div
      onMouseOver={() => changeShow(true)}
      onMouseOut={() => changeShow(false)}
      className="px-1 relative">
      {/* 不含子菜单 */}
      {!hasSubMenu && (
        <Link
          target={link?.target}
          href={link?.href}
          className='menu-link hover:bg-black hover:bg-opacity-10 rounded-md flex justify-center items-center px-3 py-1 no-underline tracking-widest'>
          {link?.icon && <i className={`${link?.icon} mr-1`} />} <span>{link?.name}</span>
        </Link>
      )}
      {/* 含子菜单的按钮 */}
      {hasSubMenu && (
        <>
          <div className='cursor-pointer menu-link hover:bg-green-600 dark:hover:bg-yellow-600 hover:text-white text-gray-900 dark:text-gray-100 tracking-widest transition-all duration-200 py-1 px-3 rounded-md'>
            {link?.icon && <i className={`${link?.icon} mr-1`} />} <span>{link?.name}</span>
          </div>
        </>
      )}
      {/* 子菜单 */}
      {hasSubMenu && (
        <ul
          style={{ backdropFilter: 'blur(3px)', width: 'auto', minWidth: '150px', whiteSpace: 'nowrap' }}
          className={`${show ? 'visible opacity-100 top-10' : 'invisible opacity-0 top-20'} drop-shadow-md overflow-hidden rounded-xl bg-white dark:bg-[#1e1e1e] transition-all duration-300 z-30 absolute left-0`}>
          {link.subMenus.map((sLink, index) => {
            return (
              <li
                key={index}
                className='cursor-pointer transition-all duration-200'>
                <Link href={sLink.href} target={link?.target} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800 whitespace-nowrap">
                  <span className='text-sm font-light flex items-center'>
                    {sLink?.icon && <i className={`${sLink?.icon} mr-2`} />}
                    {sLink.title}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

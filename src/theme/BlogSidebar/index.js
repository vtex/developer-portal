/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import { translate } from '@docusaurus/Translate'
export default function BlogSidebar({ sidebar, product }) {
  var filteredSidebar = sidebar.items.filter(
    (item) => item.permalink.split('/')[5] === product,
  )
  typeof product === 'undefined' && (filteredSidebar = sidebar.items)

  if (sidebar.items.length === 0) {
    return null
  }

  const tags = [
    {
      title: "All ",
      url: "/releases",
    },{
      title: "FastStore ",
      url: "/releases/tags/faststore",
    },
    {
      title: "WebOps",
      url: "/releases/tags/webops",
    },
  ];

  return (
    <nav
      className={clsx(styles.sidebar, 'thin-scrollbar')}
      aria-label={translate({
        id: 'theme.blog.sidebar.navAriaLabel',
        message: 'Blog recent posts navigation',
        description: 'The ARIA label for recent posts in the blog sidebar',
      })}
    >
      {typeof product !== 'undefined' && (
        <div>
          <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
            {sidebar.title}
          </div>
          <ul className={styles.sidebarItemList}>
            {filteredSidebar.map((item) => {
              return (
                <li key={item.permalink} className={styles.sidebarItem}>
                  <Link
                    isNavLink
                    to={item.permalink}
                    className={styles.sidebarItemLink}
                    activeClassName={styles.sidebarItemLinkActive}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <div>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          All Releases
        </div>
        <ul className={styles.sidebarItemList}>
          {sidebar.items.map((item) => {
            return (
              <li key={item.permalink} className={styles.sidebarItem}>
                <Link
                  isNavLink
                  to={item.permalink}
                  className={styles.sidebarItemLink}
                  activeClassName={styles.sidebarItemLinkActive}
                >
                  {item.title}
                </Link>
                {item.permalink.split('/')[5]}
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <div className={clsx(styles.sidebarItemTitle, 'margin-bottom--md')}>
          Filter by tag
        </div>
        <ul>
          {
            <span className="flex flex-wrap mb-5">
              {tags.map(({title, url}) => (
                <Link
                  key={url}
                  
                  to={url}
                >
                  {title}
                </Link>
              ))}
            </span>
          }
        </ul>
      </div>
    </nav>
  )
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from 'react';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import BlogLayout from '@theme/BlogLayout';
 import BlogPostItem from '@theme/BlogPostItem';
 import BlogListPaginator from '@theme/BlogListPaginator';
 import {ThemeClassNames} from '@docusaurus/theme-common';
 
 function BlogListPage(props) {
   const {metadata, items, sidebar} = props;
   const {
     siteConfig: {title: siteTitle},
   } = useDocusaurusContext();
   const {blogDescription, blogTitle, permalink} = metadata;
   const isBlogOnlyMode = permalink === '/';
   const title = isBlogOnlyMode ? siteTitle : blogTitle;
    sidebar.title= `All releases`

   return (
     <BlogLayout
       title={title}
       description={blogDescription}
       wrapperClassName={ThemeClassNames.wrapper.blogPages}
       pageClassName={ThemeClassNames.page.blogListPage}
       searchMetadatas={{
         // assign unique search tag to exclude this page from search results!
         tag: 'blog_posts_list',
       }}
       sidebar={sidebar}>
         <h1>{title}</h1>
       {items.map(({content: BlogPostContent}) => (
         <BlogPostItem
           key={BlogPostContent.metadata.permalink}
           frontMatter={BlogPostContent.frontMatter}
           metadata={BlogPostContent.metadata}
           truncated={BlogPostContent.metadata.truncated}>
           <BlogPostContent />
         </BlogPostItem>
       ))}
       <BlogListPaginator metadata={metadata} />
     </BlogLayout>
   );
 }
 
 export default BlogListPage;
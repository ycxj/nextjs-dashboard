# Next.js 学习总结

## 1.入门指南
- 默认使用turbopack构建应用，turbopack是一个rust编写的工具，在开发和构建生产环境资源时都会编译代码，vite在开发环境，不会编译代码，使用esm来更新，只有构建生产环境资源时才会编译代码，使用的工具时gulp。
  

## 搜索和分页
- 通过URL搜索参数来实现搜索和分页，搜索参数放在URL，可以使得应用的搜索功能可以跨越客户端和服务端，更新URL参数，数据会在服务端被获取，页面会在服务器上重新渲染并包含最新的数据。
- 使用URL搜索参数的好处
  - 可收藏和共享的URL：搜索参数都在URL里面，用户可以收藏当前应用的状态，也可以把状态分享出去
  - 服务端系渲染：服务端可以直接获取URL里面的参数来渲染初始状态，从而简化服务器渲染，如一个搜索框或者一个选择器，服务端可以直接把URL参数，放在这两个组件的defaultValue 属性上。
  - 分析与追踪：直接在URL中设置查询和筛选，使得追踪用户的行为更加便捷，无需额外的客户端逻辑。
- 使用useSearchParams/usePathname/useRouter来实现参数的获取和设置。
  - useSearchParams：允许你访问当前URL的参数。例如，该URL的搜索参数会是这样的：。/dashboard/invoices?page=1&query=pending{page: '1', query: 'pending'}
  - usePathname:让你读取当前URL的路径名。例如，/dashboard/invoices usePathname'/dashboard/invoices'
  - useRouter: 通过程序实现客户端组件内路由之间的导航。
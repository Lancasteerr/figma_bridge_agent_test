function App() {
  return (
    <div className="app-shell">
      <div className="fixed-background" aria-hidden="true" />
      <main className="page-canvas">
        <header className="top-banner" aria-label="站点顶部栏">
          <h1>Easy Community</h1>
        </header>
        <div className="page-grid" aria-label="社区首页内容区域">
          <aside className="sidebar-placeholder" aria-label="首页导航" />
          <section className="feed-placeholder" aria-label="文章内容流" />
          <aside className="publish-placeholder" aria-label="作品发布" />
        </div>
      </main>
    </div>
  )
}

export default App

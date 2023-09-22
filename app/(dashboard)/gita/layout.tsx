const GitaLayout = ({ children }) => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 pt-12 pl-16">Bhagavad Gita</h1>{' '}
      {children}
    </div>
  )
}

export default GitaLayout

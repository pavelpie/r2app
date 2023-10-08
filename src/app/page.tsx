export default function Home(

) {
  return (
      <div>
        <h1 className={`p-3 text-2xl accent-red-600`}>Main Page</h1>
        <div className={`m-2`}>
            {children}
        </div>
      </div>
  )
}

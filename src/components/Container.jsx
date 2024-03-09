
export default function Container({ classes, children }) {
  return (
    <div className={`${classes} px-4 md:px-6 lg:px-8 xl:px-24 2xl:px-28`}>
        {children}
    </div>
  )
}

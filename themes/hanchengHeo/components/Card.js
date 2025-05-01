const Card = ({ children, headerSlot, className }) => {
  return <div className={`${className || ''} card border dark:border-gray-700 rounded-md lg:p-4 p-3`}>
    <>{headerSlot}</>
    <section>
        {children}
    </section>
  </div>
}
export default Card

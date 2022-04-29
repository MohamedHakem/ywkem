const HomeMasonry = ({ children }) => {
  return (
    <div className="masonry md:h-[655px]">
      {children.map((child, i) => (
        <div className="brick" key={i}>
          {child}
        </div>
      ))}
    </div>
  )
}

export default HomeMasonry

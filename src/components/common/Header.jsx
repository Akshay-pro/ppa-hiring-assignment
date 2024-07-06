
const Header = ({title, para}) => {
  return (
    <div className="text-center  max-w-[630px] m-auto">
        <h1 className="text-4xl text-[#4D4D4D] font-[600] pb-2">{title}</h1>
        <p className="text-base text-[#717171] font-[400] pb-2">{para}</p>
    </div>
  )
}

export default Header

const Header = ({title, para}) => {
  return (
    <div className="text-center">
        <h1 className="text-4xl text-[#18191F] font-[600] pb-2">{title}</h1>
        <p className="text-base text-[#717171] font-[400] pb-2">{para}</p>
    </div>
  )
}

export default Header
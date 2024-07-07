
const Header = ({title, para}) => {
  return (
    <div className="text-center max-w-[630px] m-auto">
        <h1 className="md:text-4xl text-3xl text-[#4D4D4D] dark:text-white font-[600] pb-2">{title}</h1>
        <p className="md:text-base text-sm text-[#717171] dark:text-[#dbdbdb] font-[400] pb-2">{para}</p>
    </div>
  )
}

export default Header
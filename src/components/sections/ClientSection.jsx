import Header from "../common/Header"

const ClientSection = () => {

    const clientItem = [
        { imgSrc:"/images/client/c1.svg" },
        { imgSrc:"/images/client/c2.svg" },
        { imgSrc:"/images/client/c3.svg" },
        { imgSrc:"/images/client/c4.svg" },
        { imgSrc:"/images/client/c5.svg" },
        { imgSrc:"/images/client/c6.svg" },
        { imgSrc:"/images/client/c7.svg" },
    ]
  return (
    <section className="pt-[40px] md:px-[9rem] px-[4rem]">
        <Header title="Clients" para="We have been working with some Fortune 500+ clients" />

        <div className="grid md:grid-cols-7 grid-cols-4 gap-4 py-8 justify-items-center">
            {   
                clientItem.map((item, id) => (
                    <img className="block w-[48px] h-[48px]" key={id} src={item.imgSrc} alt="client logo" />
                ))
            }
        </div>
    </section>
  )
}

export default ClientSection
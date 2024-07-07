import Header from "../common/Header"
import Image from 'next/image'
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
    <section className="pt-[40px] md:px-[9rem] px-[3rem]">
        <Header title="Clients" para="We have been working with some Fortune 500+ clients" />

        <div className="grid md:grid-cols-7 grid-cols-4 gap-4 py-8 justify-items-center dark:text-white">
            {   
                clientItem.map((item, id) => (
                    <Image key={id} src={item.imgSrc} width={48} height={48} className="block dark:bg-white dark:rounded-full"  alt="client logo" />
                ))
            }
        </div>
    </section>
  )
}

export default ClientSection
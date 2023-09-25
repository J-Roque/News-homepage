import amburger from '../assets/images/icon-menu.svg'
export const NavBar = () => {
    return (
        <>
        <ul className=" hidden sm:flex tetx-[18px] 
        sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
            
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Popular</a>
            </li>
            <li>
                <a href="">Tranding</a>
            </li>
            <li>
                <a href="">Categoria</a>
            </li>
        </ul>
        <img  className ='w-10 h-4 cursor-pointer sm:hidden 
        ' src={amburger} alt="Menu anburgesa" />
        </>
    )
}

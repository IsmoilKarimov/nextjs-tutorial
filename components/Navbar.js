import Link from "next/link";
import Image from "next/image";
import ninjaImg from '../public/logo.png'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src={ninjaImg} width={40} height={40} alt=''/>
            </div>
            <Link href='/'>Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">All ninjas</Link>
        </nav>
     );
}
 
export default Navbar;
import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [open,setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
      ];

    return (
        <div>
            <div onClick={() => setOpen(!open)} className="md:hidden bg-gray-400 p-5">
                {
                    open === true ?  <IoMdClose className="text-2xl" /> : <HiMenuAlt2 className="text-2xl"></HiMenuAlt2>
                }
                 
            </div>
           <ul className={`md:flex absolute md:static duration-700 ${open ?' top-20': '-top-80'} bg-gray-500 p-5`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </div>
    );
};

export default Navbar;
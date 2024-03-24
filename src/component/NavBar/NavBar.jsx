import { useState } from "react";
import Link from "../Link/Link";
import { AiOutLineMenu , AiOutLineClose} from "react-icons/ai";


const NavBar = () => {

    const [open , setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/',},
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      

      

    return (
        <nav>
            <div className="md:hidden " onClick={() => setOpen(!open)}>
                {
                    open === true ?<AiOutLineMenu className="text-3xl md:hidden"></AiOutLineMenu> : <AiOutLineClose className="text-3xl md:hidden"></AiOutLineClose>
                }
                
            </div>
            <ul className="md:flex">
                {
                    routes.map(route =><Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;

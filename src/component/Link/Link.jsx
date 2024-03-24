import { prototype } from "postcss/lib/previous-map";


const Link = ({route}) => {
    return (
        <div>
             <li className="mr-6" > 
                <a href={route.path}>{route.name}</a>
             </li>
        </div>
    );
};

// Link.prototypes = 

export default Link;
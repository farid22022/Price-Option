import PropTypes from 'prop-types';




const Link = ({route}) => {
    return (
        <nav>
            
             <li className="mr-6" > 
                <a href={route.path}>{route.name}</a>
             </li>
        </nav>
    );
};

Link.propTypes = {
    route : PropTypes.object
}

export default Link;
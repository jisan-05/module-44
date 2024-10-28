import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
        <li className="mr-10  ">
            <a href={route.path} className='text-lg font-semibold text-white hover:bg-slate-400 p-5'>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
    route: PropTypes.object,
}

export default Link;

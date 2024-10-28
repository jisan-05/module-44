import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Features = ({feature}) => {
    return (
        <div>
            <p className="flex items-center gap-2"><FaCircleCheck className="text-green-700" />{feature}</p>
            
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string
}
export default Features;
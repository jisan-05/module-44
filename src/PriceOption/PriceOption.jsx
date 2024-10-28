import PropTypes from "prop-types";
import Features from "../Features/Features";


const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className="bg-gray-300 p-6 flex flex-col ">
            <span className="text-5xl">{price}</span>
            <span className="text-3xl">/mon</span>
            <h3 className="text-3xl">{name}</h3>
            <div className="flex-grow">
            {
                features.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
            }
            </div>
            <button className="px-5 py-3 bg-green-600 hover:bg-green-800 text-white w-full rounded-lg mt-5">Buy Now</button>

        </div>

    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
import PropTypes from "prop-types";


const SectionTitle = ({title}) => {
    return (
        <div>
            <div className="pb-6 w-8/12 md:w-4/12 my-16 md:my-24 text-center mx-auto border-b-4 border-b-amber-300">
                <h2 className="special text-5xl capitalize"
                >{title}</h2>
            </div>
        </div>
    );
};

SectionTitle.propTypes = {
    title : PropTypes.string
}


export default SectionTitle;
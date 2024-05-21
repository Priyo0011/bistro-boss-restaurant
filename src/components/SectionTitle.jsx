

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-[1320px] mx-auto">
            <div className="w-4/12 mx-auto text-center m-20">
            <p className="text-[#D99904] my-4">--- {subHeading} ---</p>
            <h3 className="text-4xl font-medium uppercase border-y-4 py-4">{heading}</h3>
        </div>
        </div>
        
    );
};

export default SectionTitle;
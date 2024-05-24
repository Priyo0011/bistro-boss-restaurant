

const SectionTitl2 = ({ heading, subHeading }) => {
    return (
        <div className="w-[1000px] mx-auto">
      <div className="w-6/12 mx-auto text-center mt-4">
        <p className="text-[#D99904] my-4">--- {subHeading} ---</p>
        <h3 className="text-2xl font-medium uppercase border-y-4 py-2">
          {heading}
        </h3>
      </div>
    </div>
    );
};

export default SectionTitl2;
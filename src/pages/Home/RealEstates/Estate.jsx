const Estate = () => {
    return (
        <div className="border-2 border-gray-300 rounded-xl">
            <div className="p-6">
                <div className="mb-4">
                    <img height="200px" width="330px" className="rounded-2xl" src="" alt="" />
                </div>

                <div className="mb-8">
                    <h3 className="font_lexend text-xl font-semibold mb-3"></h3>
                    <p className="font_fira_sans font-normal text-[#878787]"></p>
                </div>

                <div className="mb-8">
                    <h4 className="font_lexend font-medium mb-3">Ingredients: </h4>
                    <ul className="font_fira_sans font-normal text-[#878787]">
                        <li><span className="badge badge-xs bg-[#878787]"></span> </li>
                        <li><span className="badge badge-xs bg-[#878787]"></span> </li>
                        <li><span className="badge badge-xs bg-[#878787]"></span> </li>
                    </ul>
                </div>

                <div className="flex items-center gap-6 font_fira_sans mb-6">
                    <p className="text-[#282828CC] font-normal"><i className="uil uil-clock-three"></i></p>
                    <p className="text-[#282828CC] font-normal"><i className="uil uil-fire"></i> </p>
                </div>
            </div>
        </div>
    );
};

export default Estate;
import { useEffect, useState } from "react";

const Estates = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('estates.json')
            .then(res => res.json())
            .then(data => setEstates(data));
    }, []);

    return (
        <div>
            <div className="mb-12">
                <h2 className="font_playfair text-center text-[#131313] font-bold text-4xl">Estate Section</h2>
            </div>

            <div className="px-32 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    estates.map(estate => <Estates key={estate.Id} book={estate} />)
                }
            </div>
        </div>
    );
};

export default Estates;
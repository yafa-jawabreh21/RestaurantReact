import Card from "./Card";

function Chefs() {
    return (
        <>
            <div id="section2" className="flex flex-col items-center px-4 md:px-0">
                <h5 className="text-center text-gray-400 text-sm">CHEFS</h5>
                <h1 className="font-medium font-sue-ellen text-red-500 text-3xl text-center">
                    <span className="text-black">OUR</span> PROFESSIONAL CHEFS
                </h1>
                <div className=" sm:block md:flex justify-center mt-6 gap-4">
                    <Card
                        name="Walter White"
                        job="Master Chef"
                        image="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/03/08/14b141d5589d444fa140395607ab5ce1_DeAllie_Tam__Obscura_Shanghai__.png"
                    />
                    <Card
                        name="Sarah Johnson"
                        job="Patissier"
                        image="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/03/06/bed6121874c64b489311f69b4dcb8b5a_Rika+Maezawa+of+Nanakusa+Michelin+Guide+Tokyo.jpg"
                    />
                    <Card
                        name="Tam Anderson"
                        job="Cook"
                        image="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/03/08/1cbb7c48f0a9430db656a65281099056_M2770_%281%29.jpg"
                    />
                </div>
            </div>
        </>
    );
}

export default Chefs;
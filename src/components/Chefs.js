import Card from "./Card";
function Chefs(){

    return(
        <>
        <h5 className="text-center text-gray-400 text-sm ">CHEFS</h5>
        <h1 className=" font-medium text-red-500 text-2xl text-center"><span className="text-black">OUR</span> PROFFESIONAL CHEFS</h1>
        <div className="container flex my-0 mx-auto gap-4 mt-6 ">
            <Card name="Walter White" job="Master Chef" image="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/03/08/14b141d5589d444fa140395607ab5ce1_DeAllie_Tam__Obscura_Shanghai__.png" />
            <Card name="Sarah Jhonson" job="Patissier" image="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/03/06/bed6121874c64b489311f69b4dcb8b5a_Rika+Maezawa+of+Nanakusa+Michelin+Guide+Tokyo.jpg"  />
            <Card name="Tam Anderson" job="Cook" image="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2023/03/08/1cbb7c48f0a9430db656a65281099056_M2770_%281%29.jpg"  />
            
            
        </div>
        
        </>
    )
}
export default Chefs;
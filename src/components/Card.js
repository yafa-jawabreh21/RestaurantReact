function Card( props ){
    return(
        <>
        <div class="Card shadow-xl shadow-slate-300 mx-auto my-0 mb-10  rounded-2xl flex flex-col w-2/4 h-1/4">
        <img className="max-h-96 rounded-lg w-auto" src={props.image}  height={100} width={100}/>
            <div class="card-info rounded-lg bg-white block mt-auto h-fit pt-6">
                <h1 class="Chef-name text-black font-bold text-lg text-center">{props.name}</h1>
                <h3 class="Chef-job text-gray-400 font-normal text-sm text-center">{props.job}</h3>
                <p class="Chef-info text-gray-400 font-normal text-xs text-wrap my-0 mx-auto w-1/2 pb-10 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit libero sed dolores ipsam odit cum modi voluptas ea architecto animi porro repellendus, consequatur ipsa a, iure illo facilis eum ullam.</p>
            </div>
</div>
        </>
    )
}
export default Card;
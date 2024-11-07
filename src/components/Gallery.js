function Gallery(){
    return(
        <>
<div className="bg-slate-200 h-full mx-auto my-0 py-10" id="section3">
    <h5 className="text-center text-gray-400 text-sm">GALLERY</h5>
    <h1 className="font-medium font-sue-ellen text-red-500 text-3xl text-center">
        <span className="text-black">CHECK</span> OUR GALLERY
    </h1>
    <div className=" flex gap-3 md:grid-cols-3  mx-auto py-0" style={{ maxWidth: '800px' }}>
        <div className="grid gap-4">
            <div className="relative group">
                <img className="h-auto w-64 rounded-lg transition-transform duration-75 group-hover:scale-105 hover:opacity-50" src="https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-50 rounded-lg">
                    <h2 className="text-xl">PIZZA</h2>
                    {/* <p className="text-sm">Description for image 1.</p> */}
                </div>
            </div>
            <div className="relative group">
                <img className="h-auto w-64 rounded-lg transition-transform duration-75 group-hover:scale-105" src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-50 rounded-lg">
                    <h2 className="text-xl">BURGER</h2>
                    {/* <p className="text-sm">Description for image 2.</p> */}
                </div>
            </div>
        </div>
        <div className="grid gap-4">
            <div className="relative group">
                <img className="h-auto w-64 rounded-lg transition-transform duration-75 group-hover:scale-105" src="https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-50 rounded-lg">
                    <h2 className="text-xl">STAKE</h2>
                    {/* <p className="text-sm">Description for image 3.</p> */}
                </div>
            </div>
            <div className="relative group">
                <img className="h-auto w-64 rounded-lg transition-transform duration-75 group-hover:scale-105" src="https://images.pexels.com/photos/13630440/pexels-photo-13630440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-50 rounded-lg">
                    <h2 className="text-xl">GRILLED</h2>
                    {/* <p className="text-sm">Description for image 4.</p> */}
                </div>
            </div>
        </div>
        <div className="grid gap-4">
            <div className="relative group">
                <img className="h-auto w-64 rounded-lg transition-transform duration-75 group-hover:scale-105" src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-50 rounded-lg">
                    <h2 className="text-xl">SALAD</h2>
                    {/* <p className="text-sm">Description for image 5.</p> */}
                </div>
            </div>
            <div className="relative group">
                <img className="h-auto w-64 rounded-lg transition-transform duration-75 group-hover:scale-105" src="https://images.pexels.com/photos/16671586/pexels-photo-16671586/free-photo-of-eating-beef-noodle-soup-with-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  bg-opacity-50 rounded-lg">
                    <h2 className="text-xl">NOODLES</h2>
                    {/* <p className="text-sm">Description for image 6.</p> */}
                </div>
            </div>
        </div>
    </div>
</div>
        
        </>
    )
}
export default Gallery;
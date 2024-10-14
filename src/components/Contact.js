function Contact(){
    return(
        <>
        <div class="contact">
        <h5 className="text-center text-gray-400 text-sm ">CONTACT</h5>
        <h1 className=" font-medium font-sue-ellen text-red-500 text-3xl text-center"><span className="text-black">HELP?</span> CONTACT US</h1>
        <div className="mx-14 my-0 bg-yellow-50 w-auto h-96 mb-10 mt-7 rounded-sm"></div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2  mx-14 py-0 my-0 pb-6">
            <div className="grid gap-2 ">
              <div className="bg-slate-100 w-auto h-fit flex py-2 pl-4">
                <div className="rounded-full bg-red-700  h-10 w-10 mr-5">
                  <svg class="my-2  mx-auto w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                   <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                  </svg>
                </div>
                    <div className="text-left">
                        <h1 className="text-left text-base text-gray-600 font-mono font-normal">Our Address</h1>
                        <h5 className="text-left text-black text-sm">A108 Adam Street, New York, NY 535022</h5>
                    </div>
                </div>
                
                <div className="bg-slate-100 w-auto h-fit flex py-2 pl-4">
                <div className="rounded-full bg-red-700  h-10 w-10 mr-5">
                  <svg class="my-2  mx-auto w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                  </svg>

                </div>
                    <div className="text-left">
                        <h1 className="text-left text-base text-gray-600 font-mono font-normal">Call Us</h1>
                        <h5 className="text-left text-black text-sm">+1 5589 55488 55</h5>
                    </div>
                </div>
            </div>




            <div className="grid gap-2">
              <div className="bg-slate-100 w-auto h-fit flex py-2 pl-4">
                <div className="rounded-full bg-red-700  h-10 w-10 mr-5">
                <svg class="my-2  mx-auto w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                  </svg>
                </div>
                    <div className="text-left">
                        <h1 className="text-left text-base text-gray-600 font-mono font-normal">Email Us</h1>
                        <h5 className="text-left text-black text-sm">contact@example.com</h5>
                    </div>
                </div>
                
                <div className="bg-slate-100 w-auto h-fit flex py-2 pl-4">
                <div className="rounded-full bg-red-700  h-10 w-10 mr-5">
                  <svg class="my-2  mx-auto w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>


                </div>
                    <div className="text-left">
                        <h1 className="text-left text-base text-gray-600 font-mono font-normal">Opening Hours</h1>
                        <h5 className="text-left text-black text-sm"><span>Mon-Sat:</span> 11AM - 23PM; <span>Sunday:</span> Closed</h5>
                    </div>
                </div>
            </div>
        </div>

        <form>
        <div className="mx-14 my-0 bg-yellow-50 w-auto h-96 mb-10 mt-7 rounded-sm " >
            <div className="flex gap-5 pt-3 pl-3">
                    <input type="text" placeholder="Your Name" className="h-fit w-1/2 py-3 px-3 border-2 border-gray-300 focus:border-gray-300"></input>
                    <input type="email" placeholder="Your Email" className="h-fit w-1/2 py-3 px-3 border-2"></input>
            </div>
            <div className="flex gap-5 pt-3 pl-3 flex-wrap">
            <input type="text" placeholder="Subject" className=" w-full py-3 px-3 border-2"></input>
            </div>
            <div className="flex gap-5 pt-3 pl-3 flex-wrap">
            <textarea placeholder="Message" className="w-full py-3 px-3 border-2"></textarea>
            </div>
            <button className="bg-red-600 rounded-full py-3 px-11 mt-10 hover:bg-red-800 text-white text-center ">Send Message</button>
            
        </div>
        </form>
        </div>
        
        </>
    )
}
export default Contact;
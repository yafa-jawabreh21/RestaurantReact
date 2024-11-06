import Homestart from "./components/Homestart";
import Chefs from "./components/Chefs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
function Home(){
    return(
        <>
        <div className="shadow-md h-full pb-5 w-auto">
            <nav className="lg:flex gap-40 pt-5 pl-3 sm:gap-6 ">
                <a href="/"><h1 className="Logo text-black text-2xl font-mono font-bold lg:pl-8  sm:text-4xl sm:text-center  ">Mealify</h1></a>
                {/* <ul className="sm:hidden flex gap-6 items-center my-0 mx-72 sm:flex-row sm:space-x-8 rtl:space-x-reverse sm:mt-0 sm:border-0">
                    <li className="text-gray-500 font-mono font-bold text-lg"><a href="" className="hover:underline hover:scale-x-100">Home</a></li>
                    <li className="text-gray-500 font-mono font-bold text-lg"><a href="/Chefs/#section2" className="hover:underline hover:scale-x-100">Chefs</a></li>
                    <li className="text-gray-500 font-mono font-bold text-lg"><a href="/Gallery/#section3" className="hover:underline hover:scale-x-100">Gallery </a></li>
                    <li className="text-gray-500 font-mono font-bold text-lg"><a href="/Contact/#section4" className="hover:underline hover:scale-x-100">Contact </a></li>
                </ul> */}
            </nav>
        </div>
<Homestart/>
<Chefs/>
<Gallery/>
<Contact/>
<footer class="bg-black dark:bg-gray-900 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 md:py-8">
        <div class="md:block md:justify-between sm:flex">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Mealify</span>
              </a>
              <p className=" text-white float-left sm:w-60  pt-5 text-left sm:text-xs md:text-sm lg:text-base">Mealify is a restaurant landing page that offers a delicious dining experience to its customers.</p>
          </div>
          

          
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white text-left">Subscribe our Newsletter</h2>
                  <p className="text-white float-left lg:w-96  text-left sm:text-xs md:text-sm lg:text-base ">Don't miss out on our latest menu updates and exclusive offers . join our newsletter today and stay up-to-date with all things Mealify!</p>
                  <br></br>
                  <form className="">
                    <input className="text-gray-400 rounded-sm  p-2 float-left mt-4 text-sm" type="email" placeholder="Enter Your Email Address"></input>
                    <button type="button" class=" mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Subscription</button>
                  </form>
              </div>
              <div className="">
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white text-left">Get in Touch </h2>
                  <ul class="text-white font-normal">
                      <li class=" flex lg:w-96">
                      <svg class="md:w-8 md:h-8 sm:w-6 sm:h-6 pr-2 text-red-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"/>
                      </svg>

                          <h3 className=" text-left sm:text-xs md:text-sm lg:text-base" >A108 Adam Street,New York, NY 535022</h3>
                      </li>

                      <li className="flex lg:w-96">
                      <svg class="md:w-8 md:h-8 sm:w-6 sm:h-6 pr-2 text-red-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
                      </svg>

                      <h3 className=" text-left sm:text-xs md:text-sm lg:text-base">contact@example.com</h3>
                      </li>
                      <li className="flex lg:w-96">
                      <svg class="md:w-8 md:h-8 sm:w-6 sm:h-6 pr-2 text-red-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
                      </svg>

                        <h3 className=" text-left sm:text-xs md:text-sm lg:text-base">+1 5589 55488 55 </h3>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      
    </div>
</footer>

        
        </>
    )
}
export default Home;
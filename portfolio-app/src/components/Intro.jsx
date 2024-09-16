import Beach from '../assets/Beach.jpeg'
import Student from '../assets/Student.jpeg'
function Intro() {
    return (
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      {/* <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src={Back}
          className="overflow-hidden inset-0 h-full w-full object-cover"
        />
        
      </div> */}
      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Hello, Im Jayvee Brian Ibale</h2>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Learn More About Me
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt=""
          src={Student}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />

        <img
          alt=""
          src={Beach}
          className="h-40 w-full object-cover sm:h-56 md:h-full"
        />
      </div>
    </div>
  </div>
  <hr className='text-slate-900' />
</section>
    );
  }
  
  export default Intro;
  
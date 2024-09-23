import Basket from '../assets/Basket.jpg'
import Music from '../assets/Music.jpg'
import Skies from '../assets/Skies.jpg'
import Camera from '../assets/Camera.jpg'
import Hikes from '../assets/Hikes.jpg'
import Movies from '../assets/Movies.jpg'

function Hobbies() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Quickstart with my Hobbies</h2>

      <p className="mt-4 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
        nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
      </p>
    </div>

    <div className="mt-8 text-center grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <img className='rounded-xl' src={Basket}/>

        <h2 className="mt-4 text-xl font-bold text-black">Basketball</h2>

        <p className="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <img className='rounded-xl' src={Music}/>

        <h2 className="mt-4 text-xl font-bold text-black">Music</h2>

        <p className="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        
        <img className='rounded-xl' src={Skies}/>
        <h2 className="mt-4 text-xl font-bold text-black">Watching Skies</h2>

        <p className="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
     
        <img className='rounded-xl' src={Camera}/>
        <h2 className="mt-4 text-xl font-bold text-black">Photography</h2>

        <p className="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
     
       <img className='rounded-xl' src={Hikes}/>
        <h2 className="mt-4 text-xl font-bold text-black">Hiking</h2>

        <p className="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
    
        <img className='rounded-xl' src={Movies}/>
        <h2 className="mt-4 text-xl font-bold text-black">Watching Movies</h2>

        <p className="mt-1 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
    </div>
  </div>
  <div className="flex justify-center items-center h-20 border-gray-300">
      <div className="w-[80%] border-b border-gray-400"></div>
  </div>
</section>
  )
}

export default Hobbies

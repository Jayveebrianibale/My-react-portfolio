import Kind from '../assets/Kind.jpg';
import Friend from '../assets/Friend.jpeg';
import Socialize from '../assets/Socialize.jpg';
import Eagerness from '../assets/Eagerness.jpg';
import Workaholic from '../assets/Workaholic.jpeg';
import Pressure from '../assets/Pressure.jpg';

function Skills() {
  return (
    <section className="text-black">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What makes me <span className="py-2 px-3 md:p-0 text-indigo-700 rounded md:bg-transparent md:dark:bg-transparent">special</span>?
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam
            iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur
            quibusdam, quos fuga minima.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="group flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl text-center font-bold">Optimistic and Kind</h2>
            </div>
            <div>
              <img className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]" src={Kind} alt="Optimistic and Kind" />
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl text-center font-bold">Friendly</h2>
            </div>
            <div>
              <img className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]" src={Friend} alt="Friendly" />
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl text-center font-bold">Sociable</h2>
            </div>
            <div>
              <img className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]" src={Socialize} alt="Sociable" />
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl text-center font-bold">Eagerness to Learn</h2>
            </div>
            <div>
              <img className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]" src={Eagerness} alt="Eagerness to Learn" />
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl text-center font-bold">Workaholic</h2>
            </div>
            <div>
              <img className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]" src={Workaholic} alt="Workaholic" />
            </div>
          </div>
          <div className="group flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl text-center font-bold">Work Under Pressure</h2>
            </div>
            <div>
              <img className="rounded-xl mt-5 group-hover:animate-[scale-up_0.3s_ease-in-out]" src={Pressure} alt="Work Under Pressure" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="w-[80%] border-b border-gray-400"></div>
      </div>
    </section>
  );
}

export default Skills;

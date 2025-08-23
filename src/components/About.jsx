import AboutMe from '../assets/images/AboutMe.jpg'
export default function HeaderConfig() {

    return (
        <section
            class="bg-gray-200 container mx-auto items-center min-h-[20vh] px-6 py-8 rounded-xl text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-3">About Me</h2>

            <div class="bg-gray-100 flex w-full justify-start items-start px-4 py-8 md:flex-row flex-col gap-16">
                <img src={AboutMe} alt="AboutMe" class=" w-64 h-96 object-cover rounded-lg shadow-lg"></img>

                <p class="flex justify-center items-start min-h-[20vh] px-1 text-left md:pr-36 text-lg text-gray-600">I'm Nicholas Carrol, an author who loves
                    crafting stories that span genres, worlds, and characters, while building fascinating and thought-provoking stories. 
                    When I'm not writing, you can find me reading almost any genre, practicing jiu-jitsu, or searching for adventures. 
                    Every experience, no matter how small, provides new fuel for new stories. 
                    I would love to connect with you on any of my social media platforms. Or through my email list!</p>
            </div>
        </section>
    )

};

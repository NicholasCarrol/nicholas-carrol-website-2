import BookCover from '../assets/images/BookCover.png'
export default function HeaderConfig() {

    return (
    <section
        class="bg-gray-200 container mx-auto flex-row flex-col items-center min-h-[20vh] px-6 py-8 rounded-xl text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-3">About Me</h2>

        <img src={BookCover} alt="BookCover" class="flex-1 w-64 h-96 object-cover rounded-lg shadow-lg"></img>

        <p class="flex-1 text-lg md:text-xl text-gray-700 mb-8 max-w-3xl">I'm Nicholas Carrol, an author who loves
            crafting stories that span genres, worlds, and characters, while building fascinating and though
            provolking stories. When I'm not writing, you can find me reading almost any genre, practicing jiu-jitsu, 
            or searching for adventures. Every experience, no matter how small, provides new fuel for new stories.</p>
    </section>
    )

};

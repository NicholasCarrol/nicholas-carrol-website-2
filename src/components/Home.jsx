import BookCover from '../assets/images/BookCover.png'
import NewsLetter from '../clients/NewsLetter.jsx'
import BeeHiivEmbed from './BeeHiive.jsx'
export default function HomeConfig() {

          const beehiivFormCode = `<script async src="https://subscribe-forms.beehiiv.com/embed.js"></script><iframe src="https://subscribe-forms.beehiiv.com/5811c17c-df1f-4c9c-9a03-a68b87e2da0d" class="beehiiv-embed" data-test-id="beehiiv-embed" frameborder="0" scrolling="no" style="width: 1011px; height: 544px; margin: 0; border-radius: 0px 0px 0px 0px !important; background-color: transparent; box-shadow: 0 0 #0000005c; max-width: 100%;"></iframe>`;

    return (


        //Book Banner
        <>
            <section class="bg-gray-950 flex flex-col items-center justify-center min-h-[30vh] text-center">
                <h1 class="text-4xl md:text-6xl font-extrabold text-gray-200 mb-4">Darkness of Creation</h1>
                <p class="text-lg md:text-xl text-gray-100 font-bold mb-4">“Quillan can do infinitely more than any creator before him.
                    <span class="text-blue-600"> For good.</span> Or for <span class="text-red-700"><i>evil</i>.</span>”</p>
                <p class="text-lg text-gray-300 mb-1"><i>Coming October 1st 2025</i></p>
            </section>

            {/* <!-- Book Info --> */}

            <div class="bg-gray-100 flex w-full justify-start items-start px-4 py-8 md:flex-row flex-col gap-16">
                <section class="flex-1 flex justify-end items-center min-h-[20vh] px-1">
                    <img src={BookCover} alt="BookCover" class="w-64 h-96 object-cover rounded-lg shadow-lg"></img>
                </section>

                <section class="flex-1 flex flex-col justify-center items-start min-h-[20vh] px-1 text-left md:pr-36">
                    <h2 class="text-3xl font-bold text-gray-800 mb-3">Darkness of Creation</h2>
                    <p class="text-lg md:text-xl text-gray-700 mb-8">A seasoned mercenary, a sheltered princess, and an orphan
                        creator must work together to stop Quillan, the most powerful creator the world has ever seen. If only
                        each of them didn't have their own secret ties to Quillan.</p>
                    <a href="#amazonlinkgoeshere"
                        class="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-red-500 transition">Purchase
                        on
                        Amazon</a>
                </section>
            </div>

            {/* <!-- ----------------------------Reviews Section--------------------------------- --> */}
            <section class="bg-gray-300 container mx-auto flex flex-col items-start min-h-[20vh] px-6 py-4 rounded-xl">
                <div class="w-full mb-6 py-6">
                    <h2 class="text-3xl font-bold text-gray-800 text-left">What People Are Saying</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <div class="flex mb-2">
                            {fiveStarsHtml()}
                        </div>
                        <p class="text-gray-700 mb-4">"An exhilarating read from start to finish! The characters are
                            well-developed and the plot twists kept me on the edge of my seat."</p>
                        <div class="text-sm text-gray-500">- Jane D.</div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        {fiveStarsHtml()}
                        <p class="text-gray-700 mb-4">"An exhilarating read from start to finish! The characters are
                            well-developed and the plot twists kept me on the edge of my seat."</p>
                        <div class="text-sm text-gray-500">- Jane D.</div>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        {fiveStarsHtml()}
                        <p class="text-gray-700 mb-4">"An exhilarating read from start to finish! The characters are
                            well-developed and the plot twists kept me on the edge of my seat."</p>
                        <div class="text-sm text-gray-500">- Jane D.</div>
                    </div>
                    {/* <!-- Add more review cards here if needed --> */}
                </div>
            </section>

            {/* <!----------------News letter Section--------------------------> */}
         <div class="flex w-full my-12 justify-center py-4 ">
          <BeeHiivEmbed embedCode={beehiivFormCode} />
        </div>
            {/* <section class="bg-gray-100 flex flex-col items-center justify-center min-h-[20vh] text-center px-6 py-8">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Stay In Touch!</h2>
                <p class="text-lg text-gray-700 mb-6">Subscribe to my newsletter to get the latest updates on book
                    releases, events, and exclusive content.</p>
                <form class="w-full max-w-md" onSubmit={NewsLetter} >
                    <div class="flex items-center border-b border-gray-400 py-2">
                        <input
                            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="email" placeholder="Your email address" aria-label="Email address" required></input>
                        <button
                            class="flex-shrink-0 bg-gray-600 text-white text-sm px-6 py-2 rounded-lg hover:bg-gray-700 hover:text-red-500 transition"
                            type="submit">
                            Subscribe
                        </button>
                    </div>
                </form>
            </section> */}
        </>

    )


    function fiveStarsHtml() {
        return <div class="flex mb-2">
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                    points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                    points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                    points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                    points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
            </svg>
            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                    points="10,1 12.59,7.36 19.51,7.36 13.96,11.64 16.55,18 10,13.72 3.45,18 6.04,11.64 0.49,7.36 7.41,7.36" />
            </svg>
        </div>
    }

};

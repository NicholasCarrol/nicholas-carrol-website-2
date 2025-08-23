import Map from '../assets/images/TheCircleMap.png'
import PrintingPress from '../assets/images/PrintingPress.jpg'
export default function HeaderConfig() {

    return (
        <section
            class="bg-gray-200 container mx-auto items-center min-h-[20vh] px-6 py-8 rounded-xl text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-3">The world of 'Darkness of Creation'
            </h2>
            <p class="flex-1 flex-col justify-center items-start px-1 text-left text-xl text-gray-700 leading-relaxed md:pr-36">
                The world of Darkness of Creation is known as 'The Circle' colloquially among the peoples of the world.
                It is a grounded fantasy world in the Classical age. The most different aspect is the existence of creators.
            </p>

            <div class="flex flex-col md:flex-row gap-8 mt-8">

                <div class="flex-1 bg-gray-100 justify-start items-start w-1/2 px-4 py-8 md:flex-row flex-col gap-16">
                    <img src={Map} alt="CircleMap" class="object-cover rounded-lg shadow-lg"></img>             </div>

                <div class="flex-1 w-1/2  text-left px-1 md:pr-36">
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Creators</h2>
                    <div class="text-lg text-gray-700 mb-4 leading-relaxed">
                        About one in 10,000 children are born a creator, without any preference for genetics, race, or sex, with the seeming exception of Trisevtian Priests.
                        Most creators are quite limited, being able to create nothing much of consequence physically. Invisible forcefields that are quite weak, small bits of fire that are not very hot,
                        blasts of air, bits of shadow, droplets of water, etc.
                        <br></br><br></br>
                        Powerful creators are twenty times as rare. Generally, the learned of the world consider it to be about one in 200,000 children.
                        A powerful creator might be able to create great swathes of fire or shields that can stand up to prolonged attacks by human weapons, or even cures for diseases.
                        Some are even able to create life. That life, however, is often quite limited and unnatural looking. The most common living creation are 'brutes'—troll like creations generally much larger than a man.
                        These creations are often used by armies.
                        If the creator is especially powerful, brutes can be very difficult to kill.
                        <br></br><br></br>
                        Occasionally, around one in several million, a creator may be able to create portals or small stones, called conveyance stones,
                        that can teleport a limited number of people a limited distance.
                    </div>
                </div>
            </div>

            <section class="text-left">
                <h2 class="text-xl font-bold text-gray-800 mb-3">Technology</h2>
                <div class="flex-1 text-lg text-gray-700 mb-4 leading-relaxed">
                    Technology in the Circle is comparable to the high-Renaissance, or an advanced Classical Age.
                    Most cities are quite large (some even reach into the milions!) and have advanced sewage systems and plumbing systems.
                    The wealthy often have access to water through taps directly into their home.
                    <br></br><br></br>
                    <div class="flex gap-6">
                        <img src={PrintingPress} alt="PrintingPress" class="flex object-cover rounded-lg shadow-lg w-56 h-56 inline-block"></img>
                        <p class="flex w-3/4 text-left">
                            The printing press was invented in the year 3290, or some eighty years before the story starts.
                            Explosives are someitmes used in demolition work, but not often used in military settings.
                            This may be due to the focus on using powerful creators in the military instead of scientific advances.
                            Mathematics has advanced past the point of calculus, and geometry is quite advanced.
                            Scientists, though often poor and ignored due to a focus on creators, have advanced quite far in the understanding of physics and chemistry.
                            Medicine is also well advanced, but it was cures my be creators, most noticably Chawl who cured the plague
                            in the year 2602, that were responsible for the population boom.
                        </p>
                    </div>
                    Horses are still the primary means of transportation and most cities are  connected by well maintained roads.
                    The science of shippmaking has advanced considerably. Ships can be quite large, much like galleons in our own Imperial age,
                    but not much sea exploration has been done.
                </div>
            </section>
            <section class="text-left">
                <h2 class="text-xl font-bold text-gray-800 mb-3">Cultures</h2>
                <div class="text-lg text-gray-700 mb-4 leading-relaxed">
                    There are two main warring culture: The Kalceans, generally to the north and the Celjgeans generally to the south.
                    Both factions speak a language named after their culture. A series of wars over the last millennia have shifted the 'border' north and south.
                    At the time of the first book, the Kalceans have dominance with the border far south, all the way to the Celjgean continent.
                    <br></br><br></br>
                    Each culture has its own majority religion. Kalceans are Unuman, and the Celjgeans are Trisevtian.

                    <div class="flex gap-6 mt-4">
                        <section class="right-4">
                            <h2 class="text-xl font-bold text-gray-800 mb-3">Unuman</h2>
                            <p>
                                Unumans are monotheist's, worshiping an all-powerful god. According their religion, three beings, known as The Keepers, 
                                were created by God to create the Circle and everything in it, with the single rule that they could not make creators. 
                                The Keepers rebelled, led Mákiél, the most devious of them, and created creators, for which God then cast 
                                The Keepers down to the world they had created.
                                For this reason, Unumans see either creators as entirely evil or their abilities as evil. 
                                While responses vary across the Unuman religion, persecution of creators is very common.
                                Priests are always male and are allowed to marry, but only a woman of virtue. 
                                Polygamy is strictly prohibed among all paritioners and divorce is very difficult to obtain.
                            </p>

                        </section>
                        <section class="left-8">
                            <h2 class="text-xl font-bold text-gray-800 mb-3">Trisevtian</h2>
                            <p>
                                Trisevtians worship a trinity of gods named Mákiél, Raush, and Sevát. According their religion, four gods existed in the beginning, 
                                the fourth being called Ishtus. The gods decided to create a world to commune with, but they disagreed whether humans should be able to create. 
                                Ishtus thought no mortal should be able to create. A war ensued which is ongoing to this day. This is why some humans can create but many cannot.
                                For this reason, Trisevtians see creators as high beings that should be worshiped. The priesthood is entirely made up of creators, 
                                with the High Priest always being picked from the creator children of the High Priest. 
                                There is significant debate about how the high priest often has many creator children. 
                                Any creator of any sex can become a priest, but must go through very dangerous training, tests, and rituals. 
                                Polygamy is not uncommon among priests, but is rare among the general Trisevtians, except for the richest.
                            </p>

                        </section>
                    </div>


                </div>
            </section>
        </section>
    )

}

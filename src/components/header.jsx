import HomeConfig from './Home.jsx'
import AboutConfig from './About.jsx'
import TheCircle from './TheCircle.jsx'
export default function HeaderConfig({ setBody }) {

    return (
        <header class="bg-gray-700 shadow w-full">
            <nav class="container mx-auto flex items-center justify-between py-4 px-6">
                <div class="text-2xl font-bold text-gray-200">Nicholas Carrol</div>
                <button id="menu-btn" onClick={() => menuButton()} class="md:hidden text-gray-200 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul id="nav-links" class="hidden md:flex space-x-1">
                    <li><button onClick={() => setBody(<HomeConfig />)}
                        class="text-gray-100 px-8 py-3 font-semibold hover:text-red-500 transition w-full block text-center min-w-[120px]">HOME</button>
                    </li>
                    <li><button onClick={() => setBody(<AboutConfig />)}
                        class="text-gray-100 px-8 py-3 font-semibold hover:text-red-500 transition w-full block text-center min-w-[120px]">ABOUT</button>
                    </li>
                    <li><button onClick={() => setBody(<TheCircle />)}
                        class="text-gray-100 px-8 py-3 font-semibold hover:text-red-500 transition w-full block text-center min-w-[120px]">The
                        Circle</button></li>
                </ul>
            </nav>
            {/* Mobile Menu */}
            <div id="mobile-menu" class="md:hidden hidden px-6 pb-4">
                <ul class="space-y-2 text-gray-100 font-medium">
                    <li><button onClick={() => setBody(<HomeConfig />)} class="block hover:text-red-600">HOME</button></li>
                    <li><button onClick={() => setBody(<AboutConfig />)} class="block hover:text-red-600">ABOUT</button></li>
                    <li><button onClick={() => setBody(<TheCircle />)} class="block hover:text-red-600">The Circle</button></li>
                </ul>
            </div>
        </header>
    )


    function menuButton() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');

    }
};

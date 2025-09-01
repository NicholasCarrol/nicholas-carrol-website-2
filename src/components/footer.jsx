export default function FooterConfig() {

    return (
    <footer class="bg-white shadow mt-8">
        <div class="container mx-auto py-2 px-6 text-center text-gray-600 flex flex-col items-center">
            <div class="flex space-x-4">
                <a href="https://x.com/nicholas_c64547" target="_blank" aria-label="X" class="hover:opacity-80 transition">
                    {/* <!-- X (formerly Twitter) SVG, default black --> */}
                    <svg class="w-9 h-9 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M17.53 3H21.5l-7.19 8.21L23 21h-7.19l-5.65-6.46L3.5 21H-.5l7.64-8.73L1 3h7.19l5.07 5.8L17.53 3zm-2.13 2.06l-4.36 5.01-4.36-5.01H4.13l5.65 6.46L4.13 21h2.13l4.36-5.01 4.36 5.01h2.13l-5.65-6.46 5.65-6.46h-2.13z" />
                    </svg>
                </a>
                <a href="https://facebook.com/" target="_blank" aria-label="Facebook"
                    class="hover:opacity-80 transition">
                    {/* <!-- Facebook default blue --> */}
                    <svg class="w-9 h-9 text-[#1877F3]" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z" />
                    </svg>
                </a>
                <a href="https://instagram.com/" target="_blank" aria-label="Instagram"
                    class="hover:opacity-80 transition">
                    {/* <!-- Instagram gradient: use pink as base --> */}
                    <svg class="w-9 h-9 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                </a>
                <a href="https://www.goodreads.com/" target="_blank" aria-label="Goodreads"
                    class="hover:opacity-80 transition">
                    {/* <!-- Goodreads SVG (book icon, brown color) --> */}
                    <svg class="w-9 h-9 text-[#382110]" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M6 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1.447.894L12 19.118l5.553 2.776A1 1 0 0 0 19 21V3a1 1 0 0 0-1-1H6zm1 2h10v15.382l-4.553-2.276a1 1 0 0 0-.894 0L7 19.382V4z" />
                    </svg>
                </a>
            </div>
            <div class="mb-2 mt-3">&copy; 2025 Nicholas Carrol. All rights reserved.</div>
        </div>
    </footer>
    )

};

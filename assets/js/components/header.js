export default class Header extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current');
    this.innerHTML = `
    <header>
      <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <img class="block h-24 w-auto" src="/aftb.svg" alt="Workflow" />
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="./"
                  class="${
                    current === 'home'
                      ? 'border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold'
                  }"
                >
                  Accueil
                </a>
                <a
                  href="./history.html"
                  class="${
                    current === 'history'
                      ? 'border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold'
                  }"
                >
                  Historique du quizz
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}

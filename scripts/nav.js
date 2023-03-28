class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-extend-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    Professor Jenny
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Project Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/music_list_project/tasks.html">Task List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/music_list_project/resources.html">Resources</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}
customElements.define('nav-bar', Navigation);
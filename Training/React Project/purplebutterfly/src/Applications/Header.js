import React from "react";


function Header() {
    return (
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <nav class="navbar navbar-light bg-white">
                    <a class="navbar-brand px-4" href="#">
                        <img src="logo.png" width={200} height={60} />
                    </a>
                </nav>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item ">
                            <a class="nav-link text-dark" aria-current="page" href="/Body#About">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/Body#Solutions">SOLUTIONS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="/Body#Impact">IMPACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">COMMUNITY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">CONTACT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">APP</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                NEWS
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">INC42</a></li>
                                <li><a class="dropdown-item" href="#">YOUR STORY</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Header;
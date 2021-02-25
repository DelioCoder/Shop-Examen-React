import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary border-top-0">
            <div className="container">
                <Link className="navbar-brand" to="/"><h1 className="text-white">Navbar</h1></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><h6 className="text-white">Home</h6><span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><h6 className="text-white">Features</h6></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><h6 className="text-white">Sale</h6></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Shop
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Tops</a>
                            <a className="dropdown-item" href="#">T-shirt</a>
                            <a className="dropdown-item" href="#">Chompas</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

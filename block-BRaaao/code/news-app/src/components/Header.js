function Header(props) {
    return (
        <header className="flex justify-between">
            <span className="brand">Brand</span>
            <ul className="navlinks flex justify-between">
                <li className="navitem">Navlink</li>
                <li className="navitem">Navlink</li>
                <li className="navitem">Navlink</li>
            </ul>
        </header>
    );
}

export default Header;
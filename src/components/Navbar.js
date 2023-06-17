import troll_logo from '../images/troll-face-small.png'

export default function Navbar() {
    return (
        <nav>
            <img src={troll_logo} alt="troll logo"/>
            <h1>Meme Generator</h1>
            <p>React Course - Project 3</p>
        </nav>
    )
}
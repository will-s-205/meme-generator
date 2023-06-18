import memesData from "../data/memesData"
import { random } from 'lodash';

export default function Navbar() {
    const handleClick = () => {
        // console.log(memesData.data.memes[0].url)
        // console.log({ url: memesData.data.memes[0].url })
        const randomUrl = memesData.data.memes[random(0, memesData.data.memes.length)];
        console.log(randomUrl.url)
    }
    return (
        <main>
            <form action="" className="input-form">
                <div className="input-fields">
                    <input className="input-top" placeholder="top text"></input>
                    <input className="input-bottom" placeholder="bottom text"></input>
                </div>
            </form>
            <button onClick={handleClick} className="submit-button">Get a new meme image</button>
        </main>
    )
}

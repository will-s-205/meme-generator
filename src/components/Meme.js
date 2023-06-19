import { useState } from "react";
import memesData from "../data/memesData"

export default function Navbar() {
    const [memeImg, setMemeImg] = useState('https://i.imgflip.com/odluv.jpg')

    const GetMemeImg = () => {
        const randomImg = Math.floor(Math.random() * memesData.data.memes.length);
        const { url } = memesData.data.memes[randomImg];
        setMemeImg(url)
        // OR
        // setMemeImg(memesData.data.memes[randomImg].url)

    }

    return (
        <main>
            <form action="" className="input-form">
                <div className="input-fields">
                    <input className="input-top" placeholder="top text"></input>
                    <input className="input-bottom" placeholder="bottom text"></input>
                </div>
            </form>
            <button onClick={GetMemeImg} className="submit-button">Get a new meme image</button>
            <img src={memeImg} className="meme-img" alt="meme img" />
        </main>
    )
}

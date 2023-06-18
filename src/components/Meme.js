import memesData from "../data/memesData"

export default function Navbar() {

    const getMemeImg = () => {
        const randomImg = Math.floor(Math.random() * memesData.data.memes.length);
        console.log(memesData.data.memes[randomImg].url)
        return memesData.data.memes[randomImg].url
    }
    
    return (
        <main>
            <form action="" className="input-form">
                <div className="input-fields">
                    <input className="input-top" placeholder="top text"></input>
                    <input className="input-bottom" placeholder="bottom text"></input>
                </div>
            </form>
            <button onClick={getMemeImg} className="submit-button">Get a new meme image</button>
        </main>
    )
}

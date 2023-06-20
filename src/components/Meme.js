import { useState } from "react";
import memesData from "../data/memesData"
import html2canvas from "html2canvas";

export default function Navbar() {

    const downloadScreenshot = () => {
        function downloadURI(uri, name) {
            var link = document.createElement("a");

            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            //after creating link you should delete dynamic link
        };
        html2canvas(document.getElementById("meme-screenshot"), {
            logging: true,
            letterRendering: 1,
            useCORS: true,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "meme.png");
        });
    }

    // const [memeImg, setMemeImg] = useState('https://i.imgflip.com/odluv.jpg')

    const [meme, setMeme] = useState({
        topText: "",
        botoomText: "",
        randomImage: "https://i.imgflip.com/odluv.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImg = () => {
        const randomImg = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const { url } = allMemeImages.data.memes[randomImg];
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        // OR
        // setMeme(prevMeme => ({
        //     ...prevMeme,
        //     randomImage: allMemeImages.data.memes[randomImg].url
        // }))
    }

    return (
        <main>
            <form action="" className="input-form">
                <div className="input-fields">
                    <input className="input-top" placeholder="top text"></input>
                    <input className="input-bottom" placeholder="bottom text"></input>
                </div>
            </form>
            {/* <button onClick={getMemeImg} className="submit-button">Get a new meme image</button> */}
            <button onClick={downloadScreenshot} className="submit-button">Download</button>
            <div id='meme-screenshot'>
                <img src={meme.randomImage} onClick={getMemeImg} className="meme-img" alt="meme img" />
            </div>
        </main>
    )
}

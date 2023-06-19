import { createRef, useState } from "react";
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
            letterRendering: 1,
            logging: true,
            letterRendering: 1,
            useCORS: true,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "meme.png");
        });
    }

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
            <button onClick={downloadScreenshot} className="submit-button">Download</button>
            <div id='meme-screenshot'>
                <img src={memeImg} className="meme-img" alt="meme img" />
            </div>
        </main>
    )
}

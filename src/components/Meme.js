import { useState, useEffect } from "react";
import memesData from "../data/memesData"
import html2canvas from "html2canvas";

const url ='https://api.imgflip.com/get_memes';

export default function Navbar() {

    const DownloadScreenshot = () => {
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
            downloadURI(myImage, `${meme.name}`+".png");
        });
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/odluv.jpg",
        name: "Dr Evil Laser"
    })
    console.log(meme.name)

    const [allMemes, setAllMeme] = useState()

        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setAllMeme(data.data.memes))
                .catch((error) => {
                    console.log(error);
                    setAllMeme(memesData.data.memes)
                });
        }, [])

    const GetMemeImg = () => {
        const randomImg = Math.floor(Math.random() * allMemes.length);
        const { url, name } = allMemes[randomImg];
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            name: name
        }))
    }

    const HandleFieldChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <form action="" className="input-form">
                <div className="input-fields">
                    <input
                        className="input-top"
                        placeholder="top text"
                        name="topText"
                        value={meme.topText}
                        onChange={HandleFieldChange}
                    ></input>
                    <input
                        className="input-bottom"
                        placeholder="bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={HandleFieldChange}
                    ></input>
                </div>
            </form>
            {/* <button onClick={GetMemeImg} className="submit-button">Get a new meme image</button> */}
            <button
                onClick={DownloadScreenshot}
                className="submit-button">
                Download
            </button>
            <div id='meme-screenshot'>
                <h2 className="meme-text top">{meme.topText}</h2>
                <img
                    src={meme.randomImage}
                    onClick={GetMemeImg}
                    className="meme-img"
                    alt="meme img"
                />
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
                <small><a
                    className="footer"
                    href="https://github.com/will-s-205/meme-generator"
                    target='_blank'
                    rel="noreferrer">
                    by William Step
                </a></small>
            </div>
        </main>
    )
}

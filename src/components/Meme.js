import { createRef, useState } from "react";
import { createFileName, useScreenshot } from 'use-react-screenshot'
import memesData from "../data/memesData"
import html2canvas from "html2canvas";

export default function Navbar() {

    html2canvas(document.getElementById("meme"), { logging: true, letterRendering: 1, allowTaint: false, useCORS: true }).then(canvas => { })

    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot({
        type: "image/jpg",
        quality: 1.0
    })

    const download = (image, { name = "meme", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

    const downloadScreenshot2 = () => {
        return html2canvas(document.getElementsByClassName('meme-img')).then(function (canvas) {
            document.getElementsByClassName('meme-img').src = canvas.toDataURL();
        });
    }

    const one = () => {
        
        html2canvas(document.getElementById("meme"), {
            letterRendering: 1,
            logging: true,
            letterRendering: 1,
            useCORS: true,
        }).then(function (canvas) {
            var myImage = canvas.toDataURL();
            downloadURI(myImage, "promo.png");
        });

        function downloadURI(uri, name) {
            var link = document.createElement("a");

            link.download = name;
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            //after creating link you should delete dynamic link
        }
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

            <div>
                <button onClick={downloadScreenshot}>Download screenshot</button>
                <div
                    ref={ref}
                    style={{
                        border: "1px solid #ccc",
                        background: 'red',
                        padding: "10px",
                        marginTop: "20px"
                    }}
                >
                    <h1>John Williamson is the Captain<br></br>
                        of New Zealand
                    </h1>.
                </div>
            </div>





            <form action="" className="input-form">
                <div className="input-fields">
                    <input className="input-top" placeholder="top text"></input>
                    <input className="input-bottom" placeholder="bottom text"></input>
                </div>
            </form>
            <button onClick={GetMemeImg} className="submit-button">Get a new meme image</button>
            <button onClick={one} className="submit-button">Download</button>
            <div ref={ref} id='meme'>
                <img crossorigin="anonymous" src={memeImg} className="meme-img" alt="meme img" />
            </div>
        </main>
    )
}

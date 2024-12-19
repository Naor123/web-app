import { use, useEffect, useState } from "react";
import trollFace from "../images/Trollface.png";


function Test() {

  const [memeText, setMemeText] = useState({
    topText: "one does not simply",
    bottomText: "walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [memess, SetMemes ] = useState([])

  function handleChange(event){

    const {value, name} = event.currentTarget
    setMemeText((prev) => ({...prev,[name]: value}))

  }

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => SetMemes(data.data.memes))
  },[])


  function getRandomImage(){
    const randomNum = Math.floor(Math.random() * memess.length)
    setMemeText((prev) => ({...prev,imageUrl:memess[randomNum].url}))

  }

  return (
    <>
      <header className="header">
        <img src={trollFace} />
        <h1>Meme Generator</h1>
      </header>

      <main>
        <div className="form">
          <label>
            <input
              type="text"
              placeholder="one does not simply"
              name="topText"
              onChange={handleChange}
            />
            Top Text
          </label>
          <label >
            Botoom Text
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
            />
          </label>
          <button onClick={getRandomImage}>Get a new meme image</button>
        </div>
        <div className="meme"> 
          <img src={memeText.imageUrl} />
          <span className="top">{memeText.topText}</span>
          <span className="bottom">{memeText.bottomText}</span>
        </div>
      </main>
    </>
  );
}

export default Test;

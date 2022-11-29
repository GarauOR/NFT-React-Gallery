import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Button } from '@mui/material';


function Home(props) {
    const fadeImages = [
        {
            url: 'https://www.nftculture.com/wp-content/uploads/2021/08/60f5f85aa11d21c6d93034fd_oni-012-1024x1024.png',
            descr: "Masked Blonde Futuristic Punk, Yellow Eyes",
            price: 10,
            name: "Future-Punk 1047",
            artist: "John Doe",
        },
        {
            url: 'https://i.redd.it/jsb0qmqvswx61.jpg',
            descr: "Cyberpunk Netrunner Connection NFT",
            price: 0.578,
            name: "Netrunner Connection",
            artist: "Cyberpunk",
        },
        {
            url: 'https://www.cudedesign.co.uk/wp-content/uploads/2021/06/How-To-Lauch-Promote-Your-NFT-Featured-Image-Cude-Design.jpg',
            descr: "Modern World is Glitched",
            price: 2.32,   
            name: "Glitch",
            artist: "Jane Doe",
        },
      ];
      
      const Slideshow = () => {
        return (
          <div className="slide-container">
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}  style={{display: "flex", flexDirection: "column"}}>
                  <div className="image-container" style={{display: "flex", justifyContent: "center"}}>
                    <img src={fadeImage.url}  style={{maxHeight: "600px"}} alt="SliderImage" />
                  </div>
                  <section id="descr">
                    <p>{fadeImage.descr}</p><span class="space"></span>
                    <span id="price">{fadeImage.price}</span>
                    <Button variant='contained'>Add To Cart</Button>
                  </section>
                </div>
              ))}
            </Fade>
          </div>
        )
      }

      return <div style={{marginTop: "120px"}}>{Slideshow()}</div>
}

export default Home;
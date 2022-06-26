
import { React, useState } from 'react';
import './Home.css'
import { Card } from 'react-bootstrap';
import Welcome from './Welcome.js'
import TextLoop from "react-text-loop";
import ImageGallery from 'react-image-gallery'
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import content from './content.js';

function Home() {
  const [welcomeTrigger, setWelcomeTrigger] = useState(true);
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  const slides = [
    { title: 'First item', description: 'Lorem ipsum' },
    { title: 'Second item', description: 'Lorem ipsum' }
  ];
  return (
    <div className='background'>
      <Welcome welcomeTrigger={welcomeTrigger} setWelcomeTrigger={setWelcomeTrigger} />
      {/* <div className='featured'>
        <ImageGallery items={images} />;
      </div> */}
      {/* <div className='featured'>
        <Slider >
          {content.map((item, index) => (
            <div
              key={index}
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="center">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className='featured'>
        Hello skjdgnadign;ajdng */}
      {/* </div> */}

    </div>


  );
}

export default Home;
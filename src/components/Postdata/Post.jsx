import React from 'react'
import Navbar from '../Layout/Navbar'
import '../styles/Post.css'
import post1 from "../../assets/Post/post-1.avif";
import post2 from "../../assets/Post/post-2.jpg"
import post3 from "../../assets/Post/post-3.jpg";
import post4 from "../../assets/Post/post-4.webp";
import post5 from "../../assets/Post/bg-2.png";
import post6 from "../../assets/Post/bg.jpeg";



export const Post = () => {
  return (
    <div>
       <div className="container">
        <div className="heading">
          <h1>HARELA FESTIVAL</h1>
          <p>Traditional and environmentally significant festival of Uttarakhand</p>
        </div>
       </div>

       <div className="text">
        <h6 className=''>What is Harela?</h6>
        <p>Harela is a traditional and environmentally significant festival of Uttarakhand that marks the beginning of the monsoon season and celebrates nature, greenery, and agriculture. The word Harela comes from “Hariyala,” meaning greenery. The festival reflects the close relationship between people and nature in the Himalayan region and symbolizes prosperity, growth, and happiness.</p>
        <h5>In which regions is Harela mainly celebrated?</h5>
        <p>Harela is primarily celebrated in the Kumaon region of Uttarakhand, including districts like Almora, Nainital, Pithoragarh, Champawat, and Bageshwar. However, in recent years, it is being celebrated across the entire state due to increased awareness about environmental protection.
          <ul>
            <li>Mostly celebrated in the Kumaon region.</li>
            <li>Popular in Almora, Nainital, Pithoragarh, and Bageshwar.</li>
            <li>Now celebrated across the whole state.</li>
          </ul>
        </p>
        <h5>When is Harela celebrated?</h5>
        <p>Harela is celebrated during the Hindu month of Shravan (July), usually 10 days before the monsoon rains intensify. In some areas, another Harela is observed during Chaitra (March–April), associated with the spring season and agricultural preparation.</p>
        <h5>Why is Harela celebrated?</h5>
        <p>Harela is celebrated to welcome the rainy season, pray for good rainfall, and ensure a healthy agricultural yield. It also marks important family occasions such as marriages and seasonal transitions. The festival emphasizes respect for nature, forests, and farming traditions that sustain life in the hills.</p>
          <h5>What is the cultural significance of Harela?</h5>
        <p>Harela strengthens family bonds, preserves folk traditions, and keeps agricultural knowledge alive. Folk songs, local rituals, and community gatherings are an important part of the celebration, especially in rural areas.Harela promotes environmental conservation, tree plantation, and sustainable living. It reminds people of the importance of forests in maintaining ecological balance, preventing soil erosion, and preserving water resources in the Himalayan region.
          <ul>
            <li>Promotes tree plantation.
</li>
            <li>Encourages protection of forests.</li>
            <li>Spreads awareness about environmental conservation.</li>
          </ul>
          </p>  
          
        <p>Harela is celebrated to welcome the rainy season, pray for good rainfall, and ensure a healthy agricultural yield. It also marks important family occasions such as marriages and seasonal transitions. The festival emphasizes respect for nature, forests, and farming traditions that sustain life in the hills.Harela is not just a festival but a movement that connects culture, environment, and sustainability. It reflects the wisdom of Uttarakhand’s traditions and offers valuable lessons for the modern world.</p>
       </div>

       <div className='post-image'>
        <h1 >GLIMPES OF HARELA</h1>
        <div className="post-box">
          <div><img src={post1} alt="" /></div>
          <div><img src={post2} alt="" /></div>
          <div><img src={post6} alt="" /></div>
          <div><img src={post4} alt="" /></div>
          <div><img src={post3} alt="" /></div>
          <div><img src={post3} alt="" /></div>
        </div>
       </div>
<div className='post-videos'>
  <h1>VIDEOS OF HARELA</h1>
  <div className="video-grid">
    <div className="video-box">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/G_JmZL4Z2o0?si=PpLkvyyxd65eZ3uj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="video-box">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/hGSCzWk_04w?si=Fg_eiXWJvZXXswbG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="video-box">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/krDmsqg56Lk?si=XiQDC-WrjN3laxD_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <div className="video-box">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hiJ2GDZ8xwg?si=Nn3JbDzfKyMiN1ol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>
       <div className='Discover'>
        <h1>DISCOVER MORE <br />CULTURES</h1>
        <div className="box">
          <h2>01</h2>
          <div>
            <h4>PANDAV DANCE - UTTARAKHAND</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt cumque autem? Sed <br />
             quis eaque cupiditate incidunt doloribus tempora eos nisi sit. Excepturi eius est ipsa deleniti voluptatem reprehenderit nesciunt.</p>
          </div>
          <div>
            <img src={post1} alt="" />
          </div>
          
        </div>
        <div className="box">
          <h2>02</h2>
          <div>
            <h4>HARELA DIWAS - UTTARAKHAND</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt cumque autem? Sed <br />
             quis eaque cupiditate incidunt doloribus tempora eos nisi sit. Excepturi eius est ipsa deleniti voluptatem reprehenderit nesciunt.</p>
          </div>
          <div>
            <img src={post2} alt="" />
          </div>
          
        </div>
        <div className="box">
          <h2>03</h2>
          <div>
            <h4>BASHANT PANCHMI  - UTTARAKHAND</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum deserunt cumque autem? Sed <br />
             quis eaque cupiditate incidunt doloribus tempora eos nisi sit. Excepturi eius est ipsa deleniti voluptatem reprehenderit nesciunt.</p>
          </div>
          <div>
            <img src={post3} alt="" />
          </div>
          
        </div>
        

        <h4 className='post-view'>VIEW ALL POSTS</h4>
       </div>
    </div>
  )
}

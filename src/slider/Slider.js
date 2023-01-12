import SimpleImageSlider from "react-simple-image-slider";
const images = [
    { url: "https://www.planetware.com/wpimages/2019/09/top-places-to-visit-in-the-world-machu-picchu-peru.jpg" },
    { url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-machu-ppichu-gettyimages-629556601-1505338681.jpg?crop=1xw:1xh;center,top&resize=480:*" },
    { url: "https://i.pinimg.com/originals/95/d4/0d/95d40d87ff7db31917ed32c74b617d03.png" },
    { url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-pailon-del-diablo-banos-ecuador-royalty-free-image-1570205205.jpg" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UGVCUvdS4k9Qw_EWxurt-Kc6WTcbpml4BA&usqp=CAU" },
    { url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/most-beautiful-places-in-the-world-gettyimages-1042549972.jpg" },
    { url: "https://www.holidify.com/images/bgImages/GREAT-BARRIER-REEF.jpg" },
  ];
  
  const Slider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={1830}
          height={604}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
        />
      </div>
    );
  }
  export default Slider;
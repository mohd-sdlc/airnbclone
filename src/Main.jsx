import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <div class="px-12 py-12 bg-white">
        <div className="grid md:grid-cols-4 grid-cols-1">
        <Card img1={"img2.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Sindun-myeon, Icheon-si, Gyeonggi Province, South Korea"}/>
        <Card img1={"img3.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Pelkosenniemi, Finland"}/>
        <Card img1={"img4.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Tambon Nong Kae, Chang Wat Prachuap Khiri Khan, Thailand"}/>
        <Card img1={"img5.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"El Nido, Philippines"}/>
        <Card img1={"img1.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Thành phố Nha Trang, Khánh Hòa, Vietnam"}/>
        <Card img1={"img6.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Mueang Chiang Mai District, Chiang Mai, Thailand"}/>
        <Card img1={"img7.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Jokkmokk, Norrbottens län, Sweden"}/>
        <Card img1={"img8.webp"} img2={"img3.webp"} img3={"img4.webp"} img4={"img5.webp"} text={"Volimes, Greece"}/>
        </div>
    </div>
  );
};

export default Main;

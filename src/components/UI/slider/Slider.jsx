import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/ipadprom2kopija-2560x800.webp",
  },
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/macbookprom2kopija2-2560x800.webp",
  },
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/aqarabanner-2560x800.webp",
  },

  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/iphone14uzhevprodazhebanner-2560x800.webp",
  },
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/macbookairm2chipkopija-2560x800.webp",
  },
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/ipad10thgen-2560x800.webp",
  },
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/airpodspro2banner-2560x800.webp",
  },
  {
    url: "https://asiastore.kg/image/cachewebp/catalog/banners/awultrabannerkopija-2560x800.webp",
  },
];

export const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width="100vw"
        height={504}
        images={images}
        showNavs={true}
        autoPlay={true}
        slideDuration={1.5}
      />
    </div>
  );
};
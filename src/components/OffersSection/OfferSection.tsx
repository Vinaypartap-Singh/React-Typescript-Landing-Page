import "./Modules.offerSection.css";

type dataType = {
  image: string;
};

export default function OfferSection() {
  const imagesData: dataType[] = [
    {
      image: "https://shawarmawest.ca/wp-content/uploads/2023/11/1-4.png",
    },
    {
      image: "https://shawarmawest.ca/wp-content/uploads/2023/11/2-5.png",
    },
    {
      image: "https://shawarmawest.ca/wp-content/uploads/2023/11/3-4.png",
    },
    {
      image:
        "https://shawarmawest.ca/wp-content/uploads/2023/11/Shawarma-west-2.png",
    },
    {
      image: "https://shawarmawest.ca/wp-content/uploads/2023/11/5-2.png",
    },
    {
      image: "https://shawarmawest.ca/wp-content/uploads/2023/11/6-2.png",
    },
  ];

  return (
    <div className="mainContainerOffer">
      <div className="imageContainer">
        {imagesData.map(({ image }, index: number) => {
          return (
            <div className="imgHolder" key={index}>
              <img className="offerImage" src={image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

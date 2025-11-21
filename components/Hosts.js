// import react slick
import Slider from "react-slick";
import Image from "next/image";

const Hosts = ({
  listTestimoni = [
    {
      name: "Léo",
      image: "/assets/apto/anfTest.jpg",
      cargo: "Anfitrião",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Léo estará por perto para receber você e sua família com toda a atenção, ajudando no que for preciso para que a experiência de vocês seja tranquila e agradável.",
    },
    {
      name: "Valéria",
      image: "/assets/apto/anfvaleria.png",
      cargo: "Anfitrião",
      country: "Poland",
      rating: "4.5",
      testimoni:
        "Valéria estará por perto para receber você e sua família com todo carinho, auxiliando no que for preciso para que a estadia de vocês seja leve e aconchegante.",
    }
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.cargo}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Hosts;

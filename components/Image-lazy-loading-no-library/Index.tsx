import React from "react";
import Profile from "./Profile";

const Index = () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 3,
      url: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=400",
    },

    {
      id: 5,
      url: "./image/image-5.jpg",
    },
    {
      id: 8,
      url: "./image/image-2.jpg",
    },
    {
      id: 6,
      url: "./image/image-6.jpg",
    },
  ];

  return (
    <div>
      <h3>image lazy-loading</h3>

      {images?.map((image) => {
        return <Profile image={image} key={image.id} />;
      })}
    </div>
  );
};

export default Index;

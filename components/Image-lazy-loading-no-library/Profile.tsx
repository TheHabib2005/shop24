//@ts-nocheck

"use client";
import React, { useEffect, useRef, useState } from "react";
import { decode } from "blurhash";
import ImageWithBlurHash from "@/app/(routes)/cart/page";
import { Blurhash } from "react-blurhash";

const Profile = ({ image }) => {
  const [isView, setisView] = useState(false);

  let ref = useRef();

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(setisView(true), 5000);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [image]);



  return (
    <div>
      {isView ? (
        <img
          ref={ref}
          src={image}
          alt=""
        />
      ) : (
        <div ref={ref}>
          <Blurhash
            hash={"LLIg}xS%?GbH-@xvIVkCPqW=o}j@"}
            width={300}
            height={300}

            punch={1} // Adjust the punch factor as needed
          />
        </div>
      )}

    </div>
  );
};

export default Profile;

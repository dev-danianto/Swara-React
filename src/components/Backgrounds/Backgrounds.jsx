import React from "react";
import { motion } from "framer-motion";

const FloatingBackground = () => {
  const images = [
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/sound-wave.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL3NvdW5kLXdhdmUucG5nIiwiaWF0IjoxNzQyMTAwOTE5LCJleHAiOjE4OTk3ODA5MTl9.k35abQPIqDgIfEU3LxLZtZDKoTN-jMPsZZqHrVtGjao",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/cloud-computing.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL2Nsb3VkLWNvbXB1dGluZy5wbmciLCJpYXQiOjE3NDIxMDA5ODAsImV4cCI6MTg5OTc4MDk4MH0.4Y6X2XT3e7n7f6ldqH540KryUlSCGEGQtWrYC3fBhc0",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/watches.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL3dhdGNoZXMucG5nIiwiaWF0IjoxNzQyMTAxMDk2LCJleHAiOjE4OTk3ODEwOTZ9.iEIETqMlEnDlrSKSjH5E2iY4xgISzMW_zm2iMYtT6YM",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/gift-box.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL2dpZnQtYm94LnBuZyIsImlhdCI6MTc0MjEwMTE2MCwiZXhwIjoxODk5NzgxMTYwfQ.4Rks564ER-ghT16QmS4ZDPzfHjnSgI9qHEQNOrN5OeM",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/smartphone.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL3NtYXJ0cGhvbmUucG5nIiwiaWF0IjoxNzQyMTAxMjMyLCJleHAiOjE4OTk3ODEyMzJ9.ml3aCIqncf2Z-4J3KVkasjngVYr11oUC5VkQulI7bcE",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/shopping-cart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL3Nob3BwaW5nLWNhcnQucG5nIiwiaWF0IjoxNzQyMTAxNDAyLCJleHAiOjE4OTk3ODE0MDJ9.Mz3k335_6ugJLmHcmh-J36VRmyoughZiXAEXSIgytuw",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/headphones.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL2hlYWRwaG9uZXMucG5nIiwiaWF0IjoxNzQyMTAxNTcyLCJleHAiOjE4OTk3ODE1NzJ9.cy5lHZju_13MxrV6SgsfgBJJ8K9dCmww3zIIOfVePWI",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/watches.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL3dhdGNoZXMucG5nIiwiaWF0IjoxNzQyMTAxNjM1LCJleHAiOjE4OTk3ODE2MzV9.EbyVeEAhs5eBtM31D4SlcIDmerVk2ljn9SrfUWwhDMw",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/ball.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL2JhbGwucG5nIiwiaWF0IjoxNzQyMTAxNjc4LCJleHAiOjE4OTk3ODE2Nzh9.9lyfvy4Md3ELdN61m3tG5b9r1XHvW1o3XtJ3Oa5wJPk",
    "https://cpzhalbbnvwmmevzzacy.supabase.co/storage/v1/object/sign/background/tag.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYWNrZ3JvdW5kL3RhZy5wbmciLCJpYXQiOjE3NDIxMDE4MjksImV4cCI6MTg5OTc4MTgyOX0.Zjmk6zcTGKOX2XYGXE5jkZympnzMaIFbPO0UW6OdWUc",
  ];

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}vh`,
    left: `${Math.random() * 100}vw`,
  });

  const getRandomAnimation = () => ({
    y: [0, Math.random() * 100 - 50, 0],
    x: [0, Math.random() * 100 - 50, 0],
    rotate: [0, Math.random() * 360],
    transition: {
      duration: Math.random() * 10 + 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    },
  });

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`floating-image-${index}`}
          className="absolute w-24 h-24 object-cover"
          style={getRandomPosition()}
          animate={getRandomAnimation()}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;

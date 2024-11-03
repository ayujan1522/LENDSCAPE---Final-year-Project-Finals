// import all images from assets/images directory
import img06 from "../all-images/Item-Image/Mountainbike.jpg";
import img02 from "../all-images/Item-Image/Operating Systems.jpg";
import img03 from "../all-images/Item-Image/Study desk.jpg";
import img04 from "../all-images/Item-Image/HeadPhones.jpg";
import img05 from "../all-images/Item-Image/Camera.jpg";
import img01 from "../all-images/Item-Image/laptopStand.png";
const carData = [
  {
    id: 1,
    name: "Laptop Stand",
    imgUrl: img01,
    category: "Accessories",
    price: 5,
    condition: "Like New",
    rentalPeriod: "Per Month",
    description:
      "An ergonomic laptop stand that improves posture and provides better airflow for your laptop during long study sessions.",
  },
  {
    id: 2,
    name: "Textbook: Introduction to Psychology",
    imgUrl: img02,
    category: "Books",
    price: 10,
    condition: "Like New",
    rentalPeriod: "Per Semester",
    description:
      "A comprehensive textbook covering all major topics in psychology. Ideal for students taking introductory courses.",
  },
  {
    id: 3,
    name: "Study Desk",
    imgUrl: img03,
    category: "Furniture",
    price: 15,
    condition: "New",
    rentalPeriod: "Per Month",
    description:
      "A spacious study desk with built-in shelves. Perfect for organizing your study materials and creating a comfortable workspace.",
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    imgUrl: img04,
    category: "Electronics",
    price: 20,
    condition: "Good",
    rentalPeriod: "Per Week",
    description:
      "High-quality noise-cancelling headphones, ideal for studying in noisy environments or enjoying music.",
  },
  {
    id: 5,
    name: "Camera: Canon EOS Rebel",
    imgUrl: img05,
    category: "Electronics",
    price: 50,
    condition: "Good",
    rentalPeriod: "Per Day",
    description:
      "A versatile camera great for photography assignments and capturing memories. Includes a lens and carrying case.",
  },
  {
    id: 6,
    name: "Mountain Bike",
    imgUrl: img06,
    category: "Transport",
    price: 30,
    condition: "Good",
    rentalPeriod: "Per Week",
    description:
      "A sturdy mountain bike perfect for commuting to campus and exploring nearby trails. Comes with a helmet and lock.",
  },
 
];


export default carData;

import React from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Company A",
      quote:
        "Excellent experience working with the company. Highly skilled team of experts provided valuable insights throughout the event.",
      image: "https://picsum.photos/200/200?random=1",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Manager, Company B",
      quote:
        "Extremely satisfied with the company's services for our expo. Impressive ability to provide experts from various fields.",
      image: "https://picsum.photos/200/200?random=2",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "CTO, Company C",
      quote:
        "Company surpassed our expectations in organizing the expo. Team of experts demonstrated extensive knowledge and professionalism.",
      image: "https://picsum.photos/200/200?random=3",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Marketing Manager, Company D",
      quote:
        "Outstanding experience with the company. Provided us with a seamless expo experience and helped us expand our brand visibility.",
      image: "https://picsum.photos/200/200?random=4",
    },
    {
      id: 5,
      name: "Mark Johnson",
      position: "Director, Company E",
      quote:
        "Company's professionalism and dedication were commendable. Went above and beyond to ensure the success of our expo.",
      image: "https://picsum.photos/200/200?random=5",
    },
    {
      id: 6,
      name: "Sarah Adams",
      position: "Sales Manager, Company F",
      quote:
        "Thrilled with the results of our expo, thanks to the company's exceptional services. Provided valuable guidance throughout the process.",
      image: "https://picsum.photos/200/200?random=6",
    },
    {
      id: 7,
      name: "David Wilson",
      position: "Event Coordinator, Company G",
      quote:
        "Pleasure working with the company. Their professionalism, attention to detail, and industry knowledge were invaluable.",
      image: "https://picsum.photos/200/200?random=7",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-8"> */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
        {/* </div> */}
      </div>
    </section>
  );
};

export default TestimonialSection;

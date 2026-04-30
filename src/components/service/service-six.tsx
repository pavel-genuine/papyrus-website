import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Strategy",
    title: "Strategic Planning",
    text: "We set clear objectives and analyze market dynamics to implement tactics that ensure measurable growth and successful evaluation.",
    lists: ["Goals", "Analysis", "Tactics", "Implementation", "Evaluation"],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Insights",
    title: "Communication Planning",
    text: "Our planning focus ensures your message resonates with the right audience while maintaining a robust strategy for crisis and measurement.",
    lists: [
      "Audience Analysis",
      "Messaging Strategy",
      "Media Planning",
      "Crisis Communication",
      "Evaluation and Measurement",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Promotion",
    title: "Advertising",
    text: "Combining creativity with precise targeting to build strong branding that delivers a high ROI and cross-channel consistency.",
    lists: ["Creativity", "Targeting", "Branding", "ROI", "Consistency"],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Design",
    title: "Creative Designs",
    text: "Visual storytelling and imaginative concepts that define your brand identity across both print and digital media landscapes.",
    lists: [
      "Imaginative concepts",
      "Visual storytelling",
      "Branding & identity",
      "Graphic design",
      "Print & digital media",
    ],
  },
  {
    id: 5,
    img: ser_img_1,
    subtitle: "Production",
    title: "Audio Visual & Print Production",
    text: "Utilizing cutting-edge technology and a skilled workforce to ensure quality production and timely delivery of creative solutions.",
    lists: [
      "Quality Production",
      "Timely Delivery",
      "Cutting-edge Technology",
      "Skilled Workforce",
      "Creative Solutions",
    ],
  },
  {
    id: 6,
    img: ser_img_2,
    subtitle: "Media",
    title: "PR & Media Planning and Buying",
    text: "Expert media relations and advertising placement strategies to manage your reputation and maximize your media spend impact.",
    lists: [
      "Media Relations",
      "Press Releases",
      "Crisis Management",
      "Media Planning",
      "Advertising Placement",
    ],
  },
  {
    id: 7,
    img: ser_img_3,
    subtitle: "BTL Marketing",
    title: "Activation",
    text: "Driving direct consumer engagement through brand activations, field marketing, and high-energy promotional events.",
    lists: [
      "Brand Activation",
      "Field Marketing",
      "Promotions",
      "Sampling",
      "Events",
    ],
  },
  {
    id: 8,
    img: ser_img_4,
    subtitle: "Experiential",
    title: "Event",
    text: "Full-scale event management specializing in corporate gatherings, launches, and large-format brand experiences.",
    lists: [
      "Corporate Events",
      "Exhibition Stalls",
      "Launch Ceremonies",
      "Logistics & Planning",
      "On-site Management",
    ],
  },
  {
    id: 9,
    img: ser_img_1,
    subtitle: "Digital",
    title: "Digital & Social Media Marketing",
    text: "Comprehensive social media management and digital advertising driven by content creation and deep analytics.",
    lists: [
      "Social Media Management",
      "Content Creation",
      "Digital Advertising",
      "Social Media Analytics",
      "Community Management",
    ],
  },
];
export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 90 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
    subtitle: "Sketching the brand roadmap",
    title: "Strategic Planning",
    text: "At Papyrus, our strategic planning services are designed to optimize your brand’s online presence and drive results. By conducting in-depth research and leveraging data-driven insights, we craft customized marketing strategies that align with your business goals and target audience. Our team of experts focuses on keyword analysis, competitor benchmarking, and content optimization to ensure maximum search engine visibility. Through continuous monitoring and performance analysis, we adapt our approach to stay ahead of the evolving digital landscape, ultimately boosting your brand’s reach, engagement, and conversions. Trust Papyrus for strategic planning that delivers tangible results and elevates your brand’s success.",
    why_we: "We deliver tailored strategic planning for marketing success.",
    expert: "Our skilled team creates innovative marketing strategies.",
    extra_info:
      "We serve the best planning. At Papyrus, we pride ourselves on delivering the best planning services, meticulously crafting marketing strategies tailored to your brand’s unique needs and objectives.",
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Developing effective communication",
    title: "Communication Planning",
    text: "At Papyrus, we offer customized communication planning services to businesses, utilizing a data-driven approach to deliver tangible results. Our team of experts works closely with clients to understand their unique needs, develop tailored communication plans, and determine the most effective communication channels to reach their target audience. With a focus on building strong relationships and enhancing reputations, we empower clients to communicate effectively and achieve their communication goals.",
    why_we: "We're experts in tailored communication planning services.",
    support: "Exceptional support throughout the planning process.",
    extra_info:
      "We offer top-notch services. We focus on providing exceptional quality communication planning services to empower clients to communicate effectively and achieve their goals.",
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Crafting and promoting ideas",
    title: "Advertising",
    text: "Papyrus offers a 360-advertising service that encompasses various advertising channels, including print, TV, digital, and social media. Our team of experts utilizes a data-driven approach to develop advertising strategies that are tailored to our client’s needs and deliver measurable results. With a focus on achieving advertising objectives, we empower clients to effectively reach their target audience and enhance their brand reputation.",
    why_we: "We are experts in 360 advertising services.",
    support: "Effective advertising support is provided.",
    extra_info:
      "Our coverage areas Papyrus offers comprehensive advertising services across various media channels, including printing media, social media, GDN, LDN, TV programs, drama, and event sponsorship.",
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Creating Preference",
    title: "Creative Designs",
    text: "At Papyrus we offer creative design services that help our clients stand out in their respective industries. Our team of designers uses a collaborative approach to understand our client’s unique needs and preferences, developing tailored designs that effectively communicate their message to their target audience. With a focus on delivering exceptional results, we empower clients to enhance their brand identity and achieve their creative objectives.",
    why_we: "We tailor design solutions for your success.",
    support: "Outstanding design support at all times",
    extra_info:
      "Imagination gets true. Our creative design services bring imagination to life, creating unique and impactful designs that effectively communicate our client’s messages to their target audience.",
  },
  {
    id: 5,
    img: ser_img_1,
    subtitle: "Producing mind blotting Creatives",
    title: "Audio Visual & Print Production",
    text: "At Papyrus we offer audio-visual and print production services that help our clients effectively showcase their brand identity. Our team of experts utilizes state-of-the-art technology and equipment to produce high-quality audio-visual content, including video advertisements and commercials. Additionally, we provide top-notch print production services, such as brochures, flyers, and billboards, using high-quality materials to ensure a lasting impact. With a focus on delivering exceptional results, we empower clients to effectively communicate their message to their target audience through visually stunning content.",
    why_we: "High-quality production solutions for your success.",
    support: "We tailor production solutions for your success.",
    extra_info:
      "We serve the best work. From captivating videos to stunning print materials, our team delivers high-quality and engaging content that captivates audiences and elevates brands.",
  },
  {
    id: 6,
    img: ser_img_2,
    subtitle: "Bringing brands to life",
    title: "PR & Media planning and Buying",
    text: "At Papyrus we offer PR and media buying services to help our clients effectively reach their target audience. Our team of experts works closely with clients to craft compelling narratives that resonate with their audience and develop comprehensive media strategies that maximize visibility. Additionally, we have established strong relationships with leading media outlets, enabling us to negotiate favorable rates for our clients. With a focus on delivering results, we empower clients to effectively communicate their message and achieve their business objectives through our PR and media buying services.",
    why_we:
      "We build effective communication strategies for your business's success.",
    support: "Comprehensive support to ensure your success in communication.",
    extra_info:
      "Established strong relationships with leading media outlets. We leverage our established partnerships with leading media outlets to ensure optimal placements for our clients, delivering impactful results through traditional and digital channels.",
  },
  {
    id: 7,
    img: ser_img_3,
    subtitle: "Creating the brand experience",
    title: "Activation",
    text: "Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience. We drive direct consumer engagement through brand activations, field marketing, and high-energy promotional events.",
    why_we: "Creating high-energy brand experiences.",
    support: "Expert field marketing and activation support.",
    extra_info:
      "Creating the brand experience. Our activation services focus on creating immersive and memorable brand interactions that resonate with your target audience.",
  },
  {
    id: 8,
    img: ser_img_4,
    subtitle: "Driven innovative experiences",
    title: "Event",
    text: "We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time. Full-scale event management specializing in corporate gatherings, launches, and large-format brand experiences.",
    why_we: "Driven innovative experiences that captivate.",
    support: "Full-scale logistics and planning support.",
    extra_info:
      "We design and execute innovative event experiences that bring your brand to the forefront and engage audiences in real-time.",
  },
  {
    id: 9,
    img: ser_img_1,
    subtitle: "Driving Online Success Together",
    title: "Digital & Social Media Marketing",
    text: "At Papyrus we provide digital and social media marketing services to help businesses grow and reach their target audience. We specialize in creating customized digital marketing strategies that include social media management, GDN, LDN advertising, and content creation. Our team of experts uses cutting-edge tools and techniques to deliver measurable results that help our clients stay ahead of the competition. Trust us to help you build an engaging online presence and connect with your customers like never before.",
    why_we: "We maximize online brand visibility and engagement.",
    support: "Expert assistance for successful online marketing campaigns.",
    extra_info:
      "Leverage the latest digital marketing tools. Our digital and social media marketing service helps businesses achieve their goals by utilizing the most cutting-edge tools and techniques to reach and engage their target audience.",
  },
];
export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div
            key={item.id}
            id={`service-${item.id}`}
            className="sv-service-item project-panel-2"
          >
            <div className="row g-0">
              {/* <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div> */}
              <div className="col-xl-12 col-lg-12">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      {/* <span className="sv-service-subtitle">
                        <i>{item.id < 90 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>  */}
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                        <p style={{ marginBottom: "0px", fontWeight: "bold" }}>
                          Why We ?
                        </p>
                        <p>{item?.why_we}</p>
                        {item?.expert && (
                          <div>
                            <p
                              style={{
                                marginBottom: "0px",
                                fontWeight: "bold",
                              }}
                            >
                              Expert Team{" "}
                            </p>
                            <p>{item?.expert}</p>
                          </div>
                        )}
                        {item?.support && (
                          <div>
                            <p
                              style={{
                                marginBottom: "0px",
                                fontWeight: "bold",
                              }}
                            >
                              Support
                            </p>
                            <p>{item?.support}</p>
                          </div>
                        )}

                        <div>
                          <p>{item?.extra_info}</p>
                        </div>
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

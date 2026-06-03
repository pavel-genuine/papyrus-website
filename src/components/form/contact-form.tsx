"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import ErrorMsg from "../error-msg";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required").label("Name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required")
    .label("Email"),
  message: yup.string().required("Message is required").label("Message"),
});

type IProps = {
  btnCls?: string;
};

export default function ContactForm({ btnCls = "" }: IProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    setIsSubmitting(true);
    setStatusMsg(null);

    // EmailJS-এর ড্যাশবোর্ড থেকে পাওয়া আইডিগুলো এখানে বসান
    const SERVICE_ID = "service_pikxpoc";
    const TEMPLATE_ID = "template_wivtvwc";
    const PUBLIC_KEY = "NSd_WHXdGPGamp7Zn";

    // আপনার ফর্মের ডেটা যা টেমপ্লেটের {{name}}, {{email}} এর সাথে মিলবে
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY,
      );

      if (response.status === 200) {
        setStatusMsg({
          type: "success",
          text: "Your message has been sent successfully!",
        });
        reset(); // ফর্মের ফিল্ড খালি করার জন্য
      } else {
        setStatusMsg({
          type: "error",
          text: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusMsg({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} type="text" placeholder="Name" />
        <ErrorMsg msg={errors.name?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register("email")}
          type="text"
          placeholder="Your@mail.com"
        />
        <ErrorMsg msg={errors.email?.message!} />
      </div>

      <div className="cn-contactform-input mb-25">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Tell Us About Your Project"
        ></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>

      {statusMsg && (
        <div
          className="status-message mb-20"
          style={{
            color: statusMsg.type === "success" ? "#2e7d32" : "#d32f2f",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {statusMsg.text}
        </div>
      )}

      <div className="cn-contactform-btn">
        <button
          className={`tp-btn-black-md ${btnCls} w-100`}
          type="submit"
          disabled={isSubmitting}
          style={{
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

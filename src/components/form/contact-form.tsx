"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../error-msg";
import { sendEmail } from "./action"; // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী সঠিক পাথ দিন

type FormData = {
  name: string;
  email: string;
  message: string;
};

// ইমেইল ভ্যালিডেশন সহ Yup স্কিমা
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

    // সার্ভার অ্যাকশন কল
    const result = await sendEmail(data);

    setIsSubmitting(false);

    if (result.success) {
      setStatusMsg({ type: "success", text: result.message });
      reset(); // ফর্মের ইনপুট ফিল্ড খালি করার জন্য
    } else {
      setStatusMsg({ type: "error", text: result.message });
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

      {/* সাবমিট করার পর সাকসেস বা এরর মেসেজ দেখানোর জন্য */}
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

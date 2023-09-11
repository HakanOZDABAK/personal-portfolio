"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contactFormEmail";

const resend = new Resend("re_C9Kv7Mrc_MCZ337K1iuYKiQy59MBeMma7");

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get("senderName");
  const senderSurName = formData.get("senderSurName");
  const senderEmail = formData.get("senderEmail");
  const sendMessage = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(sendMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact <hakanozdabak.dev@resend.dev>",
      to: "hakanozdabak2000@hotmail.com",
      subject: "Message from contact form",
      text:`Name=${senderName}\nSurName=${senderSurName}\nEmail = ${senderEmail}\nMessage = ${sendMessage}`,
      reply_to: "hakanozdabak2000@hotmail.com",
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

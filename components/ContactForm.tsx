"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useColorPicker } from "@/providers/ColorPickerProvider";

const ContactForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const {pickedColor} = useColorPicker();

    const accessKey = process.env.NEXT_PUBLIC_API_KEY; // Replace with your Web3Forms Access Key

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey!,
        settings: {
            from_name: "Acme Inc",
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
        },
        onError: (msg) => {
            setIsSuccess(false);
            setResult(msg);
        },
    });

    return (
        <div
        style={{backgroundColor : pickedColor}}
        className=" md:w-[50%] w-[100%]">
            <h2 className="mb-5 text-2xl font-bold text-center text-white">Send a Message</h2>

            {/* ✅ handleSubmit(onSubmit) is required */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 ml-3 font-medium text-white">
                        Name :
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        style={{color : pickedColor}}
                        className={`w-full px-4 py-3 font-medium transition-colors bg-white border rounded-lg focus:outline-none focus:border-[${pickedColor}]`}
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 ml-3 font-medium text-white">
                        Email Address :
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        style={{color : pickedColor}}
                        className={`w-full px-4 py-3 font-medium transition-colors border rounded-lg focus:outline-none focus:border-[${pickedColor}]`}
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 ml-3 font-medium text-white">
                        Message :
                    </label>
                    <textarea
                        id="message"
                        rows={6}
                        {...register("message", { required: true })}
                        style={{color : pickedColor}}
                        className={`w-full px-4 py-3 md:h-[120px] font-medium transition-colors border rounded-lg focus:outline-none resize-vertical focus:border-[${pickedColor}]`}
                        placeholder="Tell us more about your message..."
                    ></textarea>
                </div>

                <Button
                    type="submit"
                    style={{color : pickedColor}}
                    className="w-full py-3 text-lg font-semibold transition duration-300 bg-white hover:shadow-light"
                >
                    SEND MESSAGE
                </Button>
            </form>

            {/* ✅ Show result message */}
            {result && (
                <p
                    className={`mt-4 text-center font-medium ${isSuccess ? "text-white" : "text-red-400"
                        }`}
                >
                    {result}
                </p>
            )}
        </div>
    );
};

export default ContactForm;
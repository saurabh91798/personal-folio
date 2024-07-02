"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+919770603366",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "saurabh91798@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bengaluru, India",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  const resetForm = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_1d55bhm', 'template_sz6tewd', formData, 'OmuxItnINTI2QyJfn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        resetForm();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert('Failed to send the message, please try again later.');
      });
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit nulla, dolorum earum modi doloribus?</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-col-2 gap-6">
              <Input type="text" name="firstname" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                <Input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                <Input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>
              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="customer">Customer Support</SelectItem>
                    <SelectItem value="prod">Product Analysis</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
              {/* button */}
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-9 xl:mb-0">
            <ul>
              {info.map((info,index)=>{
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md flex items-center justify-center text-accent">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const info = [
  {
    icon: <Phone size={28} />,
    title: "Phone",
    description: "(+44) 792 5578 819",
    href: "tel:+447925578819",
    isLink: true,
  },
  {
    icon: <Mail size={28} />,
    title: "Email",
    description: "art.b.beckett@gmail.com",
    href: "mailto:art.b.beckett@gmail.com",
    isLink: true,
  },
  {
    icon: <MapPin size={28} />,
    title: "Location",
    description: "Swindon, UK",
    isLink: false,
  },
];

const Contact = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xbllawgk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      alert("There was a problem sending your message. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handlePopupClick = () => {
    setShowSuccess(false);
    router.push("/");
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-screen py-6 bg-primary"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
              >
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-text-muted">
                  Have a project in mind? I&apos;m here to help turn your ideas
                  into elegant, user-friendly digital solutions. Drop me a
                  message below, and let&apos;s create something brilliant
                  together.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="firstname"
                    type="text"
                    placeholder="Firstname"
                    required
                    className="bg-secondary border-border hover:border-accent focus:border-accent focus:ring-0 focus:ring-offset-0 placeholder:text-text-muted text-text-primary"
                  />
                  <Input
                    name="lastname"
                    type="text"
                    placeholder="Lastname"
                    required
                    className="bg-secondary border-border hover:border-accent focus:border-accent focus:ring-0 focus:ring-offset-0 placeholder:text-text-muted text-text-primary"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    required
                    className="bg-secondary border-border hover:border-accent focus:border-accent focus:ring-0 focus:ring-offset-0 placeholder:text-text-muted text-text-primary"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    required
                    className="bg-secondary border-border hover:border-accent focus:border-accent focus:ring-0 focus:ring-offset-0 placeholder:text-text-muted text-text-primary"
                  />
                </div>
                {/* select */}
                {/* <Select name="service" required>
                  <SelectTrigger className="w-full bg-secondary border-border hover:border-accent focus:border-accent focus:ring-0 cursor-pointer hover:bg-tertiary transition-all duration-300">
                    <SelectValue
                      placeholder="Select a service *"
                      className="text-text-muted"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-secondary border-border">
                    <SelectGroup>
                      <SelectLabel className="text-text-muted">
                        Select a service
                      </SelectLabel>
                      <SelectItem
                        value="Frontend Development"
                        className="focus:bg-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300"
                      >
                        Frontend Development
                      </SelectItem>
                      <SelectItem
                        value="UI/UX Design"
                        className="focus:bg-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300"
                      >
                        UI/UX Design
                      </SelectItem>
                      <SelectItem
                        value="Digital Branding"
                        className="focus:bg-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300"
                      >
                        Digital Branding
                      </SelectItem>
                      <SelectItem
                        value="Web Optimization"
                        className="focus:bg-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300"
                      >
                        Web Optimization
                      </SelectItem>
                      <SelectItem
                        value="Other"
                        className="focus:bg-tertiary hover:bg-tertiary cursor-pointer transition-all duration-300"
                      >
                        Other Project
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> */}
                {/* textarea */}
                <Textarea
                  name="message"
                  className="h-[200px] bg-secondary border-border hover:border-accent focus:border-accent focus:ring-0 focus:ring-offset-0 placeholder:text-text-muted text-text-primary resize-none"
                  placeholder="Type your message here."
                  required
                />
                {/* btn */}
                <Button
                  type="submit"
                  size="md"
                  className="max-w-40 bg-accent hover:bg-accent-hover text-primary transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  const ItemContent = () => (
                    <>
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-text-muted">{item.title}</p>
                        <h3 className="text-xl text-text-primary">
                          {item.description}
                        </h3>
                      </div>
                    </>
                  );

                  return (
                    <li key={index} className="flex items-center gap-6">
                      {item.isLink ? (
                        <a
                          href={item.href}
                          className="flex items-center gap-6 hover:opacity-80 transition-opacity"
                        >
                          <ItemContent />
                        </a>
                      ) : (
                        <ItemContent />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Custom Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-primary/80 flex items-center justify-center z-50">
          <div className="bg-secondary p-8 rounded-xl max-w-md mx-4 text-center">
            <h3 className="text-2xl text-accent mb-4">
              Message Sent Successfully!
            </h3>
            <p className="text-text-muted mb-6">
              Art will get back to you shortly.
            </p>
            <Button
              onClick={handlePopupClick}
              className="bg-accent hover:bg-accent-hover text-primary transition-colors"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

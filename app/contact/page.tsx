"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email subject and body
    const subject = `Contact Form Submission - ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Service Interested In: ${formData.service || "Not specified"}

Message:
${formData.message}


    `.trim();

    // Encode the subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.contact.email}&su=${encodedSubject}&body=${encodedBody}`;

    // Open Gmail in a new tab
    window.open(gmailUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  // WhatsApp message handler
  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in your services. Could you please provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-16 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's Talk
          </motion.h1>
          <p className="text-lg md:text-xl text-blue-100">
            We're here to help. Send us a message and we'll respond as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg border border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll redirect you to Gmail to
                  send your message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                  >
                    Send via Gmail
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-3">Contact Details</h2>
              <p className="text-gray-600">
                Feel free to reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Phone className="text-blue-600" />,
                  title: "Phone",
                  content: siteConfig.contact.phone,
                  clickable: true,
                  href: `tel:${siteConfig.contact.phone}`,
                },
                {
                  icon: <Mail className="text-blue-600" />,
                  title: "Email",
                  content: siteConfig.contact.email,
                  clickable: true,
                  href: `mailto:${siteConfig.contact.email}`,
                },
                {
                  icon: <MapPin className="text-blue-600" />,
                  title: "Address",
                  content: siteConfig.contact.address,
                  clickable: false,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-4 flex items-start gap-4 border border-blue-100 shadow-sm"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    {item.clickable ? (
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </Card>
              ))}

              <Card className="p-4 flex flex-col gap-2 border border-green-100 shadow-sm">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-gray-600">Reach out to us instantly.</p>
                    <Button
                      onClick={handleWhatsAppClick}
                      size="sm"
                      className="mt-2 bg-green-600 hover:bg-green-700"
                    >
                      Chat Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

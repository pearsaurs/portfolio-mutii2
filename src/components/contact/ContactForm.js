"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { name, email, message });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white border border-pink-100 p-8 rounded-2xl shadow-sm">
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 font-medium">Nama</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamuu"
            required
            className="bg-white border-pink-200 focus:ring-pink-400 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mikasa@ackerman.com"
            required
            className="bg-white border-pink-200 focus:ring-pink-400 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-700 font-medium">Pesan</Label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Holaa! Ada yang ingin kamuu sampaikan?."
            required
            rows={4}
            className="w-full bg-white border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 rounded-md p-3 text-sm resize-none"
          />
        </div>

        <Button 
          type="submit" 
          disabled={submitted}
          className="w-full rounded-full bg-pink-500 hover:bg-pink-600 text-white h-11 text-base transition-colors shadow-sm"
        >
          {submitted ? "Pesan Terkirim!" : "Kirim Pesan"}
        </Button>
      </div>
    </form>
  );
}
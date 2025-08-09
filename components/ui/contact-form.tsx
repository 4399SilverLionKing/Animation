"use client";

import React, { useState } from "react";

export interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ name, email, message });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-sky-100 backdrop-blur">
        ✅ 已发送（示例）。你可以在 onSubmit 中接入真实服务。
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4 text-left">
      <div>
        <label className="mb-1 block text-xs text-neutral-300">姓名 / Name</label>
        <input
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-400 focus:border-sky-300/40"
          placeholder="Asta"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-neutral-300">邮箱 / Email</label>
        <input
          type="email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-400 focus:border-sky-300/40"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-neutral-300">留言 / Message</label>
        <textarea
          rows={4}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-neutral-400 focus:border-sky-300/40"
          placeholder="想聊聊什么？ / What would you like to discuss?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-sky-100 backdrop-blur transition-colors hover:border-white/20 hover:bg-white/20"
      >
        发送 / Send
      </button>
    </form>
  );
};

export default ContactForm;


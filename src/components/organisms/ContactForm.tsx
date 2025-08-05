'use client';

import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '@/config/config';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        config.serviceId,
        config.templateId,
        formRef.current,
        config.publicKey
      );
      setSuccessMessage('Pesan berhasil dikirim!');
      formRef.current.reset();
    } catch (error) {
      setSuccessMessage('Gagal mengirim pesan.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4 bg-white py-8 px-4 rounded md:w-1/2 xl:w-5/12 "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Nama"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Perusahaan
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Perusahaan"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Nomor Telepon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Masukkan nomor telepon"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subjek
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subjek"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Pesan"
          rows={5}
          required
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-primary text-white px-6 py-2 rounded hover:bg-blue-900 uppercase tracking-wide text-sm font-semibold"
          disabled={loading}
        >
          {loading ? 'Mengirim...' : 'Kirim'}
        </button>
      </div>

      {successMessage && (
        <p className="text-center text-sm text-green-600 mt-2">
          {successMessage}
        </p>
      )}
    </form>
  );
}

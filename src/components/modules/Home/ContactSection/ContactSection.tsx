// app/components/ContactSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  portfolioSize: string;
  goals: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactSection() {
  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    portfolioSize: "",
    goals: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [toast, setToast] = useState<string | null>(null);

  // simple validators (no libraries)
  const validators = useMemo(
    () => ({
      name: (v: string) =>
        v.trim().length < 2 ? "Please enter your full name" : "",
      email: (v: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
          ? ""
          : "Enter a valid email address",
      phone: (v: string) =>
        v.trim().length === 0
          ? "Phone is required"
          : /^[0-9+()\-\s]{6,}$/.test(v)
          ? ""
          : "Enter a valid phone number",
      interest: (v: string) =>
        v.trim().length < 2 ? "Tell us what you are interested in" : "",
      portfolioSize: (v: string) =>
        v.trim().length === 0 ? "This field is required" : "",
      goals: (v: string) =>
        v.trim().length < 2 ? "Tell us your investment goal" : "",
    }),
    []
  );

  const validateAll = (): boolean => {
    const e: Errors = {};
    (Object.keys(values) as (keyof FormState)[]).forEach((k) => {
      const msg = validators[k](values[k] || "");
      if (msg) e[k] = msg;
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((s) => ({ ...s, [field]: e.target.value }));
      // live-clear error on change
      if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // no reload
    if (!validateAll()) return;

    // simulate success (keep user in the same section)
    setToast("Thanks! We’ll contact you shortly.");
    setValues({
      name: "",
      email: "",
      phone: "",
      interest: "",
      portfolioSize: "",
      goals: "",
    });
  };

  // auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <section className="relative isolate overflow-hidden py-24">
      {/* Decorative side images (match OG positioning) */}
      <Image
        src="/images/backgrounds/left.avif"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 opacity-90"
        aria-hidden
        priority
      />
      <Image
        src="/images/backgrounds/right.avif"
        alt=""
        width={420}
        height={420}
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-90"
        aria-hidden
        priority
      />

      {/* Toast (top-right) */}
      {toast && (
        <div className="fixed right-5 top-5 z-[60] rounded-xl bg-[#111315] px-4 py-3 text-sm text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]">
          {toast}
        </div>
      )}

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Card */}
        <div className="mx-auto rounded-[28px] border border-white/8 bg-[#121314]/95 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] sm:p-10">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Book Free Consultation
          </h2>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange("name")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange("email")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter your phone"
                value={values.phone}
                onChange={handleChange("phone")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            {/* What Are You Interested In? (text, no dropdown) */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                What Are You Interested In?
              </label>
              <input
                type="text"
                placeholder="Select your services"
                value={values.interest}
                onChange={handleChange("interest")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.interest && (
                <p className="mt-2 text-sm text-red-400">{errors.interest}</p>
              )}
            </div>

            {/* Crypto Portfolio Size (text, no dropdown) */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Crypto Portfolio Size
              </label>
              <input
                type="text"
                placeholder="Select your portfolio size"
                value={values.portfolioSize}
                onChange={handleChange("portfolioSize")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.portfolioSize && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.portfolioSize}
                </p>
              )}
            </div>

            {/* Investment Goals (text, no dropdown) */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Investment Goals
              </label>
              <input
                type="text"
                placeholder="Select your investment goal"
                value={values.goals}
                onChange={handleChange("goals")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.goals && (
                <p className="mt-2 text-sm text-red-400">{errors.goals}</p>
              )}
            </div>

            {/* Submit (full-width on its own row) */}
            <div className="col-span-1 md:col-span-2">
              <button
                type="submit"
                className="
                  mx-auto block rounded-full px-10 py-4 text-base font-semibold text-white
                  [background:linear-gradient(270deg,rgb(6,103,237)_0%,rgb(1,224,34)_100%)]
                  shadow-[0_0_0_1px_rgba(255,255,255,0.10)_inset]
                  transition-all duration-500 ease-in-out
                  hover:[background:linear-gradient(270deg,rgb(1,224,34)_0%,rgb(6,103,237)_100%)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

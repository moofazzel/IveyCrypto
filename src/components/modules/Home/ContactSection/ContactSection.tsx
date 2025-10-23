"use client";

import GradientButton from "@/components/shared/GradientButton";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  portfolioSize: string;
  goals: string;
};

type ToastProps = {
  message: string;
  position?: "right" | "center";
};

type Errors = Partial<Record<keyof FormState, string>>;

/* ---------- Toast (portal) ---------- */
function Toast({ message, position = "right" }: ToastProps) {
  if (!message) return null;
  const pos = position === "center" ? "left-1/2 -translate-x-1/2" : "right-5";

  return createPortal(
    <div
      className={`fixed top-5 ${pos} z-[1000] rounded-xl bg-green-500 px-4 py-3 text-sm text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] ring-1 ring-white/10`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="opacity-90"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2m-1 14l-4-4l1.414-1.414L11 12.172l5.586-5.586L18 8l-7 8z"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>,
    document.body
  );
}

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

  const validators = useMemo(
    () => ({
      name: (v: string) =>
        v.trim().length < 2 ? "Please enter your full name" : "",
      email: (v: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
          ? ""
          : "Enter a valid email address",
      phone: (v: string) =>
        /^\d{6,}$/.test(v) ? "" : "Enter numbers only (min 6 digits)",
      interest: (v: string) =>
        v.trim().length < 2 ? "Tell us what you are interested in" : "",
      portfolioSize: (v: string) =>
        v.trim().length === 0 ? "This field is required" : "",
      goals: (v: string) =>
        v.trim().length < 2 ? "Tell us your investment goal" : "",
    }),
    []
  );

  const validateAll = () => {
    const e: Errors = {};
    (Object.keys(values) as (keyof FormState)[]).forEach((k) => {
      const msg = validators[k](values[k] || "");
      if (msg) e[k] = msg;
    });
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange =
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let val = e.target.value;
      if (field === "phone") val = val.replace(/\D/g, ""); // digits only
      setValues((s) => ({ ...s, [field]: val }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setToast("Succeed. For a quick response DM us on Telegram");
    setValues({
      name: "",
      email: "",
      phone: "",
      interest: "",
      portfolioSize: "",
      goals: "",
    });
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <section className="relative isolate overflow-hidden py-24 bg-[#0C0912]">
      {/* ✅ Success Toast */}
      <Toast message={toast ?? ""} position="right" />
      {/* To center it instead: <Toast message={toast ?? ''} position="center" /> */}

      {/* Side images */}
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

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto rounded-[28px] border border-white/8 bg-[#121314]/95 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] sm:p-10">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Book Free Consultation
          </h2>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
          >
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

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Phone
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter your phone"
                value={values.phone}
                onChange={handleChange("phone")}
                onKeyDown={(e) => {
                  const ok = [
                    "Backspace",
                    "Delete",
                    "ArrowLeft",
                    "ArrowRight",
                    "Tab",
                    "Home",
                    "End",
                  ];
                  if (ok.includes(e.key)) return;
                  if (!/^\d$/.test(e.key)) e.preventDefault();
                }}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

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

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Project Type
              </label>
              <input
                type="text"
                placeholder="Utility Or Meme Project"
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

            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Estimated Launching Time
              </label>
              <input
                type="text"
                placeholder="One hour | One day | etc."
                value={values.goals}
                onChange={handleChange("goals")}
                className="w-full rounded-full border border-white/10 bg-[#16181B] px-5 py-4 text-white placeholder:text-white/40 outline-none shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] focus:border-white/20"
              />
              {errors.goals && (
                <p className="mt-2 text-sm text-red-400">{errors.goals}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2 text-center">
              <button
                type="submit"
                
              >
                <GradientButton className="w-48">
                  <span className="relative z-10">Submit</span>
                </GradientButton>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Next/Image remotePatterns note:
         Make sure next.config.js allows framerusercontent.com images */}
    </section>
  );
}

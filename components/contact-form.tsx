"use client"

import type React from "react"
import { PhoneInput } from "@/components/phone-input"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { BudgetDropdown } from "@/components/budget-dropdown"
import { COUNTRIES } from "@/data/countries"

interface FormData {
  name: string
  organization: string
  email: string
  phone: string
  countryCode: string
  socialLink: string
  budget: string
  services: {
    logoDesign: boolean
    brandIdentity: boolean
    packagingDesign: boolean
    brandConsultation: boolean
    webDesign: boolean
  }
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    phone: "",
    countryCode: "+1",
    socialLink: "",
    budget: "",
    services: {
      logoDesign: false,
      brandIdentity: false,
      packagingDesign: false,
      brandConsultation: false,
      webDesign: false,
    },
    message: "",
  })

  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (service: keyof FormData["services"]) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      alert("Please enter your name")
      return
    }

    if (!formData.organization.trim()) {
      alert("Please enter your organization name")
      return
    }

    if (!formData.email.trim()) {
      alert("Please enter your email")
      return
    }

    if (!formData.phone.trim()) {
      alert("Please enter your phone number")
      return
    }

    if (!formData.socialLink.trim()) {
      alert("Please enter your social link")
      return
    }

    if (!formData.budget) {
      alert("Please select a budget")
      return
    }

    const hasSelectedService = Object.values(formData.services).some((value) => value === true)
    if (!hasSelectedService) {
      alert("Please select at least one service")
      return
    }

    if (!formData.message.trim()) {
      alert("Please enter a message about your project")
      return
    }

    const formElement = e.currentTarget
    const formDataObj = new FormData(formElement)

    const countryData = COUNTRIES.find((c) => c.code === formData.countryCode)
    const phoneWithFlag = `${countryData?.flag || ""} ${formData.countryCode}${formData.phone}`

    formDataObj.set("email", formData.email || "")
    formDataObj.set("phone", phoneWithFlag)
    formDataObj.set("budget", formData.budget)
    formDataObj.set(
      "services",
      Object.entries(formData.services)
        .filter(([, checked]) => checked)
        .map(([service]) => service)
        .join(", "),
    )

    fetch("https://formspree.io/f/mblnejjn", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setShowSuccess(true)
          setFormData({
            name: "",
            organization: "",
            email: "",
            phone: "",
            countryCode: "+1",
            socialLink: "",
            budget: "",
            services: {
              logoDesign: false,
              brandIdentity: false,
              packagingDesign: false,
              brandConsultation: false,
              webDesign: false,
            },
            message: "",
          })
        }
      })
      .catch((error) => console.error("Form submission error:", error))
  }

  const budgetOptions = [
    { label: "$700 - $1,000", value: "$700-$1000" },
    { label: "$1,000 - $5,000", value: "$1000-$5000" },
    { label: "$5,000+", value: "$5000+" },
  ]

  return (
    <section className="min-h-screen bg-background text-secondary py-1 px-3 md:px-6 lg:px-8">
      {showSuccess && (
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center z-50 pointer-events-none">
          <div className="animate-in fade-in slide-in-from-top-8 duration-500 mt-8 bg-[#0dce8d] text-secondary px-8 py-4 rounded-lg font-medium shadow-lg">
            Message sent successfully! We'll get back to you soon.
          </div>
        </div>
      )}

      <div className="max-w-full mx-auto">
        <form onSubmit={handleSubmit} className="lg:space-y-3 space-y-2">
          {/* Name and Organization Row - Standardized heights */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="lg:h-18 w-full h-12 bg-chart-5/10 text-chart-5 rounded-lg border-chart-5/50 focus-visible:ring-2 focus-visible:ring-chart-5/60 focus-visible:border-chart-5/60 placeholder-chart-5/60 lg:placeholder:text-base placeholder:text-sm"
            />
            <Input
              type="text"
              name="organization"
              placeholder="Your Organization Name *"
              value={formData.organization}
              onChange={handleInputChange}
              required
              className="lg:h-18 w-full h-12 bg-chart-5/10 text-chart-5 rounded-lg border-chart-5/50 focus-visible:ring-2 focus-visible:ring-chart-5/60 focus-visible:border-chart-5/60 placeholder-chart-5/60 lg:placeholder:text-base placeholder:text-sm"
            />
          </div>

          {/* Email + Phone Row */}
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-1 lg:gap-4">
            <Input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="lg:h-18 w-full h-12 bg-chart-5/10 text-chart-5 rounded-lg border-chart-5/50 focus-visible:ring-2 focus-visible:ring-chart-5/60 focus-visible:border-chart-5/60 placeholder-chart-5/60 lg:placeholder:text-base placeholder:text-sm"
            />

            <div>
              <PhoneInput
                value={formData.phone}
                onChange={(phone) => setFormData((prev) => ({ ...prev, phone: phone }))}
                onCountryChange={(countryCode) => setFormData((prev) => ({ ...prev, countryCode }))}
              />
            </div>
          </div>

          {/* Social Link and Budget Row */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-4 mb-8 lg:mb-12">
            <Input
              type="text"
              name="socialLink"
              placeholder="Your Social Link *"
              value={formData.socialLink}
              onChange={handleInputChange}
              required
              className="lg:h-18 w-full h-12 bg-chart-5/10 text-chart-5 rounded-lg border-chart-5/50 focus-visible:ring-2 focus-visible:ring-chart-5/60 focus-visible:border-chart-5/60 placeholder-chart-5/60 lg:placeholder:text-base placeholder:text-sm"
            />
            <BudgetDropdown
              value={formData.budget}
              onChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
              options={budgetOptions}
              required
            />
          </div>

          {/* Services Section */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-xl lg:text-2xl font-medium text-chart-5 tracking-tight mb-4">
              What services are you interested in? <span className="text-red-500">*</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.logoDesign}
                  onChange={() => handleCheckboxChange("logoDesign")}
                  className="w-5 h-5 rounded bg-chart-5 border-background cursor-pointer text-background"
                />
                <span className="text-chart-5">Logo design</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.brandIdentity}
                  onChange={() => handleCheckboxChange("brandIdentity")}
                  className="w-5 h-5 rounded border-chart-5/80 cursor-pointer"
                />
                <span className="text-chart-5">Brand identity development</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.packagingDesign}
                  onChange={() => handleCheckboxChange("packagingDesign")}
                  className="w-5 h-5 rounded border-chart-5/80 cursor-pointer"
                />
                <span className="text-chart-5">Packaging design</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.services.brandConsultation}
                  onChange={() => handleCheckboxChange("brandConsultation")}
                  className="w-5 h-5 rounded border-chart-5/80 cursor-pointer"
                />
                <span className="text-chart-5">Brand consultation</span>
              </label>
            </div>
          </div>

          {/* Message Section */}
          <div className="mt-8 lg:mt-12">
            <h3 className="text-xl lg:text-2xl font-medium text-chart-5 tracking-tight mb-4">
              Tell us more about your project <span className="text-red-500">*</span>
            </h3>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="min-h-40 w-full bg-chart-5/10 text-chart-5 rounded-lg border-chart-5/50 focus-visible:ring-2 focus-visible:ring-chart-5/60 focus-visible:border-chart-5/60 placeholder-chart-5/60 lg:placeholder:text-base placeholder:text-sm"
              placeholder="Message *"
            />
          </div>

          {/* Submit Button - Standardized height */}
          <Button
            type="submit"
            className="h-18 w-full bg-[#ff3b00] text-white font-medium py-3 rounded-lg lg:text-lg transition-all duration-300 hover:opacity-90 hover:bg-[#ff3b00]"
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}

// src/data/footerData.js

import AmericanExpress from "@/assets/svg/american-express-convert";
import ApplePay from "@/assets/svg/apple-pay-convert";
import Facebook from "@/assets/svg/FacebookConvert";
import Google from "@/assets/svg/GoogleConvert";
import MasterCard from "@/assets/svg/master-card-convert";
import Mcafee from "@/assets/svg/mcafee-convert";
import Paypal from "@/assets/svg/paypal-convert";
import Pinterest from "@/assets/svg/PinterestConvert";
import Visa from "@/assets/svg/visa-convert";
import YouTube from "@/assets/svg/YouTubeConvert";

export const footerData = {
  newsletter: {
    title1: "Unlock 10% OFF",
    title2: "Your First Order",
    description:
      "Find special gifts made just for you and get a cool 10% OFF your first buy! Make gift-giving super awesome with a sprinkle of extra love!",
    firstNamePlaceholder: "First Name",
    emailPlaceholder: "Email",
    buttonText: "Claim Your 10% OFF",
  },
  footerSections: [
    {
      title: "Information",
      links: [
        { title: "About Us", url: "#" },
        { title: "Track Order", url: "#" },
        { title: "Reviews", url: "#" },
        { title: "Our Blog", url: "Blogs" },
      ],
    },
    {
      title: "Policies",
      links: [
        { title: "Privacy Policy", url: "#" },
        { title: "Cancellation & Modification", url: "#" },
        { title: "Replacement & Refund Policy", url: "#" },
        { title: "Shipping Policy", url: "#" },
        { title: "Payment Method", url: "#" },
        { title: "Terms of Service", url: "#" },
        { title: "Intellectual Property Claim", url: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { title: "Help Center", url: "#" },
        { title: "Contact Us", url: "#" },
        { title: "Size Guide", url: "#" },
        { title: "Valentine Cutoff Date", url: "#" },
      ],
    },
  ],
  contactInfo: [
    { label: "Email 24/7:", value: "support@trendingcustom.com" },
    {
      label: "Live chat:",
      value: "Online from 9.30 AM to 5 PM (PST), Mon-Sun",
    },
    {
      label: "US Warehouse:",
      value: "584 Castro Street #3053, San Francisco, CA 94114",
    },
    { label: "Canada:", value: "422 Richards St, Vancouver, BC V6B 2Z4" },
    {
      label: "Singapore:",
      value: "66 Rangoon Road, #02-66, R66 Apartments, Singapore 218356",
    },
  ],
  socialLinks: [
    { icon: Facebook, url: "#" },
    { icon: YouTube, url: "#" },
    { icon: Pinterest, url: "#" },
    { icon: Google, url: "#" },
  ],
  paymentMethods: [Mcafee, ApplePay, Paypal, Visa, MasterCard, AmericanExpress],
  copyrightText: "© 2025 TrendingCustom ™. Powered by Shopify",
};

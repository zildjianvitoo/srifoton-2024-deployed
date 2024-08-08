import * as icon from "@/lib/icon";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Contact, CircleUser, CalendarRange } from "lucide-react";

const socials = [
  { linkTo: "X", address: "#", icon: <FaXTwitter /> },
  { linkTo: "Facebook", address: "#", icon: <FaFacebook /> },
  { linkTo: "Instagram", address: "#", icon: <FaInstagram /> },
  { linkTo: "Tiktok", address: "#", icon: <FaTiktok /> },
];

const contacts = [
  {
    linkTo: "Whatsapp",
    contact: [
      "+62 882-6911-6903 (Diva Sarasvati Azzahra)",
      "+62 878-6178-1143 (Dimas Putra Mufazzal)",
    ],
    icon: <FaWhatsapp />,
  },
  {
    linkTo: "Email",
    contact: ["srifoton.unsri@gmail.com"],
    icon: <HiOutlineMail />,
  },
];

const routes = [
  { linkTo: "Home", address: "/" },
  { linkTo: "Competition", address: "/competition" },
  { linkTo: "Workshop", address: "/workshop" },
  { linkTo: "Talkshow", address: "/talkshow" },
];

const adminDashboardRoutes = [
  { linkTo: "Overview", address: "/admin-dashboard" },
  { linkTo: "Competition", address: "/admin-dashboard/competition" },
  { linkTo: "Workshop", address: "/admin-dashboard/workshop" },
  { linkTo: "Talkshow", address: "/admin-dashboard/talkshow" },
];

const dashboardRoutes = [
  {
    linkTo: "Account Data",
    address: "/dashboard/account-data",
    icon: <Contact />,
  },
  {
    linkTo: "Personal Data",
    address: "/dashboard/personal-data",
    icon: <CircleUser />,
  },
  {
    linkTo: "Activities",
    address: "/dashboard/activities",
    icon: <CalendarRange />,
  },
];

export { socials, contacts, routes, adminDashboardRoutes, dashboardRoutes };

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

type Contact = {
  name: string;
  phoneNumber?: string;
  email?: string;
  url: string;
};

const contacts: { linkTo: string; contacts: Contact[]; icon: JSX.Element }[] = [
  {
    linkTo: "Whatsapp",
    contacts: [
      {
        name: "Diva Sarasvati Azzahra",
        phoneNumber: "+62 822-6911-6903",
        url: "https://wa.me/6282269116903?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20Srifoton%202024",
      },
      {
        name: "Dimas Putra Mufazzal",
        phoneNumber: "+62 878-6178-1143",
        url: "https://wa.me/6287861781143?text=Halo,%20saya%20ingin%20bertanya%20mengenai%20Srifoton%202024",
      },
    ],
    icon: <FaWhatsapp />,
  },
  {
    linkTo: "Email",
    contacts: [
      {
        name: "Srifoton",
        email: "srifoton.unsri@gmail.com",
        url: "https://mail.google.com/mail/u/0/#search/srifoton.unsri%40gmail.com?compose=DmwnWrRmTNnttBKtFNGgTrkqtpcSJqnCMQVrznpzczsxMgWsxSsxFbhDGCpDlxcNrNRWFnQMfrFL",
      },
    ],
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

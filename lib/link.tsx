import * as icon from "@/lib/icon";
import { Contact, CircleUser, CalendarRange } from "lucide-react";

const socials = [
  { linkTo: "X", address: "#", icon: icon.X },
  { linkTo: "Facebook", address: "#", icon: icon.Facebook },
  { linkTo: "Instagram", address: "#", icon: icon.Instagram },
  { linkTo: "Tiktok", address: "#", icon: icon.Tiktok },
];

const contacts = [
  {
    linkTo: "Whatsapp",
    contact: ["+62 xxxxxxxx", "+62 xxxxxxxx"],
    icon: icon.Whatsapp,
  },
  { linkTo: "Email", contact: ["srifoton.unsri@gmail.com"], icon: icon.Email },
];

const routes = [
  { linkTo: "Home", address: "/" },
  { linkTo: "Competition", address: "/competition" },
  { linkTo: "Workshop", address: "/workshop" },
  { linkTo: "Talkshow", address: "/talkshow" },
];

const dashboardRoutes = [
  { linkTo: "Account Data", address: "/account-data", icon: <Contact /> },
  { linkTo: "Personal Data", address: "/personal-data", icon: <CircleUser /> },
  { linkTo: "Activities", address: "/activities", icon: <CalendarRange /> },
];

export { socials, contacts, routes, dashboardRoutes };

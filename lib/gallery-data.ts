import { ImageType } from "./types";

const allImages: ImageType[] = [
  {
    id: "1",
    title: "Traditional Wedding Ceremony",
    src: "https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/440943472_3794033757587843_7725094828190554523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9uHvpirY9isQ7kNvgEn7-FY&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=AQFfdmnm6BwnN2XorK3n4TN&oh=00_AYDSkNNp1679dWuFLJNg13iU1GhuVgTIRGK0uv2iGklbpA&oe=67511B93",
    category: "weddings",
  },
  {
    id: "2",
    title: "Portrait Session",
    src: "https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/434925782_3777062869284932_3279623480798456709_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GMk_lkm_5PQQ7kNvgH6bqc0&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=An4F-COMpglSkpq2vWbE9xl&oh=00_AYAqHw6DeNLMPv2nS28KHQQR6qmCRhpXSjY83Rm3CcJUEQ&oe=6750F755",
    category: "portraits",
  },
  {
    id: "3",
    title: "Candid Portrait",
    src: "https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/434870854_3779009449090274_4722251829936917619_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NZoHSJEWhQYQ7kNvgHgaa6x&_nc_zt=23&_nc_ht=scontent.fmaa2-3.fna&_nc_gid=AClPXzBfd69ypdrZWX4PVw-&oh=00_AYCOVbmOVhyL55_RZxf7NXBgEeLm0lIYsrh79kNV15az3g&oe=67510802",
    category: "portraits",
  },
  {
    id: "4",
    title: "Family Portrait",
    src: "https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/434857237_3777064689284750_1437828412841186306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BNYJ9qeGXX8Q7kNvgFKOCkl&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=AdiGTr8J4tVX7orzLs4A5Ed&oh=00_AYAqMf-74MgNkxW00g8Oy6PkEaKdIWNpdWF7l-kgzoyG0w&oe=6750F308",
    category: "portraits",
  },
  {
    id: "5",
    title: "Special Event Coverage",
    src: "https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/438301115_3794011954256690_4654920267565675257_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=p5E3Zqc-M0QQ7kNvgGgw2iT&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=ABk-ymVRzQSaOfrWHWr6j58&oh=00_AYCKIGfe-YwdwjHNc-h0eS03-vzKK-O4MIErY-PJwiyS7A&oe=67511AAA",
    category: "events",
  },
  {
    id: "6",
    title: "Wedding Reception",
    src: "https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/440943472_3794033757587843_7725094828190554523_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9uHvpirY9isQ7kNvgEn7-FY&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=Av1N7wzg0vcBpowWv5KRYKX&oh=00_AYD18_we4l9OiH8q76KapTd4nALS8krRkxcividdRSIN5A&oe=6750E353",
    category: "weddings",
  },
];

export const galleryData = {
  all: allImages,
  weddings: allImages.filter((img) => img.category === "weddings"),
  portraits: allImages.filter((img) => img.category === "portraits"),
  events: allImages.filter((img) => img.category === "events"),
};
import { Camera, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2">
              <Camera className="h-6 w-6" />
              <span className="font-bold">SRN Photography</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Professional photography services capturing your precious moments.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold">Studio Hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Monday - Saturday</li>
                <li>9:00 AM - 9:00 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>098092 11883</li>
                <li>Santhosh Nagar</li>
                <li>Sri krishnalayam Complex</li>
                <li>164/8/1, Ettimadai Railway Station Rd</li>
                <li>Tamil Nadu 641112</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Social</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="https://instagram.com/srnphotography_"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@srnphotography_</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtube.com/@storiesofsrn"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>@storiesofsrn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SRN Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
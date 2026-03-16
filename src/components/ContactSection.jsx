import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="mt-10 flex flex-col items-center gap-10">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:amarnadhbodicherla012@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  amarnadhbodicherla012@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+919849312322"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91-9849312322
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="#" target="_blank" rel="noreferrer">
                <Linkedin />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Twitter />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Instagram />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <Twitch />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

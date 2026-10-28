"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePortfolioTheme } from "@/components/theme-provider";
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const { theme } = usePortfolioTheme();
  const iconColor = theme === "gradient-primary" ? "#878787" : "#7413eb";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <Card className="border border-border shadow-xs bg-card transition-all">
        <CardHeader className="border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <Mail className="size-5" style={{ color: iconColor }} />
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              Contact & Connect
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left information col */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Let&apos;s build something exceptional together
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you have an upcoming project, freelance inquiry, or full-time
                engineering opportunity, my inbox is always open.
              </p>

              <div className="space-y-3 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-primary" style={{ color: iconColor }} />
                  <span>Dhaka, Bangladesh · Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-primary" style={{ color: iconColor }} />
                  <span>Response time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="size-4 text-primary" style={{ color: iconColor }} />
                  <a
                    href="mailto:nasifk7220@gmail.com"
                    className="hover:underline font-medium text-foreground"
                  >
                    nasifk7220@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/nasifkmustufakhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full h-8 px-4 rounded-full text-xs font-medium border transition-colors ${
                    theme === "gradient-primary"
                      ? "bg-primary border-primary text-white hover:bg-primary/90"
                      : "border-border bg-background hover:bg-secondary text-foreground"
                  }`}
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="size-3" style={{ color: theme === "gradient-primary" ? "#ffffff" : iconColor }} />
                </a>
              </div>
            </div>

            {/* Right form col */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="p-6 rounded-xl bg-secondary/60 border border-border flex flex-col items-center text-center space-y-3 animate-in fade-in">
                  <CheckCircle className="size-10 text-emerald-500" />
                  <h4 className="text-base font-bold text-foreground">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-sm">
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        Your Name
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-9 text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        Email Address
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-9 text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">
                      Subject
                    </label>
                    <Input
                      required
                      placeholder="Project Opportunity / Hello"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="h-9 text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground">
                      Message
                    </label>
                    <Textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project, idea, or questions..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="text-xs resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 h-9 rounded-full font-semibold gap-2 shadow-xs transition-all"
                  >
                    <Send className="size-3.5" />
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </Button>
                </form>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

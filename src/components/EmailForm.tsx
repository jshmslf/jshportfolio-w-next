// EmailForm.tsx
"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { MdEmail } from "react-icons/md"
import React, { useState } from "react"
import emailjs from "emailjs-com"
import { toast } from "sonner"


function EmailForm() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const form = e.currentTarget;

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
                form,
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
            )

            toast.success("Message sent successfully!");

            form.reset()
            setOpen(false);

        } catch (error) {
            console.error("FAILED... ", error)
            toast.error("Failed to send message. Try again")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <Button className="flex-1 flex items-center justify-center border bg-neutral-950 rounded-lg p-2 cursor-pointer">
                            <MdEmail className="text-accent text-xl" />
                        </Button>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>Email me</TooltipContent>
            </Tooltip>

            <DialogContent className="sm:max-w-[425px] [&>button]:text-neutral-400">
                <DialogHeader>
                    <DialogTitle className="text-neutral-100">Send me an Email</DialogTitle>
                    <DialogDescription>
                        {"Fill out the form below and I’ll get back to you soon."}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={sendEmail} className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name" className="text-neutral-300">Name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="subject" className="text-neutral-300">Subject</Label>
                        <Input id="subject" name="subject" placeholder="What's this about?" required />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="message" className="text-neutral-300">Message</Label>
                        <Textarea id="message" name="message" placeholder="Type your message..." rows={4} required />
                    </div>

                    <DialogFooter className="mt-2">
                        <DialogClose asChild>
                            <Button variant="outline" className="text-neutral-400">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={loading}>{loading ? "Sending..." : "Send"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EmailForm

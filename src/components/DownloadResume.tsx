"use client"

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { IoMdDownload } from "react-icons/io"

export function DownloadResume() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full sm:w-48 h-7 rounded-full font-semibold cursor-pointer">
                    <IoMdDownload /> {"Résumé"}
                </Button>
            </DialogTrigger>

            <DialogContent className="bg-neutral-950">
                <DialogHeader>
                    <DialogTitle className="text-neutral-100">Download Resume?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to download my resume?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex gap-2">
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            className="bg-neutral-900 text-neutral-400 cursor-pointer"
                        >
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        className="cursor-pointer"
                        onClick={() => {
                            const link = document.createElement("a")
                            link.href = "/resume-joshua-verceles.pdf"
                            link.download = "resume-joshua-verceles.pdf"
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                        }}
                    >
                        Continue
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

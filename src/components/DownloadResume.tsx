"use client";

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { IoMdDownload } from "react-icons/io"

export function DownloadResume() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="w-full sm:w-48 h-7 rounded-full font-semibold cursor-pointer">
                    <IoMdDownload /> myResume
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Download Resume?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to download my resume?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => {
                            const link = document.createElement("a")
                            link.href = "/resume-joshua-verceles.pdf" // ✅ direct to pdf file
                            link.download = "resume-joshua-verceles.pdf"
                            document.body.appendChild(link)
                            link.click()
                            document.body.removeChild(link)
                        }}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

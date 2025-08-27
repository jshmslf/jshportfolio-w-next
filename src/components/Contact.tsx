import { BsLinkedin, BsTelegram } from "react-icons/bs";
import { Card, CardContent } from "./ui/card"
import { MdEmail, MdGroups } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const contacts = [
    { icon: <BsLinkedin className="text-accent text-xl" />, link: "https://www.linkedin.com/in/jshmslf/", tooltip: "Connect me here" },
    { icon: <MdEmail className="text-accent text-xl" />, link: "#", tooltip: "Email me here" },
    { icon: <BsTelegram className="text-accent text-xl" />, link: "https://www.t.me/jshmslf", tooltip: "Contact me here" },
]

function Contact() {
    return (
        <Card>
            <CardContent>
                <div className="flex flex-col items-center">
                    {/* Icon */}
                    <div className="border rounded-full p-4 mt-6">
                        <MdGroups className="text-accent text-[4rem] transition-transform duration-300 hover:scale-110 hover:rotate-6" />
                    </div>

                    {/* Texts */}

                    <h1 className="font-black text-2xl mt-3">{"Let's Work Together!"}</h1>
                    <span className="mb-2 text-neutral-500 font-bold mt-[-0.2rem]">Reach me here</span>

                    {/* Contacts */}
                    <div className="flex w-full max-w-sm gap-4">
                        {contacts.map((contact, id) => (
                            <Tooltip key={id}>
                                <TooltipTrigger asChild>
                                    <a
                                        href={contact.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center border bg-neutral-950 rounded-lg p-2"
                                    >
                                        {contact.icon}
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    {contact.tooltip}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default Contact

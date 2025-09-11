import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { FaGithub, FaGraduationCap, FaLanguage, FaMapPin } from "react-icons/fa6";
import { Button } from './ui/button';
import Link from 'next/link';
import Status from './Status';
import TextType from './TextType/TextType';
import { GoArrowSwitch } from 'react-icons/go';
import { DownloadResume } from './DownloadResume';

function ProfileCard() {
    return (
        <Card>
            <CardContent className='flex flex-col items-start'>
                {/* img & txt */}
                <div className='grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4 sm:gap-6 items-stretch'>
                    {/* profile img */}
                    <div className='flex justify-center sm:justify-start'>
                        <Image
                            src="/images/me.png"
                            alt=''
                            width={130}
                            height={130}
                            className='object-cover rounded-xl'
                            priority
                        />
                    </div>

                    {/*  profile txt */}
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col space-y-[-0.4rem]'>
                            <div className='flex flex-row gap-2 flex-wrap'>
                                <span className='text-sm font-medium font-mono'>{"I'm a"}</span>
                                <TextType
                                    text={["Software Developer", "Graphic Artist"]}
                                    typingSpeed={90}
                                    cursorCharacter="_"
                                    cursorClassName='font-mono font-black'
                                    className='text-sm font-bold font-mono'
                                    textColors={['#00fefe']}
                                />
                            </div>
                            <h2 className='font-mono text-2xl sm:text-[2rem] font-semibold'>Joshua Verceles</h2>
                            <p className='font-medium text-xs sm:text-[0.8rem] mt-2 sm:mt-0'>BS in <span className='text-accent'>Computer Science</span></p>
                        </div>

                        {/* description */}
                        <p className='text-[0.72rem] mt-3 sm:mt-0'>Proficient in various programming langauges and focused on building clean, user-friendly interfaces with reliable and efficient code.</p>
                    </div>
                </div>

                {/* tags */}
                <div className='w-full bg-background rounded-md flex flex-wrap items-center p-2 my-3 gap-1'>
                    <Badge variant={'tags'}><FaMapPin className='text-accent' />Pangasinan, Philippines</Badge>
                    <Badge variant={'tags'}><FaLanguage className='text-accent' />Filipino & English</Badge>
                    <Badge variant={'tags'}><FaGraduationCap className='text-accent' />Recently Graduated</Badge>
                </div>

                <div className="flex flex-col w-full space-y-2">
                    {/* Top row: 3 buttons */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center sm:justify-between gap-2 w-full">

                        <Button className="flex-1 sm:w-48 h-7 rounded-full font-semibold text-xs" asChild>
                            <Link href="/art-portfolio">
                                <GoArrowSwitch /> Art Portfolio
                            </Link>
                        </Button>

                        <DownloadResume />

                        <Button className="flex-1 sm:w-48 h-7 rounded-full font-semibold" asChild>
                            <Link href="http://github.com/jshmslf/" target="_blank">
                                <FaGithub /> GitHub
                            </Link>
                        </Button>
                    </div>

                    {/* Bottom-right status */}
                    <div className="flex justify-center md:justify-end w-full mb-[-0.5rem] md:mb-[-0.5rem]">
                        <Status status="available" />
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default ProfileCard

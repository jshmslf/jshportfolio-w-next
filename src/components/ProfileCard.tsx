import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { FaGithub, FaGraduationCap, FaLanguage, FaMapPin } from "react-icons/fa6";
import { Button } from './ui/button';
import Link from 'next/link';
import Status from './Status';

function ProfileCard() {
    return (
        <Card>
            <CardContent className='items-start'>
                <div className='grid grid-cols-[130px_1fr] gap-6 items-stretch'>
                    {/* profile img */}
                    <div className='flex items-start'>
                        <Image
                            src="/images/me.png"
                            alt=''
                            width={130}
                            height={130}
                            className='object-cover rounded-xl'
                        />
                    </div>

                    {/*  profile txt */}
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-col space-y-[-0.4rem]'>
                            <p className='text-sm font-medium text-accent'>Software Developer</p>
                            <h2 className='font-mono text-[2rem] font-semibold'>Joshua Verceles</h2>
                            <p className='font-medium text-[0.8rem]'>BS in <span className='text-accent'>Computer Science</span></p>
                        </div>

                        {/* description */}
                        <p className='text-[0.72rem]'>Proficient in various programming langauges and focused on building clean, user-friendly interfaces with reliable and efficient code.</p>
                    </div>
                </div>

                {/* tags */}
                <div className='w-full bg-background rounded-md flex flex-wrap items-center p-2 my-3 gap-x-3 gap-y-1'>
                    <Badge variant={'tags'}><FaMapPin className='text-accent' />Philippines</Badge>
                    <Badge variant={'tags'}><FaLanguage className='text-accent' />Filipino & English</Badge>
                    <Badge variant={'tags'}><FaGraduationCap className='text-accent' />Recently Graduated</Badge>
                </div>

                <div className='flex items-center justify-between mb-[-0.5rem]'>
                    <Button className='w-48 h-7 rounded-full font-semibold' asChild>
                        <Link href={"http://github.com/jshmslf/"} target='_blank'>
                            <FaGithub />GitHub
                        </Link>
                    </Button>
                    <Status status='working' />
                </div>
            </CardContent>
        </Card >
    )
}

export default ProfileCard

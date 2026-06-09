import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, qualifications, email, devto, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-row items-center justify-center space-x-2 pt-8 xl:flex-col">
            {avatar && (
              <div className="pr-8 xl:pr-0">
                <Image
                  src={avatar}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="dark:border-primary-400 h-30 w-30 rounded-full dark:border-2"
                />
              </div>
            )}
            <div>
              <h3 className="pt-4 pb-2 text-3xl leading-8 font-bold tracking-tight xl:text-2xl">
                {name}
              </h3>
              <div className="text-lg text-gray-500 xl:text-base dark:text-gray-400">
                {occupation}
              </div>
              <div className="text-primary-500 dark:text-primary-400 text-lg xl:text-base">
                {qualifications}
              </div>
              <div className="flex space-x-3 pt-6">
                <SocialIcon kind="mail" href={`mailto:${email}`} />
                <SocialIcon kind="github" href={github} />
                <SocialIcon kind="linkedin" href={linkedin} />
                <SocialIcon kind="devto" href={devto} />
              </div>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

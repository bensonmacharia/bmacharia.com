import Image from './Image'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

const AuthorCard = ({ content }) => {
  const { author, avatar, occupation, company, email, devto, x, linkedin, github, location } =
    siteMetadata
  return (
    <div>
      <div className="flex flex-row items-center justify-center space-x-2 pb-8">
        {avatar && (
          <div className="pr-2 xl:pr-4">
            <Image
              src={avatar}
              alt="avatar"
              width={224}
              height={224}
              className="h-48 w-48 min-w-48 rounded-full dark:border-2 dark:border-primary-400 md:h-52 md:w-52"
            />
          </div>
        )}
        <div>
          <h3 className="pb-2 pt-4  text-2xl font-bold leading-8 tracking-tight sm:text-3xl md:text-4xl">
            {author}
          </h3>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="md:text-md text-base text-primary-500 dark:text-primary-400">
            {company}
          </div>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{location}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="devto" href={devto} />
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="x" href={x} />
          </div>
        </div>
      </div>
      <div className="flex max-w-full flex-col">
        <div className="prose max-w-full pb-8 pt-10 dark:prose-invert xl:text-xl">
          <p>
            A dedicated Security Engineer focused on safeguarding enterprise applications and cloud
            environments through rigorous risk assessments and innovative security solutions.
          </p>
          <div className="py-4">
            <span className="m-2 inline-block rounded-full bg-teal-200 px-2 py-1 text-sm text-teal-900">
              Application Security
            </span>
            <span className="m-2 inline-block rounded-full  bg-indigo-200 px-2 py-1 text-sm text-indigo-900">
              Cloud Security
            </span>
            <span className="m-2 inline-block rounded-full  bg-blue-200 px-2 py-1 text-sm text-blue-900">
              DevSecOps
            </span>
            <span className="m-2 inline-block rounded-full  bg-purple-200 px-2 py-1 text-sm text-purple-900">
              ISO 27001
            </span>
            <span className="m-2 inline-block rounded-full  bg-red-200 px-2 py-1 text-sm text-red-900">
              Red Team
            </span>
            <span className="m-2 inline-block rounded-full  bg-green-200 px-2 py-1 text-sm text-green-900">
              Threat Modeling
            </span>
            <span className="m-2 inline-block rounded-full  bg-orange-200 px-2 py-1 text-sm text-orange-900">
              Security Architecture
            </span>
            <span className="m-2 inline-block rounded-full  bg-fuchsia-200 px-2 py-1 text-sm text-fuchsia-900">
              Vulnerability Assessment
            </span>
            <span className="m-2 inline-block rounded-full  bg-lime-200 px-2 py-1 text-sm text-lime-900">
              Penetration Testing
            </span>
            <span className="m-2 inline-block rounded-full  bg-amber-200 px-2 py-1 text-sm text-amber-900">
              Compliance Management
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard

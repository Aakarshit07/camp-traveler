import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="paddding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image 
              src="/hilink-logo.svg" 
              alt="logo" 
              width={74} 
              height={29} 
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumns title={columns.title} >
                <ul className="regular-14 flex flex-col text-gray-30 gap-4">
                  {columns.links.map((link) => (
                      <Link href="/" key={link}>
                        {link}
                      </Link>
                  ))}
                </ul>
              </FooterColumns>
            ))}   

            <div className="flex flex-col gap-5">
              <FooterColumns title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  href="/"
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"

                >
                  <p className="whitespace-nowrap">
                    {link.label}:
                  </p>
                  <p className="medium-14 text-blue-70 whitespace-nowrap">
                    {link.value}:
                  </p>
                </Link>
              ))}
              </FooterColumns>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumns title={SOCIALS.title}>
                <ul className="regular flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link
                      href="/"
                      key={link}
                    >
                        <Image 
                          src={link} 
                          alt="logo"
                          width={24}
                          height={24} 
                        /> 
                    </Link>
                  ))}
                </ul>
              </FooterColumns>
            </div>
          </div>
        </div>
        <div className="bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">Hiker's Paradise | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnsProps = {
  title: string
  children: React.ReactNode
}

const FooterColumns = ({title, children}: FooterColumnsProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
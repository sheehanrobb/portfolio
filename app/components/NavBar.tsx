import React from "react";
import { Menu,Transition } from "@headlessui/react"
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {FaGithub} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';


const navigation = [
    {name: "Home", href: "http://localhost:3000", current: true},
    {name: "Projects", href: "http://localhost:3000/projects", current: true},
    {name: "About", href: "http://localhost:3000/about", current: true},
    {name: "Contact", href: "http://localhost:3000/contact", current: true},
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

const socials = [
    {name: "GitHub", href: "https://github.com/sheehanrobb", icon: <FaGithub/>},
    {name: "LinkedIn", href: "https://www.linkedin.com/in/sheehanrobb/", icon: <BsLinkedin/>},
]

export default function NavBar() {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-violet-500 text-white' : 'text-grey-300 hover:bg-indigo-500 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        
                      </a>
                    ))}
                  </div>
                </div>
              </div>
        </div>
        <div className="flex flex-1 items-right">
            <div>
                {socials.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        >
                            {item.icon}
                        </a>

                ))}
            </div>

        </div>
        
      </Menu>
    </div>
  )
}




import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon
} from '@heroicons/react/outline'
import MenuItem from './MenuItem'

const menuItems = require('../data/menuItems.json')

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TopMenu = props => {

  const [ urlPath, setUrlPath ] = useState('/')
  const [ isOffice, setIsOffice ] = useState(false)

  useEffect(() => {
    setUrlPath(document.location.pathname)
    setIsOffice(+urlPath.indexOf('/office') === -1)
  })

  return (
    <Popover className="relative max-w-4xl pb-6 mx-auto">
      {({ open }) => (
        <>
          <div className={`${(!isOffice)? "max-w-full": "max-w-5xl"} px-4 mx-auto sm:px-6`}>
            <div className="flex items-center justify-between pt-6 md:justify-center md:space-x-4">
              {/* <div className="flex justify-start">
                <Link href="/">
                  <a>
                    <span className="sr-only">NevaAT Logo</span>
                    <img
                      className="inline w-auto h-12 sm:h-16"
                      src="/images/logo-white.png"
                      alt="NevaAT Logo"
                    />
                  </a>
                </Link>
              </div> */}
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-200 rounded-md hover:text-gray-200 hover:bg-gray-600 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden space-x-8 md:flex">
              {
                menuItems.map(item => <MenuItem href={item.ref} title={item.title} key={`menu_${item.ref}`} />)
              }
              </Popover.Group>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-gray-800 divide-y-2 divide-gray-600 rounded-lg shadow-lg ring-2 ring-gray-100 ring-opacity-10">

              <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <a>
                          <img
                            className="w-auto h-10"
                            src="/images/logo-white.png"
                            alt="NevaAT Logo"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-300 bg-gray-900 rounded-md hover:text-bluegray-500 focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                </div>

                <div className="px-5 py-6 space-y-6">
                  <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                  {
                    menuItems.map(item => <MenuItem href={item.ref} title={item.title} key={`mobilemenu_${item.ref}`} />)
                  }
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default TopMenu
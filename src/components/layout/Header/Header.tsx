"use client";
import HomeLogo from "@/components/logo/home";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence>
      <div className="bg-[#f4f6f6] shadow">
        <Popover className="container mx-auto flex items-center px-6 py-2 h-24 border-b-2 border-gray-300">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
            }}
            className="flex w-56"
          >
            <HomeLogo />
          </motion.div>
          <div className="grow">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="sm:flex items-center justify-center gap-2 md:gap-8 hidden"
            >
              <Link
                href="/examples/dashboard"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  My Events
                </motion.h3>
              </Link>
              <Link
                href="/examples/dashboard"
                className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  My Tickets
                </motion.h3>
              </Link>
              <Link
                href="/examples/dashboard"
                className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Customers
                </motion.h3>
              </Link>
            </motion.div>
          </div>
          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
          <Transition
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-primary">Evently</h1>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-400">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 ">
                  <nav className="grid gap-y-8">
                    <Link
                      href="/"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 px-6"
                    >
                      Home
                    </Link>
                    <Link
                      href="/examples/dashboard"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 px-6"
                    >
                      My Events
                    </Link>
                    <Link
                      href="/examples/dashboard"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-400 px-6"
                    >
                      Customers
                    </Link>
                  </nav>
                </div>
                <div className="mt-6 flex flex-col items-center gap-2 px-6 py-6">
                  <Link
                    href="register"
                    className="rounded bg-slate-400 px-4 text-[16px] font-medium text-primary py-2 focus:ring-2 focus:ring-inset focus:ring-slate-400 w-full"
                  >
                    Sign Up
                  </Link>
                  <Link
                    href="login"
                    className="rounded bg-slate-400 px-4 text-[16px] font-medium text-primary py-2 focus:ring-2 focus:ring-inset focus:ring-slate-400 w-full"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          <div className="hidden sm:block">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-end gap-2 md:gap-8"
            >
              <Link
                href="register"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary mr-2"
              >
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <User />
                </motion.h3>
              </Link>
              <Link
                href="login"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <motion.h3
                  variants={child}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[16px] font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Login
                </motion.h3>
              </Link>
            </motion.div>
          </div>
        </Popover>
      </div>
    </AnimatePresence>
  );
};

export default Header;

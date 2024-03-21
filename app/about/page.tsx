"use client";
import { UserCircle, Mail, MonitorCheck, Rocket } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

const socials = [
  {
    icon: <UserCircle size={20} />,
    label: "Meet Marco",
    text: "Evolve Productive is a one-person consultancy run by me, Marco Nucara. I'll be your dedicated consultant or developer, leveraging 15 years of experience leading and managing engineering teams.",
  },
  {
    icon: <Rocket size={20} />,
    label: "Boost Team Performance",
    text: "I'll help you implement best practices, guide team members' leadership growth, and unlock a high-performing engineering team.",
  },
  {
    icon: <MonitorCheck size={20} />,
    label: "Expert Development",
    text: "Need a hand with smaller projects? I can provide development support using modern frameworks, specializing in TypeScript, React, GraphQL and Design Systems.",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-wrap items-center justify-center min-h-screen w-screen px-4 pt-24 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 xl:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 md:p-16">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white text-center font-display">
                    {s.label}
                  </span>
                  <p className="mt-4 text-sm duration-1000 text-zinc-300">
                    {s.text}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="my-8 text-center animate-fade-in ">
          <Link
            href="/contact"
            className="text-sm text-zinc-300 lg:text-xl text-center"
          >
            Contact me now
          </Link>
        </div>
      </div>
    </div>
  );
}

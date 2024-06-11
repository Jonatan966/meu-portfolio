import Image from "next/image";
import { Techs } from "../techs";
import { Job } from "@/services/notion/list-jobs";

import styles from "./styles.module.css";

interface JobCardProps {
  job: Job;
  isCurrent?: boolean;
}

export function JobCard({ job, isCurrent }: JobCardProps) {
  return (
    <li
      className={`bg-zinc-950 p-4 rounded-md border border-neutral-800 gap-2 ${
        isCurrent ? styles.currentJob : styles.jobCardContainer
      }`}
    >
      <Image
        src={job.imageUrl}
        alt={job.businessName}
        className="w-16 h-w-16 rounded-md"
        style={{
          gridArea: "project-image",
        }}
        width={80}
        height={80}
      />

      <div
        className="flex justify-end items-start"
        style={{
          gridArea: "project-details",
        }}
      >
        <div className="flex flex-col items-end">
          <span className="text-xs bg-white text-black rounded-[0.75rem_0.25rem_0.25rem_0.75rem] px-2 py-1 font-bold">
            {job.period}
          </span>

          <ul className="flex gap-1 mt-2">
            {job.techs.map((tech) => (
              <li className="text-sm text-stone-300" key={`${job.id}-${tech}`}>
                <Image
                  src={Techs[tech]}
                  alt={tech}
                  className="w-8 h-8"
                  width={32}
                  height={32}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col justify-center"
        style={{
          gridArea: "project-main",
        }}
      >
        <h3 className="font-semibold">{job.businessName}</h3>
        <p className="text-stone-300">{job.role}</p>
      </div>
    </li>
  );
}

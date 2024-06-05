import { Job } from "@/services/notion/list-jobs";
import Image from "next/image";
import { Techs } from "./techs";

interface CurrentJobCardProps {
  job: Job;
}

export function CurrentJobCard({ job }: CurrentJobCardProps) {
  return (
    <li className="bg-zinc-950 p-4 rounded-md mt-2 flex gap-4 border border-white md:flex-row flex-col md:col-span-3">
      <div className="flex gap-2">
        <Image
          src={job.imageUrl}
          alt={job.businessName}
          className="w-20 h-20 rounded-md"
          width={80}
          height={80}
        />

        <div className="flex flex-col justify-between h-auto items-start md:items-stretch">
          <span className="text-xs bg-white text-black rounded-xl px-2 py-1 font-bold mb-auto w-fit">
            {job.period}
          </span>
          <h3 className="font-semibold">{job.businessName}</h3>
          <p className="text-sm text-stone-300">{job.role}</p>
        </div>
      </div>

      <ul className="flex my-auto md:ml-auto gap-2">
        {job.techs.map((tech) => (
          <li className="text-sm text-stone-300" key={`${job.id}-${tech}`}>
            <Image
              src={Techs[tech]}
              alt={tech}
              className="w-10 h-10"
              width={40}
              height={40}
            />
          </li>
        ))}
      </ul>
    </li>
  );
}

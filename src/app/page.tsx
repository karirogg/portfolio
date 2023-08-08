import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 gap-8">
        <div className="my-auto grid grid-cols-1 gap-4">
          <h1 className="text-6xl font-josefin-bold">Kári Rögnvaldsson</h1>
          <p className="text-2xl font-josefin">
            B.Sc. Mathematics from the University of Iceland studying M.Sc. Data
            Science at ETH Zürich.
          </p>
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            className="object-cover rounded-2xl"
            src="/img/profile.jpg"
            layout="fill"
            alt="profile"
          />
        </div>
      </div>
      <div className="flex justify-evenly w-full">
        <Button>Projects</Button>
        <Button>Curriculum Vitae</Button>
      </div>
    </main>
  );
}

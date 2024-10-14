import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <div className="absolute inset-0">
        <Image src="/background.webp" alt="Background" layout="fill" objectFit="cover" quality={100} />
      </div>
      <Navbar />
    </section>
  );
}

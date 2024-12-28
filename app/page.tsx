import Image from "next/image";
import { AuthCard } from "@/features/common/components/auth";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900">
      <AuthCard />
    </div>
  );
}

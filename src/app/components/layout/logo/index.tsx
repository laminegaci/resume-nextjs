import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="block">
      <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="logo"
        width={50}
        height={50}
        className="w-10 h-10 md:w-12 md:h-12"
      />
    </Link>
  );
};

export default Logo;

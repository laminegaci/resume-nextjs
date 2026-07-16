import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="block">
      <Image
        src={getImgPath("/images/logo/gml.png")}
        alt="logo"
        width={100}
        height={50}
        className="h-10 md:w-20 md:h-12"
      />
    </Link>
  );
};

export default Logo;

// import { ThemeToggle } from "@/components/ThemeToggle";
// import Link from "next/link";
// import Image from "next/image";
// import pmpl_logo from "public/Pmpl_logo.png";

// const Navbar: React.FC = () => {
//   return (
//     <div className="sticky top-0 z-40 flex h-16 items-center border-b dark:border-gray-800 bg-blue-50 px-4 shadow-sm sm:px-6 lg:px-8">
//       <div className="flex items-center gap-x-4">
//         <Link href="/">
//           <div className="flex items-center cursor-pointer">
//             {/* <Image
//               src={pmpl_logo}
//               alt="Poddar Motors Pvt. Ltd. Logo"
//               className="h-10 w-10 rounded-full"
//             /> */}
//             <span className="text-xl font-bold text-gray-800 ml-2">
//               Poddar Motors Pvt. Ltd.
//             </span>
//           </div>
//         </Link>
//       </div>

//       <div
//         className="h-6 w-px bg-gray-900/10 dark:bg-gray-100/10"
//         aria-hidden="true"
//       />

//       <div className="flex items-center gap-x-4 flex-grow">
//         <div className="flex-grow" />
//         <div className="flex items-center gap-x-4 lg:gap-x-6">
//           <Link href="/services">
//             <div className="nav-link cursor-pointer text-gray-800">
//               Services
//             </div>
//           </Link>
//           <Link href="/about-us">
//             <div className="nav-link cursor-pointer text-gray-800">
//               About Us
//             </div>
//           </Link>
//           <Link href="/contact-us">
//             <div className="nav-link cursor-pointer text-gray-800">
//               Contact Us
//             </div>
//           </Link>
//           <Link href="/sell-your-car">
//             <div className="nav-link cursor-pointer text-gray-800">
//               Sell Your Car
//             </div>
//           </Link>
//         </div>
//       </div>

//       <div
//         className="h-6 w-px bg-gray-900/10 dark:bg-gray-100/10"
//         aria-hidden="true"
//       />

//       <ThemeToggle />
//     </div>
//   );
// };

// export default Navbar;

import Link from "next/link";
import Image from "next/image";
import logo_pmpl from "public/logo_pmpl.png";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 z-40 flex h-16 items-center border-b bg-blue-50 px-4 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-x-4">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image
              src={"/logo_pmpl.png"}
              width={50}
              height={50}
              alt="Poddar Motors Pvt. Ltd. Logo"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex items-center cursor-pointer">
              <span className="text-xl font-bold text-gray-800 ml-2">
                Poddar Motors Pvt. Ltd.
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div
        className="h-6 w-px bg-gray-900/10 dark:bg-gray-100/10"
        aria-hidden="true"
      />

      <div className="flex items-center gap-x-4 flex-grow">
        <div className="flex-grow" />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Link href="/services">
            <div className="nav-link cursor-pointer text-gray-800">
              Services
            </div>
          </Link>
          <Link href="/about-us">
            <div className="nav-link cursor-pointer text-gray-800">
              About Us
            </div>
          </Link>
          <Link href="/contact-us">
            <div className="nav-link cursor-pointer text-gray-800">
              Contact Us
            </div>
          </Link>
          <Link href="/sell-your-car">
            <div className="nav-link cursor-pointer text-gray-800">
              Sell Your Car
            </div>
          </Link>
        </div>
      </div>

      <div
        className="h-6 w-px bg-gray-900/10 dark:bg-gray-100/10"
        aria-hidden="true"
      />
    </div>
  );
};

export default Navbar;

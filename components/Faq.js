import Link from "next/link";

const Faq = () => {
  return (
    <div id="faq" className="py-10 mt-16 mb-1000 ">
      <h1 className="mb-10 font-mono text-6xl font-semibold text-center text-gray-100 uppercase">
      Frequently Asked Questions
      </h1>
      <div className="container relative max-w-6xl py-3 pt-16 mx-auto mt-20 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 transform shadow-lg gradient-background -skew-y-6sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="font-mono text-3xl font-bold text-white ">
                FAQ
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <ul className="space-y-2 list-disc">
                  <li className="flex items-start">    
                    <p className="ml-2 text-blue">
                        Who are we ?
                    </p>
                    
                  </li>
                  <li className="flex items-start">    
                    <p className="ml-2 text-white">
                        We are Man of the Forest
                    </p>
                    
                  </li>
                  <li className="flex items-start">
                    
                    <p className="ml-2 text-blue">
                    What do we want to do ?
                    </p>
                  </li>
                  <li className="flex items-start">
                   
                    <p className="ml-2 text-white">
                    We want to dominate web3 with a strong community.
                    </p>
                  </li>
                  <li className="flex items-start">
                   
                    
                    <p className="ml-2 text-blue">
                    How are we going to do?
                    </p>
                  </li>
                  <li className="flex items-start">
                    
                    <p className="ml-2 text-white">Collaborations, nftpasses, physical products, dao and with you.</p>
                  </li>
                 
                </ul>
              </div>
              <div className="pt-6 text-white leading-6 font-extralight sm:text-lg sm:leading-7">
                <p>
                  {}
                </p>
                <p className="mt-8">
                  <Link href="#main">
                    <a className="text-cyan-600 hover:text-cyan-700">
                      {" "}
                      Let&#39;s mint
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Faq;
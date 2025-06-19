export default function Footer() {
  return (
    <footer className="bg-sleeks-black text-white py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* South Africa */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-white">South Africa</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Cape Town</p>
              <a 
                href="mailto:hq@sleeks.co.za" 
                className="text-sm hover:text-white transition-colors duration-200 block"
              >
                hq@sleeks.co.za
              </a>
            </div>
          </div>

          {/* Business Contacts */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-white">Business</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="text-sm text-gray-400">Partners:</p>
                <a 
                  href="mailto:partners@sleeks.co.za" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  partners@sleeks.co.za
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Press Team:</p>
                <a 
                  href="mailto:press@sleeks.co.za" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  press@sleeks.co.za
                </a>
              </div>
            </div>
          </div>

          {/* UK */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-white">UK</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Manchester</p>
              <a 
                href="mailto:uk@sleeksappeal.com" 
                className="text-sm hover:text-white transition-colors duration-200 block"
              >
                uk@sleeksappeal.com
              </a>
            </div>
          </div>

          {/* USA */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-white">USA</h3>
            <div className="space-y-2 text-gray-300">
              <p className="text-sm">Phoenix, AZ</p>
              <a 
                href="mailto:us@sleeksappeal.com" 
                className="text-sm hover:text-white transition-colors duration-200 block"
              >
                us@sleeksappeal.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

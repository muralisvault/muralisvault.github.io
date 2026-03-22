import { Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a
                href="mailto:muralinehru@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                muralinehru@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-300">
                Tiruchirappalli, Tamil Nadu<br />
                India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Blog</h3>
              <a
                href="https://indiravihar.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                indiravihar.blogspot.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dr. Muralidharan Murugesan. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with passion for education and technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

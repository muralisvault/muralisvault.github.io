import { Camera } from 'lucide-react';

interface PhotographyProps {
  isVisible: boolean;
}

const Photography = ({ isVisible }: PhotographyProps) => {
  const placeholderImages = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section
      id="photography"
      className="py-20 bg-slate-50"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Photography
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Capturing moments through the lens - A creative journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((num) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="text-slate-500 mx-auto mb-2" size={48} />
                  <p className="text-slate-600 font-semibold">Photo {num}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;

import { Award, Users } from 'lucide-react';

interface TeachingProps {
  isVisible: boolean;
}

const Teaching = ({ isVisible }: TeachingProps) => {
  return (
    <section
      id="teaching"
      className="py-20 bg-white"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Teaching & Training
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-4 rounded-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Resource Person</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">B.H.E.L (Bharat Heavy Electricals Limited)</h4>
                <p className="text-gray-700">
                  Conducted specialized training programs for professionals in advanced computing topics
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Various Universities</h4>
                <p className="text-gray-700">
                  Guest lectures and workshops on AI, Python, and Machine Learning across multiple institutions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-lg shadow-lg border-t-4 border-blue-600">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 p-4 rounded-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Training Impact</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-5xl font-bold text-blue-600 mb-2">30+</p>
                <p className="text-gray-700 font-semibold">Years of Teaching Excellence</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600 mb-2">1000+</p>
                <p className="text-gray-700 font-semibold">Students Mentored</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-gray-700 font-semibold">Workshops Conducted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;

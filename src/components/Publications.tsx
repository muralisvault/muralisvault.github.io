import { FileText, Presentation, Users } from 'lucide-react';

interface PublicationsProps {
  isVisible: boolean;
}

const Publications = ({ isVisible }: PublicationsProps) => {
  const publications = [
    {
      title: 'Optimization of Cache Size',
      year: '2017',
      type: 'Research Paper',
      description: 'Comprehensive study on cache optimization techniques for improved system performance'
    }
  ];

  const talks = [
    {
      title: 'Active Member - Chennaipy',
      description: 'Regular contributor and speaker at Chennai Python User Group meetings',
      icon: Users
    },
    {
      title: 'PyConf Hyderabad 2026',
      description: 'Upcoming participation in one of India\'s premier Python conferences',
      icon: Presentation
    }
  ];

  return (
    <section
      id="publications"
      className="py-20 bg-white"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Publications & Talks
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <FileText className="text-blue-600" size={28} />
              Research Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-slate-900">{pub.title}</h4>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pub.year}
                    </span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">{pub.type}</p>
                  <p className="text-gray-700">{pub.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 flex items-center gap-2">
              <Presentation className="text-blue-600" size={28} />
              Community Engagement
            </h3>
            <div className="space-y-4">
              {talks.map((talk, index) => {
                const Icon = talk.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{talk.title}</h4>
                        <p className="text-gray-700">{talk.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;

import { Building2, Clock } from 'lucide-react';

interface AcademicProps {
  isVisible: boolean;
}

const Academic = ({ isVisible }: AcademicProps) => {
  const experiences = [
    {
      year: '1985 - 2023',
      duration: '38 Years',
      title: 'Associate Professor & Head',
      institution: 'Nehru Memorial College',
      location: 'Tiruchirappalli, Tamil Nadu',
      description: 'Led the Department of Computer Science, nurturing generations of computer science professionals and researchers.'
    }
  ];

  const specializations = [
    {
      title: 'Artificial Intelligence',
      description: 'Deep expertise in AI algorithms, machine learning paradigms, and intelligent systems'
    },
    {
      title: 'Python Programming',
      description: 'Advanced proficiency in Python for data science, web development, and automation'
    },
    {
      title: 'Machine Learning',
      description: 'Extensive knowledge in supervised and unsupervised learning methodologies'
    },
    {
      title: 'Weblog Mining',
      description: 'Research specialization in extracting meaningful patterns from web data'
    }
  ];

  return (
    <section
      id="academic"
      className="py-20 bg-slate-50"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Academic Experience
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <Clock className="text-blue-600 mx-auto mb-2" size={32} />
                    <p className="text-2xl font-bold text-slate-900">{exp.year}</p>
                    <p className="text-blue-600 font-semibold">{exp.duration}</p>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Building2 size={20} />
                    <span className="font-semibold">{exp.institution}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">
            Areas of Specialization
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h4>
                <p className="text-gray-700">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;

import { BookOpen, Brain, Camera } from 'lucide-react';

interface AboutProps {
  isVisible: boolean;
}

const About = ({ isVisible }: AboutProps) => {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          About Me
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over three decades of distinguished service in higher education, I have dedicated my career to shaping young minds and advancing the field of Computer Science. As a seasoned Educator and Administrator, I've witnessed and contributed to the remarkable evolution of technology education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My academic journey culminated in a Ph.D. in Computer Science from Bharathidasan University, where I specialized in Weblog Mining. This research background has fueled my passion for emerging technologies and data-driven insights.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond the classroom, I am deeply passionate about Python programming, Artificial Intelligence, and the art of Photography. These interests converge in my continuous pursuit of knowledge and creative expression.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Educator</h3>
                  <p className="text-gray-700">
                    38 years of excellence in teaching and mentoring students in Computer Science
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Brain className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Researcher</h3>
                  <p className="text-gray-700">
                    Ph.D. in Computer Science specializing in Weblog Mining and AI
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Camera className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Creative</h3>
                  <p className="text-gray-700">
                    Passionate photographer capturing moments and perspectives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Calendar, MapPin, Award, GraduationCap, Code, ShieldCheck, Wrench } from "lucide-react";
import { Server } from "lucide-react";

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      position: 'Software Engineering Intern',
      organization: 'Power Learn Project Africa',
      duration: '4 months',
      description: 'Developed a telemedicine application using MySQL, Node.js, HTML, and CSS that improved healthcare accessibility. Enhanced skills in full-stack development, teamwork, and innovative problem-solving.',
      icon: <Server className="w-6 h-6 text-blue-500" />
    },
    {
      id: 2,
      position: 'Frontend Developer',
      organization: 'Self Taught Projects',
      duration: '3 months',
      description: 'Created multiple web applications with modern UI/UX principles using React, JavaScript, and CSS. Focused on responsive design and user experience optimization.',
      icon: <Code className="w-6 h-6 text-purple-500" />
    },
    {
      id: 3,
      position: 'Quality Analyst Trainee',
      organization: 'Qace Academy',
      duration: '2 months',
      description: 'Performed comprehensive testing of web applications, documented bugs, and collaborated with developers. Gained expertise in manual/automated testing with Selenium and JIRA.',
      icon: <ShieldCheck className="w-6 h-6 text-green-500" />
    },
    {
      id: 4,
      position: 'Technical Support',
      organization: 'UON IT Department',
      duration: '3 months',
      description: 'Provided IT support for university staff and students, troubleshooting hardware/software issues and maintaining systems. Developed strong technical communication skills.',
      icon: <Wrench className="w-6 h-6 text-orange-500" />
    }
  ];

  const certifications = [
    "Cypress & Manual Testing Expertise",
    "JIRA Project Management",
    "Agile Testing Methodologies",
    "React.js & Next.js Development",
    "Node.js Backend Development"
  ];

  return (
    <section id="experience" className="py-10 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="relative">
              {workExperience.map((work) => (
                <div key={work.id} className="relative mb-12 last:mb-0">
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600/30 to-purple-600/30 hidden md:block"></div>
                  <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  <div className="md:ml-16 bg-gradient-to-br from-gray-950 to-gray-900/40 rounded-2xl p-8 border border-gray-900 hover:shadow-xl transition-all duration-300 group">
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#ddd6cb]/20 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform flex-shrink-0">
                        {work.icon}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                            {work.duration}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-[#ddd6cb] mb-2">
                          {work.position}
                        </h4>

                        <p className="text-blue-600 font-medium mb-3 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {work.organization}
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                          {work.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#f4f4f4] rounded-2xl p-8 border border-gray-900">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Bachelor of Science in Information Technology</h4>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Dedan Kimathi University of Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Certifications & Skills</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-8">Professional Highlights</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">12+</div>
                <div className="text-sm opacity-90">Months Total Experience</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-90">Bugs Identified & Fixed</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Test Coverage Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

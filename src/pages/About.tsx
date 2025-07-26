
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import PhotoGallery from '@/components/PhotoGallery';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, MessageSquare, Heart, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  // State for all editable content
  const [pageTitle, setPageTitle] = useState("About Y-Peace");
  const [pageSubtitle, setPageSubtitle] = useState("A global movement powered by youth and driven by purpose");
  const [valuesTitle, setValuesTitle] = useState("Our Core Values");
  const [valuesSubtitle, setValuesSubtitle] = useState("These values guide everything we do and shape how we work with communities worldwide.");
  const [missionTitle, setMissionTitle] = useState("Mission Statement");
  const [missionText, setMissionText] = useState("Positively impact the lives of youth by advancing sustainable, community-based solutions that empower, create opportunity, and exemplify shared human values.");
  const [visionTitle, setVisionTitle] = useState("Vision Statement");
  const [visionText, setVisionText] = useState("A world where youth are supported, empowered, and engaged to create a peaceful and prosperous future for themselves and their community.");
  const [messagingTitle, setMessagingTitle] = useState("Our Message");
  const [messagingSubtitle, setMessagingSubtitle] = useState("How we communicate our purpose and impact to the world");
  const [teamTitle, setTeamTitle] = useState("Our Leadership Team");
  const [teamSubtitle, setTeamSubtitle] = useState("Meet the diverse leaders driving Y-Peace forward with expertise and passion.");

  // State for values
  const [unityTitle, setUnityTitle] = useState("Unity in Diversity");
  const [unityDesc, setUnityDesc] = useState("Embracing and celebrating the richness of diverse cultures, beliefs, and backgrounds worldwide.");
  const [empowermentTitle, setEmpowermentTitle] = useState("Empowerment");
  const [empowermentDesc, setEmpowermentDesc] = useState("Equipping individuals and communities with the tools, knowledge, and resources to drive positive change.");
  const [collaborationTitle, setCollaborationTitle] = useState("Collaboration");
  const [collaborationDesc, setCollaborationDesc] = useState("Building strong partnerships across sectors, cultures, and generations to address global challenges.");
  const [sustainabilityTitle, setSustainabilityTitle] = useState("Sustainability");
  const [sustainabilityDesc, setSustainabilityDesc] = useState("Ensuring environmental, economic, and social well-being for current and future generations.");
  const [peaceTitle, setPeaceTitle] = useState("Peace and Justice");
  const [peaceDesc, setPeaceDesc] = useState("Advocating for peaceful coexistence, human rights, and just societies for all people everywhere.");
  const [legacyTitle, setLegacyTitle] = useState("Legacy");
  const [legacyDesc, setLegacyDesc] = useState("Leaving a lasting, positive impact on future generations through transformative action today.");

  // State for team roles
  const [ceoTitle, setCeoTitle] = useState("CEO & Founder");
  const [ceoDesc, setCeoDesc] = useState("Leading strategic vision and global partnerships");
  const [ceoBackground, setCeoBackground] = useState("Background in international development and youth advocacy");
  const [presidentTitle, setPresidentTitle] = useState("President");
  const [presidentDesc, setPresidentDesc] = useState("Overseeing program implementation and community engagement");
  const [presidentBackground, setPresidentBackground] = useState("Expert in sustainable development and project management");
  const [boardTitle, setBoardTitle] = useState("Board Members");
  const [boardDesc, setBoardDesc] = useState("Diverse expertise in governance, finance, and social impact");
  const [boardBackground, setBoardBackground] = useState("Committed to transparent and effective leadership");

  const values = [
    { icon: Globe, title: unityTitle, setTitle: setUnityTitle, description: unityDesc, setDescription: setUnityDesc },
    { icon: Lightbulb, title: empowermentTitle, setTitle: setEmpowermentTitle, description: empowermentDesc, setDescription: setEmpowermentDesc },
    { icon: Users, title: collaborationTitle, setTitle: setCollaborationTitle, description: collaborationDesc, setDescription: setCollaborationDesc },
    { icon: Heart, title: sustainabilityTitle, setTitle: setSustainabilityTitle, description: sustainabilityDesc, setDescription: setSustainabilityDesc },
    { icon: MessageSquare, title: peaceTitle, setTitle: setPeaceTitle, description: peaceDesc, setDescription: setPeaceDesc },
    { icon: Target, title: legacyTitle, setTitle: setLegacyTitle, description: legacyDesc, setDescription: setLegacyDesc }
  ];

  // State for taglines and messages
  const [tagline1, setTagline1] = useState("Together for change. Powered by youth.");
  const [tagline2, setTagline2] = useState("Where Peace Meets Action.");
  const [tagline3, setTagline3] = useState("Global Goals. Local Power.");
  const [tagline4, setTagline4] = useState("Backing the Voices That Move the World.");
  const [tagline5, setTagline5] = useState("Mobilizing Hope. Funding Impact.");

  const [message1, setMessage1] = useState("Y Peace is a global movement empowering youth to lead the charge on urgent issues.");
  const [message2, setMessage2] = useState("We don't just advocate — we activate.");
  const [message3, setMessage3] = useState("Our mission is rooted in the SDGs, but driven by people.");
  const [message4, setMessage4] = useState("We serve as a bridge between global donors and local solutions.");
  const [message5, setMessage5] = useState("Peace is more than a goal. It's a movement.");

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="gradient-brand py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <EditableText value={pageTitle} onChange={setPageTitle} className="text-5xl md:text-6xl font-bold mb-6" as="h1">
            {pageTitle}
          </EditableText>
          <EditableText value={pageSubtitle} onChange={setPageSubtitle} className="text-xl md:text-2xl opacity-90" as="p">
            {pageSubtitle}
          </EditableText>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText value={valuesTitle} onChange={setValuesTitle} className="text-4xl font-bold mb-4 text-gray-800" as="h2">
              {valuesTitle}
            </EditableText>
            <EditableText value={valuesSubtitle} onChange={setValuesSubtitle} className="text-xl text-gray-600 max-w-3xl mx-auto" as="p">
              {valuesSubtitle}
            </EditableText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <EditableText value={value.title} onChange={value.setTitle} className="text-xl font-semibold mb-4 text-gray-800" as="h3">
                      {value.title}
                    </EditableText>
                    <EditableText value={value.description} onChange={value.setDescription} className="text-gray-600 leading-relaxed" as="p" multiline>
                      {value.description}
                    </EditableText>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <EditableText value={missionTitle} onChange={setMissionTitle} className="text-3xl font-bold text-gray-800" as="h2">
                    {missionTitle}
                  </EditableText>
                </div>
                <EditableText value={missionText} onChange={setMissionText} className="text-gray-700 text-lg leading-relaxed" as="p" multiline>
                  {missionText}
                </EditableText>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Globe className="h-12 w-12 text-secondary mb-4" />
                  <EditableText value={visionTitle} onChange={setVisionTitle} className="text-3xl font-bold text-gray-800" as="h2">
                    {visionTitle}
                  </EditableText>
                </div>
                <EditableText value={visionText} onChange={setVisionText} className="text-gray-700 text-lg leading-relaxed" as="p" multiline>
                  {visionText}
                </EditableText>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Achieve It */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">How We Achieve It</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Y-Peace works around the world, funding projects, programs and initiatives that support and uplift youth, 
              helping to provide them with a voice, opportunity, and agency over their lives and within their communities 
              rooted in compassion, honesty, patience, resilience and respect.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed">
              Our business model is that of a partner and facilitator, where we positively impact individuals and 
              communities by providing expertise and the resources to scale sustainable solutions.
            </p>
          </div>

          <div className="space-y-12">
            {/* Education & Opportunity */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Education & Opportunity</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Y-Peace supports programs that build skills and development opportunities for youth, including 
                      school-based or extracurricular activities, so that youth can lead with purpose and make informed 
                      decisions to uplift their lives and the communities they live in.
                    </p>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">Supports SDG: 4 (as well 1, 5, 8, 10, 17)</p>
                      <p className="font-semibold text-gray-800 mb-2">Types of programs:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Afterschool activities that support social values development (sports, arts, etc.)</li>
                        <li>School curriculum and activities that promote shared human values and peace</li>
                        <li>Mentorships, scholarships, and exchange programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Food, Health & Nutrition */}
            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Food, Health & Nutrition</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Programs and initiatives that support physical and mental health through access to and understanding 
                      of nutritious foods, clean water, sanitation, hygiene (WASH), and medical care.
                    </p>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">Supports SDGs: 2, 3, & 6 (as well as 10 & 17)</p>
                      <p className="font-semibold text-gray-800 mb-2">Types of programs:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>School feeding and nutrition programs (e.g., school lunch, community gardens)</li>
                        <li>Water, sanitation, and hygiene (WASH) programs</li>
                        <li>Access to basic health services and health-related skills and education (physical and mental health)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environment & Community */}
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-accent/20">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Environment & Community</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      A safe and healthy community and environment are essential for youth; thus Y-Peace supports programs 
                      and initiatives that work to build safe and healthy communities and address the causes and impacts of climate change.
                    </p>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">Supports SDGs: 11 & 13 (as well as 14, 15, 16, & 17)</p>
                      <p className="font-semibold text-gray-800 mb-2">Types of programs:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Youth driven/engaged community environmental initiatives</li>
                        <li>Youth conflict management and life skills programs</li>
                        <li>Mentorships</li>
                        <li>Youth focused pro-peace initiatives that bring diverse community members together</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-purple-200">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Creative, community led solutions that are durable and sustainable are required to meet the needs of youth, 
                      especially when youth driven; Y-Peace invests in the development and scaleup of innovative solutions.
                    </p>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-800 mb-2">Supports SDGs: 1-17</p>
                      <p className="font-semibold text-gray-800 mb-2">Types of programs:</p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Youth focused and/or youth driven innovation initiatives that aim to develop sustainable solutions benefiting youth</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainable Development Goals */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Sustainable Development Goals</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Y-Peace's programs are strategically aligned with the United Nations Sustainable Development Goals, 
              ensuring our impact contributes to global efforts for a better world by 2030.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Primary SDGs we focus on */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">No Poverty</h3>
                <p className="text-sm text-gray-600">Economic empowerment and opportunity creation</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Zero Hunger</h3>
                <p className="text-sm text-gray-600">Food security and nutrition programs</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Good Health</h3>
                <p className="text-sm text-gray-600">Physical and mental health support</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality Education</h3>
                <p className="text-sm text-gray-600">Educational opportunities and skill development</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Gender Equality</h3>
                <p className="text-sm text-gray-600">Equal opportunities for all genders</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Clean Water</h3>
                <p className="text-sm text-gray-600">Water, sanitation & hygiene programs</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">11</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Sustainable Cities</h3>
                <p className="text-sm text-gray-600">Safe and healthy communities</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">13</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Climate Action</h3>
                <p className="text-sm text-gray-600">Environmental initiatives and awareness</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">16</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Peace & Justice</h3>
                <p className="text-sm text-gray-600">Conflict resolution and peacebuilding</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">17</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Partnerships</h3>
                <p className="text-sm text-gray-600">Global cooperation and collaboration</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 inline-block">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Global Impact Alignment</h3>
                </div>
                <p className="text-gray-700 text-lg max-w-2xl">
                  Our comprehensive approach ensures that every Y-Peace initiative contributes meaningfully 
                  to the UN's 2030 Agenda for Sustainable Development, creating lasting change that benefits 
                  youth and communities worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Monitoring & Evaluation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Monitoring & Evaluation</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Results-Based Management</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Every Y-Peace project and program is managed utilizing a results-based management approach, 
                  incorporating a comprehensive results framework and theory of change, together with key 
                  performance indicators to measure results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Formal M&E Process</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A formal Monitoring and Evaluation (M&E) process is used to track the progress of every project, 
                  program, and initiative to assess effectiveness, identify areas for improvement, and inform future decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Messaging Framework */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText value={messagingTitle} onChange={setMessagingTitle} className="text-4xl font-bold mb-4 text-gray-800" as="h2">
              {messagingTitle}
            </EditableText>
            <EditableText value={messagingSubtitle} onChange={setMessagingSubtitle} className="text-xl text-gray-600" as="p">
              {messagingSubtitle}
            </EditableText>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Taglines */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tagline Options</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <EditableText value={tagline1} onChange={setTagline1} className="text-lg font-medium text-gray-700" as="p">
                    "{tagline1}"
                  </EditableText>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <EditableText value={tagline2} onChange={setTagline2} className="text-lg font-medium text-gray-700" as="p">
                    "{tagline2}"
                  </EditableText>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <EditableText value={tagline3} onChange={setTagline3} className="text-lg font-medium text-gray-700" as="p">
                    "{tagline3}"
                  </EditableText>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <EditableText value={tagline4} onChange={setTagline4} className="text-lg font-medium text-gray-700" as="p">
                    "{tagline4}"
                  </EditableText>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <EditableText value={tagline5} onChange={setTagline5} className="text-lg font-medium text-gray-700" as="p">
                    "{tagline5}"
                  </EditableText>
                </div>
              </div>
            </div>

            {/* Key Messages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Messages</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <EditableText value={message1} onChange={setMessage1} className="text-gray-700 leading-relaxed" as="p">
                    {message1}
                  </EditableText>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <EditableText value={message2} onChange={setMessage2} className="text-gray-700 leading-relaxed" as="p">
                    {message2}
                  </EditableText>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <EditableText value={message3} onChange={setMessage3} className="text-gray-700 leading-relaxed" as="p">
                    {message3}
                  </EditableText>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <EditableText value={message4} onChange={setMessage4} className="text-gray-700 leading-relaxed" as="p">
                    {message4}
                  </EditableText>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <EditableText value={message5} onChange={setMessage5} className="text-gray-700 leading-relaxed" as="p">
                    {message5}
                  </EditableText>
                </div>
              </div>
            </div>
          </div>

          {/* Messaging Framework */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Who We Are</h4>
                <p className="text-sm text-gray-700">A global movement powered by youth and driven by purpose.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-secondary mb-2">What We Do</h4>
                <p className="text-sm text-gray-700">Platform and funding mechanism for SDG-aligned grassroots organizations.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-accent mb-2">How We Do It</h4>
                <p className="text-sm text-gray-700">Through partnerships, mobilization, funding, and storytelling.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-pink-50 border-pink-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-pink-600 mb-2">Why It Matters</h4>
                <p className="text-sm text-gray-700">Bridging the gap between resources and local initiatives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText value={teamTitle} onChange={setTeamTitle} className="text-4xl font-bold mb-4 text-gray-800" as="h2">
              {teamTitle}
            </EditableText>
            <EditableText value={teamSubtitle} onChange={setTeamSubtitle} className="text-xl text-gray-600" as="p">
              {teamSubtitle}
            </EditableText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <EditableText value={ceoTitle} onChange={setCeoTitle} className="text-xl font-semibold mb-2 text-gray-800" as="h3">
                  {ceoTitle}
                </EditableText>
                <EditableText value={ceoDesc} onChange={setCeoDesc} className="text-gray-600 mb-4" as="p">
                  {ceoDesc}
                </EditableText>
                <EditableText value={ceoBackground} onChange={setCeoBackground} className="text-sm text-gray-500" as="p">
                  {ceoBackground}
                </EditableText>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <EditableText value={presidentTitle} onChange={setPresidentTitle} className="text-xl font-semibold mb-2 text-gray-800" as="h3">
                  {presidentTitle}
                </EditableText>
                <EditableText value={presidentDesc} onChange={setPresidentDesc} className="text-gray-600 mb-4" as="p">
                  {presidentDesc}
                </EditableText>
                <EditableText value={presidentBackground} onChange={setPresidentBackground} className="text-sm text-gray-500" as="p">
                  {presidentBackground}
                </EditableText>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <EditableText value={boardTitle} onChange={setBoardTitle} className="text-xl font-semibold mb-2 text-gray-800" as="h3">
                  {boardTitle}
                </EditableText>
                <EditableText value={boardDesc} onChange={setBoardDesc} className="text-gray-600 mb-4" as="p">
                  {boardDesc}
                </EditableText>
                <EditableText value={boardBackground} onChange={setBoardBackground} className="text-sm text-gray-500" as="p">
                  {boardBackground}
                </EditableText>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Community in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact we're making together across the globe through the dedication of our volunteers, partners, and communities.
            </p>
          </div>
          
          <PhotoGallery 
            photos={[
              '/lovable-uploads/245cd578-06b5-4567-8a27-61c87a0a00f9.png',
              '/lovable-uploads/756f9252-9112-44b5-9268-cb245ff3acc0.png',
              '/lovable-uploads/b6d35217-15ba-459e-b397-bc429c0b36c2.png',
              '/lovable-uploads/0bebf5dd-0059-4fc3-a7e3-11712acf4217.png',
              '/lovable-uploads/3ceb3060-0c81-4787-a5dd-7dd4b9864975.png',
              '/lovable-uploads/2062b8c9-a011-404e-a2a5-a669f85521fa.png',
              '/lovable-uploads/e145e15a-7d5f-4a94-9e40-6907bb8d659e.png',
              '/lovable-uploads/1e248404-77d9-49b2-a3d2-bd19944141b9.png'
            ]}
            className="mb-8"
          />
          
          <div className="text-center">
            <p className="text-gray-600 italic">
              From environmental action to community service, from advocacy to education - these moments capture the spirit of Y-Peace in action.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

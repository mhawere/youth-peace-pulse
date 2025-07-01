
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, MessageSquare, Heart, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  // State for all editable content
  const [pageTitle, setPageTitle] = useState("About Y-Peace");
  const [pageSubtitle, setPageSubtitle] = useState("A global movement powered by youth and driven by purpose");
  const [valuesTitle, setValuesTitle] = useState("Our Core Values");
  const [valuesSubtitle, setValuesSubtitle] = useState("These values guide everything we do and shape how we work with communities worldwide.");
  const [missionTitle, setMissionTitle] = useState("Mission Statement");
  const [missionText, setMissionText] = useState("To mobilize and empower young people worldwide by connecting them to the resources, platforms, and partnerships needed to advance the United Nations Sustainable Development Goals through advocacy, funding, and community-led action.");
  const [visionTitle, setVisionTitle] = useState("Vision Statement");
  const [visionText, setVisionText] = useState("A peaceful and united world where youth lead the way in solving the planet's most urgent challenges—from climate action to social justice—by turning shared values into global impact.");
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

      <Footer />
    </div>
  );
};

export default About;

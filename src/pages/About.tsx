
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
  const [pageSubtitle, setPageSubtitle] = useState("Youth for Peace | Empowering youth globally to create a peaceful, sustainable, and prosperous future");
  const [valuesTitle, setValuesTitle] = useState("Our Core Values");
  const [valuesSubtitle, setValuesSubtitle] = useState("These values guide everything we do and shape how we work with communities worldwide.");
  const [missionTitle, setMissionTitle] = useState("Mission");
  const [missionText, setMissionText] = useState("To empower and support youth and their communities to foster peace, sustainability, and prosperity—through diplomacy, advocacy, climate action, interfaith cooperation, education, and community service.");
  const [visionTitle, setVisionTitle] = useState("Vision");
  const [visionText, setVisionText] = useState("A world where youth are supported, empowered, and engaged to create a peaceful, sustainable, and prosperous future for themselves and their communities.");
  const [messagingTitle, setMessagingTitle] = useState("Our Message");
  const [messagingSubtitle, setMessagingSubtitle] = useState("How we communicate our purpose and impact to the world");
  const [teamTitle, setTeamTitle] = useState("Our Leadership Team");
  const [teamSubtitle, setTeamSubtitle] = useState("Meet the diverse leaders driving Y-Peace forward with expertise and passion.");

  // State for values (aligned with investor presentation)
  const [empathyTitle, setEmpathyTitle] = useState("Empathy");
  const [empathyDesc, setEmpathyDesc] = useState("We listen before we act.");
  const [collaborationTitle, setCollaborationTitle] = useState("Collaboration");
  const [collaborationDesc, setCollaborationDesc] = useState("Peace is built together.");
  const [sustainabilityTitle, setSustainabilityTitle] = useState("Sustainability");
  const [sustainabilityDesc, setSustainabilityDesc] = useState("Protecting our shared home.");
  const [innovationTitle, setInnovationTitle] = useState("Innovation");
  const [innovationDesc, setInnovationDesc] = useState("New ideas for new challenges.");
  const [integrityTitle, setIntegrityTitle] = useState("Integrity");
  const [integrityDesc, setIntegrityDesc] = useState("We stand for what's right, always.");
  const [empowermentTitle, setEmpowermentTitle] = useState("Empowerment");
  const [empowermentDesc, setEmpowermentDesc] = useState("Youth are not the future; they are the present.");

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
    { icon: Heart, title: empathyTitle, setTitle: setEmpathyTitle, description: empathyDesc, setDescription: setEmpathyDesc },
    { icon: Users, title: collaborationTitle, setTitle: setCollaborationTitle, description: collaborationDesc, setDescription: setCollaborationDesc },
    { icon: Globe, title: sustainabilityTitle, setTitle: setSustainabilityTitle, description: sustainabilityDesc, setDescription: setSustainabilityDesc },
    { icon: Lightbulb, title: innovationTitle, setTitle: setInnovationTitle, description: innovationDesc, setDescription: setInnovationDesc },
    { icon: Target, title: integrityTitle, setTitle: setIntegrityTitle, description: integrityDesc, setDescription: setIntegrityDesc },
    { icon: MessageSquare, title: empowermentTitle, setTitle: setEmpowermentTitle, description: empowermentDesc, setDescription: setEmpowermentDesc }
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
          <EditableText value={pageSubtitle} onChange={setPageSubtitle} className="text-xl md:text-2xl opacity-90 mb-8" as="p">
            {pageSubtitle}
          </EditableText>
          <p className="text-lg opacity-80 italic max-w-3xl mx-auto">
            "We build bridges of understanding to turn division into dialogue, and dialogue into development."
          </p>
        </div>
      </section>

      {/* Why Peace Matters Now */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Peace Matters Now</h2>
            <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
              "Peace is a prerequisite for opportunity."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-4">600M+</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Youth in Fragile Contexts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 600 million youth live in areas where peace is fragile and their future is uncertain.
                </p>
                <p className="text-sm text-gray-500 mt-4 italic">- UNDP</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-secondary mb-4">1 in 4</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Violence & Instability</h3>
                <p className="text-gray-600 leading-relaxed">
                  One in four youth live in conflict zones. Conflict limits the future of one-quarter of all youth.
                </p>
                <p className="text-sm text-gray-500 mt-4 italic">- Saferworld</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-4">9 in 10</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Youth Exclusion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nine in ten youth feel unheard in peace decisions. Most young people remain excluded from shaping peace.
                </p>
                <p className="text-sm text-gray-500 mt-4 italic">- World Economic Forum</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 italic max-w-4xl mx-auto">
              "We strongly believe that peace is the first step of development and well-being. Because where there is peace, there is possibility."
            </p>
          </div>
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

      {/* Who We Are */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Y-Peace is an international, youth-focused organization and implementation partner working at the intersection of peacebuilding, sustainability, and innovation. We invest in and scale youth-driven initiatives that advance peace, promote coexistence, and build climate resilience—pairing flexible funding, expertise, and collaboration with a global network of changemakers.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-6 leading-relaxed">
              Our model blends funding, facilitation, and capacity-building, ensuring that young people have the voice, opportunity, and agency to shape their own futures and strengthen their communities.
            </p>
          </div>

          {/* Strategic Pillars */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Strategic Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <MessageSquare className="h-10 w-10 text-primary mb-3" />
                    <h4 className="text-xl font-bold text-gray-800 mb-3">1. Advocacy & Voice</h4>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Strengthen the role of youth in global and local peace and climate discourse—through international convenings, interfaith dialogue, policy engagement, and awareness campaigns.
                  </p>
                  <p className="text-sm font-semibold text-gray-800">SDGs: 16, 10, 13, 17</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Lightbulb className="h-10 w-10 text-secondary mb-3" />
                    <h4 className="text-xl font-bold text-gray-800 mb-3">2. Global Mobilization & Education</h4>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Equip young people with the knowledge, skills, and platforms to lead as peacebuilders and climate stewards—via leadership academies, research, exchanges, and digital learning.
                  </p>
                  <p className="text-sm font-semibold text-gray-800">SDGs: 4, 13, 16, 17</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Users className="h-10 w-10 text-accent mb-3" />
                    <h4 className="text-xl font-bold text-gray-800 mb-3">3. Volunteering & Community Engagement</h4>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Turn youth activism into tangible community impact through programs in health, education, humanitarian response, and environmental protection.
                  </p>
                  <p className="text-sm font-semibold text-gray-800">SDGs: 3, 4, 11, 13</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Areas of Work */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Areas of Work</h3>
            <div className="space-y-8">
              {/* Education & Opportunity */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">Education & Opportunity</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Develop skills and expand access to education and mentorship so youth can lead with purpose and create lasting community change.
                      </p>
                      <p className="text-sm font-semibold text-gray-800">Supports SDGs: 4, 1, 5, 8, 10, 17</p>
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
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">Food, Health & Nutrition</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Advance youth physical and mental well-being through nutrition, clean water, sanitation, and health education.
                      </p>
                      <p className="text-sm font-semibold text-gray-800">Supports SDGs: 2, 3, 6, 10, 17</p>
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
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">Environment & Community</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Promote safe, healthy, and climate-resilient communities through youth-led environmental action and social cohesion.
                      </p>
                      <p className="text-sm font-semibold text-gray-800">Supports SDGs: 11, 13, 14, 15, 16, 17</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Innovation & Sustainability */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-purple-200">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">Innovation & Sustainability</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Invest in creative, community-led, and youth-driven solutions that generate lasting peace and prosperity.
                      </p>
                      <p className="text-sm font-semibold text-gray-800">Supports SDGs: 1–17</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Business Model */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Business Model</h3>
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Y-Peace operates as a partner, funder, and facilitator, providing:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-primary/10 mt-1">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Flexible Capital</h5>
                      <p className="text-gray-700">To fund and co-finance youth-driven programs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-secondary/10 mt-1">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Capacity Building</h5>
                      <p className="text-gray-700">To strengthen partners and youth organizations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-accent/10 mt-1">
                      <Lightbulb className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Research & Policy Influence</h5>
                      <p className="text-gray-700">To connect local innovation to global change</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-purple-100 mt-1">
                      <MessageSquare className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Advisory Support</h5>
                      <p className="text-gray-700">Through experts in diplomacy, faith, environment, and youth development</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Revenue Streams include core contributions, managed program funds, partner fees, and technical services—all reinvested into mission delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Impact Framework</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              All Y-Peace initiatives are aligned with the UN Sustainable Development Goals (SDGs) and guided by Results-Based Management (RBM) principles—ensuring that every investment yields measurable outcomes in peace, equity, sustainability, and inclusion.
            </p>
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

      {/* Sustainable Development Goals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Sustainable Development Goals</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Y-Peace aligns with the United Nations Sustainable Development Goals to create lasting impact worldwide.
            </p>
          </div>
          
          <div className="text-center">
            <img 
              src="/lovable-uploads/47fad560-1a6b-41da-a6c8-b47c910ca37a.png" 
              alt="The 17 United Nations Sustainable Development Goals"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

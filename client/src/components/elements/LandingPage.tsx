import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cable,
  FileText,
  PanelsTopLeftIcon,
  PencilIcon,
  SearchIcon,
  Shield,
} from "lucide-react";
import Header from "./Header";

const LandingPage = () => {
  return (
    <div className="h-screen overflow-x-hidden bg-background">
      <Header />
      <section className="h-screen grid place-items-center">
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="bg-secondary font-semibold px-5 text-sm shadow-inner  py-2 text-foreground rounded-full">
            Qomal is dead!
          </div>
          <h1 className="text-foreground space-y-2 text-5xl  font-extrabold text-center">
            <p>Talk to your documents</p>
            <p>with Qomal</p>
          </h1>
          <h1 className="text-foreground text-xl  font-semibold opacity-80 text-center">
            Use our advanced AI systems to ask questions about your documents
            <br />
            and get descriptive answers to them in realtime.
          </h1>
          <Button size={"lg"} className="px-6">
            <p>Get Started Now</p> <ArrowRight className="ml-3" />{" "}
          </Button>
        </div>
      </section>
      <Features />
    </div>
  );
};

export default LandingPage;

const Features = () => {
  const featuresData = [
    {
      icon: <FileText className="text-primary h-6  w-6 mb-2 opacity-100" />,
      title: "Smart Question Extraction",
      description:
        "Our Smart Question Extraction feature helps you efficiently extract relevant questions from PDF documents using advanced AI algorithms.",
    },
    {
      icon: <Cable className="text-primary h-6  w-6 mb-2 opacity-100" />,
      title: "Seamless AI Integration",
      description:
        "Seamless AI Integration allows you to connect with cutting-edge artificial intelligence models for accurate and insightful question analysis without leaving the platform.",
    },
    {
      icon: <PencilIcon className="text-primary h-6  w-6 mb-2 opacity-100" />,
      title: "Advanced Question Customization",
      description:
        "With Advanced Question Customization, you can personalize your AI-assisted question generation to align with your specific document and inquiry requirements.",
    },
    {
      icon: <SearchIcon className="text-primary h-6  w-6 mb-2 opacity-100" />,
      title: "Powerful PDF Search",
      description:
        "Our Powerful PDF Search feature allows you to find specific content and answers within PDF documents in seconds using sophisticated AI-driven search capabilities.",
    },
    {
      icon: <Shield className="text-primary h-6  w-6 mb-2 opacity-100" />,
      title: "Robust AI Security",
      description:
        "With Robust AI Security, your question data is always handled with the utmost confidentiality and protection through advanced security measures.",
    },
    {
      icon: (
        <PanelsTopLeftIcon className="text-primary h-6  w-6 mb-2 opacity-100" />
      ),
      title: "Effortless Collaboration",
      description:
        "Effortless Collaboration allows you to share and collaborate on question sets seamlessly, fostering effective teamwork in analyzing PDF content with AI insights.",
    },
  ];

  return (
    <section className="bg-background p-2  bg-opacity-70  flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="space-y-2 mb-8">
          <h1 className="font-bold text-4xl text-foreground ">
            Discover Our Unique Features
          </h1>
          <p className="max-w-[600px]  text-foreground opacity-70  mx-auto">
            Our features are designed to enhance your productivity and
            streamline your workflow.
          </p>
        </div>
      </div>
      <div className="w-full max-w-full p-3 space-y-4 mx-auto mt-auto grid">
        <div className="grid grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 text-center border p-4 rounded-lg"
            >
              <div className="p-2  rounded-full">
                {feature.icon}
              </div>
              <h2 className="text-xl font-bold text-foreground">{feature.title}</h2>
              <p className="text-foreground opacity-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

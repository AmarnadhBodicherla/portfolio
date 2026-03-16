import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Electronics & Communication Engineering Student
            </h3>

            <p className="text-muted-foreground">
              I'm a pre-final year B.Tech ECE student passionate about robotics,
              automation, embedded systems, and RTL design. I enjoy designing
              reliable digital systems and bringing hardware ideas to life.
            </p>

            <p className="text-muted-foreground">
              I have hands-on experience with Verilog-based RTL design,
              FPGA-based flows, PCB design, and LabVIEW-based control systems.
              I love solving real-world problems using a mix of hardware and
              software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    RTL & Digital Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing and simulating digital systems using Verilog,
                    FPGA tools, and timing-aware design practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Embedded & IoT Systems
                  </h4>
                  <p className="text-muted-foreground">
                    Building microcontroller-based systems with sensors,
                    real-time monitoring, and automation logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Robotics & Leadership
                  </h4>
                  <p className="text-muted-foreground">
                    Leading hackathons, robotics projects, and guiding peers
                    through workshops and doubt sessions.
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

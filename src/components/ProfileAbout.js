import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import Input from "./layout/Input";

const ProfileAbout = () => {
  const [profile, setProfile] = useState({
    bio: "",
    displayName: "",
    email: "",
  });

  const optionsRole = [
    { label: "Admin Big Data", value: "Admin-Big-Data" },
    {
      label: "Ansible Operations Engineer",
      value: "Ansible-Operations-Engineer",
    },
    { label: "Artifactory Administrator", value: "Artifactory-Administrator" },
    {
      label: "Artificial intelligence / Machine Learning Engineer",
      value: "Artificial-intelligence-/-Machine-Learning-Engineer",
    },
    {
      label: "Artificial Intelligence / Machine Learning Leader",
      value: "Artificial-Intelligence-/-Machine-Learning-Leader",
    },
    {
      label: "Artificial Intelligence / Machine Learning Sr.Leader",
      value: "Artificial-Intelligence-/-Machine-Learning-Sr.Leader",
    },
    {
      label: "Artificial intelligence Architect",
      value: "Artificial-intelligence-Architect",
    },
    {
      label: "Artificial Intelligence Researcher",
      value: "Artificial-Intelligence-Researcher",
    },
    { label: "Big Data Architect", value: "Big-Data-Architect" },
    { label: "Big Data Engineer", value: "Big-Data-Engineer" },
    { label: "Big Data Specialist", value: "Big-Data-Specialist" },
    {
      label: "Build and Release Engineer",
      value: "Build-and-Release-Engineer",
    },
    { label: "Build Engineer", value: "Build-Engineer" },
    { label: "Chef Operations Engineer", value: "Chef-Operations-Engineer" },
    { label: "Data Analysts", value: "Data-Analysts" },
    { label: "Data Architect", value: "Data-Architect" },
    { label: "DevOps Architect", value: "DevOps-Architect" },
    { label: "DevOps Engineer", value: "DevOps-Engineer" },
    { label: "ELK Engineer", value: "ELK-Engineer" },
    { label: "Gerrit Administrator", value: "Gerrit-Administrator" },
    { label: "Gerrit Administrator", value: "Gerrit-Administrator" },
    { label: "Jenkins Engineer", value: "Jenkins-Engineer" },
    { label: "Jira Administrator", value: "Jira-Administrator" },
    {
      label: "Kubernetes Operations Engineer",
      value: "Kubernetes-Operations-Engineer",
    },
    {
      label: "Machine learning Architect",
      value: "Machine-learning-Architect",
    },
    { label: "Machine Learning Engineer", value: "Machine-Learning-Engineer" },
    { label: "Operations Engineer", value: "Operations-Engineer" },
    {
      label: "Principle Engineer in Artificial Intelligence",
      value: "Principle-Engineer-in-Artificial-Intelligence",
    },
    {
      label: "Principle Engineer in Big Data",
      value: "Principle-Engineer-in-Big-Data",
    },
    {
      label: "Principle Engineer in Data Analysis",
      value: "Principle-Engineer-in-Data-Analysis",
    },
    {
      label: "Principle Engineer in Machine Learning",
      value: "Principle-Engineer-in-Machine-Learning",
    },
    {
      label: "Production Support Engineer",
      value: "Production-Support-Engineer",
    },
    {
      label: "Puppet Operations Engineer",
      value: "Puppet-Operations-Engineer",
    },
    {
      label: "Senior Build and Release Engineer",
      value: "Senior-Build-and-Release-Engineer",
    },
    { label: "Senior Build Engineer", value: "Senior-Build-Engineer" },
    { label: "Senior DevOps Engineer", value: "Senior-DevOps-Engineer" },
    {
      label: "Senior Site reliability Engineer",
      value: "Senior-Site-reliability-Engineer",
    },
    {
      label: "Site Reliability Engineer (Kubernetes – Docker)",
      value: "Site-Reliability-Engineer-(Kubernetes-–-Docker)",
    },
    { label: "Splunk Engineer", value: "Splunk-Engineer" },
    { label: ".NET Developer", value: ".NET-Developer" },
    { label: "ACCESSIBILITY SPECIALIST", value: "ACCESSIBILITY-SPECIALIST" },
    { label: "AGILE PROJECT MANAGER", value: "AGILE-PROJECT-MANAGER" },
    { label: "Android Developer", value: "Android-Developer" },
    {
      label: "Ansible Automation Engineer",
      value: "Ansible-Automation-Engineer",
    },
    { label: "AppDynamics Engineer", value: "AppDynamics-Engineer" },
    {
      label: "Application Security Engineer",
      value: "Application-Security-Engineer",
    },
    { label: "Artifactory Engineer", value: "Artifactory-Engineer" },
    {
      label: "Artificial Intelligence (AI) / Machine Learning Engineer",
      value: "Artificial-Intelligence-(AI)-/-Machine-Learning-Engineer",
    },
    { label: "AWS DevOps Engineer", value: "AWS-DevOps-Engineer" },
    { label: "AWS Solutions Architect", value: "AWS-Solutions-Architect" },
    { label: "Azure DevOps Engineer", value: "Azure-DevOps-Engineer" },
    { label: "Bamboo Engineer", value: "Bamboo-Engineer" },
    { label: "Bitbucket Engineer", value: "Bitbucket-Engineer" },
    { label: "Blockchain Developer", value: "Blockchain-Developer" },
    { label: "BUSINESS SYSTEMS ANALYST", value: "BUSINESS-SYSTEMS-ANALYST" },
    { label: "C# Developer", value: "C#-Developer" },
    { label: "Chef InSpec Engineer", value: "Chef-InSpec-Engineer" },
    { label: "Cloud administrator", value: "Cloud-administrator" },
    { label: "CLOUD ARCHITECT", value: "CLOUD-ARCHITECT" },
    { label: "Cloud architect", value: "Cloud-architect" },
    { label: "Cloud automation engineer", value: "Cloud-automation-engineer" },
    { label: "Cloud engineer", value: "Cloud-engineer" },
    { label: "Cloud network engineer", value: "Cloud-network-engineer" },
    { label: "Cloud Security Engineer", value: "Cloud-Security-Engineer" },
    { label: "CNC Programmer", value: "CNC-Programmer" },
    { label: "Coder", value: "Coder" },
    {
      label: "COMPUTER GRAPHICS ANIMATOR",
      value: "COMPUTER-GRAPHICS-ANIMATOR",
    },
    {
      label: "Computer Hardware Engineer",
      value: "Computer-Hardware-Engineer",
    },
    {
      label: "Computer Network Architect",
      value: "Computer-Network-Architect",
    },
    { label: "Computer Programmer", value: "Computer-Programmer" },
    {
      label: "Computer Research Scientist",
      value: "Computer-Research-Scientist",
    },
    { label: "Computer Systems Analyst", value: "Computer-Systems-Analyst" },
    { label: "Confluence Engineer", value: "Confluence-Engineer" },
    { label: "Consul Engineer", value: "Consul-Engineer" },
    { label: "Coverage.py Engineer", value: "Coverage.py-Engineer" },
    { label: "DATA ANALYST", value: "DATA-ANALYST" },
    { label: "Data Analyst", value: "Data-Analyst" },
    { label: "DATA ARCHITECT", value: "DATA-ARCHITECT" },
    { label: "Data Engineer", value: "Data-Engineer" },
    { label: "DATA MODELER", value: "DATA-MODELER" },
    { label: "DATA SCIENTIST", value: "DATA-SCIENTIST" },
    { label: "Data Scientist", value: "Data-Scientist" },
    { label: "DATABASE ADMINISTRATOR", value: "DATABASE-ADMINISTRATOR" },
    { label: "Database Administrator", value: "Database-Administrator" },
    { label: "Datadog Engineer", value: "Datadog-Engineer" },
    { label: "Developer", value: "Developer" },
    { label: "DevOps Architect", value: "DevOps-Architect" },
    { label: "DevOps Engineer", value: "DevOps-Engineer" },
    { label: "DevOps Engineer", value: "DevOps-Engineer" },
    { label: "DEVOPS MANAGER", value: "DEVOPS-MANAGER" },
    { label: "DevSecOps Architect", value: "DevSecOps-Architect" },
    { label: "DevSecOps Engineer", value: "DevSecOps-Engineer" },
    { label: "Director of Engineering", value: "Director-of-Engineering" },
    { label: "Docker Engineer", value: "Docker-Engineer" },
    { label: "ELK Engineer", value: "ELK-Engineer" },
    {
      label: "Embedded Software Engineer",
      value: "Embedded-Software-Engineer",
    },
    { label: "Entry Level Developer", value: "Entry-Level-Developer" },
    {
      label: "Entry Level Network Engineer",
      value: "Entry-Level-Network-Engineer",
    },
    { label: "Entry Level Programmer", value: "Entry-Level-Programmer" },
    {
      label: "Entry Level Software Developer",
      value: "Entry-Level-Software-Developer",
    },
    {
      label: "Entry Level Software Engineer",
      value: "Entry-Level-Software-Engineer",
    },
    { label: "Entry Level Web Developer", value: "Entry-Level-Web-Developer" },
    { label: "Envoy Engineer", value: "Envoy-Engineer" },
    { label: "Falco Engineer", value: "Falco-Engineer" },
    { label: "FluentD Engineer", value: "FluentD-Engineer" },
    { label: "Fortify Engineer", value: "Fortify-Engineer" },
    { label: "FRAMEWORKS SPECIALIST", value: "FRAMEWORKS-SPECIALIST" },
    { label: "Front End Developer", value: "Front-End-Developer" },
    { label: "Front End Web Developer", value: "Front-End-Web-Developer" },
    { label: "FRONT-END DESIGNER", value: "FRONT-END-DESIGNER" },
    { label: "FRONT-END DEVELOPER", value: "FRONT-END-DEVELOPER" },
    { label: "Full Stack Developer", value: "Full-Stack-Developer" },
    {
      label: "Full Stack JAVA Developer/Programmer/Engineer",
      value: "Full-Stack-JAVA-Developer/Programmer/Engineer",
    },
    {
      label: "Full Stack Python Developer/Programmer/Engineer",
      value: "Full-Stack-Python-Developer/Programmer/Engineer",
    },
    { label: "FULL-STACK DEVELOPER", value: "FULL-STACK-DEVELOPER" },
    { label: "Game Developer", value: "Game-Developer" },
    { label: "GAME DEVELOPER", value: "GAME-DEVELOPER" },
    { label: "GCP DevOps Engineer", value: "GCP-DevOps-Engineer" },
    { label: "Gerrit Engineer", value: "Gerrit-Engineer" },
    { label: "Git Engineer", value: "Git-Engineer" },
    { label: "Github Engineer", value: "Github-Engineer" },
    { label: "GitLab Engineer", value: "GitLab-Engineer" },
    { label: "GitLab Engineer", value: "GitLab-Engineer" },
    { label: "Gradle Engineer", value: "Gradle-Engineer" },
    { label: "Grafana Engineer", value: "Grafana-Engineer" },
    { label: "Groovy Engineer", value: "Groovy-Engineer" },
    { label: "INFORMATION ARCHITECT", value: "INFORMATION-ARCHITECT" },
    {
      label: "Information Security Analyst",
      value: "Information-Security-Analyst",
    },
    { label: "INTERACTION DESIGNER", value: "INTERACTION-DESIGNER" },
    { label: "IOS Developer", value: "IOS-Developer" },
    { label: "Istio Engineer", value: "Istio-Engineer" },
    { label: "IT Manager", value: "IT-Manager" },
    { label: "JaCoCO Engineer", value: "JaCoCO-Engineer" },
    { label: "Java Developer", value: "Java-Developer" },
    { label: "Java Developer", value: "Java-Developer" },
    { label: "JavaScript Developer", value: "JavaScript-Developer" },
    { label: "Jenkins Engineer", value: "Jenkins-Engineer" },
    { label: "JIRA Engineer", value: "JIRA-Engineer" },
    { label: "Jr Developer", value: "Jr-Developer" },
    { label: "Junior Developer", value: "Junior-Developer" },
    {
      label: "Junior Front End Developer",
      value: "Junior-Front-End-Developer",
    },
    { label: "Junior IOS Developer", value: "Junior-IOS-Developer" },
    { label: "Junior Software Developer", value: "Junior-Software-Developer" },
    { label: "Junior Software Engineer", value: "Junior-Software-Engineer" },
    { label: "Junior Web Developer", value: "Junior-Web-Developer" },
    { label: "JUnit Engineer", value: "JUnit-Engineer" },
    { label: "kubernetes Administrator", value: "kubernetes-Administrator" },
    { label: "Kubernetes Engineer", value: "Kubernetes-Engineer" },
    { label: "Machine Learning Engineer", value: "Machine-Learning-Engineer" },
    { label: "MAVEN Engineer", value: "MAVEN-Engineer" },
    {
      label: "Micro services / API Lead Designer",
      value: "Micro-services-/-API-Lead-Designer",
    },
    { label: "MOBILE APP DEVELOPER", value: "MOBILE-APP-DEVELOPER" },
    {
      label: "Mobile Application Developer",
      value: "Mobile-Application-Developer",
    },
    { label: "MOBILE DEVELOPER", value: "MOBILE-DEVELOPER" },
    { label: "Mulesoft Developer", value: "Mulesoft-Developer" },
    { label: "Nagios Engineer", value: "Nagios-Engineer" },
    {
      label: "Network and Systems Administrator",
      value: "Network-and-Systems-Administrator",
    },
    { label: "Network Engineer", value: "Network-Engineer" },
    {
      label: "New Grad Software Engineer",
      value: "New-Grad-Software-Engineer",
    },
    { label: "New Relic Engineer", value: "New-Relic-Engineer" },
    { label: "Nexus Engineer", value: "Nexus-Engineer" },
    { label: "Nomad Engineer", value: "Nomad-Engineer" },
    { label: "Notary Engineer", value: "Notary-Engineer" },
    { label: "Octopus Deploy Engineer", value: "Octopus-Deploy-Engineer" },
    { label: "OpenShift Engineer", value: "OpenShift-Engineer" },
    { label: "OpenStack Engineer", value: "OpenStack-Engineer" },
    { label: "Oracle Developer", value: "Oracle-Developer" },
    { label: "Oracle SQL Developer", value: "Oracle-SQL-Developer" },
    { label: "Packer Engineer", value: "Packer-Engineer" },
    { label: "PHP Developer", value: "PHP-Developer" },
    { label: "PHP Developer", value: "PHP-Developer" },
    { label: "Powershell Engineer", value: "Powershell-Engineer" },
    { label: "PRODUCT MANAGER", value: "PRODUCT-MANAGER" },
    { label: "Programmer", value: "Programmer" },
    { label: "Programmer Analyst", value: "Programmer-Analyst" },
    { label: "Prometheus Engineer", value: "Prometheus-Engineer" },
    { label: "Puppet Engineer", value: "Puppet-Engineer" },
    { label: "PyTest Engineer", value: "PyTest-Engineer" },
    { label: "Python Developer", value: "Python-Developer" },
    { label: "PYTHON DEVELOPER", value: "PYTHON-DEVELOPER" },
    { label: "Python Developer", value: "Python-Developer" },
    {
      label: "QA (QUALITY ASSURANCE) SPECIALIST",
      value: "QA-(QUALITY-ASSURANCE)-SPECIALIST",
    },
    { label: "QA Engineer", value: "QA-Engineer" },
    { label: "React Developer", value: "React-Developer" },
    { label: "Robotics Engineer", value: "Robotics-Engineer" },
    { label: "RUBY ON RAILS DEVELOPER", value: "RUBY-ON-RAILS-DEVELOPER" },
    { label: "Salesforce Developer", value: "Salesforce-Developer" },
    {
      label: "Search Engine Optimization",
      value: "Search-Engine-Optimization",
    },
    { label: "SECURITY SPECIALIST", value: "SECURITY-SPECIALIST" },
    { label: "Selenium Engineer", value: "Selenium-Engineer" },
    {
      label: "Senior Ansible Development Engineer",
      value: "Senior-Ansible-Development-Engineer",
    },
    { label: "Senior Cloud Architect", value: "Senior-Cloud-Architect" },
    { label: "Senior DevOps Architect", value: "Senior-DevOps-Architect" },
    { label: "Senior DevOps Engineer", value: "Senior-DevOps-Engineer" },
    {
      label: "Senior DevSecOps Architect",
      value: "Senior-DevSecOps-Architect",
    },
    { label: "Senior DevSecOps Engineer", value: "Senior-DevSecOps-Engineer" },
    { label: "Senior SRE Architect", value: "Senior-SRE-Architect" },
    { label: "Senior SRE Engineer", value: "Senior-SRE-Engineer" },
    { label: "Sharepoint Developer", value: "Sharepoint-Developer" },
    { label: "Software Developer", value: "Software-Developer" },
    { label: "SOFTWARE DEVELOPERS", value: "SOFTWARE-DEVELOPERS" },
    { label: "Software Engineer", value: "Software-Engineer" },
    { label: "Software Engineer", value: "Software-Engineer" },
    { label: "SonarQube Engineer", value: "SonarQube-Engineer" },
    { label: "Splunk Engineer", value: "Splunk-Engineer" },
    {
      label: "Splunk Enterprise Security Engineer",
      value: "Splunk-Enterprise-Security-Engineer",
    },
    { label: "SQL Developer", value: "SQL-Developer" },
    { label: "SRE Architect", value: "SRE-Architect" },
    { label: "SRE Engineer", value: "SRE-Engineer" },
    { label: "SYSTEMS ADMINISTRATOR", value: "SYSTEMS-ADMINISTRATOR" },
    { label: "SYSTEMS ENGINEER", value: "SYSTEMS-ENGINEER" },
    { label: "TeamCity Engineer", value: "TeamCity-Engineer" },
    { label: "Tech Sales Engineer", value: "Tech-Sales-Engineer" },
    { label: "TECHNICAL ACCOUNT MANAGER", value: "TECHNICAL-ACCOUNT-MANAGER" },
    { label: "TECHNICAL LEAD", value: "TECHNICAL-LEAD" },
    { label: "Terraform Engineer", value: "Terraform-Engineer" },
    { label: "TFS Engineer", value: "TFS-Engineer" },
    { label: "Twistkock Engineer", value: "Twistkock-Engineer" },
    { label: "UDeploy Engineer", value: "UDeploy-Engineer" },
    { label: "UI DESIGNER", value: "UI-DESIGNER" },
    { label: "UI Developer", value: "UI-Developer" },
    { label: "Unity Developer", value: "Unity-Developer" },
    { label: "UX DESIGNER", value: "UX-DESIGNER" },
    { label: "Vault Engineer", value: "Vault-Engineer" },
    {
      label: "Web Designer (UI/UX Designer)",
      value: "Web-Designer-(UI/UX-Designer)",
    },
    { label: "Web Developer", value: "Web-Developer" },
    { label: "Web Developer", value: "Web-Developer" },
    { label: "WordPress Developer", value: "WordPress-Developer" },
    { label: "WORDPRESS DEVELOPER", value: "WORDPRESS-DEVELOPER" },
    { label: "XL Deploy Engineer", value: "XL-Deploy-Engineer" },
    { label: "Zabbix Engineer", value: "Zabbix-Engineer" },
  ];

  const handleChange = (inputValue: any, actionMeta: any) => {
    console.group("Input Changed");
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const onInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  return (
    <div id="about" className=" ">
      <div className="flex flex-row justify-between  items-start border-b border-gray-300 mx-2">
        <div className="w-4/12 items-start p-2 pr-28">
          <h1 className="text-black font-medium">About</h1>
          <div>
            <p className="text-gray-600">
              Tell us about yourself so startups know who you are.
            </p>
          </div>
        </div>
        <div className="w-8/12 items-start p-2">
          <h1 className="text-3xl tracking-tighter mb-4">Suritam Nandy</h1>
          <div>
            <div className=" flex flex-row items-center justify-start">
              <img className="w-16 h-16" src="Images/1 (1).png"></img>
              <button className="mx-4 border border-gray-600 py-2 px-3 rounded-md text-gray-600 font-medium text-sm hover:text-gray-900">
                Upload new photo
              </button>
            </div>
          </div>

          <div className="w-full mb-10">
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Where are you based?
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <CreatableSelect
                placeholder="Country"
                name="country"
                isClearable
                onChange={handleChange}
              />
              {/* <Input
                placeholder="Enter Name"
                name="displayName"
                value={profile.displayName}
                onChange={onInputChange}
              /> */}
            </div>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col m-1 w-96">
                <h1 className="my-2 text-lg">
                  Select your primary role
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>
                <CreatableSelect
                  placeholder="Primary Role"
                  name="primaryRole"
                  isClearable
                  options={optionsRole}
                  onChange={handleChange}
                />
              </div>

              <div className=" flex flex-col m-1 w-56">
                {/* <div className="w-40"> */}
                <h1 className="my-2 text-lg ">
                  Years of experience
                  <label className="ml-1 text-lg text-gray-600">*</label>
                </h1>

                <CreatableSelect
                  placeholder="2 years"
                  name="exp"
                  isClearable
                  onChange={handleChange}
                  options={[
                    { value: "0.5", label: "less than 1 Year" },
                    { value: "1", label: "1 Year" },
                    { value: "2", label: "2 Years" },
                    { value: "2.5", label: "2+ Years" },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Open to the following roles
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>

              <CreatableSelect
                placeholder="Secondary roles"
                name="SecondaryRole"
                isClearable
                onChange={handleChange}
                options={optionsRole}
                isMulti
              />
            </div>
            <div className="flex flex-col m-1 my-3 w-full">
              <h1 className="my-2  text-lg">
                Your bio
                <label className="ml-1 text-lg text-gray-600">*</label>
              </h1>
              <textarea
                placeholder="Stanford CS, Full stack generalist; launched a successful Android app, worked at Google"
                name="bio"
                value={profile.bio}
                onChange={onInputChange}
                rows="10"
                className="mr-20 w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAbout;

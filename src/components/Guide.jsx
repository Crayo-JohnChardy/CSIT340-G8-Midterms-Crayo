import Section from "./Section";

const sectionsData = [
  { title: "Create", description: "Creates an empty Git repository in the current folder.", command: "git init" },
  { title: "Rename", description: "Renames the current branch to main.", command: "git branch -M main" },
  { title: "Connect", description: "Links this local project to your forked repo on github, under the name origin.", command: "git remote add origin https://github.com/Crayo-JohnChardy/CSIT340-G8-Midterms-Crayo.git" },
  { title: "Upload", description: "Sends the main branch to the remote named origin.", command: "git push -u origin main" }
];

export default function Guide() {
  return (
    <main className="px-20 pt-4">
      {sectionsData.map((sec) => (
        <Section 
          key={sec.title}
          title={sec.title} 
          description={sec.description} 
          command={sec.command} 
        />
      ))}
    </main>
  );
}
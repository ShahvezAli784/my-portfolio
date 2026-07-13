import { Hero } from "@/components/sections/Hero";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <FeaturedProjects />
      <GithubActivity />
      <ContactCTA />
    </>
  );
}

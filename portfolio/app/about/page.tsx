import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Section className="pt-32">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl font-medium">
          About Me
        </h1>
        <div className="mt-10 space-y-6 text-lg text-muted leading-relaxed">
          <p>
            For as long as I can remember I've always been into technology. My
            resources were limited, my curiosity wasn't. Fast forward to today,
            my willingness to learn is sky high. I build things because I want
            to know how they work. That's the unfiltered version. The polished
            version for recruiters is "I'm passionate about software", but I'll
            spend three days debugging a theme toggle because that is me. Of
            course, the world is fast and wasting three days is not ideal which
            is why I am always adapting and learning new things.
          </p>
          <p>
            I studied Computer Science at Sonargaon University, I know, I know,
            not really renowned for its computer science program, but I was
            limited both financially and effort-wise. Even so, over the years I
            learned and realized it's not the place, it's you. And I have grown
            to appreciate and respect that place. Mostly because I wanted to
            understand the machines I was already spending all my time on
            instead of wallowing in misery. For my thesis, I built a system that
            tries to read emotion from your face and your voice at the same
            time. It hit about 82% on speech and 68% on faces. I spent months
            collecting 5,500 video clips by hand because no dataset had what I
            needed. That part wasn't glamorous.
          </p>
          <p>
            Since then I've built a real-time chat app with authenticated
            WebSockets, and a small arena shooter with a live leaderboard
            because I wanted to learn what "deployment" actually means when it's
            not just a word in a tutorial. Both taught me more than any course
            did. Both also taught me that the hard part is never the code, it's
            the twenty small decisions around it. Currently, I'm learning and
            working on system tools that solve inconvenience people actually
            face.
          </p>
          <p>
            Outside of this, I read a lot of philosophy, history, politics,
            Manga, and other classic literature. I play games, watch anime,
            movies, and stare at things until it stares back at me. I just
            prefer deep diving into things rather than half-bake those. But
            those live on a separate page so this one doesn't turn into a diary.
          </p>
          <p>
            I'm not trying to be the smartest person in the room, I am the
            smartest person in the room when I want to be. Having pride is
            necessary but so is learning to be humble. I always remember where I
            came from, and where I want to be, and that is what drives me. Being
            better than yesterday is the discipline I like to maintain.
          </p>
        </div>
      </div>
    </Section>
  );
}

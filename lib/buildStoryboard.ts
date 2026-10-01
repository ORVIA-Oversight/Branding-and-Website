import type { SiteBrief, StoryBeat } from "@/config/siteBrief";

export function buildStoryboard(brief:SiteBrief):StoryBeat[] {
  if (brief.storyboard?.length) return brief.storyboard;

  const beats:StoryBeat[] = [
    {
      id:"hero",
      title:"The story in one screen",
      purpose:brief.story.oneSentence,
      mustInclude:[brief.story.problem, brief.story.closingPromise]
    },
    {
      id:"why",
      title:"Why this exists",
      purpose:brief.story.origin,
      mustInclude:[brief.story.humanMeaning]
    },
    {
      id:"problem",
      title:"The pressure point",
      purpose:brief.story.problem,
      mustInclude:[brief.story.consequence]
    },
    {
      id:"insight",
      title:"What we learned",
      purpose:brief.story.insight
    },
    {
      id:"response",
      title:"What we built or changed",
      purpose:brief.story.response
    },
    {
      id:"offer",
      title:"What you can do now",
      purpose:"Translate the story into clear services, tools and commercial routes."
    },
    {
      id:"proof",
      title:"Why believe it",
      purpose:"Show only verified facts, trust signals, evidence and approved case studies."
    },
    {
      id:"action",
      title:"The next step",
      purpose:brief.story.closingPromise
    }
  ];

  return beats;
}

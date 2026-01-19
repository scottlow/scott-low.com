---
title: "Launching a blog and early in career advice"
date: "2020-01-03"
tags: ["early in career", "career advice", "mentorship"]
---

This past fall, I started mentoring a new hire on a different team at Microsoft. My own mentor connected us and I jumped at the opportunity to help pay forward the support I'd received in my own career over the years. The questions my mentee asked in our first meeting got me thinking a lot about the lessons I'd picked up through osmosis over time and the explicit advice I wish I'd had as I started my own career as a Program Manager. A thought for a blog post covering these topics started to form in the back of my head, but I realized that in order to publish a post, I'd need a blogging platform first!

Given that I had a few days off between New Years and going back to work, I figured it would be a great time to start digging into a new technology and to spend some time rewriting the current version of my personal site to include a blog. I'd heard about [Gatsby](https://www.gatsbyjs.org/) in an episode of the [Ladybug Podcast](https://ladybug.dev/) and after digging into it a bit, I was intrigued by several factors:

- **GraphQL**: I'd heard about GraphQL a year or so ago, but never had time to dig in further. As someone who wrote multiple Angular-based web apps in college (with work often split between different people for backend versus frontend), the idea of a query language that would allow the client to specify exactly what information it needed from the server with no API surface changes required piqued my interest.
- **React**: The last web app I wrote (but alas never published) was written in Angular 6. Due to its popularity in addition to some friends mentioning that JSX was not, in fact, as bad as I thought it might be, I'd been meaning to take a stab at learning React, but hadn't yet found the time.
- **Transformer plugins**: I've long wanted a website/blog that would let me author content in markdown and publish it as HTML. The [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) plugin referenced in the Gatsby tutorial seemed like a perfect way to accomplish this.

Rewriting my personal site seemed like a perfect fit for a static site generator like Gatsby, so I set aside some time and started hitting the tutorials. I'll admit that I likely don't know enough yet about the ins and outs of Gatsby to write a deeply technical post on it, but I may spend some time compiling my experiences (which were largely positive!) into a future post.

Fast forward a couple days and I had created a more streamlined version of my site (including a blog!) using Gatsby and [Material UI](https://material-ui.com/). Great! Now all that was left was to collect my thoughts and start in on the early in career advice post I'd been thinking about for the past couple of months:

# Early in career advice for PMs

The following is a list of advice that I would have given to myself when I was first starting my career as a Program Manager. My hope is that others find it useful as well!

## Meet as many people as you can

When I first started at Microsoft out of college, I recall being pretty intimidated by upper management. I also didn't make many attempts to branch out to meet people outside of my current team. Instead, I tended towards keeping my head down and making sure that the projects I worked on were completed on time with high quality. Now that I've been at the company for longer, I've seen time and time again that knowing more people is extremely beneficial to both your career and the projects that you work on.

For instance, investing time to meet folks outside of your immediate team/organization will help you see the broader picture both in terms of product and in terms of workplace culture. It will also help you learn what other teams are prioritizing and working on so that you can leverage others' work via cross-team partnerships in the future. Meeting people within your current team/organization is also beneficial so that you can understand the broader priorities of your organization and how the work everyone contributes helps it meet its goals. I've personally (and have also heard other early in career folks agree) found this to be super useful for motivating myself and for finding new and interesting projects to work on across the organization.

Knowing more people also means that they know you. I've been told that this can be helpful during performance reviews (since folks have a face and personal interactions that they can associate with your name) and have personally found that several opportunities in my own career have found me largely because of my network.

## Identify processes that could benefit from automation and automate them

Another piece of career advice I've been given is to identify processes that could substantially benefit from automation. While owning internal processes isn't as exciting as owning customer-facing features on the surface, doing so has several benefits. First, since your customers are your colleagues, it allows you to meet more people on your team. This lets to benefit from growing your professional network as described above. Secondly, automating internal processes allows you to have real and measurable impact early on in your career. To provide a personal example, one of my first jobs as a PM involved triaging the team's interoperability bugs. Doing so was a tediously manual task, but had a fair bit of impact as it ensured that the team was taking action on important issues as quickly as possible. The only issue was the fact that the incoming bug rate meant I had little time to pursue tasks other than triaging. This seemed like a perfect job for a text-based classifier. By partnering with some engineers from our data science team, this process was ultimately able to be automated with at-par human accuracy and faster than human speed, greatly improving our triaging metrics as a team.

## Leverage data to demonstrate impact

As illustrated by the above example, spending time to identify and measure the metrics you plan on moving as part of the investment you're making in any space is always worthwhile. Having concrete data quantifies the impact you've made, a fact that will help you on resumes and in performance reviews, and the projects you work on during leadership reviews and funding asks. This goes beyond purely technical investment areas as well. For example, work you're doing to improve the team's culture can be measured through satisfaction (Net Promoter Score) or surveys.

## Communicate your career goals to your management early and often

Coming out of the world of grades and transcripts in college, I originally thought that as long as I did a good job on the projects I was given, I'd be rewarded with harder projects and steady career growth. Numerous mentors I've had, however, have informed me that while this is generally true, "steady career growth" can mean different things to different people. As a result, I was advised (and have found it beneficial) to have biannual check-ins with my management outlining my goals for the year and to check in as to whether I'm on track to meet them. While the exact format of these meetings will vary by individual, I've generally seen that these involve folks providing their management with a bulleted list of everything they've done over the past six months and reviewing it against the goals they've set for themselves in conjunction with their management. If there's a discrepancy between the met/targeted accomplishments and the goals, then a fully transparent conversation around the two can take place.

I've also heard several early in career folks ask what they should do if they don't have a fully fledged "five year plan" yet. My response is that that's totally okay. While it's generally a good idea (and usually not too difficult) to set goals in terms of promotion velocity, setting goals in terms of the projects you want to work on and the skills you want to develop can be a daunting task. That takes us to our next piece of advice.

## Take note of what both excites and frustrates you at work

The advice I've been given when I've told my mentors about uncertainty I had around the projects I want to work on/the skills I want to develop in the future has been to take note of what both excites and frustrates me at work. Over time, I learned that I was most excited at work when I was solving hard problems that involved aligning multiple partner teams to create solutions that meet unmet customer needs. I also came to realize that the technology being used to solve the problems didn't matter to me as much; I was flexible and willing to learn any technology required as long as the problem was interesting. These realizations helped guide me into the role I'm in today, and my excitement around mentoring and growing new talent is helping guide the next set of career goals I've set for myself moving forwards.

By spending time thinking about what excites and frustrates you at work, you'll start to notice patterns that will help influence your career goals over time.

## Taking time to learn is okay

One thing I regret not doing more of earlier in my career is learning. While I learned lots from the projects I was assigned, I didn't spend enough time seeking out readings, trainings, workshops, conferences, hackathons, or other forums to help me learn and develop my skills. I was under the impression (likely from college), that I was expected to produce results quickly and that there wasn't time to learn more than the bare minimum required to complete the task currently at hand. Having spent more time in the workforce, I now realize that was inaccurate. While there are certainly still expectations for delivering results, taking the time to learn broadly about various topics as an early in career hire will provide a strong foundation of knowledge that you'll be able to leverage later on. Plus, you'll actually be able to take advantage of more learning opportunities since your calendar won't be clogged full of meetings!

## Find a mentor

Exactly what the title says. Even better, find multiple mentors! I've found it to be beneficial to have a mentor on your direct team who can help you ramp up when you're first starting. Then, as you grow more comfortable on your team, work with your management to find a mentor outside of your organization who you can turn to for general career advice, or to help with sensitive questions that you may not want to ask your management chain.

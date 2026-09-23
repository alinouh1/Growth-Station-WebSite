import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/i18n/index.ts
var dictionaries = {
	en: {
		meta: {
			title: "Growth Station | Strategic Growth Partner — Egypt & GCC",
			description: "We partner with ambitious businesses across Egypt & the GCC to build powerful brands and drive measurable growth."
		},
		nav: {
			home: "Home",
			about: "About",
			services: "Services",
			portfolio: "Portfolio",
			framework: "Framework",
			process: "Process",
			careers: "Careers",
			brief: "Brief",
			contact: "Contact",
			getStarted: "Get Started"
		},
		hero: {
			badge: "Egypt & GCC",
			title: "We partner with",
			titleHighlight: "ambitious businesses",
			titleEnd: "across Egypt & the GCC to build powerful brands and drive measurable growth.",
			ctaPrimary: "Get Started",
			ctaSecondary: "Explore Services",
			statGrowth: "Avg. client growth",
			statMarkets: "Markets",
			markets: "Egypt · UAE · KSA"
		},
		marquee: [
			"Strategy Before Execution",
			"Growth Beyond Borders",
			"Strategy Before Execution",
			"Growth Beyond Borders"
		],
		expertise: {
			eyebrow: "Our Expertise",
			title: "Interactive Services",
			marketing: {
				tag: "Interactive Services",
				title: "Marketing",
				description: "Performance-focused strategies built to scale brands and maximize ROI across every digital channel.",
				items: [
					"Social Media Management",
					"Meta & Google Ads",
					"Branding Strategy",
					"Content Creation",
					"SEO & Influencer Campaigns"
				],
				cta: "Explore Marketing →"
			},
			software: {
				tag: "Interactive Services",
				title: "Software",
				description: "Powerful software solutions engineered for scalability, automation, and next-gen digital experiences.",
				items: [
					"Web Development",
					"Mobile Applications",
					"AI Integration & APIs",
					"SaaS Platforms",
					"UI/UX Design & CMS"
				],
				cta: "Explore Software →"
			}
		},
		approach: {
			eyebrow: "Our Approach",
			title: "Our Framework",
			cta: "Explore Framework →",
			steps: [
				{
					label: "HOW WE WORK",
					title: "DISCOVER",
					text: "We do not move until we know your business, market, and audience with complete clarity. Assumptions are not part of our process."
				},
				{
					label: "OUR FRAMEWORK",
					title: "POSITION",
					text: "We define where your brand stands and why it wins. Without sharp positioning, everything else is wasted effort."
				},
				{
					label: "OUR FRAMEWORK",
					title: "BUILD",
					text: "Every system, campaign, and piece of content is built with one standard: does it move the business forward? If not, it does not exist."
				},
				{
					label: "OUR FRAMEWORK",
					title: "SCALE",
					text: "Launch is not the finish line. We optimize relentlessly, expand deliberately, and push your brand into markets it was always capable of reaching."
				}
			],
			imageAlt: "Strategic planning session"
		},
		whyUs: {
			eyebrow: "Why Us",
			line1: "Most agencies deliver work.",
			line2: "We deliver growth.",
			items: [
				{
					title: "Strategy First",
					text: "Every decision is backed by deep research and clear strategic thinking."
				},
				{
					title: "Performance Driven",
					text: "Results you can measure — from impressions to conversions to revenue."
				},
				{
					title: "Fast Execution",
					text: "Speed is a competitive advantage. We move fast without breaking quality."
				},
				{
					title: "Long-Term Partner",
					text: "We invest in your success as if it's our own — built for the long game."
				}
			]
		},
		process: {
			eyebrow: "How We Work",
			titleEm: "Our Process",
			titleOutline: "& Framework",
			description: "Real work. Real results. A curated look at brands we've built, products we've launched, and businesses we've grown.",
			filterAll: "All",
			cardCta: "Watch The Project",
			bottomText: "Want to see more of our work?",
			bottomBtn: "View All Projects",
			categories: [
				"Brand Development",
				"Digital Products",
				"Marketing & Growth",
				"Content Creation",
				"Strategy & Planning",
				"Brand & Creative"
			],
			items: [
				{
					num: "01",
					client: "Kromo Dev.",
					location: "Greece",
					service: "Brand Development",
					tags: [
						"Brand Architecture",
						"Logo Design",
						"CI"
					],
					color: "#C08D51",
					bg: "linear-gradient(135deg, #2a1a0a 0%, #3d2409 50%, #1a0d04 100%)",
					shape: "circle"
				},
				{
					num: "02",
					client: "Naguib Selim",
					location: "Egypt",
					service: "Digital Products",
					tags: [
						"Web Development",
						"UI/UX",
						"React"
					],
					color: "#96CDB0",
					bg: "linear-gradient(135deg, #0a1f18 0%, #0d2a20 50%, #061410 100%)",
					shape: "triangle"
				},
				{
					num: "03",
					client: "Gulf Brand Co.",
					location: "UAE",
					service: "Marketing & Growth",
					tags: [
						"Ads",
						"Social Media",
						"Strategy"
					],
					color: "#b7f5d3",
					bg: "linear-gradient(135deg, #081a14 0%, #0f2b20 50%, #041008 100%)",
					shape: "diamond"
				},
				{
					num: "04",
					client: "Luxe Cairo",
					location: "Egypt",
					service: "Content Creation",
					tags: [
						"Media Production",
						"Content",
						"Photography"
					],
					color: "#C08D51",
					bg: "linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #100b04 100%)",
					shape: "hexagon"
				},
				{
					num: "05",
					client: "TechFlow",
					location: "Saudi Arabia",
					service: "Strategy & Planning",
					tags: [
						"Growth Strategy",
						"KPIs",
						"Planning"
					],
					color: "#96CDB0",
					bg: "linear-gradient(135deg, #0c1f1a 0%, #122b24 50%, #061410 100%)",
					shape: "circle"
				},
				{
					num: "06",
					client: "Orbit Studio",
					location: "Egypt",
					service: "Brand & Creative",
					tags: [
						"Branding",
						"Identity",
						"Visual Design"
					],
					color: "#fff",
					bg: "linear-gradient(135deg, #101a16 0%, #1a2820 50%, #080f0c 100%)",
					shape: "triangle"
				}
			]
		},
		leadership: {
			eyebrow: "Leadership",
			title: "Meet The Team",
			members: [
				{
					name: "Abo Taleb",
					role: "FOUNDER & CEO",
					badge: "CEO",
					bio: "Building brands, systems, and scalable growth experiences across Egypt and the GCC."
				},
				{
					name: "Rana Eltorkey",
					role: "MANAGER",
					badge: "Operations",
					bio: "Leading operations, communication, and execution with precision and consistency."
				},
				{
					name: "Osama Mohamed",
					role: "ACCOUNT MANAGER",
					badge: "Client Success",
					bio: "Managing client relationships and performance with a strong focus on measurable outcomes."
				}
			]
		},
		recruiting: {
			badge: "Now Recruiting",
			title1: "WE ARE BUILDING A TEAM",
			title2: "THAT MOVES FAST.",
			description: "We are not looking for employees. We are looking for builders, creators, and operators who want to grow with us across Egypt and the GCC.",
			ctaPrimary: "JOIN GROWTH STATION →",
			ctaSecondary: "See Open Roles"
		},
		footer: {
			tagline: "We partner with ambitious businesses across Egypt & the GCC to build powerful brands and drive measurable growth.",
			navigation: "Navigation",
			servicesTitle: "Services",
			services: [
				"Performance Marketing",
				"Brand Strategy",
				"Web Development",
				"UI/UX Design",
				"AI Solutions"
			],
			contactTitle: "Get In Touch",
			location: "Cairo, Egypt",
			rights: "© 2026 Growth Station. All Rights Reserved.",
			privacy: "Privacy Policy",
			terms: "Terms & Conditions"
		},
		lang: {
			switchToAr: "ع",
			switchToEn: "EN"
		},
		about: {
			meta: {
				title: "About Us | Growth Station — Strategic Growth Partner",
				description: "Learn about Growth Station's story, mission, and how we help businesses across Egypt & the GCC achieve real growth."
			},
			ourStory: {
				title: "OUR STORY",
				whyExist: {
					title: "Why did Growth Station exist?",
					content: "Too many ambitious businesses were investing in marketing — and getting nothing back but content. We saw founders and business owners who had everything it takes to build something great — the vision, the drive, the belief — held back by agencies that prioritized output over outcomes. Businesses that deserved a real partner, not just another vendor. Growth Station was built to be that partner. One that leads with strategy, operates with clarity, and measures success the way you do — in revenue, in growth, in results that actually move the needle. For businesses in Egypt and the GCC that are ready to stop settling — we are ready to build.",
					cta: "Let's Build Something That Lasts. Book your free strategy session today — no pitches, just clarity.",
					button: "Start Your Growth Journey."
				},
				whatDifferent: {
					title: "What makes us different?",
					content: "Our difference is not a service. It is a mindset. We refuse to touch execution until the strategy is airtight — because we have seen too many businesses bleed budget on content that was built on nothing. We do not sell you marketing. We sell you clarity — a clear picture of where you are, where you need to go, and exactly what it takes to get there. The marketing is just how we prove the thinking works.",
					arabic: "اﻟﻔﺮق ﺑﺘﺎﻋﻨﺎ ﻣﺶ ﺧﺪﻣﺔ — ﻫﻮ ﻃﺮﻳﻘﺔ ﺗﻔﻜﻴﺮ. ﺑﻨﺮﻓﺽ ﻧﻨﻔﺬ أي ﺣﺎﺟﺔ ﻗﺒﻞ ﻣﺎ اﻻﺳﺘﺮاﺗﻴﺠﻴﺔ ﺗﻜﻮن ﻣﺤﻜﻤﺔ — ﻷﻧﻨﺎ ﺷﻮﻓﻨﺎ ﺷﺮﻛﺎت ﻛﺘﻴﺮ ﺑﺘﺼﺮف ﻣﻴﺰاﻧﻴﺎﺗﻬﺎ ﻋﲆ ﻣﺤﺘﻮى ﻣﺒﻨﻲ ﻋﲆ ﻻ ﺷﻲء. إﺣﻨﺎ ﻣﺶ ﺑﻨﺒﻴﻌﻠﻚ ﻣﺎرﻛﺘﻴﻨﺞ. إﺣﻨﺎ ﺑﻨﺒﻴﻌﻠﻚ وﺿﻮح — ﺻﻮرة واﺿﺤﺔ ﻋﻦ اﻧﺖ ﻓﻴﻦ، ﻣﺤﺘﺎج ﺗﻮﺻﻞ ﻓﻴﻦ، وإﻳﻪ اﻟﻠﻲ ﻫﻴﻮﺻﻠﻚ ﺑﺎﻟﻈﺒﻂ. اﻟﻤﺎرﻛﺘﻴﻨﺞ ﺑﺲ ﻫﻮ اﻟﺪﻟﻴﻞ إن اﻟﺘﻔﻜﻴﺮ ده ﺑﻴﺸﺘﻐﻞ."
				},
				whoServe: {
					title: "Who do we serve?",
					content: "You gave them your trust, your budget, your time — and they gave you back excuses. We work with founders and business owners who have been through that — and came out the other side more determined, not broken. People who still believe in what they are building, even after everything. People who are not looking for another agency to disappoint them. They are looking for a partner who feels the weight of their dream — and carries it like it's their own.",
					arabic: "أﻋﻄﻴﺘﻬﻢ ﺛﻘﺘﻚ، ﻣﻴﺰاﻧﻴﺘﻚ، وﻗﺘﻚ — وأﻋﻄﻮك ﻓﻲ اﻟﻤﻘﺎﺑﻞ أﻋﺬاراً. ﻧﻌﻤﻞ ﻣﻊ founders وأﺻﺤﺎب ﺷﺮﻛﺎت ﻣﺮوا ﺑﻬﺬه اﻟﺘﺠﺮﺑﺔ — وﺧﺮﺟﻮا ﻣﻨﻬﺎ أﻛﺜﺮ إﺻﺮاراً، أﻧﺎس ﻻ ﻳﺰاﻟﻮن ﻳﺆﻣﻨﻮن ﺑﻤﺎ ﻳﺒﻨﻮﻧﻪ رﻏﻢ ﻛﻞ ﺷﻲء. أﻧﺎس ﻻ ﻳﺒﺤﺜﻮن ﻋﻦ وﻛﺎﻟﺔ أﺧﺮى ﺗﺨﺬﻟﻬﻢ. ﻳﺒﺤﺜﻮن ﻋﻦ ﺷﺮﻳﻚ ﻳﺤﻤﻞ ﺛﻘﻞ ﺣﻠﻤﻬﻢ — وﻳﺘﻌﺎﻣﻞ ﻣﻌﻪ ﻛﺄﻧﻪ ﺣﻠﻤﻪ ﻫﻮ.",
					cta: "Stop settling for agencies that deliver less than you deserve. Start Your Growth Journey"
				}
			},
			whyGrowthStation: {
				title: "WHY GROWTH STATION?",
				subtitle: "Most agencies deliver work... We deliver growth.",
				items: [
					{
						title: "STRATEGY BEFORE EVERYTHING",
						content: "We never touch execution until the strategy is airtight. Every campaign, every post, and every decision is connected to a clear growth plan built specifically for your business."
					},
					{
						title: "RESULTS YOU CAN MEASURE",
						content: "We are allergic to vanity metrics. Likes and reach mean nothing if revenue does not follow. We track leads, conversions, and real ROI."
					},
					{
						title: "EGYPT & GCC, ONE PARTNER",
						content: "Whether you are scaling locally or expanding across the Gulf, we understand the audiences, the culture, and the opportunities."
					},
					{
						title: "FULL STACK, ONE TEAM",
						content: "Strategy, branding, software, content, ads, and media — all under one roof, all aligned to one goal."
					}
				]
			},
			whatDrivesUs: {
				title: "WHAT DRIVES US",
				subtitle: "Vision. Mission. Promise.",
				vision: {
					label: "01 — VISION",
					title: "A Future Without Settling",
					content: "We are building a future where every ambitious business in Egypt and the GCC finds a partner who thinks about their growth with the same seriousness they do. Where strategy is not a luxury, and results are not a promise — they are a standard."
				},
				mission: {
					label: "02 — MISSION",
					title: "Build Real Growth",
					content: "We exist to build real strategies, real systems, and real growth. We fight for businesses that deserve more and do not stop until the numbers move."
				},
				promise: {
					label: "03 — OUR PROMISE",
					title: "Every Client. Every Campaign.",
					content: "That is the future we are building toward. Every client. Every campaign. Every day. We show up, we deliver, and we hold ourselves accountable to your growth."
				},
				standFor: {
					label: "04 — WHAT WE STAND FOR",
					title: "No Guesswork. No Wasted Budget.",
					content: "No inflated reports. No wasted budget. Just clear thinking, precise execution, and measurable outcomes you can hold us accountable for."
				}
			},
			howWeWork: {
				title: "HOW WE WORK",
				subtitle: "We lead with clarity, not complexity.",
				intro: "Every engagement starts with understanding your goals — not our portfolio. We build systems that scale, teams that align, and strategies that hold up under pressure.",
				items: [
					{
						title: "TRANSPARENCY ALWAYS",
						content: "You see exactly what we're doing, why we're doing it, and what the numbers say — no black boxes, no jargon."
					},
					{
						title: "OWNERSHIP MENTALITY",
						content: "We treat your business like it's ours. That means we care about what actually moves, not what looks good in a deck."
					},
					{
						title: "LONG-TERM THINKING",
						content: "We're not here for a quick win. We build frameworks that continue working — with or without us in the room."
					},
					{
						title: "RADICAL ACCOUNTABILITY",
						content: "If we commit to a target, we own the path to reach it. Results are our reputation."
					}
				]
			},
			cta: {
				title: "READY TO BUILD SOMETHING REAL?",
				subtitle: "Book Your Strategy Session NOW.",
				button: "No pitches. No fluff. Just clarity. Start your growth journey today."
			}
		},
		services: {
			meta: {
				title: "Services | Growth Station — Digital Excellence",
				description: "Explore our premium services: Web Development, Mobile Apps, UI/UX Design, Branding, Marketing, and more. Everything your brand needs."
			},
			hero: {
				eyebrow: "WHAT WE DO",
				title: "Everything your brand needs",
				subtitle: "Nothing it doesn't",
				description: "We craft digital products, scalable systems & premium experiences that move ambitious businesses forward.",
				exploreBtn: "EXPLORE SERVICES",
				bookBtn: "BOOK A SESSION"
			},
			services: {
				webDevelopment: {
					title: "Web Development",
					description: "Your digital presence is not just a website — it's your business working for you around the clock. We build custom websites and software solutions that are fast, scalable, and designed to solve real business problems. From the first line of code to the final user experience, everything is built with one purpose: to move your business forward."
				},
				ecommerce: {
					title: "E-commerce",
					description: "Transform your store into a 24/7 revenue machine. We build e-commerce platforms that are secure, fast, and optimized for conversions — turning visitors into customers and browsers into buyers."
				},
				mobileApp: {
					title: "Mobile Application",
					description: "Your brand in your customers' pockets. We develop native and cross-platform mobile applications that deliver seamless experiences, drive engagement, and keep your business connected to your audience anytime, anywhere."
				},
				uiux: {
					title: "UI / UX Design",
					description: "Great design is invisible — users just feel it. We craft intuitive, purposeful interfaces that reduce friction, guide decisions, and turn visitors into loyal users."
				},
				ads: {
					title: "Ads & Performance Advertising",
					description: "Every pound you spend should work harder. We build and manage data-driven ad campaigns on Meta, Google, and TikTok — optimized for real ROI, not inflated impressions."
				},
				socialMedia: {
					title: "Social Media Management",
					description: "Your social media should work while you sleep. We manage your platforms end-to-end — strategy, content, community, and reporting — so every post serves a purpose beyond the feed."
				},
				content: {
					title: "Content Creation",
					description: "Content without strategy is just noise. We create purposeful, high-impact content — from short-form videos to long-form articles — designed to build authority and generate demand."
				},
				branding: {
					title: "Branding",
					description: "A brand is not a logo — it's a feeling. We build complete brand identities that command attention, communicate trust, and position your business exactly where it deserves to be in the market."
				},
				strategy: {
					title: "Strategy",
					description: "Execution without direction is expensive. Before anything goes live, we build a tailored growth strategy — one that connects your business goals to the right channels, messages, and markets."
				},
				media: {
					title: "Media Production",
					description: "We produce visuals that stop the scroll and tell your story with impact. From brand films to product shoots, every frame is crafted to reflect the quality your brand stands for."
				}
			},
			whyGrowthStation: {
				title: "WHY GROWTH STATION?",
				subtitle: "Most agencies deliver work... We deliver growth.",
				description: "There is no shortage of agencies that post, design, and execute. What is rare is a partner who starts with your business goals, builds a strategy around them, and takes full ownership of the results. That is exactly what Growth Station is built to do.",
				items: [
					{
						title: "STRATEGY BEFORE EVERYTHING",
						content: "Every campaign, every post, every decision is connected to a clear growth plan built specifically for your business."
					},
					{
						title: "RESULTS YOU CAN MEASURE",
						content: "We are allergic to vanity metrics. We track what moves your business — leads, conversions, and real ROI."
					},
					{
						title: "EGYPT & GCC, ONE PARTNER",
						content: "We are fluent in both markets. Whether scaling locally or expanding across the Gulf, we know the audiences, dynamics, and opportunities."
					},
					{
						title: "FULL STACK, ONE TEAM",
						content: "Strategy, branding, software, content, ads, and media — all under one roof, all aligned to one goal. No handoffs. No gaps."
					}
				]
			},
			cta: {
				tags: [
					"Team",
					"Strategy",
					"Growth"
				],
				title: "Ready to build something remarkable?",
				subtitle: "Let's create something premium, scalable & unforgettable. No fluff — just clarity and results.",
				button: "BOOK APPOINTMENT →"
			}
		},
		framework: {
			meta: {
				title: "Framework | Growth Station — Strategic Growth System",
				description: "Discover our proven framework for building sustainable growth. Strategy before execution, systems before campaigns."
			},
			hero: {
				eyebrow: "OUR FRAMEWORK",
				title: "STRATEGY BEFORE",
				subtitle: "EXECUTION",
				description: "We do not build random campaigns. Every move is connected to a system designed for long-term growth."
			},
			steps: {
				discover: {
					title: "DISCOVER",
					content: "We do not move until we know your business, market, and audience with complete clarity. Assumptions are not part of our process."
				},
				position: {
					title: "POSITION",
					content: "We define where your brand stands and why it wins. Without sharp positioning, everything else is wasted effort."
				},
				build: {
					title: "BUILD",
					content: "Every system, campaign, and piece of content is built with one standard: does it move the business forward? If not, it does not exist."
				},
				scale: {
					title: "SCALE",
					content: "Launch is not the finish line. We optimize relentlessly, expand deliberately, and push your brand into markets it was always capable of reaching."
				}
			},
			thinking: {
				title: "THE THINKING BEHIND THE WORK",
				subtitle: "WHAT SEPARATES US IS NOT WHAT WE DO — IT IS HOW WE THINK BEFORE WE DO ANYTHING",
				approach: {
					title: "HOW WE APPROACH GROWTH",
					content: "Campaigns fade. Systems compound. We build systems. Bursts of activity are not growth — they are noise with good timing. Every decision we make is part of a connected system designed to deliver results that compound over time. We do not chase momentum. We build the infrastructure that creates it."
				},
				strategy: {
					title: "HOW WE BUILD STRATEGY",
					content: "A strategy that lives in a document is not a strategy. It is a proposal. We build strategies that make decisions — ones that tell you exactly what to pursue, what to cut, and why. Clear enough to guide every execution choice. Specific enough to hold us accountable. Not a presentation. A system of thinking your entire team can operate from."
				},
				failure: {
					title: "WHY MOST BRANDS FAIL",
					content: "They are busy. They are not building. Daily posts. Ads without strategy. Trends without a brand voice. The problem is never effort — it is direction. Businesses that execute without a clear foundation do not grow. They repeat. We make sure every action is connected to an outcome. Because activity without direction is just expensive noise."
				},
				success: {
					title: "HOW WE MEASURE SUCCESS",
					content: "If it does not move your business forward, it does not count. We are not interested in vanity metrics. Followers, impressions, and reach tell us very little. We measure what matters — qualified leads, conversion rates, revenue impact, and brand equity that builds over time. Every report we deliver is built around one question: did this grow your business?"
				}
			}
		},
		contact: {
			meta: {
				title: "Contact | Growth Station — Get in Touch",
				description: "Contact Growth Station. Let's discuss how we can help you bring your ideas to life. We'll get back to you within 24 hours."
			},
			hero: {
				title: "Talk to us.",
				subtitle: "Do you have a project? Let's discuss how we can help you bring your ideas to life.",
				description: "Let's start. Fill in the form below and our team will get back to you within 24 hours."
			},
			form: {
				intro: "Let's start. Fill in the form below and our team will get back to you within 24 hours.",
				fullName: "FULL NAME",
				email: "EMAIL",
				phone: "PHONE (OPTIONAL)",
				message: "MESSAGE",
				sendButton: "SEND MESSAGE"
			},
			info: {
				emailLabel: "EMAIL",
				email: "info@growthstationco.com",
				phoneLabel: "PHONE",
				phone: "+20 128 133 8483",
				workingHoursLabel: "WORKING HOURS",
				workingHours: "Sun – Thu  ·  10:00 AM — 06:00 PM",
				followLabel: "FOLLOW US",
				locationLabel: "LOCATION",
				address: "17 Ismail El Qabbany Street, Nasr City, Cairo\n1st Floor, Apartment 1"
			},
			social: {
				facebook: "https://facebook.com/growthstationco",
				instagram: "https://instagram.com/growthstationco",
				tiktok: "https://tiktok.com/@growthstationco",
				snapchat: "https://snapchat.com/add/growthstationco",
				behance: "https://behance.net/growthstationco",
				linkedin: "https://linkedin.com/company/growthstationco",
				whatsapp: "https://wa.me/201281338483"
			}
		},
		careers: {
			meta: {
				title: "Careers | Growth Station — Join Us",
				description: "Join the Growth Station team. We build systems, not just campaigns. We're looking for people who think before they execute."
			},
			hero: {
				badge: "WE'RE HIRING",
				title: "Build something",
				subtitle: "that matters.",
				description: "Join a team that builds systems, not just campaigns. We're looking for people who think before they execute."
			},
			filters: {
				all: "ALL",
				development: "DEVELOPMENT",
				design: "DESIGN",
				marketing: "MARKETING"
			},
			positions: {
				title: "OPEN POSITIONS",
				noPositions: "No positions available at the moment. Check back later."
			},
			openApplication: {
				title: "Don't see your role?",
				description: "Send an open application — we're always looking for great people.",
				button: "SEND OPEN APPLICATION"
			},
			application: {
				badge: "GENERAL · OPEN",
				title: "Open Application",
				subtitle: "Tell us who you are and what you're great at — we'll find the right fit.",
				fullName: "FULL NAME",
				email: "EMAIL",
				phone: "PHONE",
				portfolio: "PORTFOLIO / LINKEDIN",
				cv: "CV / RESUME",
				dropCV: "Drop your CV here or browse files",
				fileTypes: "PDF or Word · Max 5 MB",
				whyGrowthStation: "WHY GROWTH STATION?",
				submitButton: "SUBMIT APPLICATION",
				cancelButton: "CANCEL"
			}
		},
		brief: {
			meta: {
				title: "Brief | Growth Station — Project Brief",
				description: "Help us understand your business, goals, and vision — so we can build something remarkable together."
			},
			hero: {
				badge: "CLIENT ONBOARDING",
				title: "Project",
				subtitle: "Brief",
				description: "Help us understand your business, goals, and vision — so we can build something remarkable together."
			},
			options: {
				marketing: "MARKETING",
				software: "SOFTWARE",
				both: "BOTH TOGETHER"
			},
			yourInfo: {
				title: "YOUR INFORMATION",
				fullName: "FULL NAME",
				brand: "YOUR BRAND",
				email: "EMAIL",
				code: "CODE",
				phone: "PHONE"
			},
			marketing: {
				community: {
					title: "COMMUNITY MANAGEMENT",
					subtitle: "MODERATOR",
					business: "Tell us briefly about your business and audience?",
					platforms: "What platforms do you use?",
					complaints: "How are complaints handled?"
				},
				brand: {
					title: "BRAND & STRATEGY",
					subtitle: "CONTENT",
					problem: "What problem do you solve?",
					competitors: "Who are your competitors?",
					vibe: "What brand vibe do you want? (Luxury / Bold / Friendly)",
					contentGoal: "What is your content goal?",
					testimonials: "Do you have testimonials or past campaigns?",
					buyingProcess: "How do customers buy from you?",
					priceRange: "Price range + past results?"
				},
				visual: {
					title: "VISUAL IDENTITY",
					subtitle: "GRAPHIC",
					logo: "Do you have a logo or identity?",
					style: "What visual style do you want?",
					references: "Any references or inspirations?",
					avoid: "Colors or styles to avoid?"
				}
			},
			software: { development: {
				title: "DIGITAL DEVELOPMENT",
				subtitle: "WEB DEVELOPER",
				projectType: "What type of project do you need?",
				goal: "What is the main goal / problem to solve?",
				features: "Must-have features?",
				dashboard: "Do you need admin dashboard? What should it manage?",
				integrations: "Integrations needed? (Google, WhatsApp, Maps, Shipping)",
				launchDate: "Launch date & maintenance needs?"
			} },
			submitButton: "SUBMIT BRIEF →"
		}
	},
	ar: {
		meta: {
			title: "Growth Station | شريك النمو الاستراتيجي — مصر والخليج",
			description: "نحن شريك النمو الاستراتيجي للشركات الطموحة في مصر ومنطقة الخليج — نبني براندات قوية ونحقق نتائج قابلة للقياس."
		},
		nav: {
			home: "الرئيسية",
			about: "من نحن",
			services: "الخدمات",
			portfolio: "أعمالنا",
			framework: "إطار العمل",
			process: "آلية العمل",
			careers: "الوظائف",
			brief: "مشروع",
			contact: "تواصل معنا",
			getStarted: "ابدأ الآن"
		},
		hero: {
			badge: "مصر والخليج",
			title: "نحن شريك",
			titleHighlight: "الشركات الطموحة",
			titleEnd: "في مصر ومنطقة الخليج — نبني براندات قوية ونحقق نموًا قابلًا للقياس.",
			ctaPrimary: "ابدأ الآن",
			ctaSecondary: "استكشف الخدمات",
			statGrowth: "متوسط نمو العملاء",
			statMarkets: "الأسواق",
			markets: "مصر · الإمارات · السعودية"
		},
		marquee: [
			"الاستراتيجية قبل التنفيذ",
			"نمو يتجاوز الحدود",
			"الاستراتيجية قبل التنفيذ",
			"نمو يتجاوز الحدود"
		],
		expertise: {
			eyebrow: "خبراتنا",
			title: "خدمات تفاعلية",
			marketing: {
				tag: "خدمات تفاعلية",
				title: "التسويق",
				description: "استراتيجيات مركّزة على الأداء لبناء العلامات وتعظيم العائد عبر كل القنوات الرقمية.",
				items: [
					"إدارة السوشيال ميديا",
					"إعلانات ميتا وجوجل",
					"استراتيجية العلامة",
					"صناعة المحتوى",
					"SEO وحملات المؤثرين"
				],
				cta: "استكشف التسويق ←"
			},
			software: {
				tag: "خدمات تفاعلية",
				title: "البرمجيات",
				description: "حلول برمجية قابلة للتوسع والأتمتة وتجارب رقمية من الجيل القادم.",
				items: [
					"تطوير المواقع",
					"تطبيقات الموبايل",
					"دمج الذكاء الاصطناعي وواجهات API",
					"منصات SaaS",
					"تصميم UI/UX و CMS"
				],
				cta: "استكشف البرمجيات ←"
			}
		},
		approach: {
			eyebrow: "منهجيتنا",
			title: "إطار عملنا",
			cta: "استكشف الإطار ←",
			steps: [
				{
					label: "كيف نعمل",
					title: "اكتشاف",
					text: "لا نتحرك قبل أن نفهم عملك وسوقك وجمهورك بوضوح تام. الافتراضات ليست جزءًا من عملنا."
				},
				{
					label: "إطار عملنا",
					title: "تموضع",
					text: "نحدد مكان علامتك ولماذا تفوز. بدون تموضع حاد، كل الجهد يضيع."
				},
				{
					label: "إطار عملنا",
					title: "بناء",
					text: "كل نظام وحملة ومحتوى يُبنى بمعيار واحد: هل يحرّك العمل للأمام؟ إن لم يكن، لا يوجد."
				},
				{
					label: "إطار عملنا",
					title: "توسّع",
					text: "الإطلاق ليس النهاية. نُحسّن باستمرار ونوسّع بعمد وندفع علامتك لأسواق كانت قادرة عليها دائمًا."
				}
			],
			imageAlt: "جلسة تخطيط استراتيجي"
		},
		whyUs: {
			eyebrow: "لماذا نحن",
			line1: "معظم الوكالات تُسلّم عملًا.",
			line2: "نحن نُسلّم نموًا.",
			items: [
				{
					title: "الاستراتيجية أولًا",
					text: "كل قرار مبني على بحث عميق وتفكير استراتيجي واضح."
				},
				{
					title: "مدفوع بالأداء",
					text: "نتائج قابلة للقياس — من الظهور إلى التحويل والإيرادات."
				},
				{
					title: "تنفيذ سريع",
					text: "السرعة ميزة تنافسية. نتحرك بسرعة دون المساس بالجودة."
				},
				{
					title: "شريك طويل الأمد",
					text: "نستثمر في نجاحك كأنه نجاحنا — مبني للمدى الطويل."
				}
			]
		},
		process: {
			eyebrow: "كيف نعمل",
			titleEm: "عمليتنا",
			titleOutline: "وإطارنا",
			description: "عمل حقيقي. نتائج حقيقية. نظرة مختارة على العلامات التي بنيناها والمنتجات التي أطلقناها والأعمال التي نمّيناها.",
			filterAll: "الكل",
			cardCta: "شاهد المشروع",
			bottomText: "تريد رؤية المزيد من أعمالنا؟",
			bottomBtn: "عرض كل المشاريع",
			categories: [
				"تطوير العلامة",
				"منتجات رقمية",
				"تسويق ونمو",
				"صناعة المحتوى",
				"استراتيجية وتخطيط",
				"علامة وإبداع"
			],
			items: [
				{
					num: "01",
					client: "Kromo Dev.",
					location: "اليونان",
					service: "تطوير العلامة",
					tags: [
						"هندسة العلامة",
						"تصميم الشعار",
						"الهوية"
					],
					color: "#C08D51",
					bg: "linear-gradient(135deg, #2a1a0a 0%, #3d2409 50%, #1a0d04 100%)",
					shape: "circle"
				},
				{
					num: "02",
					client: "Naguib Selim",
					location: "مصر",
					service: "منتجات رقمية",
					tags: [
						"تطوير ويب",
						"UI/UX",
						"React"
					],
					color: "#96CDB0",
					bg: "linear-gradient(135deg, #0a1f18 0%, #0d2a20 50%, #061410 100%)",
					shape: "triangle"
				},
				{
					num: "03",
					client: "Gulf Brand Co.",
					location: "الإمارات",
					service: "تسويق ونمو",
					tags: [
						"إعلانات",
						"سوشيال ميديا",
						"استراتيجية"
					],
					color: "#b7f5d3",
					bg: "linear-gradient(135deg, #081a14 0%, #0f2b20 50%, #041008 100%)",
					shape: "diamond"
				},
				{
					num: "04",
					client: "Luxe Cairo",
					location: "مصر",
					service: "صناعة المحتوى",
					tags: [
						"إنتاج مرئي",
						"محتوى",
						"تصوير"
					],
					color: "#C08D51",
					bg: "linear-gradient(135deg, #1a1208 0%, #2a1e0a 50%, #100b04 100%)",
					shape: "hexagon"
				},
				{
					num: "05",
					client: "TechFlow",
					location: "السعودية",
					service: "استراتيجية وتخطيط",
					tags: [
						"استراتيجية نمو",
						"مؤشرات KPI",
						"تخطيط"
					],
					color: "#96CDB0",
					bg: "linear-gradient(135deg, #0c1f1a 0%, #122b24 50%, #061410 100%)",
					shape: "circle"
				},
				{
					num: "06",
					client: "Orbit Studio",
					location: "مصر",
					service: "علامة وإبداع",
					tags: [
						"براندينج",
						"هوية",
						"تصميم بصري"
					],
					color: "#fff",
					bg: "linear-gradient(135deg, #101a16 0%, #1a2820 50%, #080f0c 100%)",
					shape: "triangle"
				}
			]
		},
		leadership: {
			eyebrow: "القيادة",
			title: "تعرف على الفريق",
			members: [
				{
					name: "أبو طالب",
					role: "المؤسس والرئيس التنفيذي",
					badge: "CEO",
					bio: "بناء العلامات والأنظمة وتجارب النمو القابلة للتوسع في مصر والخليج."
				},
				{
					name: "رنا الطورقي",
					role: "مديرة العمليات",
					badge: "عمليات",
					bio: "قيادة العمليات والتواصل والتنفيذ بدقة واتساق."
				},
				{
					name: "أسامة محمد",
					role: "مدير حسابات",
					badge: "نجاح العملاء",
					bio: "إدارة علاقات العملاء والأداء مع تركيز قوي على النتائج القابلة للقياس."
				}
			]
		},
		recruiting: {
			badge: "نوظّف الآن",
			title1: "نبني فريقًا",
			title2: "يتحرك بسرعة.",
			description: "لسنا نبحث عن موظفين. نبحث عن بناة ومبدعين ومشغّلين يريدون النمو معنا في مصر والخليج.",
			ctaPrimary: "انضم لـ Growth Station ←",
			ctaSecondary: "الوظائف المتاحة"
		},
		footer: {
			tagline: "نحن شريك النمو الاستراتيجي للشركات الطموحة في مصر ومنطقة الخليج — نبني براندات قوية ونحقق نتائج قابلة للقياس.",
			navigation: "التنقل",
			servicesTitle: "الخدمات",
			services: [
				"تسويق الأداء",
				"استراتيجية العلامة",
				"تطوير المواقع",
				"تصميم UI/UX",
				"حلول الذكاء الاصطناعي"
			],
			contactTitle: "تواصل معنا",
			location: "القاهرة، مصر",
			rights: "© 2026 Growth Station. جميع الحقوق محفوظة.",
			privacy: "سياسة الخصوصية",
			terms: "الشروط والأحكام"
		},
		lang: {
			switchToAr: "ع",
			switchToEn: "EN"
		},
		about: {
			meta: {
				title: "من نحن | Growth Station — شريك النمو الاستراتيجي",
				description: "تعرف على قصة Growth Station ورسالتنا وكيف نساعد الشركات في مصر والخليج على تحقيق نمو حقيقي."
			},
			ourStory: {
				title: "قصتنا",
				whyExist: {
					title: "لماذا وجد Growth Station؟",
					content: "الكثير من الشركات الطموحة كانت تستثمر في التسويق — ولا تحصل على شيء سوى المحتوى. رأينا مؤسسي وأصحاب الشركات الذين لديهم كل ما يلزم لبناء شيء عظيم — الرؤية، الحماس، الإيمان — يعيقهم وكالات تركز على المخرجات أكثر من النتائج. شركات تستحق شريكًا حقيقيًا، ليس مجرد مورد آخر. بُني Growth Station ليكون ذلك الشريك. شريك يقود بالاستراتيجية، يعمل بوضوح، ويقيس النجاح كما تفعل أنت — في الإيرادات، في النمو، في النتائج التي تحدث فرقًا حقيقيًا. للشركات في مصر والخليج المستعدة للتوقف عن القبول بأقل — نحن مستعدون للبناء.",
					cta: "لنبنِ شيئًا يدوم. احجز جلسة استراتيجية مجانية اليوم — بدون عروض بيع، فقط وضوح.",
					button: "ابدأ رحلة النمو."
				},
				whatDifferent: {
					title: "ما الذي يميزنا؟",
					content: "فرقنا ليس خدمة. إنه طريقة تفكير. نرفض لمس التنفيذ قبل أن تكون الاستراتيجية محكمة — لأننا رأينا الكثير من الشركات تهدر ميزانياتها على محتوى مبني على لا شيء. نحن لا نبيع لك تسويقًا. نحن نبيع لك وضوحًا — صورة واضحة عن أين أنت، أين تحتاج أن تذهب، وما الذي يتطلبه الأمر بالضبط للوصول هناك. التسويق هو مجرد كيف نثبت أن التفكير يعمل.",
					arabic: "اﻟﻔﺮق ﺑﺘﺎﻋﻨﺎ ﻣﺶ ﺧﺪﻣﺔ — ﻫﻮ ﻃﺮﻳﻘﺔ ﺗﻔﻜﻴﺮ. ﺑﻨﺮﻓﺽ ﻧﻨﻔﺬ أي ﺣﺎﺟﺔ ﻗﺒﻞ ﻣﺎ اﻻﺳﺘﺮاﺗﻴﺠﻴﺔ ﺗﻜﻮن ﻣﺤﻜﻤﺔ — ﻷﻧﻨﺎ ﺷﻮﻓﻨﺎ ﺷﺮﻛﺎت ﻛﺘﻴﺮ ﺑﺘﺼﺮف ﻣﻴﺰاﻧﻴﺎﺗﻬﺎ ﻋﲆ ﻣﺤﺘﻮى ﻣﺒﻨﻲ ﻋﲆ ﻻ ﺷﻲء. إﺣﻨﺎ ﻣﺶ ﺑﻨﺒﻴﻌﻠﻚ ﻣﺎرﻛﺘﻴﻨﺞ. إﺣﻨﺎ ﺑﻨﺒﻴﻌﻠﻚ وﺿﻮح — ﺻﻮرة واﺿﺤﺔ ﻋﻦ اﻧﺖ ﻓﻴﻦ، ﻣﺤﺘﺎج ﺗﻮﺻﻞ ﻓﻴﻦ، وإﻳﻪ اﻟﻠﻲ ﻫﻴﻮﺻﻠﻚ ﺑﺎﻟﻈﺒﻂ. اﻟﻤﺎرﻛﺘﻴﻨﺞ ﺑﺲ ﻫﻮ اﻟﺪﻟﻴﻞ إن اﻟﺘﻔﻜﻴﺮ ده ﺑﻴﺸﺘﻐﻞ."
				},
				whoServe: {
					title: "من نخدم؟",
					content: "أعطيتهم ثقتك، ميزانيتك، وقتك — وأعطوك في المقابل أعذارًا. نعمل مع مؤسسي وأصحاب الشركات الذين مروا بذلك — وخرجوا من الجانب الآخر أكثر إصرارًا، ليس محطمين. أناس لا يزالون يؤمنون بما يبنونه، رغم كل شيء. أناس لا يبحثون عن وكالة أخرى لتخيب آمالهم. يبحثون عن شريك يشعر بثقل حلمهم — ويحمله وكأنه حلمه.",
					arabic: "أﻋﻄﻴﺘﻬﻢ ﺛﻘﺘﻚ، ﻣﻴﺰاﻧﻴﺘﻚ، وﻗﺘﻚ — وأﻋﻄﻮك ﻓﻲ اﻟﻤﻘﺎﺑﻞ أﻋﺬاراً. ﻧﻌﻤﻞ ﻣﻊ founders وأﺻﺤﺎب ﺷﺮﻛﺎت ﻣﺮوا ﺑﻬﺬه اﻟﺘﺠﺮﺑﺔ — وﺧﺮﺟﻮا ﻣﻨﻬﺎ أﻛﺜﺮ إﺻﺮاراً، أﻧﺎس ﻻ ﻳﺰاﻟﻮن ﻳﺆﻣﻨﻮن ﺑﻤﺎ ﻳﺒﻨﻮﻧﻪ رﻏﻢ ﻛﻞ ﺷﻲء. أﻧﺎس ﻻ ﻳﺒﺤﺜﻮن ﻋﻦ وﻛﺎﻟﺔ أﺧﺮى ﺗﺨﺬﻟﻬﻢ. ﻳﺒﺤﺜﻮن ﻋﻦ ﺷﺮﻳﻚ ﻳﺤﻤﻞ ﺛﻘﻞ ﺣﻠﻤﻬﻢ — وﻳﺘﻌﺎﻣﻞ ﻣﻌﻪ ﻛﺄﻧﻪ ﺣﻠﻤﻪ ﻫﻮ.",
					cta: "توقف عن القبول بالوكالات التي تقدم أقل مما تستحق. ابدأ رحلة النمو"
				}
			},
			whyGrowthStation: {
				title: "لماذا Growth Station؟",
				subtitle: "معظم الوكالات تُسلّم عملًا... نحن نُسلّم نموًا.",
				items: [
					{
						title: "الاستراتيجية قبل كل شيء",
						content: "لا نلمس التنفيذ قبل أن تكون الاستراتيجية محكمة. كل حملة، كل منشور، وكل قرار مرتبط بخطة نمو واضحة مبنية خصيصًا لعملك."
					},
					{
						title: "نتائج يمكنك قياسها",
						content: "نحن نتحسس من المقاييس الظاهرية. الإعجابات والوصول لا تعني شيئًا إذا لم يتبعها إيراد. نتابع العملاء المحتملين، التحويلات، والعائد الحقيقي."
					},
					{
						title: "مصر والخليج، شريك واحد",
						content: "سواء كنت تنمو محليًا أو تتوسع عبر الخليج، نحن نفهم الجماهير، الثقافة، والفرص."
					},
					{
						title: "خدمات متكاملة، فريق واحد",
						content: "الاستراتيجية، العلامة، البرمجيات، المحتوى، الإعلانات، والإعلام — كلها تحت سقف واحد، كلها متوافقة لهدف واحد."
					}
				]
			},
			whatDrivesUs: {
				title: "ما الذي يحركنا",
				subtitle: "الرؤية. المهمة. الوعد.",
				vision: {
					label: "01 — الرؤية",
					title: "مستقبل بدون قبول بأقل",
					content: "نبني مستقبلًا حيث تجد كل شركة طموحة في مصر والخليج شريكًا يفكر في نموها بنفس الجدية التي تفكر بها. حيث الاستراتيجية ليست رفاهية، والنتائج ليست وعدًا — هي معيار."
				},
				mission: {
					label: "02 — المهمة",
					title: "بناء نمو حقيقي",
					content: "نحن موجودون لبناء استراتيجيات حقيقية، أنظمة حقيقية، ونمو حقيقي. نناضل من أجل الشركات التي تستحق أكثر ولا نتوقف حتى تتحرك الأرقام."
				},
				promise: {
					label: "03 — وعدنا",
					title: "كل عميل. كل حملة.",
					content: "هذا هو المستقبل الذي نبني نحوه. كل عميل. كل حملة. كل يوم. نحضر، نُسلم، ونحاسب أنفسنا على نموك."
				},
				standFor: {
					label: "04 — ما نقف عليه",
					title: "لا تخمين. لا ميزانية مهدرة.",
					content: "لا تقارير مُبالغ فيها. لا ميزانية مهدرة. فقط تفكير واضح، تنفيذ دقيق، ونتائج قابلة للقياس يمكنك محاسبتنا عليها."
				}
			},
			howWeWork: {
				title: "كيف نعمل",
				subtitle: "نقود بالوضوح، ليس بالتعقيد.",
				intro: "كل تعاون يبدأ بفهم أهدافك — ليس محفظتنا. نبني أنظمة قابلة للتوسع، فرق متوافقة، واستراتيجيات تصمد تحت الضغط.",
				items: [
					{
						title: "الشفافية دائمًا",
						content: "ترى بالضبط ما نفعل، لماذا نفعل، وما تقول الأرقام — لا صناديق سوداء، لا مصطلحات معقدة."
					},
					{
						title: "عقلية الملكية",
						content: "نعامل عملك وكأنه عملنا. هذا يعني أننا نهتم بما يتحرك فعليًا، لا بما يبدو جيدًا في عرض تقديمي."
					},
					{
						title: "التفكير طويل الأمد",
						content: "لسنا هنا لفوز سريع. نبني أطرًا تستمر في العمل — معنا أو بدوننا في الغرفة."
					},
					{
						title: "المسؤولية الجذرية",
						content: "إذا التزمنا بهدف، نملك الطريق للوصول إليه. النتائج هي سمعتنا."
					}
				]
			},
			cta: {
				title: "مستعد لبناء شيء حقيقي؟",
				subtitle: "احجز جلسة استراتيجية الآن.",
				button: "لا عروض بيع. لا كلام فارغ. فقط وضوح. ابدأ رحلة النمو اليوم."
			}
		},
		services: {
			meta: {
				title: "الخدمات | Growth Station — التميز الرقمي",
				description: "استكشف خدماتنا الفاخرة: تطوير المواقع، تطبيقات الموبايل، تصميم UI/UX، العلامة التجارية، التسويق، والمزيد. كل ما يحتاجه علامتك."
			},
			hero: {
				eyebrow: "ماذا نفعل",
				title: "كل ما يحتاجه علامتك",
				subtitle: "ولا شيء لا تحتاجه",
				description: "نصنع منتجات رقمية، أنظمة قابلة للتوسع وتجارب فاخرة تدفع الشركات الطموحة للأمام.",
				exploreBtn: "استكشف الخدمات",
				bookBtn: "احجز جلسة"
			},
			services: {
				webDevelopment: {
					title: "تطوير المواقع",
					description: "وجودك الرقمي ليس مجرد موقع — إنه عملك يعمل لطوال اليوم. نبني مواقع مخصصة وحلول برمجية سريعة وقابلة للتوسع ومصممة لحل مشاكل الأعمال الحقيقية. من أول سطر كود إلى آخر تجربة مستخدم، كل شيء مبني لغرض واحد: دفع عملك للأمام."
				},
				ecommerce: {
					title: "التجارة الإلكترونية",
					description: "حول متجرك إلى آلة إيرادات تعمل على مدار الساعة. نبني منصات تجارة إلكترونية آمنة وسريعة ومحسنة للتحويل — تحويل الزوار إلى عملاء والمتصفحين إلى مشترين."
				},
				mobileApp: {
					title: "تطبيقات الموبايل",
					description: "علامتك في جيوب عملائك. نطور تطبيقات موبايل native و cross-platform تقدم تجارب سلسة، تزيد المشاركة، وتبقي عملك متصلاً بجمهورك في أي وقت وفي أي مكان."
				},
				uiux: {
					title: "تصميم UI / UX",
					description: "التصميم العظيم غير مرئي — المستخدمون يشعرون به فقط. نصنع واجهات بديهية ذات غرض تقلل الاحتكاك، توجه القرارات، وتحول الزوار إلى مستخدمين مخلصين."
				},
				ads: {
					title: "الإعلانات والتسويق بالأداء",
					description: "كل جنيه تنفقه يجب أن يعمل بجد. نبني وندير حملات إعلانية مدفوعة بالبيانات على Meta و Google و TikTok — محسنة لعائد حقيقي، وليس لانطباعات مبالغ فيها."
				},
				socialMedia: {
					title: "إدارة السوشيال ميديا",
					description: "سوشيال ميديا يجب أن تعمل أثناء نومك. ندير منصاتك من البداية للنهاية — الاستراتيجية، المحتوى، المجتمع، والتقارير — بحيث كل منشور يخدم غرضاً يتجاوز التغذية."
				},
				content: {
					title: "صناعة المحتوى",
					description: "المحتوى بدون استراتيجية هو مجرد ضجيج. نصنع محتوى هادف عالي التأثير — من الفيديوهات القصيرة إلى المقالات الطويلة — مصمم لبناء السلطة وتوليد الطلب."
				},
				branding: {
					title: "العلامة التجارية",
					description: "العلامة التجارية ليست شعاراً — إنها شعور. نبني هويات علامات تجارية كاملة تجذب الانتباه، توصل الثقة، وتضع عملك بالضبط حيث يستحق أن يكون في السوق."
				},
				strategy: {
					title: "الاستراتيجية",
					description: "التنفيذ بدون اتجاه مكلف. قبل أن يذهب أي شيء حي، نبني استراتيجية نمو مخصصة — واحدة تربط أهداف عملك بالقنوات والرسائل والأسواق الصحيحة."
				},
				media: {
					title: "الإنتاج الإعلامي",
					description: "ننتج مرئيات توقف التمرير وتروي قصتك بتأثير. من أفلام العلامة التجارية إلى تصوير المنتجات، كل إطار مصنع ليعكس الجودة التي تقف عليها علامتك."
				}
			},
			whyGrowthStation: {
				title: "لماذا Growth Station؟",
				subtitle: "معظم الوكالات تُسلّم عملًا... نحن نُسلّم نموًا.",
				description: "لا يوجد نقص في الوكالات التي تنشر وتصمم وتنفذ. ما هو نادر هو شريك يبدأ بأهداف عملك، يبني استراتيجية حولها، ويأخذ ملكية كاملة للنتائج. هذا بالضبط ما بُني Growth Station ليفعله.",
				items: [
					{
						title: "الاستراتيجية قبل كل شيء",
						content: "كل حملة، كل منشور، كل قرار مرتبط بخطة نمو واضحة مبنية خصيصاً لعملك."
					},
					{
						title: "نتائج يمكنك قياسها",
						content: "نحن نتحسس من المقاييس الظاهرية. نتابع ما يحرك عملك — العملاء المحتملين، التحويلات، والعائد الحقيقي."
					},
					{
						title: "مصر والخليج، شريك واحد",
						content: "نحن متحدثون باللغتين في كلا السوقين. سواء كنت تنمو محلياً أو تتوسع عبر الخليج، نعرف الجماهير والديناميكيات والفرص."
					},
					{
						title: "خدمات متكاملة، فريق واحد",
						content: "الاستراتيجية، العلامة، البرمجيات، المحتوى، الإعلانات، والإعلام — كلها تحت سقف واحد، كلها متوافقة لهدف واحد. لا تسليمات. لا فجوات."
					}
				]
			},
			cta: {
				tags: [
					"فريق",
					"استراتيجية",
					"نمو"
				],
				title: "مستعد لبناء شيء استثنائي؟",
				subtitle: "لنصنع شيئاً فاخراً وقابلاً للتوسع وغير قابل للنسيان. لا كلام فارغ — فقط وضوح ونتائج.",
				button: "احجز موعداً ←"
			}
		},
		framework: {
			meta: {
				title: "الإطار | Growth Station — نظام النمو الاستراتيجي",
				description: "اكتشف إطارنا المثبت لبناء نمو مستدام. الاستراتيجية قبل التنفيذ، الأنظمة قبل الحملات."
			},
			hero: {
				eyebrow: "إطارنا",
				title: "الاستراتيجية قبل",
				subtitle: "التنفيذ",
				description: "لا نبني حملات عشوائية. كل حركة مرتبطة بنظام مصمم للنمو طويل الأمد."
			},
			steps: {
				discover: {
					title: "الاكتشاف",
					content: "لا نتحرك حتى نعرف عملك وسوقك وجمهورك بوضوح تام. الافتراضات ليست جزءاً من عمليتنا."
				},
				position: {
					title: "التموضع",
					content: "نحدد مكان علامتك التجارية ولماذا تفوز. بدون تموضع حاد، كل شيء آخر هو جهد ضائع."
				},
				build: {
					title: "البناء",
					content: "كل نظام وحملة وقطعة محتوى مبنية بمعيار واحد: هل تدفع العمل للأمام؟ إذا لا، فهي غير موجودة."
				},
				scale: {
					title: "التوسع",
					content: "الإطلاق ليس خط النهاية. نحسن بلا توقف، نتوسع عمداً، وندفع علامتك التجارية إلى الأسواق التي كانت دائماً قادرة على الوصول إليها."
				}
			},
			thinking: {
				title: "التفكير وراء العمل",
				subtitle: "ما يميزنا ليس ما نفعل — إنه كيف نفكر قبل أن نفعل أي شيء",
				approach: {
					title: "كيف نقترب النمو",
					content: "الحملات تتلاشى. الأنظمة تتضاعف. نبني الأنظمة. الانفجارات النشاط ليست نمواً — هي ضجيج بتوقيت جيد. كل قرار نتخذه هو جزء من نظام متصل مصمم لتقديم نتائج تتضاعف بمرور الوقت. لا نطارد الزخم. نبني البنية التحتية التي تخلقه."
				},
				strategy: {
					title: "كيف نبني الاستراتيجية",
					content: "الاستراتيجية التي تعيش في مستند ليست استراتيجية. هي مقترح. نبني استراتيجيات تتخذ قرارات — تخبرك بالضبط بما تلاحقه، ما تقطعه، ولماذا. واضحة بما يكفي لتوجيه كل خيار تنفيذي. محددة بما يكفي لمساءلتنا. ليست عرضاً تقديمياً. نظام تفكير يمكن لفريقك بأكمله العمل منه."
				},
				failure: {
					title: "لماذا تفشل معظم العلامات",
					content: "هم مشغولون. هم لا يبنون. منشورات يومية. إعلانات بدون استراتيجية. اتجاهات بدون صوت علامة تجارية. المشكلة ليست أبداً الجهد — إنه الاتجاه. الشركات التي تنفذ بدون أساس واضح لا تنمو. تتكرر. نتأكد من أن كل إجراء مرتبط بنتيجة. لأن النشاط بدون اتجاه هو مجرد ضجيج مكلف."
				},
				success: {
					title: "كيف نقيس النجاح",
					content: "إذا لم يدفع عملك للأمام، فلا يحسب. نحن لسنا مهتمين بالمقاييس الظاهرية. المتابعون والانطباعات والوصول تخبرنا قليلاً جداً. نقيس ما يهم — العملاء المحتولون المؤهلون، معدلات التحويل، تأثير الإيرادات، وحقوق العلامة التجارية التي تبني بمرور الوقت. كل تقرير نسلمه مبني حول سؤال واحد: هل نمى هذا عملك؟"
				}
			}
		},
		contact: {
			meta: {
				title: "تواصل معنا | Growth Station — تواصل معنا",
				description: "تواصل مع Growth Station. دعنا نناقش كيف يمكننا مساعدتك في تحويل أفكارك إلى واقع. سنعود إليك خلال 24 ساعة."
			},
			hero: {
				title: "تحدث إلينا.",
				subtitle: "هل لديك مشروع؟ دعنا نناقش كيف يمكننا مساعدتك في تحويل أفكارك إلى واقع.",
				description: "لنبدأ. املأ النموذج أدناه وسيقوم فريقنا بالرد عليك خلال 24 ساعة."
			},
			form: {
				intro: "لنبدأ. املأ النموذج أدناه وسيقوم فريقنا بالرد عليك خلال 24 ساعة.",
				fullName: "الاسم الكامل",
				email: "البريد الإلكتروني",
				phone: "رقم الهاتف (اختياري)",
				message: "الرسالة",
				sendButton: "إرسال الرسالة"
			},
			info: {
				emailLabel: "البريد الإلكتروني",
				email: "info@growthstationco.com",
				phoneLabel: "رقم الهاتف",
				phone: "+20 128 133 8483",
				workingHoursLabel: "ساعات العمل",
				workingHours: "الأحد - الخميس  ·  10:00 صباحاً — 06:00 مساءً",
				followLabel: "تابعنا",
				locationLabel: "الموقع",
				address: "أبو النجا للسيارات\nشارع إسماعيل القباني، مدينة نصر، القاهرة"
			},
			social: {
				facebook: "https://facebook.com/growthstationco",
				instagram: "https://instagram.com/growthstationco",
				tiktok: "https://tiktok.com/@growthstationco",
				snapchat: "https://snapchat.com/add/growthstationco",
				behance: "https://behance.net/growthstationco",
				linkedin: "https://linkedin.com/company/growthstationco",
				whatsapp: "https://wa.me/201281338483"
			}
		},
		careers: {
			meta: {
				title: "الوظائف | Growth Station — انضم إلينا",
				description: "انضم إلى فريق Growth Station. نبني أنظمة، وليس حملات فقط. نبحث عن أشخاص يفكرون قبل أن ينفذوا."
			},
			hero: {
				badge: "نحن نوظف",
				title: "ابنِ شيئاً",
				subtitle: "له معنى.",
				description: "انضم إلى فريق يبني أنظمة، وليس حملات فقط. نبحث عن أشخاص يفكرون قبل أن ينفذوا."
			},
			filters: {
				all: "الكل",
				development: "التطوير",
				design: "التصميم",
				marketing: "التسويق"
			},
			positions: {
				title: "الوظائف المتاحة",
				noPositions: "لا توجد وظائف متاحة حالياً. تحقق لاحقاً."
			},
			openApplication: {
				title: "لا تجد دورك؟",
				description: "أرسل طلباً مفتوحاً — نحن دائماً نبحث عن أشخاص مميزين.",
				button: "إرسال طلب مفتوح"
			},
			application: {
				badge: "عام · مفتوح",
				title: "طلب مفتوح",
				subtitle: "أخبرنا من أنت وماذا تفيدنا — سنجد الدور المناسب لك.",
				fullName: "الاسم الكامل",
				email: "البريد الإلكتروني",
				phone: "رقم الهاتف",
				portfolio: "معرض الأعمال / لينكد إن",
				cv: "السيرة الذاتية",
				dropCV: "أفلت سيرتك الذاتية هنا أو تصفح الملفات",
				fileTypes: "PDF أو Word · حد أقصى 5 ميجابايت",
				whyGrowthStation: "لماذا Growth Station؟",
				submitButton: "إرسال الطلب",
				cancelButton: "إلغاء"
			}
		},
		brief: {
			meta: {
				title: "مشروع | Growth Station — استبيان المشروع",
				description: "ساعدنا في فهم عملك وأهدافك ورؤيتك — حتى نتمكن من بناء شيء استثنائي معاً."
			},
			hero: {
				badge: "استقبال العملاء",
				title: "مشروع",
				subtitle: "استبيان",
				description: "ساعدنا في فهم عملك وأهدافك ورؤيتك — حتى نتمكن من بناء شيء استثنائي معاً."
			},
			options: {
				marketing: "التسويق",
				software: "البرمجيات",
				both: "الاثنان معاً"
			},
			yourInfo: {
				title: "معلوماتك",
				fullName: "الاسم الكامل",
				brand: "علامتك التجارية",
				email: "البريد الإلكتروني",
				code: "الكود",
				phone: "رقم الهاتف"
			},
			marketing: {
				community: {
					title: "إدارة المجتمع",
					subtitle: "مدير",
					business: "أخبرنا باختصار عن عملك وجمهورك؟",
					platforms: "ما المنصات التي تستخدمها؟",
					complaints: "كيف يتم التعامل مع الشكاوى؟"
				},
				brand: {
					title: "العلامة والاستراتيجية",
					subtitle: "المحتوى",
					problem: "ما المشكلة التي تحلها؟",
					competitors: "من هم منافسوك؟",
					vibe: "ما طابع العلامة الذي تريده؟ (فاخر / جريء / ودود)",
					contentGoal: "ما هو هدف المحتوى؟",
					testimonials: "هل لديك شهادات أو حملات سابقة؟",
					buyingProcess: "كيف يشتري منك العملاء؟",
					priceRange: "نطاق السعر + النتائج السابقة؟"
				},
				visual: {
					title: "الهوية البصرية",
					subtitle: "الجرافيك",
					logo: "هل لديك شعار أو هوية؟",
					style: "ما النمط البصري الذي تريده؟",
					references: "هل لديك مراجع أو إلهام؟",
					avoid: "ألوان أو أنماط يجب تجنبها؟"
				}
			},
			software: { development: {
				title: "التطوير الرقمي",
				subtitle: "مطور ويب",
				projectType: "ما نوع المشروع الذي تحتاجه؟",
				goal: "ما هو الهدف الرئيسي / المشكلة التي يجب حلها؟",
				features: "الميزات الأساسية؟",
				dashboard: "هل تحتاج لوحة تحكم؟ ماذا يجب أن تدير؟",
				integrations: "التكاملات المطلوبة؟ (Google, WhatsApp, Maps, Shipping)",
				launchDate: "تاريخ الإطلاق واحتياجات الصيانة؟"
			} },
			submitButton: "إرسال الاستبيان →"
		}
	}
};
function getDictionary(locale) {
	return dictionaries[locale];
}
//#endregion
//#region app/context/LanguageContext.tsx
var STORAGE_KEY = "gs-locale";
var LanguageContext = createContext(null);
function readStoredLocale() {
	if (typeof window === "undefined") return "en";
	return localStorage.getItem(STORAGE_KEY) === "ar" ? "ar" : "en";
}
function LanguageProvider({ children }) {
	const [locale, setLocaleState] = useState("en");
	useEffect(() => {
		setLocaleState(readStoredLocale());
	}, []);
	const setLocale = useCallback((next) => {
		setLocaleState(next);
		localStorage.setItem(STORAGE_KEY, next);
	}, []);
	const toggleLocale = useCallback(() => {
		setLocaleState((prev) => {
			const next = prev === "en" ? "ar" : "en";
			localStorage.setItem(STORAGE_KEY, next);
			return next;
		});
	}, []);
	const isRtl = locale === "ar";
	useEffect(() => {
		const root = document.documentElement;
		root.lang = locale;
		root.dir = isRtl ? "rtl" : "ltr";
		document.title = getDictionary(locale).meta.title;
	}, [locale, isRtl]);
	const value = useMemo(() => ({
		locale,
		dict: getDictionary(locale),
		isRtl,
		setLocale,
		toggleLocale
	}), [
		locale,
		isRtl,
		setLocale,
		toggleLocale
	]);
	return /* @__PURE__ */ jsx(LanguageContext.Provider, {
		value,
		children
	});
}
function useLanguage() {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@500;600;700;800&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		className: "scroll-smooth",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(LanguageProvider, { children }),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/components/landing/SiteBackground.tsx
function SiteBackground() {
	return /* @__PURE__ */ jsxs("div", {
		className: "gs-bg-drift pointer-events-none fixed inset-0 -z-10 overflow-hidden",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("img", {
				src: "/images/hero-bg.png",
				alt: "",
				className: "h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-cream/86 backdrop-blur-[2px]" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gs-mint/15 via-transparent to-gs-gold/10" })
		]
	});
}
//#endregion
//#region app/components/landing/BrandLogo.tsx
function BrandLogo({ className = "h-10 w-auto max-w-[140px]" }) {
	return /* @__PURE__ */ jsx("img", {
		src: "/images/logo.png",
		alt: "Growth Station",
		className: `border-0 bg-transparent object-contain object-left mix-blend-lighten outline-none ${className}`
	});
}
//#endregion
//#region app/components/landing/LanguageSwitcher.tsx
function LanguageSwitcher() {
	const { locale, setLocale, dict } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center rounded-full border border-white/20 p-0.5",
		role: "group",
		"aria-label": "Language",
		children: [/* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setLocale("en"),
			className: `min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs font-bold transition-all ${locale === "en" ? "bg-gs-gold text-white" : "text-gs-mint/70 hover:text-white"}`,
			"aria-pressed": locale === "en",
			children: dict.lang.switchToEn
		}), /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => setLocale("ar"),
			className: `min-w-[2.25rem] rounded-full px-2.5 py-1.5 font-arabic text-sm font-bold transition-all ${locale === "ar" ? "bg-gs-gold text-white" : "text-gs-mint/70 hover:text-white"}`,
			"aria-pressed": locale === "ar",
			children: dict.lang.switchToAr
		})]
	});
}
//#endregion
//#region app/components/landing/Navbar.tsx
function Navbar() {
	const { dict, isRtl } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const links = [
		{
			href: "/",
			label: dict.nav.home,
			isRoute: true
		},
		{
			href: "/about",
			label: dict.nav.about,
			isRoute: true
		},
		{
			href: "/services",
			label: dict.nav.services,
			isRoute: true
		},
		{
			href: "/careers",
			label: dict.nav.careers,
			isRoute: true
		},
		{
			href: "/brief",
			label: dict.nav.brief,
			isRoute: true
		},
		{
			href: "/contact",
			label: dict.nav.contact,
			isRoute: true
		}
	];
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed top-0 left-0 right-0 z-50 bg-gs-dark py-4 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/25" : ""}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: `mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 lg:px-8 ${isRtl ? "flex-row-reverse" : ""}`,
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
					children: /* @__PURE__ */ jsx(BrandLogo, { className: "h-11 w-auto max-w-[150px] sm:h-12 sm:max-w-[180px]" })
				}),
				/* @__PURE__ */ jsx("ul", {
					className: `hidden items-center gap-8 lg:flex ${isRtl ? "flex-row-reverse" : ""}`,
					children: links.map((link) => /* @__PURE__ */ jsx("li", { children: link.isRoute ? /* @__PURE__ */ jsx(Link, {
						to: link.href,
						className: `text-sm font-medium text-gs-mint/90 transition-colors hover:text-gs-gold ${isRtl ? "font-arabic" : ""}`,
						children: link.label
					}) : /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: `text-sm font-medium text-gs-mint/90 transition-colors hover:text-gs-gold ${isRtl ? "font-arabic" : ""}`,
						children: link.label
					}) }, `${link.href}-${link.label}`))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: `flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`,
					children: [
						/* @__PURE__ */ jsx(LanguageSwitcher, {}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: `hidden rounded-full bg-gs-gold px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gs-mint hover:text-gs-dark sm:inline-flex ${isRtl ? "font-arabic" : ""}`,
							children: dict.nav.getStarted
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "button",
							"aria-label": "Toggle menu",
							className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden",
							onClick: () => setMenuOpen(!menuOpen),
							children: [
								/* @__PURE__ */ jsx("span", { className: `h-0.5 w-5 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}` }),
								/* @__PURE__ */ jsx("span", { className: `h-0.5 w-5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}` }),
								/* @__PURE__ */ jsx("span", { className: `h-0.5 w-5 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}` })
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: `fixed inset-0 top-[72px] bg-gs-dark transition-all duration-300 lg:hidden ${menuOpen ? "visible opacity-100" : "invisible opacity-0"}`,
			children: /* @__PURE__ */ jsxs("ul", {
				className: "flex flex-col gap-1 p-6",
				children: [
					links.map((link) => /* @__PURE__ */ jsx("li", { children: link.isRoute ? /* @__PURE__ */ jsx(Link, {
						to: link.href,
						className: `block rounded-xl px-4 py-3 text-lg font-medium text-gs-mint hover:text-gs-gold ${isRtl ? "font-arabic text-right" : ""}`,
						onClick: () => setMenuOpen(false),
						children: link.label
					}) : /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: `block rounded-xl px-4 py-3 text-lg font-medium text-gs-mint hover:text-gs-gold ${isRtl ? "font-arabic text-right" : ""}`,
						onClick: () => setMenuOpen(false),
						children: link.label
					}) }, `${link.href}-${link.label}-mobile`)),
					/* @__PURE__ */ jsx("li", {
						className: "mt-4 flex justify-center gap-3",
						children: /* @__PURE__ */ jsx(LanguageSwitcher, {})
					}),
					/* @__PURE__ */ jsx("li", {
						className: "mt-4",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: `block rounded-full bg-gs-gold py-3 text-center font-semibold text-white ${isRtl ? "font-arabic" : ""}`,
							onClick: () => setMenuOpen(false),
							children: dict.nav.getStarted
						})
					})
				]
			})
		})]
	});
}
//#endregion
//#region app/hooks/useReveal.ts
function useReveal(threshold = .12) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				observer.unobserve(el);
			}
		}, {
			threshold,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		visible
	};
}
//#endregion
//#region app/components/landing/Hero.tsx
function Hero() {
	const { dict, isRtl } = useLanguage();
	const { ref, visible } = useReveal();
	const h = dict.hero;
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		ref,
		className: "relative min-h-screen overflow-hidden pt-28 pb-20",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gs-cream/40 via-gs-cream/55 to-gs-cream/75" }), /* @__PURE__ */ jsxs("div", {
			className: `relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 ${isRtl ? "direction-rtl" : ""}`,
			children: [/* @__PURE__ */ jsxs("div", {
				className: `reveal ${visible ? "visible" : ""} ${isRtl ? "font-arabic text-right lg:order-2" : ""}`,
				children: [
					/* @__PURE__ */ jsxs("p", {
						className: "mb-4 inline-flex items-center gap-2 rounded-full border border-gs-teal/20 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gs-teal shadow-sm backdrop-blur-sm",
						children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-gs-green animate-pulse" }), h.badge]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: `font-display text-4xl font-bold leading-[1.15] tracking-tight text-gs-dark md:text-5xl lg:text-6xl ${isRtl ? "font-arabic" : ""}`,
						children: [
							h.title,
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "bg-gradient-to-r from-gs-teal to-gs-green bg-clip-text text-transparent",
								children: h.titleHighlight
							}),
							" ",
							h.titleEnd
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: `mt-10 flex flex-wrap gap-4 ${isRtl ? "justify-end" : ""}`,
						children: [/* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: `rounded-full bg-gs-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-teal hover:shadow-gs-teal/30 ${isRtl ? "font-arabic" : ""}`,
							children: h.ctaPrimary
						}), /* @__PURE__ */ jsx("a", {
							href: "#services",
							className: `rounded-full border-2 border-gs-dark/15 bg-white/85 px-8 py-3.5 text-sm font-semibold text-gs-dark shadow-sm backdrop-blur-sm transition-all hover:border-gs-teal hover:text-gs-teal ${isRtl ? "font-arabic" : ""}`,
							children: h.ctaSecondary
						})]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: `reveal relative flex items-center justify-center ${visible ? "visible" : ""} ${isRtl ? "lg:order-1" : ""}`,
				style: { transitionDelay: "0.2s" },
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-md animate-float",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-8 rounded-full bg-gs-mint/25 blur-3xl" }), /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-3xl border border-white/60 bg-white/50 p-10 shadow-2xl shadow-gs-dark/10 backdrop-blur-md",
						children: [/* @__PURE__ */ jsx(BrandLogo, { className: "mx-auto h-24 w-auto max-w-[260px] sm:h-28 sm:max-w-[300px]" }), /* @__PURE__ */ jsxs("div", {
							className: "mt-8 grid grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl bg-white/90 p-4 text-center shadow-sm",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-display text-2xl font-bold text-gs-gold",
									children: "+240%"
								}), /* @__PURE__ */ jsx("p", {
									className: `text-xs text-gs-teal ${isRtl ? "font-arabic" : ""}`,
									children: h.statGrowth
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl bg-gs-dark p-4 text-center text-white shadow-sm",
								children: [/* @__PURE__ */ jsx("p", {
									className: `text-xs uppercase tracking-wider text-gs-mint ${isRtl ? "font-arabic normal-case" : ""}`,
									children: h.statMarkets
								}), /* @__PURE__ */ jsx("p", {
									className: `mt-1 text-sm font-semibold ${isRtl ? "font-arabic" : ""}`,
									children: h.markets
								})]
							})]
						})]
					})]
				})
			})]
		})]
	});
}
//#endregion
//#region app/components/landing/Marquee.tsx
function Marquee() {
	const { dict, isRtl } = useLanguage();
	return /* @__PURE__ */ jsx("div", {
		className: "relative overflow-hidden border-y border-gs-dark/10 bg-gs-dark py-4",
		children: /* @__PURE__ */ jsx("div", {
			className: "flex w-max animate-marquee",
			children: [...dict.marquee, ...dict.marquee].map((text, i) => /* @__PURE__ */ jsxs("span", {
				className: `mx-8 flex shrink-0 items-center gap-4 whitespace-nowrap text-sm font-medium tracking-wide text-gs-mint md:text-base ${isRtl ? "font-arabic" : ""}`,
				children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gs-gold" }), text]
			}, `${text}-${i}`))
		})
	});
}
//#endregion
//#region app/components/landing/Expertise.tsx
var icons$1 = ["📣", "💻"];
var images$1 = ["https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"];
var accents = ["from-gs-mint/30 to-gs-green/20", "from-gs-gold/25 to-gs-mint/20"];
function Expertise() {
	const { dict, isRtl } = useLanguage();
	const { ref, visible } = useReveal();
	const e = dict.expertise;
	const services = [{
		icon: icons$1[0],
		...e.marketing,
		accent: accents[0]
	}, {
		icon: icons$1[1],
		...e.software,
		accent: accents[1]
	}];
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		ref,
		className: "relative py-24 md:py-32 bg-gs-mint-soft/88 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: `reveal text-center ${visible ? "visible" : ""}`,
				children: [/* @__PURE__ */ jsx("span", {
					className: `text-xs font-bold uppercase tracking-[0.3em] text-gs-gold ${isRtl ? "font-arabic normal-case" : ""}`,
					children: e.eyebrow
				}), /* @__PURE__ */ jsx("h2", {
					className: `font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
					children: e.title
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-8 lg:grid-cols-2",
				children: services.map((service, idx) => /* @__PURE__ */ jsxs("article", {
					className: `card-shine reveal group overflow-hidden rounded-3xl bg-white shadow-xl shadow-gs-dark/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${visible ? "visible" : ""}`,
					style: { transitionDelay: `${idx * .15}s` },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative h-56 overflow-hidden",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: images$1[idx],
								alt: service.title,
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							}),
							/* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-t ${service.accent} to-transparent` }),
							/* @__PURE__ */ jsx("span", {
								className: `absolute top-6 text-4xl ${isRtl ? "right-6" : "left-6"}`,
								children: service.icon
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: `p-8 ${isRtl ? "font-arabic text-right" : ""}`,
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-gs-teal",
								children: service.tag
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display mt-2 text-2xl font-bold text-gs-dark",
								children: service.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 leading-relaxed text-gs-teal/90",
								children: service.description
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-6 space-y-2",
								children: service.items.map((item) => /* @__PURE__ */ jsxs("li", {
									className: `flex items-center justify-between border-b border-gs-dark/5 py-2 text-sm font-medium text-gs-dark transition-colors group-hover:border-gs-mint/30 ${isRtl ? "flex-row-reverse" : ""}`,
									children: [item, /* @__PURE__ */ jsx("span", {
										className: `text-gs-gold transition-transform ${isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`,
										children: isRtl ? "↖" : "↗"
									})]
								}, item))
							}),
							/* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "mt-8 inline-flex items-center gap-2 font-semibold text-gs-teal transition-colors hover:text-gs-gold",
								children: service.cta
							})
						]
					})]
				}, service.title))
			})]
		})
	});
}
//#endregion
//#region app/components/landing/Approach.tsx
var stepIcons = [
	"🔍",
	"🎯",
	"⚙️",
	"🚀"
];
function Approach() {
	const { dict, isRtl } = useLanguage();
	const { ref, visible } = useReveal();
	const a = dict.approach;
	return /* @__PURE__ */ jsx("section", {
		id: "framework",
		ref,
		className: "relative py-24 md:py-32 bg-white/82 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: `reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end ${visible ? "visible" : ""} ${isRtl ? "md:flex-row-reverse font-arabic" : ""}`,
					children: [/* @__PURE__ */ jsxs("div", {
						className: isRtl ? "text-right" : "",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-gold",
							children: a.eyebrow
						}), /* @__PURE__ */ jsx("h2", {
							className: "font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl",
							children: a.title
						})]
					}), /* @__PURE__ */ jsx("a", {
						href: "#process",
						className: "shrink-0 rounded-full border-2 border-gs-teal px-6 py-2.5 text-sm font-semibold text-gs-teal transition-all hover:bg-gs-teal hover:text-white",
						children: a.cta
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: a.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", {
						className: `reveal group relative rounded-2xl border border-gs-dark/8 bg-gs-cream p-6 transition-all duration-500 hover:border-gs-mint hover:bg-gs-mint-soft hover:shadow-lg ${visible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						style: { transitionDelay: `${idx * .1}s` },
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-3xl",
								children: stepIcons[idx]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-[10px] font-bold uppercase tracking-widest text-gs-gold",
								children: step.label
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display mt-2 text-xl font-bold text-gs-dark",
								children: step.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-gs-teal",
								children: step.text
							}),
							/* @__PURE__ */ jsx("div", { className: `absolute bottom-0 h-1 w-0 rounded-full bg-gs-gold transition-all duration-500 group-hover:w-full ${isRtl ? "right-0" : "left-0"}` })
						]
					}, step.title))
				}),
				/* @__PURE__ */ jsx("div", {
					className: `reveal mt-16 overflow-hidden rounded-3xl ${visible ? "visible" : ""}`,
					children: /* @__PURE__ */ jsx("img", {
						src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
						alt: a.imageAlt,
						className: "h-64 w-full object-cover md:h-80"
					})
				})
			]
		})
	});
}
//#endregion
//#region app/components/landing/WhyUs.tsx
var icons = [
	"🎯",
	"📊",
	"⚡",
	"🤝"
];
function WhyUs() {
	const { dict, isRtl } = useLanguage();
	const { ref, visible } = useReveal();
	const w = dict.whyUs;
	return /* @__PURE__ */ jsxs("section", {
		ref,
		className: "relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-gs-teal to-gs-dark text-white",
		children: [/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" }), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: `reveal max-w-2xl ${visible ? "visible" : ""} ${isRtl ? "mr-auto text-right font-arabic" : ""}`,
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-mint",
					children: w.eyebrow
				}), /* @__PURE__ */ jsxs("h2", {
					className: "font-display mt-3 text-4xl font-bold md:text-5xl",
					children: [
						w.line1,
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-gs-gold",
							children: w.line2
						})
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: w.items.map((item, idx) => /* @__PURE__ */ jsxs("div", {
					className: `reveal rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 ${visible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
					style: { transitionDelay: `${idx * .1}s` },
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-3xl",
							children: icons[idx]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display mt-4 text-lg font-bold",
							children: item.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-gs-mint/90",
							children: item.text
						})
					]
				}, item.title))
			})]
		})]
	});
}
//#endregion
//#region app/components/landing/Process.tsx
function AbstractShape({ shape, color }) {
	const c = color;
	if (shape === "circle") return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 200 200",
		className: "pf-shape",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("circle", {
				cx: "100",
				cy: "100",
				r: "70",
				fill: "none",
				stroke: c,
				strokeWidth: "1.5",
				opacity: "0.25"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "100",
				cy: "100",
				r: "45",
				fill: "none",
				stroke: c,
				strokeWidth: "1",
				opacity: "0.18"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "100",
				cy: "100",
				r: "20",
				fill: c,
				opacity: "0.12"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "140",
				cy: "60",
				r: "8",
				fill: c,
				opacity: "0.35"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "30",
				y1: "100",
				x2: "170",
				y2: "100",
				stroke: c,
				strokeWidth: "0.8",
				opacity: "0.15"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "100",
				y1: "30",
				x2: "100",
				y2: "170",
				stroke: c,
				strokeWidth: "0.8",
				opacity: "0.15"
			})
		]
	});
	if (shape === "triangle") return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 200 200",
		className: "pf-shape",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("polygon", {
				points: "100,20 180,160 20,160",
				fill: "none",
				stroke: c,
				strokeWidth: "1.5",
				opacity: "0.25"
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "100,50 155,145 45,145",
				fill: "none",
				stroke: c,
				strokeWidth: "1",
				opacity: "0.18"
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "100,80 130,130 70,130",
				fill: c,
				opacity: "0.1"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "100",
				cy: "20",
				r: "5",
				fill: c,
				opacity: "0.4"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "180",
				cy: "160",
				r: "5",
				fill: c,
				opacity: "0.4"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "20",
				cy: "160",
				r: "5",
				fill: c,
				opacity: "0.4"
			})
		]
	});
	if (shape === "diamond") return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 200 200",
		className: "pf-shape",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("polygon", {
				points: "100,15 185,100 100,185 15,100",
				fill: "none",
				stroke: c,
				strokeWidth: "1.5",
				opacity: "0.25"
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "100,45 155,100 100,155 45,100",
				fill: "none",
				stroke: c,
				strokeWidth: "1",
				opacity: "0.18"
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "100,75 125,100 100,125 75,100",
				fill: c,
				opacity: "0.12"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "15",
				y1: "100",
				x2: "185",
				y2: "100",
				stroke: c,
				strokeWidth: "0.8",
				opacity: "0.15"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "100",
				y1: "15",
				x2: "100",
				y2: "185",
				stroke: c,
				strokeWidth: "0.8",
				opacity: "0.15"
			})
		]
	});
	if (shape === "hexagon") return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 200 200",
		className: "pf-shape",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("polygon", {
				points: "100,18 172,59 172,141 100,182 28,141 28,59",
				fill: "none",
				stroke: c,
				strokeWidth: "1.5",
				opacity: "0.25"
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "100,45 152,75 152,135 100,165 48,135 48,75",
				fill: "none",
				stroke: c,
				strokeWidth: "1",
				opacity: "0.18"
			}),
			/* @__PURE__ */ jsx("polygon", {
				points: "100,72 128,88 128,120 100,136 72,120 72,88",
				fill: c,
				opacity: "0.1"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "100",
				cy: "100",
				r: "6",
				fill: c,
				opacity: "0.35"
			})
		]
	});
	return null;
}
function ProcessCard({ project, index, cardCta }) {
	const [hovered, setHovered] = useState(false);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setVisible(true);
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
		e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
	};
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: `pf-card ${visible ? "visible" : ""} ${hovered ? "hovered" : ""}`,
		style: {
			background: project.bg,
			transitionDelay: `${index % 3 * .1}s`
		},
		onMouseMove: handleMouseMove,
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pf-card__glow",
				style: { "--accent": project.color }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pf-card__visual",
				children: [/* @__PURE__ */ jsx(AbstractShape, {
					shape: project.shape,
					color: project.color
				}), /* @__PURE__ */ jsx("div", {
					className: "pf-card__visual-bg",
					style: { background: `radial-gradient(circle, ${project.color}18, transparent 70%)` }
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pf-card__top",
				children: [/* @__PURE__ */ jsx("span", {
					className: "pf-card__num",
					style: { color: project.color },
					children: project.num
				}), /* @__PURE__ */ jsx("span", {
					className: "pf-card__location",
					children: project.location
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pf-card__body",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "pf-card__service",
						style: { color: project.color },
						children: project.service
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "pf-card__client",
						children: project.client
					}),
					/* @__PURE__ */ jsx("div", {
						className: "pf-card__tags",
						children: project.tags.map((t) => /* @__PURE__ */ jsx("span", {
							className: "pf-card__tag",
							children: t
						}, t))
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pf-card__cta",
				children: [/* @__PURE__ */ jsx("span", { children: cardCta }), /* @__PURE__ */ jsx("svg", {
					width: "16",
					height: "16",
					viewBox: "0 0 16 16",
					fill: "none",
					"aria-hidden": true,
					children: /* @__PURE__ */ jsx("path", {
						d: "M3 8h10M9 4l4 4-4 4",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				})]
			})
		]
	});
}
function Process() {
	const { dict, isRtl, locale } = useLanguage();
	const p = dict.process;
	const [filter, setFilter] = useState(p.filterAll);
	useEffect(() => {
		setFilter(p.filterAll);
	}, [locale, p.filterAll]);
	const filtered = filter === p.filterAll ? p.items : p.items.filter((item) => item.service === filter);
	const categories = [p.filterAll, ...p.categories];
	return /* @__PURE__ */ jsxs("section", {
		id: "process",
		className: `pf relative bg-white/75 backdrop-blur-md ${isRtl ? "font-arabic" : ""}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "pf-header",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "pf-header__eyebrow",
						children: [/* @__PURE__ */ jsx("span", { className: "pf-header__line" }), /* @__PURE__ */ jsx("span", { children: p.eyebrow })]
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "pf-header__title",
						children: [/* @__PURE__ */ jsx("em", { children: p.titleEm }), /* @__PURE__ */ jsx("span", {
							className: "pf-header__outline",
							children: p.titleOutline
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "pf-header__desc",
						children: p.description
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pf-filters",
				children: categories.map((cat) => /* @__PURE__ */ jsx("button", {
					type: "button",
					className: `pf-filter ${filter === cat ? "active" : ""}`,
					onClick: () => setFilter(cat),
					children: cat
				}, cat))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pf-grid",
				children: filtered.map((project, i) => /* @__PURE__ */ jsx(ProcessCard, {
					project,
					index: i,
					cardCta: p.cardCta
				}, project.num))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "pf-bottom",
				children: [/* @__PURE__ */ jsx("p", {
					className: "pf-bottom__text",
					children: p.bottomText
				}), /* @__PURE__ */ jsxs("a", {
					href: "#contact",
					className: "pf-bottom__btn",
					children: [p.bottomBtn, /* @__PURE__ */ jsx("svg", {
						width: "18",
						height: "18",
						viewBox: "0 0 18 18",
						fill: "none",
						"aria-hidden": true,
						children: /* @__PURE__ */ jsx("path", {
							d: "M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})]
				})]
			})
		]
	});
}
//#endregion
//#region app/components/landing/Leadership.tsx
var images = [
	"/images/abotaleb.jpeg",
	"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
	"/images/osama.jpeg"
];
function Leadership() {
	const { dict, isRtl } = useLanguage();
	const { ref, visible } = useReveal();
	const l = dict.leadership;
	return /* @__PURE__ */ jsx("section", {
		ref,
		className: "relative py-24 md:py-32 bg-gs-mint-soft/88 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: `reveal text-center ${visible ? "visible" : ""}`,
				children: [/* @__PURE__ */ jsx("span", {
					className: `text-xs font-bold uppercase tracking-[0.3em] text-gs-gold ${isRtl ? "font-arabic normal-case" : ""}`,
					children: l.eyebrow
				}), /* @__PURE__ */ jsx("h2", {
					className: `font-display mt-3 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
					children: l.title
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-8 md:grid-cols-3",
				children: l.members.map((member, idx) => /* @__PURE__ */ jsxs("article", {
					className: `reveal group overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl ${visible ? "visible" : ""}`,
					style: { transitionDelay: `${idx * .12}s` },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative h-72 overflow-hidden",
						children: [/* @__PURE__ */ jsx("img", {
							src: images[idx],
							alt: member.name,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						}), /* @__PURE__ */ jsx("span", {
							className: `absolute top-4 rounded-full bg-gs-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${isRtl ? "right-4 font-arabic" : "left-4"}`,
							children: member.badge
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: `p-6 ${isRtl ? "text-right font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold uppercase tracking-widest text-gs-teal",
								children: member.role
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display mt-2 text-xl font-bold text-gs-dark",
								children: member.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-gs-teal",
								children: member.bio
							})
						]
					})]
				}, member.name))
			})]
		})
	});
}
//#endregion
//#region app/components/landing/Recruiting.tsx
function Recruiting() {
	const { dict, isRtl } = useLanguage();
	const { ref, visible } = useReveal();
	const r = dict.recruiting;
	return /* @__PURE__ */ jsxs("section", {
		ref,
		className: "relative overflow-hidden py-24 md:py-32 bg-gs-dark",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0",
				children: /* @__PURE__ */ jsx("img", {
					src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
					alt: "",
					className: "h-full w-full object-cover opacity-15",
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-dark via-gs-dark/95 to-gs-teal/80" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative mx-auto max-w-4xl px-6 text-center lg:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: `reveal ${visible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-block rounded-full border border-gs-gold/50 bg-gs-gold/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-gs-gold",
							children: r.badge
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl",
							children: [
								r.title1,
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-gs-mint",
									children: r.title2
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gs-mint/90",
							children: r.description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "rounded-full bg-gs-gold px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gs-gold/30 transition-all hover:-translate-y-0.5 hover:bg-gs-mint hover:text-gs-dark",
								children: r.ctaPrimary
							}), /* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gs-mint hover:text-gs-mint",
								children: r.ctaSecondary
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region app/components/landing/Footer.tsx
function SocialIcon({ children, href, label }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		"aria-label": label,
		className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-gs-mint hover:bg-gs-mint hover:text-gs-dark",
		children
	});
}
function Footer() {
	const { dict, isRtl } = useLanguage();
	const f = dict.footer;
	const c = dict.contact;
	const socialLinks = [
		{
			name: "Facebook",
			href: c.social.facebook,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
			})
		},
		{
			name: "Instagram",
			href: c.social.instagram,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
			})
		},
		{
			name: "TikTok",
			href: c.social.tiktok,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" })
			})
		},
		{
			name: "Snapchat",
			href: c.social.snapchat,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12.019 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.59-10.41c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm5.18 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.59 5.41c-1.66 0-3-1.34-3-3 0-.55.45-1 1-1s1 .45 1 1c0 .55.45 1 1 1s1-.45 1-1c0-.55.45-1 1-1s1 .45 1 1c0 1.66-1.34 3-3 3z" })
			})
		},
		{
			name: "Behance",
			href: c.social.behance,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" })
			})
		},
		{
			name: "LinkedIn",
			href: c.social.linkedin,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
			})
		},
		{
			name: "WhatsApp",
			href: c.social.whatsapp,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
			})
		}
	];
	const navLinks = [
		{
			label: dict.nav.home,
			href: "/"
		},
		{
			label: dict.nav.services,
			href: "/services"
		},
		{
			label: dict.nav.careers,
			href: "/careers"
		},
		{
			label: dict.nav.brief,
			href: "/brief"
		},
		{
			label: dict.nav.framework,
			href: "/framework"
		},
		{
			label: dict.nav.contact,
			href: "/contact"
		}
	];
	return /* @__PURE__ */ jsx("footer", {
		id: "contact",
		className: `bg-gs-dark text-white ${isRtl ? "font-arabic" : ""}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ jsxs("div", {
				className: `grid gap-12 lg:grid-cols-12 ${isRtl ? "direction-rtl" : ""}`,
				children: [/* @__PURE__ */ jsxs("div", {
					className: `lg:col-span-4 ${isRtl ? "text-right" : ""}`,
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "#home",
							className: "inline-block bg-transparent transition-opacity hover:opacity-90",
							children: /* @__PURE__ */ jsx(BrandLogo, { className: "h-14 w-auto max-w-[180px] sm:h-16 sm:max-w-[200px]" })
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-gs-mint/80",
							children: f.tagline
						}),
						/* @__PURE__ */ jsx("div", {
							className: `mt-6 flex gap-3 ${isRtl ? "justify-end" : ""}`,
							children: socialLinks.map((social) => /* @__PURE__ */ jsx(SocialIcon, {
								href: social.href,
								label: social.name,
								children: social.icon
							}, social.name))
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 sm:grid-cols-3 lg:col-span-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: isRtl ? "text-right" : "",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
								children: f.navigation
							}), /* @__PURE__ */ jsx("ul", {
								className: "mt-4 space-y-2",
								children: navLinks.map((link, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: link.href,
									className: "text-sm text-gs-mint/80 transition-colors hover:text-white",
									children: link.label
								}) }, `${link.href}-${i}`))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: isRtl ? "text-right" : "",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
								children: f.servicesTitle
							}), /* @__PURE__ */ jsx("ul", {
								className: "mt-4 space-y-2",
								children: f.services.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
									href: "#services",
									className: "text-sm text-gs-mint/80 transition-colors hover:text-white",
									children: link
								}) }, link))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: isRtl ? "text-right" : "",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
								children: f.contactTitle
							}), /* @__PURE__ */ jsxs("ul", {
								className: "mt-4 space-y-3 text-sm text-gs-mint/80",
								children: [
									/* @__PURE__ */ jsxs("li", { children: ["📍 ", f.location] }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "tel:+20128133",
										className: "hover:text-white",
										children: "📞 +20 128 133 XXXX"
									}) }),
									/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
										href: "mailto:hello@growthstation.com",
										className: "hover:text-white",
										children: "✉️ hello@growthstation.com"
									}) })
								]
							})]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: `mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gs-mint/60 md:flex-row ${isRtl ? "md:flex-row-reverse" : ""}`,
				children: [/* @__PURE__ */ jsx("p", { children: f.rights }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:text-white",
						children: f.privacy
					}), /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "hover:text-white",
						children: f.terms
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region app/components/landing/GrowthStationLanding.tsx
function GrowthStationLanding() {
	return /* @__PURE__ */ jsxs(LanguageProvider, { children: [
		/* @__PURE__ */ jsx(SiteBackground, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(Marquee, {}),
				/* @__PURE__ */ jsx(Expertise, {}),
				/* @__PURE__ */ jsx(Approach, {}),
				/* @__PURE__ */ jsx(WhyUs, {}),
				/* @__PURE__ */ jsx(Process, {}),
				/* @__PURE__ */ jsx(Leadership, {}),
				/* @__PURE__ */ jsx(Recruiting, {})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$7
});
function meta$7({}) {
	return [{ title: "Growth Station | Strategic Growth Partner — Egypt & GCC" }, {
		name: "description",
		content: "We partner with ambitious businesses across Egypt & the GCC to build powerful brands and drive measurable growth."
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(GrowthStationLanding, {});
});
//#endregion
//#region app/components/landing/About.tsx
var storyImages = [
	"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
	"https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
	"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
];
function About() {
	const { dict, isRtl } = useLanguage();
	const a = dict.about;
	const { ref: heroRef, visible: heroVisible } = useReveal();
	const { ref: storyRef, visible: storyVisible } = useReveal();
	const { ref: whyRef, visible: whyVisible } = useReveal();
	const { ref: drivesRef, visible: drivesVisible } = useReveal();
	const { ref: workRef, visible: workVisible } = useReveal();
	const { ref: ctaRef, visible: ctaVisible } = useReveal();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsxs("section", {
				ref: heroRef,
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }), /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "1s" }
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
						children: /* @__PURE__ */ jsxs("div", {
							className: `reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-8",
									children: /* @__PURE__ */ jsxs("div", {
										className: "inline-block relative",
										children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-50" }), /* @__PURE__ */ jsx("span", {
											className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-gs-gold shadow-2xl shadow-gs-gold/40",
											children: a.ourStory.title
										})]
									})
								}),
								/* @__PURE__ */ jsx("h1", {
									className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`,
									children: a.ourStory.whyExist.title
								}),
								/* @__PURE__ */ jsx("div", { className: "w-32 h-1 bg-gradient-to-r from-gs-gold to-amber-600 mx-auto rounded-full shadow-lg shadow-gs-gold/50" })
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				ref: storyRef,
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				style: {
					backgroundImage: `url(${storyImages[0]})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed"
				},
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gs-dark/80 via-gs-dark/70 to-gs-dark/80" }), /* @__PURE__ */ jsx("div", {
					className: "relative mx-auto max-w-4xl px-6 lg:px-8 py-32",
					children: /* @__PURE__ */ jsxs("div", {
						className: `reveal ${storyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "inline-block rounded-full border border-gs-gold/50 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gs-gold shadow-lg shadow-gs-gold/30",
								children: a.ourStory.title
							}),
							/* @__PURE__ */ jsx("h2", {
								className: `font-display mt-8 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl ${isRtl ? "font-arabic" : ""}`,
								children: a.ourStory.whyExist.title
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-10 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-lg leading-relaxed text-gs-mint/90",
									children: a.ourStory.whyExist.content
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: `mt-10 ${isRtl ? "text-right" : ""}`,
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-semibold text-gs-gold text-lg",
									children: a.ourStory.whyExist.cta
								}), /* @__PURE__ */ jsx("a", {
									href: "/#contact",
									className: `mt-6 inline-block rounded-full bg-gs-gold px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all hover:-translate-y-1 hover:bg-gs-teal hover:shadow-gs-teal/40 ${isRtl ? "font-arabic" : ""}`,
									children: a.ourStory.whyExist.button
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				style: {
					backgroundImage: `url(${storyImages[1]})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed"
				},
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gs-dark/75 via-gs-dark/65 to-gs-dark/75" }), /* @__PURE__ */ jsx("div", {
					className: "relative mx-auto max-w-4xl px-6 lg:px-8 py-32",
					children: /* @__PURE__ */ jsxs("div", {
						className: `reveal ${storyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						style: { transitionDelay: "0.2s" },
						children: [/* @__PURE__ */ jsx("h2", {
							className: `font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl ${isRtl ? "font-arabic" : ""}`,
							children: a.ourStory.whatDifferent.title
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-10 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-lg leading-relaxed text-gs-mint/90",
								children: a.ourStory.whatDifferent.content
							})
						})]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				style: {
					backgroundImage: `url(${storyImages[2]})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundAttachment: "fixed"
				},
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-gs-dark/70 via-gs-dark/60 to-gs-dark/70" }), /* @__PURE__ */ jsx("div", {
					className: "relative mx-auto max-w-4xl px-6 lg:px-8 py-32",
					children: /* @__PURE__ */ jsxs("div", {
						className: `reveal ${storyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						style: { transitionDelay: "0.4s" },
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: `font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl ${isRtl ? "font-arabic" : ""}`,
								children: a.ourStory.whoServe.title
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-10 rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-lg leading-relaxed text-gs-mint/90",
									children: a.ourStory.whoServe.content
								})
							}),
							/* @__PURE__ */ jsx("div", {
								className: `mt-10 ${isRtl ? "text-right" : ""}`,
								children: /* @__PURE__ */ jsx("p", {
									className: "font-semibold text-gs-gold text-lg",
									children: a.ourStory.whoServe.cta
								})
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				ref: whyRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `reveal max-w-3xl ${whyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-gold",
							children: a.whyGrowthStation.title
						}), /* @__PURE__ */ jsx("h2", {
							className: `font-display mt-4 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
							children: a.whyGrowthStation.subtitle
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
						children: a.whyGrowthStation.items.map((item, idx) => /* @__PURE__ */ jsxs("div", {
							className: `reveal rounded-2xl border-2 border-gs-gold/30 bg-gradient-to-br from-white to-gs-cream p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${whyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
							style: { transitionDelay: `${idx * .15}s` },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
									children: /* @__PURE__ */ jsx("span", {
										className: "text-2xl font-bold text-white",
										children: idx + 1
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: `font-display text-lg font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`,
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-relaxed text-gs-dark/90",
									children: item.content
								})
							]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				ref: drivesRef,
				className: "relative py-24 md:py-32 bg-white/90 backdrop-blur-md",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `reveal max-w-3xl ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-gold",
							children: a.whatDrivesUs.title
						}), /* @__PURE__ */ jsx("h2", {
							className: `font-display mt-4 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
							children: a.whatDrivesUs.subtitle
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-20 grid gap-8 lg:grid-cols-2",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: "0.1s" },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xl font-bold text-white",
											children: "01"
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
										children: a.whatDrivesUs.vision.label
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display mt-4 text-2xl font-bold text-white ${isRtl ? "font-arabic" : ""}`,
										children: a.whatDrivesUs.vision.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed text-gs-mint/90",
										children: a.whatDrivesUs.vision.content
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: "0.2s" },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xl font-bold text-white",
											children: "02"
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
										children: a.whatDrivesUs.mission.label
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display mt-4 text-2xl font-bold text-white ${isRtl ? "font-arabic" : ""}`,
										children: a.whatDrivesUs.mission.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed text-gs-mint/90",
										children: a.whatDrivesUs.mission.content
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: "0.3s" },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xl font-bold text-white",
											children: "03"
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
										children: a.whatDrivesUs.promise.label
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display mt-4 text-2xl font-bold text-white ${isRtl ? "font-arabic" : ""}`,
										children: a.whatDrivesUs.promise.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed text-gs-mint/90",
										children: a.whatDrivesUs.promise.content
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${drivesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: "0.4s" },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xl font-bold text-white",
											children: "04"
										})
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold uppercase tracking-widest text-gs-gold",
										children: a.whatDrivesUs.standFor.label
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display mt-4 text-2xl font-bold text-white ${isRtl ? "font-arabic" : ""}`,
										children: a.whatDrivesUs.standFor.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-sm leading-relaxed text-gs-mint/90",
										children: a.whatDrivesUs.standFor.content
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				ref: workRef,
				className: "relative py-24 md:py-32 bg-gradient-to-br from-gs-teal to-gs-dark text-white",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `reveal max-w-3xl ${workVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-mint",
								children: a.howWeWork.title
							}),
							/* @__PURE__ */ jsx("h2", {
								className: `font-display mt-4 text-4xl font-bold md:text-5xl ${isRtl ? "font-arabic" : ""}`,
								children: a.howWeWork.subtitle
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-lg text-gs-mint/90",
								children: a.howWeWork.intro
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
						children: a.howWeWork.items.map((item, idx) => /* @__PURE__ */ jsxs("div", {
							className: `reveal rounded-2xl border-2 border-gs-gold/50 bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-gs-gold/80 hover:shadow-xl hover:shadow-gs-gold/20 ${workVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
							style: { transitionDelay: `${idx * .15}s` },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
									children: /* @__PURE__ */ jsx("span", {
										className: "text-xl font-bold text-white",
										children: idx + 1
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: `font-display text-lg font-bold text-white ${isRtl ? "font-arabic" : ""}`,
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-relaxed text-gs-mint/90",
									children: item.content
								})
							]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				ref: ctaRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-4xl px-6 lg:px-8 text-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: `reveal ${ctaVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsx("div", {
								className: `w-20 h-20 rounded-full bg-gs-gold/10 flex items-center justify-center mx-auto mb-8 animate-pulse-glow`,
								children: /* @__PURE__ */ jsx("svg", {
									className: "w-10 h-10 text-gs-gold",
									fill: "none",
									stroke: "currentColor",
									viewBox: "0 0 24 24",
									children: /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										strokeWidth: 2,
										d: "M13 10V3L4 14h7v7l9-11h-7z"
									})
								})
							}),
							/* @__PURE__ */ jsx("h2", {
								className: `font-display text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
								children: a.cta.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-xl text-gs-teal",
								children: a.cta.subtitle
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "/#contact",
								className: `mt-10 inline-block rounded-full bg-gs-gold px-12 py-4 text-base font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:bg-gs-teal hover:shadow-gs-teal/40 hover:scale-105 ${isRtl ? "font-arabic" : ""}`,
								children: [a.cta.button, " →"]
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
//#region app/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	meta: () => meta$6
});
function meta$6({}) {
	return [{ title: "About Us | Growth Station — Strategic Growth Partner" }, {
		name: "description",
		content: "Learn about Growth Station's story, mission, and how we help businesses across Egypt & the GCC achieve real growth."
	}];
}
var about_default = UNSAFE_withComponentProps(function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	})] });
});
//#endregion
//#region app/components/landing/Services.tsx
function Services() {
	const { dict, isRtl } = useLanguage();
	const s = dict.services;
	const { ref: heroRef, visible: heroVisible } = useReveal();
	const { ref: servicesRef, visible: servicesVisible } = useReveal();
	const { ref: whyRef, visible: whyVisible } = useReveal();
	const { ref: ctaRef, visible: ctaVisible } = useReveal();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsxs("section", {
				ref: heroRef,
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }), /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "1s" }
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
						children: /* @__PURE__ */ jsxs("div", {
							className: `reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-8",
									children: /* @__PURE__ */ jsxs("div", {
										className: "inline-block relative",
										children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-50" }), /* @__PURE__ */ jsx("span", {
											className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-gs-gold shadow-2xl shadow-gs-gold/40",
											children: s.hero.eyebrow
										})]
									})
								}),
								/* @__PURE__ */ jsx("h1", {
									className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4 ${isRtl ? "font-arabic" : ""}`,
									children: s.hero.title
								}),
								/* @__PURE__ */ jsx("h2", {
									className: `font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gs-gold mb-6 ${isRtl ? "font-arabic" : ""}`,
									children: s.hero.subtitle
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto",
									children: s.hero.description
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-12 flex flex-col sm:flex-row gap-4 justify-center",
									children: [/* @__PURE__ */ jsx("a", {
										href: "#services",
										className: `inline-block rounded-full bg-gs-gold px-10 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all hover:-translate-y-1 hover:bg-gs-teal hover:shadow-gs-teal/40 ${isRtl ? "font-arabic" : ""}`,
										children: s.hero.exploreBtn
									}), /* @__PURE__ */ jsx("a", {
										href: "/#contact",
										className: `inline-block rounded-full border-2 border-gs-gold px-10 py-4 text-sm font-semibold text-gs-gold transition-all hover:-translate-y-1 hover:bg-gs-gold hover:text-white ${isRtl ? "font-arabic" : ""}`,
										children: s.hero.bookBtn
									})]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "services",
				ref: servicesRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								key: "webDevelopment",
								icon: "💻",
								color: "from-blue-500 to-cyan-500"
							},
							{
								key: "ecommerce",
								icon: "🛒",
								color: "from-purple-500 to-pink-500"
							},
							{
								key: "mobileApp",
								icon: "📱",
								color: "from-green-500 to-emerald-500"
							},
							{
								key: "uiux",
								icon: "🎨",
								color: "from-orange-500 to-red-500"
							},
							{
								key: "ads",
								icon: "📊",
								color: "from-indigo-500 to-purple-500"
							},
							{
								key: "socialMedia",
								icon: "📱",
								color: "from-pink-500 to-rose-500"
							},
							{
								key: "content",
								icon: "✍️",
								color: "from-yellow-500 to-orange-500"
							},
							{
								key: "branding",
								icon: "✨",
								color: "from-cyan-500 to-blue-500"
							},
							{
								key: "strategy",
								icon: "🎯",
								color: "from-red-500 to-orange-500"
							},
							{
								key: "media",
								icon: "🎬",
								color: "from-teal-500 to-green-500"
							}
						].map((service, idx) => {
							const serviceData = s.services[service.key];
							return /* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/30 bg-gradient-to-br from-white to-gs-cream p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${servicesVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: `${idx * .1}s` },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-3xl",
											children: service.icon
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display text-xl font-bold text-gs-dark mb-4 ${isRtl ? "font-arabic" : ""}`,
										children: serviceData.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm leading-relaxed text-gs-dark/80",
										children: serviceData.description
									})
								]
							}, service.key);
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				ref: whyRef,
				className: "relative py-24 md:py-32 bg-white/90 backdrop-blur-md",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `reveal max-w-3xl ${whyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-gold",
								children: s.whyGrowthStation.title
							}),
							/* @__PURE__ */ jsx("h2", {
								className: `font-display mt-4 text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
								children: s.whyGrowthStation.subtitle
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-lg text-gs-teal",
								children: s.whyGrowthStation.description
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-20 grid gap-8 lg:grid-cols-2",
						children: s.whyGrowthStation.items.map((item, idx) => /* @__PURE__ */ jsxs("div", {
							className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${whyVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
							style: { transitionDelay: `${idx * .15}s` },
							children: [
								/* @__PURE__ */ jsx("div", {
									className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
									children: /* @__PURE__ */ jsx("span", {
										className: "text-xl font-bold text-white",
										children: idx + 1
									})
								}),
								/* @__PURE__ */ jsx("h3", {
									className: `font-display mt-4 text-2xl font-bold text-white ${isRtl ? "font-arabic" : ""}`,
									children: item.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm leading-relaxed text-gs-mint/90",
									children: item.content
								})
							]
						}, item.title))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				ref: ctaRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-4xl px-6 lg:px-8 text-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: `reveal ${ctaVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap justify-center gap-3 mb-8",
								children: s.cta.tags.map((tag, idx) => /* @__PURE__ */ jsx("span", {
									className: "inline-block rounded-full border-2 border-gs-gold/50 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest text-gs-gold shadow-lg shadow-gs-gold/30",
									children: tag
								}, idx))
							}),
							/* @__PURE__ */ jsx("h2", {
								className: `font-display text-4xl font-bold text-gs-dark md:text-5xl ${isRtl ? "font-arabic" : ""}`,
								children: s.cta.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-xl text-gs-teal",
								children: s.cta.subtitle
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/#contact",
								className: `mt-10 inline-block rounded-full bg-gs-gold px-12 py-4 text-base font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:bg-gs-teal hover:shadow-gs-teal/40 hover:scale-105 ${isRtl ? "font-arabic" : ""}`,
								children: s.cta.button
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
//#region app/routes/services.tsx
var services_exports = /* @__PURE__ */ __exportAll({
	default: () => services_default,
	meta: () => meta$5
});
function meta$5({}) {
	return [{ title: "Services | Growth Station — Digital Excellence" }, {
		name: "description",
		content: "Explore our premium services: Web Development, Mobile Apps, UI/UX Design, Branding, Marketing, and more. Everything your brand needs."
	}];
}
var services_default = UNSAFE_withComponentProps(function ServicesPage() {
	const { dict } = useLanguage();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	})] });
});
//#endregion
//#region app/components/landing/Framework.tsx
function Framework() {
	const { dict, isRtl } = useLanguage();
	const f = dict.framework;
	const { ref: heroRef, visible: heroVisible } = useReveal();
	const { ref: stepsRef, visible: stepsVisible } = useReveal();
	const { ref: thinkingRef, visible: thinkingVisible } = useReveal();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsxs("section", {
				ref: heroRef,
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }), /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "1s" }
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
						children: /* @__PURE__ */ jsxs("div", {
							className: `reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "mb-8",
									children: /* @__PURE__ */ jsxs("div", {
										className: "inline-block relative",
										children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-50" }), /* @__PURE__ */ jsx("span", {
											className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-gs-gold shadow-2xl shadow-gs-gold/40",
											children: f.hero.eyebrow
										})]
									})
								}),
								/* @__PURE__ */ jsx("h1", {
									className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4 ${isRtl ? "font-arabic" : ""}`,
									children: f.hero.title
								}),
								/* @__PURE__ */ jsx("h2", {
									className: `font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gs-gold mb-6 ${isRtl ? "font-arabic" : ""}`,
									children: f.hero.subtitle
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto",
									children: f.hero.description
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				ref: stepsRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid gap-12 md:grid-cols-2",
						children: [
							{
								key: "discover",
								number: "01"
							},
							{
								key: "position",
								number: "02"
							},
							{
								key: "build",
								number: "03"
							},
							{
								key: "scale",
								number: "04"
							}
						].map((step, idx) => {
							const stepData = f.steps[step.key];
							return /* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/30 bg-gradient-to-br from-white to-gs-cream p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${stepsVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: `${idx * .15}s` },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-16 h-16 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-2xl font-bold text-white",
											children: step.number
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display text-2xl font-bold text-gs-dark mb-4 ${isRtl ? "font-arabic" : ""}`,
										children: stepData.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-base leading-relaxed text-gs-dark/80",
										children: stepData.content
									})
								]
							}, step.key);
						})
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				ref: thinkingRef,
				className: "relative py-24 md:py-32 bg-white/90 backdrop-blur-md",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: `reveal max-w-4xl mx-auto text-center mb-20 ${thinkingVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-gs-gold",
							children: f.thinking.title
						}), /* @__PURE__ */ jsx("h2", {
							className: `font-display mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`,
							children: f.thinking.subtitle
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "grid gap-12 md:grid-cols-2",
						children: [
							{
								key: "approach",
								number: "01"
							},
							{
								key: "strategy",
								number: "02"
							},
							{
								key: "failure",
								number: "03"
							},
							{
								key: "success",
								number: "04"
							}
						].map((item, idx) => {
							const itemData = f.thinking[item.key];
							return /* @__PURE__ */ jsxs("div", {
								className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/70 card-shine ${thinkingVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
								style: { transitionDelay: `${idx * .15}s` },
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `w-12 h-12 rounded-full bg-gradient-to-br from-gs-gold to-amber-600 flex items-center justify-center mb-4 shadow-lg shadow-gs-gold/30 ${isRtl ? "ml-auto" : ""}`,
										children: /* @__PURE__ */ jsx("span", {
											className: "text-xl font-bold text-white",
											children: item.number
										})
									}),
									/* @__PURE__ */ jsx("h3", {
										className: `font-display mt-4 text-2xl font-bold text-white ${isRtl ? "font-arabic" : ""}`,
										children: itemData.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 text-base leading-relaxed text-gs-mint/90",
										children: itemData.content
									})
								]
							}, item.key);
						})
					})]
				})
			})
		]
	});
}
//#endregion
//#region app/routes/framework.tsx
var framework_exports = /* @__PURE__ */ __exportAll({
	default: () => framework_default,
	meta: () => meta$4
});
function meta$4({}) {
	return [{ title: "Framework | Growth Station — Strategic Growth System" }, {
		name: "description",
		content: "Discover our proven framework for building sustainable growth. Strategy before execution, systems before campaigns."
	}];
}
var framework_default = UNSAFE_withComponentProps(function FrameworkPage() {
	const { dict } = useLanguage();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Framework, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	})] });
});
//#endregion
//#region app/components/landing/Careers.tsx
function Careers() {
	const { dict, isRtl } = useLanguage();
	const c = dict.careers;
	const { ref: heroRef, visible: heroVisible } = useReveal();
	const { ref: positionsRef, visible: positionsVisible } = useReveal();
	const [selectedFilter, setSelectedFilter] = useState("all");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		portfolio: "",
		cv: null,
		whyGrowthStation: ""
	});
	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) setFormData({
			...formData,
			cv: e.target.files[0]
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setIsModalOpen(false);
	};
	const filters = [
		{
			id: "all",
			label: c.filters.all
		},
		{
			id: "development",
			label: c.filters.development
		},
		{
			id: "design",
			label: c.filters.design
		},
		{
			id: "marketing",
			label: c.filters.marketing
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsxs("section", {
				ref: heroRef,
				className: "relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }), /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "1s" }
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
						children: /* @__PURE__ */ jsxs("div", {
							className: `reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-block relative mb-6",
									children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" }), /* @__PURE__ */ jsx("span", {
										className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20",
										children: c.hero.badge
									})]
								}),
								/* @__PURE__ */ jsx("h1", {
									className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`,
									children: c.hero.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto",
									children: c.hero.subtitle
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-lg text-gs-mint/70 max-w-3xl mx-auto",
									children: c.hero.description
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				ref: positionsRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: `reveal mb-12 ${positionsVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: [/* @__PURE__ */ jsx("h2", {
								className: `font-display text-3xl md:text-4xl font-bold text-gs-dark mb-8 ${isRtl ? "font-arabic" : ""}`,
								children: c.positions.title
							}), /* @__PURE__ */ jsx("div", {
								className: `flex flex-wrap gap-3 ${isRtl ? "justify-end" : ""}`,
								children: filters.map((filter) => /* @__PURE__ */ jsx("button", {
									onClick: () => setSelectedFilter(filter.id),
									className: `px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${selectedFilter === filter.id ? "bg-gradient-to-r from-gs-gold to-amber-600 text-white shadow-lg shadow-gs-gold/30" : "bg-white/70 backdrop-blur-md border-2 border-gs-gold/30 text-gs-dark hover:border-gs-gold/60"} ${isRtl ? "font-arabic" : ""}`,
									children: filter.label
								}, filter.id))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "space-y-4",
							children: /* @__PURE__ */ jsx("div", {
								className: "text-center py-16",
								children: /* @__PURE__ */ jsx("p", {
									className: "text-gs-dark/60 text-lg",
									children: c.positions.noPositions
								})
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: `reveal mt-16 rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${positionsVisible ? "visible" : ""}`,
							style: { transitionDelay: "0.2s" },
							children: /* @__PURE__ */ jsxs("div", {
								className: `text-center ${isRtl ? "font-arabic" : ""}`,
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: `font-display text-2xl font-bold text-gs-dark mb-4 ${isRtl ? "font-arabic" : ""}`,
										children: c.openApplication.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gs-dark/70 mb-8 max-w-2xl mx-auto",
										children: c.openApplication.description
									}),
									/* @__PURE__ */ jsxs("button", {
										onClick: () => setIsModalOpen(true),
										className: `inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 ${isRtl ? "font-arabic" : ""}`,
										children: [c.openApplication.button, /* @__PURE__ */ jsx("span", {
											className: "text-lg",
											children: "✦"
										})]
									})
								]
							})
						})
					]
				})
			}),
			isModalOpen && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
					onClick: () => setIsModalOpen(false)
				}), /* @__PURE__ */ jsxs("div", {
					className: `relative w-full max-w-2xl rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 backdrop-blur-md p-8 shadow-2xl max-h-[90vh] overflow-y-auto ${isRtl ? "font-arabic" : ""}`,
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => setIsModalOpen(false),
							className: "absolute top-4 right-4 text-gs-mint/60 hover:text-white transition-colors",
							children: "✕"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mb-6",
							children: /* @__PURE__ */ jsxs("div", {
								className: "inline-block relative",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" }), /* @__PURE__ */ jsx("span", {
									className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20",
									children: c.application.badge
								})]
							})
						}),
						/* @__PURE__ */ jsx("h2", {
							className: `font-display text-3xl font-bold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
							children: c.application.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gs-mint/80 mb-8",
							children: c.application.subtitle
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSubmit,
							className: "space-y-5",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
									className: `block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
									children: [c.application.fullName, " *"]
								}), /* @__PURE__ */ jsx("input", {
									type: "text",
									required: true,
									className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
									placeholder: c.application.fullName,
									value: formData.fullName,
									onChange: (e) => setFormData({
										...formData,
										fullName: e.target.value
									})
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
									className: `block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
									children: [c.application.email, " *"]
								}), /* @__PURE__ */ jsx("input", {
									type: "email",
									required: true,
									className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
									placeholder: c.application.email,
									value: formData.email,
									onChange: (e) => setFormData({
										...formData,
										email: e.target.value
									})
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: `block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
									children: c.application.phone
								}), /* @__PURE__ */ jsx("input", {
									type: "tel",
									className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
									placeholder: c.application.phone,
									value: formData.phone,
									onChange: (e) => setFormData({
										...formData,
										phone: e.target.value
									})
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									className: `block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
									children: c.application.portfolio
								}), /* @__PURE__ */ jsx("input", {
									type: "url",
									className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
									placeholder: c.application.portfolio,
									value: formData.portfolio,
									onChange: (e) => setFormData({
										...formData,
										portfolio: e.target.value
									})
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
									className: `block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
									children: [c.application.cv, " *"]
								}), /* @__PURE__ */ jsxs("div", {
									className: `w-full rounded-xl border-2 border-dashed border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-6 text-center transition-all hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`,
									children: [/* @__PURE__ */ jsx("input", {
										type: "file",
										required: true,
										accept: ".pdf,.doc,.docx",
										onChange: handleFileChange,
										className: "hidden",
										id: "cv-upload-modal"
									}), /* @__PURE__ */ jsx("label", {
										htmlFor: "cv-upload-modal",
										className: "cursor-pointer",
										children: formData.cv ? /* @__PURE__ */ jsx("p", {
											className: "text-white font-medium",
											children: formData.cv.name
										}) : /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
											className: "text-white font-medium mb-2",
											children: c.application.dropCV
										}), /* @__PURE__ */ jsx("p", {
											className: "text-gs-mint/60 text-sm",
											children: c.application.fileTypes
										})] })
									})]
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
									className: `block text-sm font-semibold text-white mb-2 ${isRtl ? "font-arabic" : ""}`,
									children: [c.application.whyGrowthStation, " *"]
								}), /* @__PURE__ */ jsx("textarea", {
									required: true,
									rows: 4,
									className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/10 backdrop-blur-md px-4 py-3 text-white placeholder-gs-mint/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
									placeholder: c.application.whyGrowthStation,
									value: formData.whyGrowthStation,
									onChange: (e) => setFormData({
										...formData,
										whyGrowthStation: e.target.value
									})
								})] }),
								/* @__PURE__ */ jsxs("div", {
									className: "flex gap-4 pt-4",
									children: [/* @__PURE__ */ jsxs("button", {
										type: "submit",
										className: `flex-1 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 ${isRtl ? "font-arabic" : ""}`,
										children: [c.application.submitButton, " →"]
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setIsModalOpen(false),
										className: `flex-1 rounded-full border-2 border-gs-gold/40 bg-white/10 backdrop-blur-md px-6 py-3 text-sm font-semibold text-white transition-all hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`,
										children: c.application.cancelButton
									})]
								})
							]
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region app/routes/careers.tsx
var careers_exports = /* @__PURE__ */ __exportAll({
	default: () => careers_default,
	meta: () => meta$3
});
function meta$3({}) {
	return [{ title: "Careers | Growth Station — Join Us" }, {
		name: "description",
		content: "Join the Growth Station team. We build systems, not just campaigns. We're looking for people who think before they execute."
	}];
}
var careers_default = UNSAFE_withComponentProps(function CareersPage() {
	const { dict } = useLanguage();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Careers, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	})] });
});
//#endregion
//#region app/components/landing/JobApplication.tsx
function JobApplication() {
	const { dict, isRtl } = useLanguage();
	const c = dict.careers.application;
	const { ref: formRef, visible: formVisible } = useReveal();
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		portfolio: "",
		cv: null,
		whyGrowthStation: ""
	});
	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) setFormData({
			...formData,
			cv: e.target.files[0]
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [/* @__PURE__ */ jsxs("section", {
			className: "relative min-h-[40vh] flex items-center justify-center overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }), /* @__PURE__ */ jsx("div", {
						className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
						style: { animationDelay: "1s" }
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: isRtl ? "font-arabic" : "",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-block relative mb-6",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" }), /* @__PURE__ */ jsx("span", {
									className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20",
									children: c.badge
								})]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`,
								children: c.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto",
								children: c.subtitle
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ jsx("section", {
			ref: formRef,
			className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-3xl px-6 lg:px-8",
				children: /* @__PURE__ */ jsx("div", {
					className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${formVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
								children: [c.fullName, " *"]
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								required: true,
								className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
								placeholder: c.fullName,
								value: formData.fullName,
								onChange: (e) => setFormData({
									...formData,
									fullName: e.target.value
								})
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
								children: [c.email, " *"]
							}), /* @__PURE__ */ jsx("input", {
								type: "email",
								required: true,
								className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
								placeholder: c.email,
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								})
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
								children: c.phone
							}), /* @__PURE__ */ jsx("input", {
								type: "tel",
								className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
								placeholder: c.phone,
								value: formData.phone,
								onChange: (e) => setFormData({
									...formData,
									phone: e.target.value
								})
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
								children: c.portfolio
							}), /* @__PURE__ */ jsx("input", {
								type: "url",
								className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
								placeholder: c.portfolio,
								value: formData.portfolio,
								onChange: (e) => setFormData({
									...formData,
									portfolio: e.target.value
								})
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
								children: [c.cv, " *"]
							}), /* @__PURE__ */ jsxs("div", {
								className: `w-full rounded-xl border-2 border-dashed border-gs-gold/30 bg-white/70 px-4 py-8 text-center transition-all hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`,
								children: [/* @__PURE__ */ jsx("input", {
									type: "file",
									required: true,
									accept: ".pdf,.doc,.docx",
									onChange: handleFileChange,
									className: "hidden",
									id: "cv-upload"
								}), /* @__PURE__ */ jsx("label", {
									htmlFor: "cv-upload",
									className: "cursor-pointer",
									children: formData.cv ? /* @__PURE__ */ jsx("p", {
										className: "text-gs-dark font-medium",
										children: formData.cv.name
									}) : /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-gs-dark font-medium mb-2",
										children: c.dropCV
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gs-dark/60 text-sm",
										children: c.fileTypes
									})] })
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("label", {
								className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
								children: [c.whyGrowthStation, " *"]
							}), /* @__PURE__ */ jsx("textarea", {
								required: true,
								rows: 5,
								className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
								placeholder: c.whyGrowthStation,
								value: formData.whyGrowthStation,
								onChange: (e) => setFormData({
									...formData,
									whyGrowthStation: e.target.value
								})
							})] }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex gap-4 pt-4",
								children: [/* @__PURE__ */ jsx("button", {
									type: "submit",
									className: `flex-1 rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 ${isRtl ? "font-arabic" : ""}`,
									children: c.submitButton
								}), /* @__PURE__ */ jsx(Link, {
									to: "/careers",
									className: `flex-1 rounded-full border-2 border-gs-gold/40 bg-white/70 px-8 py-4 text-sm font-semibold text-gs-dark text-center transition-all duration-300 hover:border-gs-gold/60 ${isRtl ? "font-arabic" : ""}`,
									children: c.cancelButton
								})]
							})
						]
					})
				})
			})
		})]
	});
}
//#endregion
//#region app/routes/careers.apply.tsx
var careers_apply_exports = /* @__PURE__ */ __exportAll({
	default: () => careers_apply_default,
	meta: () => meta$2
});
function meta$2({}) {
	return [{ title: "Apply | Growth Station — Open Application" }, {
		name: "description",
		content: "Tell us who you are and what you're great at — we'll find the right fit at Growth Station."
	}];
}
var careers_apply_default = UNSAFE_withComponentProps(function JobApplicationPage() {
	const { dict } = useLanguage();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(JobApplication, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
//#endregion
//#region app/components/landing/Brief.tsx
function Brief() {
	const { dict, isRtl } = useLanguage();
	const b = dict.brief;
	const { ref: heroRef, visible: heroVisible } = useReveal();
	const { ref: formRef, visible: formVisible } = useReveal();
	const [selectedOption, setSelectedOption] = useState(null);
	const [formData, setFormData] = useState({
		fullName: "",
		brand: "",
		email: "",
		code: "",
		phone: "",
		business: "",
		platforms: "",
		complaints: "",
		problem: "",
		competitors: "",
		vibe: "",
		contentGoal: "",
		testimonials: "",
		buyingProcess: "",
		priceRange: "",
		logo: "",
		style: "",
		references: "",
		avoid: "",
		projectType: "",
		goal: "",
		features: "",
		dashboard: "",
		integrations: "",
		launchDate: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", {
			selectedOption,
			formData
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [/* @__PURE__ */ jsxs("section", {
			ref: heroRef,
			className: "relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
				/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }),
						/* @__PURE__ */ jsx("div", {
							className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "1s" }
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gs-gold/10 to-amber-600/10 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "2s" }
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute top-20 right-20 w-20 h-20 border-2 border-gs-gold/30 rounded-full animate-spin",
					style: { animationDuration: "20s" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-20 left-20 w-16 h-16 border-2 border-gs-teal/30 rounded-full animate-spin",
					style: {
						animationDuration: "15s",
						animationDirection: "reverse"
					}
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute top-40 left-1/3 w-12 h-12 border-2 border-gs-gold/20 rotate-45 animate-pulse" }),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-40 right-1/3 w-14 h-14 border-2 border-gs-teal/20 rounded-lg animate-bounce",
					style: { animationDuration: "3s" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
					children: /* @__PURE__ */ jsxs("div", {
						className: `reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-block relative mb-6",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" }), /* @__PURE__ */ jsx("span", {
									className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/10 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20",
									children: b.hero.badge
								})]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-4 ${isRtl ? "font-arabic" : ""}`,
								children: b.hero.title
							}),
							/* @__PURE__ */ jsx("h2", {
								className: `font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gs-gold mb-6 ${isRtl ? "font-arabic" : ""}`,
								children: b.hero.subtitle
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto",
								children: b.hero.description
							})
						]
					})
				})
			]
		}), /* @__PURE__ */ jsx("section", {
			ref: formRef,
			className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto max-w-4xl px-6 lg:px-8",
				children: /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "space-y-12",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: /* @__PURE__ */ jsx("div", {
								className: "grid gap-4 md:grid-cols-3",
								children: [
									{
										id: "marketing",
										label: b.options.marketing
									},
									{
										id: "software",
										label: b.options.software
									},
									{
										id: "both",
										label: b.options.both
									}
								].map((option) => /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setSelectedOption(option.id),
									className: `relative p-6 rounded-2xl border-2 transition-all duration-300 ${selectedOption === option.id ? "border-gs-gold bg-gradient-to-br from-gs-gold/20 to-amber-600/20 shadow-xl shadow-gs-gold/30" : "border-gs-gold/30 bg-white/70 backdrop-blur-md hover:border-gs-gold/60"}`,
									children: /* @__PURE__ */ jsx("div", {
										className: `font-display text-lg font-bold ${selectedOption === option.id ? "text-gs-gold" : "text-gs-dark"}`,
										children: option.label
									})
								}, option.id))
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: `reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							style: { transitionDelay: "0.1s" },
							children: [/* @__PURE__ */ jsx("h3", {
								className: `font-display text-2xl font-bold text-gs-dark mb-6 ${isRtl ? "font-arabic" : ""}`,
								children: b.yourInfo.title
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 md:grid-cols-2",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-semibold text-gs-dark mb-2",
										children: b.yourInfo.fullName
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										required: true,
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: b.yourInfo.fullName,
										value: formData.fullName,
										onChange: (e) => setFormData({
											...formData,
											fullName: e.target.value
										})
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-semibold text-gs-dark mb-2",
										children: b.yourInfo.brand
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										required: true,
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: b.yourInfo.brand,
										value: formData.brand,
										onChange: (e) => setFormData({
											...formData,
											brand: e.target.value
										})
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-semibold text-gs-dark mb-2",
										children: b.yourInfo.email
									}), /* @__PURE__ */ jsx("input", {
										type: "email",
										required: true,
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: b.yourInfo.email,
										value: formData.email,
										onChange: (e) => setFormData({
											...formData,
											email: e.target.value
										})
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: "block text-sm font-semibold text-gs-dark mb-2",
										children: b.yourInfo.code
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: b.yourInfo.code,
										value: formData.code,
										onChange: (e) => setFormData({
											...formData,
											code: e.target.value
										})
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "md:col-span-2",
										children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.yourInfo.phone
										}), /* @__PURE__ */ jsx("input", {
											type: "tel",
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.yourInfo.phone,
											value: formData.phone,
											onChange: (e) => setFormData({
												...formData,
												phone: e.target.value
											})
										})]
									})
								]
							})]
						}),
						(selectedOption === "marketing" || selectedOption === "both") && /* @__PURE__ */ jsxs("div", {
							className: `reveal ${formVisible ? "visible" : ""} space-y-8 ${isRtl ? "font-arabic" : ""}`,
							style: { transitionDelay: "0.2s" },
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-8 shadow-xl",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 mb-6",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-12 w-12 items-center justify-center rounded-full bg-gs-gold/20 text-gs-gold font-bold text-xl",
											children: "01"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: `font-display text-xl font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`,
											children: b.marketing.community.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-gs-dark/60",
											children: b.marketing.community.subtitle
										})] })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.community.business
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 3,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.community.business,
												value: formData.business,
												onChange: (e) => setFormData({
													...formData,
													business: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.community.platforms
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.community.platforms,
												value: formData.platforms,
												onChange: (e) => setFormData({
													...formData,
													platforms: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.community.complaints
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.community.complaints,
												value: formData.complaints,
												onChange: (e) => setFormData({
													...formData,
													complaints: e.target.value
												})
											})] })
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-8 shadow-xl",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 mb-6",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-12 w-12 items-center justify-center rounded-full bg-gs-gold/20 text-gs-gold font-bold text-xl",
											children: "02"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: `font-display text-xl font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`,
											children: b.marketing.brand.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-gs-dark/60",
											children: b.marketing.brand.subtitle
										})] })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.problem
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.problem,
												value: formData.problem,
												onChange: (e) => setFormData({
													...formData,
													problem: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.competitors
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.competitors,
												value: formData.competitors,
												onChange: (e) => setFormData({
													...formData,
													competitors: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.vibe
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.vibe,
												value: formData.vibe,
												onChange: (e) => setFormData({
													...formData,
													vibe: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.contentGoal
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.contentGoal,
												value: formData.contentGoal,
												onChange: (e) => setFormData({
													...formData,
													contentGoal: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.testimonials
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.testimonials,
												value: formData.testimonials,
												onChange: (e) => setFormData({
													...formData,
													testimonials: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.buyingProcess
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.buyingProcess,
												value: formData.buyingProcess,
												onChange: (e) => setFormData({
													...formData,
													buyingProcess: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.brand.priceRange
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.brand.priceRange,
												value: formData.priceRange,
												onChange: (e) => setFormData({
													...formData,
													priceRange: e.target.value
												})
											})] })
										]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-8 shadow-xl",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 mb-6",
										children: [/* @__PURE__ */ jsx("div", {
											className: "flex h-12 w-12 items-center justify-center rounded-full bg-gs-gold/20 text-gs-gold font-bold text-xl",
											children: "03"
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
											className: `font-display text-xl font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`,
											children: b.marketing.visual.title
										}), /* @__PURE__ */ jsx("p", {
											className: "text-gs-dark/60",
											children: b.marketing.visual.subtitle
										})] })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-4",
										children: [
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.visual.logo
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.visual.logo,
												value: formData.logo,
												onChange: (e) => setFormData({
													...formData,
													logo: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.visual.style
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.visual.style,
												value: formData.style,
												onChange: (e) => setFormData({
													...formData,
													style: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.visual.references
											}), /* @__PURE__ */ jsx("textarea", {
												rows: 2,
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.visual.references,
												value: formData.references,
												onChange: (e) => setFormData({
													...formData,
													references: e.target.value
												})
											})] }),
											/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
												className: "block text-sm font-semibold text-gs-dark mb-2",
												children: b.marketing.visual.avoid
											}), /* @__PURE__ */ jsx("input", {
												type: "text",
												className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
												placeholder: b.marketing.visual.avoid,
												value: formData.avoid,
												onChange: (e) => setFormData({
													...formData,
													avoid: e.target.value
												})
											})] })
										]
									})]
								})
							]
						}),
						(selectedOption === "software" || selectedOption === "both") && /* @__PURE__ */ jsx("div", {
							className: `reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							style: { transitionDelay: "0.2s" },
							children: /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white/80 to-gs-cream/80 backdrop-blur-md p-8 shadow-xl",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4 mb-6",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-full bg-gs-gold/20 text-gs-gold font-bold text-xl",
										children: "01"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: `font-display text-xl font-bold text-gs-dark ${isRtl ? "font-arabic" : ""}`,
										children: b.software.development.title
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gs-dark/60",
										children: b.software.development.subtitle
									})] })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.software.development.projectType
										}), /* @__PURE__ */ jsx("textarea", {
											rows: 2,
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.software.development.projectType,
											value: formData.projectType,
											onChange: (e) => setFormData({
												...formData,
												projectType: e.target.value
											})
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.software.development.goal
										}), /* @__PURE__ */ jsx("textarea", {
											rows: 2,
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.software.development.goal,
											value: formData.goal,
											onChange: (e) => setFormData({
												...formData,
												goal: e.target.value
											})
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.software.development.features
										}), /* @__PURE__ */ jsx("textarea", {
											rows: 3,
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.software.development.features,
											value: formData.features,
											onChange: (e) => setFormData({
												...formData,
												features: e.target.value
											})
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.software.development.dashboard
										}), /* @__PURE__ */ jsx("textarea", {
											rows: 2,
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.software.development.dashboard,
											value: formData.dashboard,
											onChange: (e) => setFormData({
												...formData,
												dashboard: e.target.value
											})
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.software.development.integrations
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.software.development.integrations,
											value: formData.integrations,
											onChange: (e) => setFormData({
												...formData,
												integrations: e.target.value
											})
										})] }),
										/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
											className: "block text-sm font-semibold text-gs-dark mb-2",
											children: b.software.development.launchDate
										}), /* @__PURE__ */ jsx("input", {
											type: "text",
											className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
											placeholder: b.software.development.launchDate,
											value: formData.launchDate,
											onChange: (e) => setFormData({
												...formData,
												launchDate: e.target.value
											})
										})] })
									]
								})]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: `reveal ${formVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							style: { transitionDelay: "0.3s" },
							children: /* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "w-full rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105",
								children: b.submitButton
							})
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region app/routes/brief.tsx
var brief_exports = /* @__PURE__ */ __exportAll({
	default: () => brief_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "Brief | Growth Station — Project Brief" }, {
		name: "description",
		content: "Help us understand your business, goals, and vision — so we can build something remarkable together."
	}];
}
var brief_default = UNSAFE_withComponentProps(function BriefPage() {
	const { dict } = useLanguage();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Brief, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	})] });
});
//#endregion
//#region app/components/landing/Contact.tsx
function Contact() {
	const { dict, isRtl } = useLanguage();
	const c = dict.contact;
	const { ref: heroRef, visible: heroVisible } = useReveal();
	const { ref: formRef, visible: formVisible } = useReveal();
	const { ref: infoRef, visible: infoVisible } = useReveal();
	const socialIcons = [
		{
			name: "facebook",
			href: c.social.facebook,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
			})
		},
		{
			name: "instagram",
			href: c.social.instagram,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
			})
		},
		{
			name: "tiktok",
			href: c.social.tiktok,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" })
			})
		},
		{
			name: "snapchat",
			href: c.social.snapchat,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M12.019 2c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.59-10.41c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm5.18 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.59 5.41c-1.66 0-3-1.34-3-3 0-.55.45-1 1-1s1 .45 1 1c0 .55.45 1 1 1s1-.45 1-1c0-.55.45-1 1-1s1 .45 1 1c0 1.66-1.34 3-3 3z" })
			})
		},
		{
			name: "behance",
			href: c.social.behance,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" })
			})
		},
		{
			name: "linkedin",
			href: c.social.linkedin,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
			})
		},
		{
			name: "whatsapp",
			href: c.social.whatsapp,
			icon: /* @__PURE__ */ jsx("svg", {
				className: "w-5 h-5",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
			})
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsxs("section", {
				ref: heroRef,
				className: "relative min-h-screen flex items-center justify-center overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gs-dark" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-gs-gold/20 rounded-full blur-3xl animate-pulse" }), /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-0 right-1/4 w-96 h-96 bg-gs-teal/20 rounded-full blur-3xl animate-pulse",
							style: { animationDelay: "1s" }
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto max-w-5xl px-6 lg:px-8 text-center",
						children: /* @__PURE__ */ jsxs("div", {
							className: `reveal ${heroVisible ? "visible" : ""} ${isRtl ? "font-arabic" : ""}`,
							children: [
								/* @__PURE__ */ jsx("h1", {
									className: `font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6 ${isRtl ? "font-arabic" : ""}`,
									children: c.hero.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-xl text-gs-mint/90 max-w-3xl mx-auto",
									children: c.hero.subtitle
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-lg text-gs-mint/70 max-w-3xl mx-auto",
									children: c.hero.description
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				ref: formRef,
				className: "relative py-24 md:py-32 bg-gs-cream gs-mesh",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-white to-gs-cream p-10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${formVisible ? "visible" : ""} ${isRtl ? "text-right font-arabic" : ""}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: "mb-8",
								children: /* @__PURE__ */ jsxs("div", {
									className: "inline-block relative",
									children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-gs-gold to-amber-600 blur-xl opacity-30" }), /* @__PURE__ */ jsx("span", {
										className: "relative inline-block rounded-full border-2 border-gs-gold/60 bg-white/50 backdrop-blur-md px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gs-gold shadow-lg shadow-gs-gold/20",
										children: c.form.intro
									})]
								})
							}), /* @__PURE__ */ jsxs("form", {
								className: "space-y-6",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
										children: c.form.fullName
									}), /* @__PURE__ */ jsx("input", {
										type: "text",
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: c.form.fullName
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
										children: c.form.email
									}), /* @__PURE__ */ jsx("input", {
										type: "email",
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: c.form.email
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
										children: c.form.phone
									}), /* @__PURE__ */ jsx("input", {
										type: "tel",
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: c.form.phone
									})] }),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
										className: `block text-sm font-semibold text-gs-dark mb-2 ${isRtl ? "font-arabic" : ""}`,
										children: c.form.message
									}), /* @__PURE__ */ jsx("textarea", {
										rows: 5,
										className: `w-full rounded-xl border-2 border-gs-gold/30 bg-white/70 px-4 py-3 text-gs-dark placeholder-gs-dark/40 focus:border-gs-gold focus:outline-none focus:ring-2 focus:ring-gs-gold/20 resize-none transition-all ${isRtl ? "text-right font-arabic" : ""}`,
										placeholder: c.form.message
									})] }),
									/* @__PURE__ */ jsx("button", {
										type: "submit",
										className: `w-full rounded-full bg-gradient-to-r from-gs-gold to-amber-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-gs-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-gs-gold/60 hover:scale-105 ${isRtl ? "font-arabic" : ""}`,
										children: c.form.sendButton
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							ref: infoRef,
							className: `space-y-6 ${isRtl ? "font-arabic" : ""}`,
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${infoVisible ? "visible" : ""}`,
									children: [/* @__PURE__ */ jsx("h3", {
										className: `font-display text-xl font-bold text-white mb-3 ${isRtl ? "font-arabic" : ""}`,
										children: c.info.emailLabel
									}), /* @__PURE__ */ jsx("a", {
										href: `mailto:${c.info.email}`,
										className: "text-gs-mint hover:text-gs-gold transition-colors",
										children: c.info.email
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${infoVisible ? "visible" : ""}`,
									style: { transitionDelay: "0.1s" },
									children: [/* @__PURE__ */ jsx("h3", {
										className: `font-display text-xl font-bold text-white mb-3 ${isRtl ? "font-arabic" : ""}`,
										children: c.info.phoneLabel
									}), /* @__PURE__ */ jsx("a", {
										href: `tel:${c.info.phone}`,
										className: "text-gs-mint hover:text-gs-gold transition-colors",
										children: c.info.phone
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${infoVisible ? "visible" : ""}`,
									style: { transitionDelay: "0.2s" },
									children: [/* @__PURE__ */ jsx("h3", {
										className: `font-display text-xl font-bold text-white mb-3 ${isRtl ? "font-arabic" : ""}`,
										children: c.info.workingHoursLabel
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gs-mint",
										children: c.info.workingHours
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${infoVisible ? "visible" : ""}`,
									style: { transitionDelay: "0.3s" },
									children: [/* @__PURE__ */ jsx("h3", {
										className: `font-display text-xl font-bold text-white mb-3 ${isRtl ? "font-arabic" : ""}`,
										children: c.info.locationLabel
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gs-mint whitespace-pre-line",
										children: c.info.address
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `reveal rounded-2xl border-2 border-gs-gold/40 bg-gradient-to-br from-gs-dark to-gray-900 p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gs-gold/60 card-shine ${infoVisible ? "visible" : ""}`,
									style: { transitionDelay: "0.4s" },
									children: [/* @__PURE__ */ jsx("h3", {
										className: `font-display text-xl font-bold text-white mb-4 ${isRtl ? "font-arabic" : ""}`,
										children: c.info.followLabel
									}), /* @__PURE__ */ jsx("div", {
										className: `flex gap-4 flex-wrap ${isRtl ? "justify-end" : ""}`,
										children: socialIcons.map((social) => /* @__PURE__ */ jsx("a", {
											href: social.href,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "w-10 h-10 rounded-lg flex items-center justify-center text-gs-mint hover:text-gs-gold hover:bg-gs-gold/10 transition-all hover:-translate-y-1 hover:scale-110",
											children: social.icon
										}, social.name))
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "relative py-24 md:py-32 bg-white/90 backdrop-blur-md",
				children: /* @__PURE__ */ jsx("div", {
					className: "mx-auto max-w-7xl px-6 lg:px-8",
					children: /* @__PURE__ */ jsx("div", {
						className: `reveal rounded-2xl border-2 border-gs-gold/30 overflow-hidden shadow-xl ${infoVisible ? "visible" : ""}`,
						children: /* @__PURE__ */ jsx("iframe", {
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6666666666667!2d31.33333333333333!3d30.06666666666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sIsmail%20El%20Qabbani%20St%2C%20Nasr%20City%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1234567890",
							width: "100%",
							height: "450",
							style: { border: 0 },
							allowFullScreen: true,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				})
			})
		]
	});
}
//#endregion
//#region app/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Contact | Growth Station — Get in Touch" }, {
		name: "description",
		content: "Contact Growth Station. Let's discuss how we can help you bring your ideas to life. We'll get back to you within 24 hours."
	}];
}
var contact_default = UNSAFE_withComponentProps(function ContactPage() {
	const { dict } = useLanguage();
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-gs-cream",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	})] });
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-BqF5znXE.js",
		"imports": ["/assets/jsx-runtime-CE8f_55p.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-CeRtTALs.js",
			"imports": ["/assets/jsx-runtime-CE8f_55p.js", "/assets/LanguageContext-BaHGpkPs.js"],
			"css": ["/assets/root-zpObdJKH.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-izrtkwSK.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": ["/assets/home-BPlcOuvs.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-BAlHf6-m.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/services": {
			"id": "routes/services",
			"parentId": "root",
			"path": "services",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/services-CWtpnTwT.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/framework": {
			"id": "routes/framework",
			"parentId": "root",
			"path": "framework",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/framework-mL9FqPV3.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/careers": {
			"id": "routes/careers",
			"parentId": "root",
			"path": "careers",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/careers-BuNKVC8Z.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/careers.apply": {
			"id": "routes/careers.apply",
			"parentId": "routes/careers",
			"path": "apply",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/careers.apply-2BMs8eGt.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/brief": {
			"id": "routes/brief",
			"parentId": "root",
			"path": "brief",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/brief-CHX2rtZZ.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/contact": {
			"id": "routes/contact",
			"parentId": "root",
			"path": "contact",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/contact-BJi6rkRA.js",
			"imports": [
				"/assets/jsx-runtime-CE8f_55p.js",
				"/assets/Footer-DSUQ2ZGS.js",
				"/assets/SiteBackground-BzTWIeE8.js",
				"/assets/LanguageContext-BaHGpkPs.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-df5c0e2f.js",
	"version": "df5c0e2f",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": true,
	"v8_trailingSlashAwareDataRequests": true,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": true,
	"v8_splitRouteModules": true,
	"v8_viteEnvironmentApi": true
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/services": {
		id: "routes/services",
		parentId: "root",
		path: "services",
		index: void 0,
		caseSensitive: void 0,
		module: services_exports
	},
	"routes/framework": {
		id: "routes/framework",
		parentId: "root",
		path: "framework",
		index: void 0,
		caseSensitive: void 0,
		module: framework_exports
	},
	"routes/careers": {
		id: "routes/careers",
		parentId: "root",
		path: "careers",
		index: void 0,
		caseSensitive: void 0,
		module: careers_exports
	},
	"routes/careers.apply": {
		id: "routes/careers.apply",
		parentId: "routes/careers",
		path: "apply",
		index: void 0,
		caseSensitive: void 0,
		module: careers_apply_exports
	},
	"routes/brief": {
		id: "routes/brief",
		parentId: "root",
		path: "brief",
		index: void 0,
		caseSensitive: void 0,
		module: brief_exports
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };

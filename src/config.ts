import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 브라우저 언어를 감지하여 지원되는 언어로 매핑
function detectLanguage(): string {
	const browserLang = navigator.language?.toLowerCase() || "en";
	const supportedLangs = {
		ko: ["ko", "ko-kr"],
		en: ["en", "en-us", "en-gb", "en-au"],
		ja: ["ja", "ja-jp"],
		"zh-cn": ["zh-cn", "zh-hans"],
		"zh-tw": ["zh-tw", "zh-hant"],
		es: ["es", "es-es"],
		th: ["th", "th-th"],
	};

	for (const [key, values] of Object.entries(supportedLangs)) {
		if (values.some((v) => browserLang.startsWith(v))) {
			return key;
		}
	}

	return "en";
}

export const siteConfig: SiteConfig = {
	title: "JKOVE",
	subtitle: "",
	lang: detectLanguage(),
	themeColor: {
		hue: 125,
		fixed: false,
	},
	banner: {
		enable: true,
		src: "assets/images/DSC02695.jpg",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/JKOVE94",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/JKOVE-logo.png",
	name: "JKOVE",
	bio: "Developer, AI Developer, Traveler, Video Editor, Music Editor",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/JKOVE94",
		},
		{
			name: "Threads",
			icon: "fa6-brands:threads",
			url: "https://www.threads.net/@jkove1994",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/daehyeon-kim-997006314/",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:jkove1994@gmail.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

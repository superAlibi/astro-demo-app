import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	adapter: cloudflare({
		imageService: 'compile'
	}),
	vite: {
		plugins: [tailwindcss()],
	},
	env: {
		schema: {
			// 浏览器可见：在仓库根目录创建 .env 并设置同名变量可覆盖 default
			PUBLIC_DEMO_MESSAGE: envField.string({
				optional: true,
				context: "client",
				access: "public",
				default: "当前为 astro.config 中的默认值（未设置 .env）",
			}),
			SITE_URL: envField.string({
				optional: true,
				context: "server",
				access: 'public',
				// default: "https://localhost:4321",
			}),
		},
	},
});

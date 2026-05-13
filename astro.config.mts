import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: 'https://localhost:4321',
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
			}),
			DEPLOY_HOSTNAME: envField.string({
				optional: true,
				context: "server",
				access: 'public',
				// default: "https://localhost:4321",
			}),
		},
	},
});

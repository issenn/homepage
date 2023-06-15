import fs from "fs";
import axios from 'axios';


async function downloadSVG(url, filename) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'utf-8');
    fs.writeFileSync(filename, buffer);
    console.log('SVG file saved successfully!');
  } catch (error) {
    console.error('Error occurred while saving SVG file:', error);
  }
}

const imageUrl = 'https://skillicons.dev/icons?perline=14&i=ansible,astro,azure,bash,cloudflare,css,devto,discord,django,docker,fastapi,git,github,githubactions,gitlab,go,gradle,graphql,grafana,heroku,html,idea,java,jenkins,linux,md,mastodon,maven,misskey,mysql,netlify,nginx,nodejs,nuxtjs,ps,postman,powershell,pr,prometheus,py,redis,regex,replit,ruby,sqlite,stackoverflow,svg,twitter,ts,vercel,vim,vite,vscode,vue';
const fileName = 'src/assets/skills.svg';

downloadSVG(imageUrl, fileName);

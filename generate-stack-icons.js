const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GOOGLE_API_KEY;
const MODEL_ID = 'gemini-3-pro-image-preview';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${API_KEY}`;

if (!API_KEY) {
    console.error('Error: GOOGLE_API_KEY environment variable not set.');
    process.exit(1);
}

const icons = [
    {
        name: 'openai',
        prompt: 'SQUARE 1:1 ratio. OpenAI logo, minimalist spiral/hexagon shape, solid green color #10a37f, pure black background #000000, clean vector style, centered, 256x256px'
    },
    {
        name: 'anthropic',
        prompt: 'SQUARE 1:1 ratio. Anthropic logo, stylized letter A with gradient, warm orange/coral color #d97757, pure black background #000000, clean minimalist design, centered, 256x256px'
    },
    {
        name: 'google',
        prompt: 'SQUARE 1:1 ratio. Google G logo, colorful with red blue yellow green colors, pure black background #000000, clean vector style, centered, 256x256px'
    },
    {
        name: 'make',
        prompt: 'SQUARE 1:1 ratio. Make.com logo, purple geometric play button or triangle shape, solid purple color #6d4aff, pure black background #000000, clean minimalist design, centered, 256x256px'
    },
    {
        name: 'zapier',
        prompt: 'SQUARE 1:1 ratio. Zapier logo, orange lightning bolt Z shape, solid orange color #ff4a00, pure black background #000000, clean vector style, centered, 256x256px'
    },
    {
        name: 'webhooks',
        prompt: 'SQUARE 1:1 ratio. Webhook icon, connected nodes or API connection symbol, white/light gray color, pure black background #000000, clean tech aesthetic, centered, 256x256px'
    },
    {
        name: 'meta',
        prompt: 'SQUARE 1:1 ratio. Meta infinity logo, blue gradient infinity symbol, blue color #0668e1, pure black background #000000, clean 3D style, centered, 256x256px'
    },
    {
        name: 'analytics',
        prompt: 'SQUARE 1:1 ratio. Google Analytics icon, bar chart with upward arrow, yellow/orange gradient #f9ab00, pure black background #000000, clean data visualization style, centered, 256x256px'
    },
    {
        name: 'playbooks',
        prompt: 'SQUARE 1:1 ratio. Document/playbook icon, open book or document with bullet points, blue color #4285f4, pure black background #000000, clean minimalist design, centered, 256x256px'
    },
    {
        name: 'specs',
        prompt: 'SQUARE 1:1 ratio. Technical specification document icon, clipboard with checkmarks or code brackets, purple color #6d4aff, pure black background #000000, clean tech aesthetic, centered, 256x256px'
    }
];

async function generateIcon(icon) {
    console.log(`Generating ${icon.name}...`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: icon.prompt }]
                }],
                generationConfig: {
                    responseModalities: ["IMAGE"],
                    temperature: 0.4,
                    topP: 1,
                    topK: 32,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0]?.content?.parts) {
            const parts = data.candidates[0].content.parts;
            const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

            if (imagePart) {
                const base64Data = imagePart.inlineData.data;
                const buffer = Buffer.from(base64Data, 'base64');
                const outputPath = path.join(__dirname, 'public', 'icons', 'stack', `${icon.name}.png`);
                fs.writeFileSync(outputPath, buffer);
                console.log(`✓ ${icon.name}.png saved`);
                return true;
            }
        }

        console.log(`✗ ${icon.name} - No image in response`);
        return false;
    } catch (error) {
        console.error(`✗ ${icon.name} failed:`, error.message);
        return false;
    }
}

async function generateAllIcons() {
    console.log('Starting stack icon generation...\n');

    for (const icon of icons) {
        await generateIcon(icon);
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('\nDone!');
}

generateAllIcons();

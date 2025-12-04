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
        name: 'zapier',
        prompt: 'SQUARE 1:1 ratio. Zapier logo icon, orange Z lightning bolt symbol, solid bright orange color #ff4a00, PURE BLACK background #000000, NO white, minimalist clean vector style, centered, glowing effect, 256x256px'
    },
    {
        name: 'webhooks',
        prompt: 'SQUARE 1:1 ratio. Webhook API connection icon, two connected nodes with curved arrow, white/silver metallic color, PURE BLACK background #000000, NO white background, tech aesthetic, centered, subtle glow, 256x256px'
    },
    {
        name: 'playbooks',
        prompt: 'SQUARE 1:1 ratio. Document playbook icon, open book or document with lines, blue color #4285f4, PURE BLACK background #000000, NO white background, minimalist clean design, centered, subtle glow, 256x256px'
    },
    {
        name: 'specs',
        prompt: 'SQUARE 1:1 ratio. Technical specification document icon, clipboard with code brackets or checklist, purple color #6d4aff, PURE BLACK background #000000, NO white background, tech aesthetic, centered, subtle glow, 256x256px'
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
    console.log('Regenerating problematic icons...\n');

    for (const icon of icons) {
        await generateIcon(icon);
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('\nDone!');
}

generateAllIcons();

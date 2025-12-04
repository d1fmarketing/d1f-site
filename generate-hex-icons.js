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
        name: 'hex-creative',
        prompt: 'SQUARE 1:1 ratio. 3D golden lightning bolt icon, glowing electric energy effect, metallic gold material, pure black background #000000, premium tech aesthetic, object centered, 8k render, Apple style product shot'
    },
    {
        name: 'hex-testing',
        prompt: 'SQUARE 1:1 ratio. 3D golden test tube or beaker icon with glowing bubbles, scientific laboratory aesthetic, metallic gold material, pure black background #000000, premium tech aesthetic, object centered, 8k render, Apple style product shot'
    },
    {
        name: 'hex-analytics',
        prompt: 'SQUARE 1:1 ratio. 3D golden brain icon with circuit board patterns and neural network connections, glowing synapses, metallic gold material, pure black background #000000, premium tech aesthetic, object centered, 8k render, Apple style product shot'
    },
    {
        name: 'hex-campaign',
        prompt: 'SQUARE 1:1 ratio. 3D golden rocket icon launching upward with flame trail effect, metallic gold material, pure black background #000000, premium tech aesthetic, object centered, 8k render, Apple style product shot'
    },
    {
        name: 'hex-retention',
        prompt: 'SQUARE 1:1 ratio. 3D golden circular arrows icon forming infinity loop or cycle, glowing energy trail, metallic gold material, pure black background #000000, premium tech aesthetic, object centered, 8k render, Apple style product shot'
    },
    {
        name: 'hex-agents',
        prompt: 'SQUARE 1:1 ratio. 3D golden AI robot head or futuristic chip icon, glowing circuit details, metallic gold material, pure black background #000000, premium tech aesthetic, object centered, 8k render, Apple style product shot'
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
                const outputPath = path.join(__dirname, 'public', 'icons', `${icon.name}.png`);
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
    console.log('Starting icon generation...\n');

    for (const icon of icons) {
        await generateIcon(icon);
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('\nDone!');
}

generateAllIcons();

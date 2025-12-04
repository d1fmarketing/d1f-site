const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GOOGLE_API_KEY;
const MODEL_ID = 'gemini-3-pro-image-preview';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent?key=${API_KEY}`;

if (!API_KEY) {
    console.error('Error: GOOGLE_API_KEY environment variable not set.');
    process.exit(1);
}

const prompt = `
SQUARE 1:1 ratio image.
Cinematic 3D render of a futuristic AI computer chip merging with a glowing golden digital brain.
The object is CENTERED in the frame.
Pure black background (#000000).
The chip is sleek matte black with intricate electric gold circuit traces.
The brain portion is translucent and glowing with warm gold energy.
Gold circuit lines emanating outward from the chip.
8k resolution, premium tech aesthetic, Apple style product photography.
Dramatic lighting, the object floating in center of pure black void.
`;

async function generateImage() {
    console.log(`Generating image with model: ${MODEL_ID}...`);

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
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
            throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();

        // Inspect response structure for image data
        // Usually it's in candidates[0].content.parts[0].inlineData.data (base64)
        // or similar for image models.

        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            const parts = data.candidates[0].content.parts;
            const imagePart = parts.find(p => p.inlineData && p.inlineData.mimeType.startsWith('image/'));

            if (imagePart) {
                const base64Data = imagePart.inlineData.data;
                const buffer = Buffer.from(base64Data, 'base64');
                const outputPath = path.join(__dirname, 'public', 'hero-chip.png');

                // Ensure public dir exists
                if (!fs.existsSync(path.join(__dirname, 'public'))) {
                    fs.mkdirSync(path.join(__dirname, 'public'));
                }

                fs.writeFileSync(outputPath, buffer);
                console.log(`Success! Image saved to ${outputPath}`);
            } else {
                console.log('No image data found in the response parts.');
                console.log(JSON.stringify(data, null, 2));
            }
        } else {
            console.log('Unexpected response structure.');
            console.log(JSON.stringify(data, null, 2));
        }

    } catch (error) {
        console.error('Generation failed:', error);
    }
}

generateImage();

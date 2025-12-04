import google.generativeai as genai
import os
from PIL import Image
import sys

# Get API Key from environment variable
api_key = os.environ.get("GOOGLE_API_KEY")
if not api_key:
    print("Error: GOOGLE_API_KEY environment variable not set.")
    sys.exit(1)

genai.configure(api_key=api_key)

# Model ID confirmed by user
model_id = "gemini-3-pro-image-preview"

print(f"Initializing model: {model_id}...")
try:
    model = genai.GenerativeModel(model_id)
except Exception as e:
    print(f"Error initializing model: {e}")
    sys.exit(1)

# Premium Prompt for D1F Hero
prompt = """
A hyper-realistic, cinematic 3D render of a futuristic AI computer chip merging with a glowing golden digital brain. 
The chip is sleek, matte black, and metallic with intricate electric gold circuit traces. 
The brain portion is translucent, ethereal, and glowing with warm gold energy, symbolizing intelligence. 
The background is deep pitch black with very subtle, elegant, faint gold circuit lines fading into darkness. 
High contrast, 8k resolution, premium tech aesthetic, Apple style product photography, centered composition, dramatic lighting.
"""

print("Generating image...")
try:
    response = model.generate_content(
        contents=prompt,
        generation_config={
            "temperature": 0.4,
            "top_p": 1,
            "top_k": 32,
            "max_output_tokens": 2048,
        }
    )
    
    # Check if response has parts and save image
    if response.parts:
        # Depending on the exact response structure for image models, 
        # usually it's in parts[0].image or similar. 
        # For some preview models it might be different, but standard SDK usage:
        try:
            img = response.parts[0].image
            img.save("public/hero-chip.png")
            print("Success! Image saved to public/hero-chip.png")
        except AttributeError:
             # Fallback if the SDK structure is slightly different for this specific preview model
             # Sometimes it returns bytes directly or needs different handling
             print("Response received but could not extract image directly via parts[0].image.")
             print(f"Response type: {type(response)}")
             # Attempt to inspect response
             print(response)
    else:
        print("No content generated.")
        print(response.prompt_feedback)

except Exception as e:
    print(f"Error during generation: {e}")
    sys.exit(1)

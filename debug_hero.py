import google.generativeai as genai
import os
import sys

api_key = os.environ.get("GOOGLE_API_KEY")
genai.configure(api_key=api_key)
model_id = "gemini-3-pro-image-preview"

prompt = "A futuristic AI computer chip merging with a glowing golden digital brain."

print("Generating...")
try:
    response = model = genai.GenerativeModel(model_id).generate_content(prompt)
    
    with open("response_debug.txt", "w") as f:
        f.write(str(response))
        
    print("Response saved to response_debug.txt")
    
except Exception as e:
    print(f"Error: {e}")

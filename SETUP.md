# Setting up the AI Chatbot

## 1. Install Dependencies

Run the following commands:

```bash
# Install required packages
npm install @google/generative-ai axios

# If using yarn
yarn add @google/generative-ai axios

# If using bun
bun add @google/generative-ai axios
```

## 2. API Keys Setup

1. Get your Groq API key:
   - Go to https://console.groq.com
   - Sign up or login
   - Create a new API key
   - Copy the key (starts with `gsk_`)

2. Get your Gemini API key:
   - Go to https://makersuite.google.com/app/apikey
   - Enable the Gemini API
   - Create a new API key
   - Copy the key (starts with `AIza`)

3. Create a `.env` file in the project root:
```env
VITE_GROQ_API_KEY=gsk_your_key_here
VITE_GEMINI_API_KEY=AIza_your_key_here
```

## 3. Verify Setup

1. Check that both API keys are properly set in your .env file
2. Make sure the keys match the required format:
   - Groq key starts with `gsk_`
   - Gemini key starts with `AIza`
3. Verify dependencies are installed:
   ```bash
   npm list @google/generative-ai axios
   ```

## Troubleshooting

If you get errors:

1. "Invalid Groq API key format":
   - Check your Groq API key starts with `gsk_`
   - Verify the key is copied correctly
   - Make sure there are no extra spaces

2. "Invalid Gemini API key format":
   - Check your Gemini API key starts with `AIza`
   - Verify the key is copied correctly
   - Make sure the Gemini API is enabled in your Google Cloud Console

3. Module not found errors:
   - Run `npm install` again
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## Usage

The chatbot supports both Groq and Gemini models:
- Use Groq (Llama 3) for more complex responses
- Use Gemini for faster, simpler responses
- Switch between models using the selector in the chat interface
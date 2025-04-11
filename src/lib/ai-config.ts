// Function to validate Groq API key
export const isValidGroqKey = (key: string | undefined): boolean => {
  return typeof key === 'string' && key.startsWith('gsk_') && key.length > 10;
};

// API configuration
export const AI_CONFIG = {
  groq: {
    baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
    defaultModel: 'llama3-70b-8192',
    validateKey: isValidGroqKey,
  }
};

// Function to check if API keys are properly configured
export const validateAIConfig = () => {
  const groqKey = import.meta.env.VITE_GROQ_API_KEY;
  const errors: string[] = [];

  if (!isValidGroqKey(groqKey)) {
    errors.push('Invalid or missing Groq API key. Must start with "gsk_"');
  }

  return {
    isValid: errors.length === 0,
    errors,
    hasGroq: isValidGroqKey(groqKey),
  };
};

// Helper function to create headers for Groq API
export const createGroqHeaders = (apiKey: string) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
  'Accept': 'application/json',
});

// Function to format messages for Groq API
export const formatGroqMessages = (messages: Array<{role: string, content: string}>, systemPrompt: string) => {
  return [
    { role: 'system', content: systemPrompt },
    ...messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    }))
  ];
};
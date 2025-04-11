import { useState } from 'react';
import {
  AI_CONFIG,
  createGroqHeaders,
  formatGroqMessages,
  isValidGroqKey,
} from '@/lib/ai-config';

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface UseAIChatOptions {
  groqApiKey?: string;
}

export const useAIChat = (options: UseAIChatOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callGroqAPI = async (messages: Message[], systemPrompt: string) => {
    try {
      if (!isValidGroqKey(options.groqApiKey)) {
        throw new Error('Invalid or missing Groq API key. Must start with "gsk_"');
      }

      console.log('Calling Groq API...');
      
      const response = await fetch(AI_CONFIG.groq.baseUrl, {
        method: 'POST',
        headers: createGroqHeaders(options.groqApiKey),
        body: JSON.stringify({
          messages: formatGroqMessages(messages, systemPrompt),
          model: AI_CONFIG.groq.defaultModel,
          temperature: 0.7,
          max_tokens: 8192,
          stream: false
        })
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse Groq response:', responseText);
        throw new Error('Invalid response from Groq API');
      }

      if (!response.ok) {
        console.error('Groq API error response:', {
          status: response.status,
          statusText: response.statusText,
          data
        });
        throw new Error(
          `Groq API error (${response.status}): ${data.error?.message || 'Unknown error'}`
        );
      }

      return data.choices[0].message.content;
    } catch (err) {
      console.error('Groq API error:', err);
      throw err;
    }
  };

  const getAIResponse = async (messages: Message[], systemPrompt: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await callGroqAPI(messages, systemPrompt);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get AI response';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getAIResponse,
    isLoading,
    error,
  };
};
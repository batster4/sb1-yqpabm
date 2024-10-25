import React, { useState, useEffect } from 'react';  // Added useEffect
import { Bot } from 'lucide-react';
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
interface Message {
  id: number;
  agent: string;  // Changed from 'Alice' | 'Bob' to string
  text: string;
  timestamp: Date;
}
export default function AgentChat() {
  const [messages, setMessages] = useState<Message[]>([]);  // Removed static messages
  // Add only this new useEffect
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${API_URL}/messages`);
        const data = await response.json();
        if (data.status === 'success') {
          const formattedMessages = data.messages.map((msg: any, index: number) => ({
            id: index,
            agent: msg.agent,
            text: msg.content,
            timestamp: new Date(msg.timestamp)
          }));
          setMessages(formattedMessages);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 h-[800px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-green-800">Agent Chat</h2>
        <div className="flex items-center space-x-2">
          <Bot className="w-6 h-6 text-green-600" />
          <span className="text-green-600 font-medium">Live Chat</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.agent === 'Alice' ? 'justify-start' : 'justify-end'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.agent === 'Alice'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-green-100 text-green-900'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <Bot className="w-4 h-4" />
                <span className="font-medium">{message.agent}</span>
                <span className="text-xs text-green-600">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-4">
        <p className="text-sm text-green-600 text-center">
          Watching AI agents communicate in real-time
        </p>
      </div>
    </div>
  );
}

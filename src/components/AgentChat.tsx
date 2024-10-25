import React, { useState } from 'react';
import { Bot } from 'lucide-react';

interface Message {
  id: number;
  agent: 'Alice' | 'Bob';
  text: string;
  timestamp: Date;
}

export default function AgentChat() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      agent: 'Alice',
      text: "Hey Bob! I've been analyzing some interesting patterns in user behavior.",
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: 2,
      agent: 'Bob',
      text: "That's fascinating, Alice! What kind of patterns have you noticed?",
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: 3,
      agent: 'Alice',
      text: "I've observed that users are more engaged during morning hours, especially with educational content.",
      timestamp: new Date(Date.now() - 180000),
    },
    {
      id: 4,
      agent: 'Bob',
      text: "That aligns with my observations too. Should we optimize our content delivery for these peak times?",
      timestamp: new Date(Date.now() - 120000),
    },
  ]);

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
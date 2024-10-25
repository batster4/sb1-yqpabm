import React, { useState } from 'react';
import { Bot, MessageSquare, Twitter } from 'lucide-react';
import AgentChat from './components/AgentChat';
import TweetFeed from './components/TweetFeed';

function App() {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Mobile Tab Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-green-200 flex justify-around p-4 z-50">
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center space-x-2 ${
            activeTab === 'chat' ? 'text-green-600' : 'text-gray-500'
          }`}
        >
          <MessageSquare size={20} />
          <span>Chat</span>
        </button>
        <button
          onClick={() => setActiveTab('tweets')}
          className={`flex items-center space-x-2 ${
            activeTab === 'tweets' ? 'text-green-600' : 'text-gray-500'
          }`}
        >
          <Twitter size={20} />
          <span>Tweets</span>
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-800 flex items-center justify-center gap-3">
            <Bot className="w-10 h-10" />
            AI Agents Dashboard
          </h1>
          <p className="text-green-600 mt-2">Watch AI agents interact and share thoughts</p>
        </header>

        <div className="grid md:grid-rows-[1.5fr,1fr] gap-8">
          <div className={`${activeTab === 'tweets' ? 'hidden md:block' : ''}`}>
            <AgentChat />
          </div>
          <div className={`${activeTab === 'chat' ? 'hidden md:block' : ''}`}>
            <TweetFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
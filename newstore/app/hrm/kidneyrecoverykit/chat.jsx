'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Button, Spin, Typography, message, Card, Space, Tag, FloatButton, Drawer, Avatar, Tooltip, Image } from 'antd';
import { SendOutlined, LoadingOutlined, UserOutlined, RobotOutlined, CloseOutlined } from '@ant-design/icons';
import { usePathname } from 'next/navigation'; 

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const API_BASE_URL = 'https://healdiway.bkarogyam.com/erp-api';

// Enhanced markdown parser with support for links, images, and basic formatting
const renderMessageContent = (content) => {
  const elements = [];
  let remainingContent = content;

  // Process content in chunks
  while (remainingContent.length > 0) {
    // Check for markdown links [text](url)
    const linkMatch = remainingContent.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Check for markdown images ![alt](url)
    const imageMatch = remainingContent.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    // Check for bold text **text**
    const boldMatch = remainingContent.match(/\*\*([^*]+)\*\*/);

    let nextMatch = null;
    let matchType = null;

    // Determine which pattern comes first
    const matches = [];
    if (linkMatch) matches.push({ type: 'link', match: linkMatch, index: linkMatch.index });
    if (imageMatch) matches.push({ type: 'image', match: imageMatch, index: imageMatch.index });
    if (boldMatch) matches.push({ type: 'bold', match: boldMatch, index: boldMatch.index });

    if (matches.length > 0) {
      matches.sort((a, b) => a.index - b.index);
      nextMatch = matches[0].match;
      matchType = matches[0].type;
    }

    if (nextMatch) {
      // Add text before the match
      if (nextMatch.index > 0) {
        elements.push(remainingContent.substring(0, nextMatch.index));
      }

      // Add the matched element
      if (matchType === 'link') {
        elements.push(
          <a 
            href={nextMatch[2]} 
            target="_blank" 
            rel="noopener noreferrer"
            key={`link-${elements.length}`}
            style={{ 
              color: '#1890ff', 
              textDecoration: 'underline',
              margin: '0 2px',
              wordBreak: 'break-all'
            }}
          >
            {nextMatch[1]}
          </a>
        );
      } else if (matchType === 'image') {
        elements.push(
          <div key={`img-${elements.length}`} style={{ margin: '12px 0' }}>
            <Image
              src={nextMatch[2]}
              alt={nextMatch[1] || 'Product image'}
              width={200}
              style={{ 
                maxWidth: '100%', 
                borderRadius: '8px', 
                border: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              preview={{
                mask: <span style={{ color: '#fff' }}>View Image</span>,
              }}
              fallback="/image-placeholder.png"
            />
          </div>
        );
      } else if (matchType === 'bold') {
        elements.push(
          <Text strong key={`bold-${elements.length}`}>
            {nextMatch[1]}
          </Text>
        );
      }

      // Update remaining content
      remainingContent = remainingContent.substring(nextMatch.index + nextMatch[0].length);
    } else {
      // No more matches, add remaining content
      elements.push(remainingContent);
      remainingContent = '';
    }
  }

  return elements.length > 0 ? elements.map((el, i) => (
    <React.Fragment key={i}>{el}</React.Fragment>
  )) : content;
};


export default function AIDoctorAssistant() {
  const router = useRouter();
  const pathname = usePathname(); 
  const [assistantId, setAssistantId] = useState('3'); 
  const [open, setOpen] = useState(false);
  const [assistantDetails, setAssistantDetails] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [threadId, setThreadId] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const messagesEndRef = useRef(null);



  // Load thread ID from localStorage on initial render
  useEffect(() => {
    const savedThreadId = localStorage.getItem('threadId');
    if (savedThreadId) {
      setThreadId(savedThreadId);
    }
  }, []);

  const showDrawer = () => {
    setOpen(true);
    if (!assistantDetails) {
      fetchAssistantDetails(assistantId);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const clearConversation = () => {
    setMessages([]);
    setThreadId(null);
    localStorage.removeItem('threadId');
    message.success('Conversation cleared');
  };

  // 👇 detect route and update assistantId
  useEffect(() => {
    // अगर पाथ /careers है, तो ID 5 होगी
    if (pathname === '/careers') {
        setAssistantId('5'); // career chatbot
    } 
    // अगर पाथ /services है, तो ID 8 होगी
    else if (pathname === '/landingpages/kidneyrecoverymedikit') { 
        setAssistantId('8'); // services chatbot
    } 
    // अगर कोई और पाथ है, तो डिफ़ॉल्ट ID 3 होगी
    else {
        setAssistantId('3'); // default chatbot
    }
}, [pathname]);

  useEffect(() => {
    if (assistantId && open) {
      fetchAssistantDetails(assistantId);
    }
  }, [assistantId, open]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchAssistantDetails = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/assistants/${id}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAssistantDetails(data);
    } catch (error) {
      console.error('Error fetching assistant details:', error);
      message.error('Failed to load assistant details.');
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);
    setIsThinking(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 120000);

      const payload = {
        message: inputMessage,
        ...(threadId && { thread_id: threadId })
      };

      const response = await fetch(`${API_BASE_URL}/assistants/${assistantId}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error?.includes('requires_action')) {
          throw new Error('The assistant needs more information to proceed.');
        }
        throw new Error(errorData.error || 'Request failed');
      }

      const data = await response.json();
      
      if (data.thread_id) {
        setThreadId(data.thread_id);
        localStorage.setItem('threadId', data.thread_id);
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || "I've processed your request." 
      }]);

      setRetryCount(0);

    } catch (error) {
      console.error('Chat error:', error);
      
      if (error.name === 'AbortError' && retryCount < 3) {
        setRetryCount(c => c + 1);
        setTimeout(handleSendMessage, 2000);
        return;
      }
      // if (error && retryCount < 3) {
      //   setRetryCount(c => c + 1);
      //   setTimeout(handleSendMessage, 2000);
      //   return;
      // }


      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Error: ${error.message}` 
      }]);
      
      message.error(error.message);
    } finally {
      setLoading(false);
      setIsThinking(false);
      setIsStreaming(false);
    }
  };

  return (
    <>
      <FloatButton
        type="primary"
        icon={<UserOutlined />}
        onClick={showDrawer}
        className="right-2 bottom-24"
        tooltip="Chat with Arogya Doctor"
        style={{
          width: 48,
          height: 48,
          fontSize: '32px'
        }}
      />

      <Drawer
        title={
          <div className="flex items-center">
            <Avatar icon={<RobotOutlined />} size="small" className='bg-green-600 text-white'/>
            <span className="ml-2 text-green-500">
              {assistantDetails?.name || 'AI Arogya Doctor'}
            </span>
          </div>
        }
        placement="right"
        onClose={onClose}
        open={open}
        closable={false}
        width={450}
        height="85vh"
        styles={{
          body: { 
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100% - 55px)'
          }
        }}
        extra={
          <div className="flex items-center gap-2">
            <Tooltip title="Clear conversation">
              <Button 
                type="text" 
                danger
                onClick={clearConversation}
                disabled={messages.length === 0}
              >
                Clear
              </Button>
            </Tooltip>
            <Button 
              type="text" 
              icon={<CloseOutlined />} 
              onClick={onClose}
            />
          </div>
        }
      >
        <div className="flex flex-col h-full">
          {/* Assistant Info */}
          {/* {assistantDetails && (
            <div className="p-4 border-b">
              <Text type="secondary" className="text-sm">
                {assistantDetails.instructions}
              </Text>
              <div className="mt-2 flex items-center">
                <Tag color="green">{assistantDetails.model}</Tag>
                {threadId && (
                  <Tooltip title={threadId}>
                    <Text code className="ml-2 text-xs">
                      Thread: {threadId.substring(0, 8)}...
                    </Text>
                  </Tooltip>
                )}
              </div>
            </div>
          )} */}

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4" style={{ scrollBehavior: 'smooth' }}>
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <RobotOutlined className="text-4xl text-gray-300 mb-4" />
                <Text type="secondary" className="text-base">
                  Start your conversation with the AI Doctor
                </Text>
                <Text type="secondary" className="mt-2 text-sm">
                  Ask about symptoms, medications, or health advice
                </Text>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-3 ${
                      msg.role === 'user'
                        ? 'bg-blue-100 rounded-tr-none'
                        : 'bg-green-100 rounded-tl-none'
                    }`}
                    style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                  >
                    <div className="flex items-center mb-1">
                      {msg.role === 'user' ? (
                        <UserOutlined className="text-blue-500 mr-2" />
                      ) : (
                        <RobotOutlined className="text-green-500 mr-2" />
                      )}
                      <Text strong className={msg.role === 'user' ? 'text-blue-500' : 'text-green-500'}>
                        {msg.role === 'user' ? 'You' : 'Doctor'}
                      </Text>
                    </div>
                    <div className="message-content" style={{ lineHeight: 1.6 }}>
                      {renderMessageContent(msg.content)}
                    </div>
                  </div>
                </div>
              ))
            )}
            
            {isThinking && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[85%] bg-green-100 rounded-lg rounded-tl-none p-3">
                  <div className="flex items-center mb-1">
                    <RobotOutlined className="text-green-500 mr-2" />
                    <Text strong className="text-green-500">Doctor</Text>
                  </div>
                  <div className="flex items-center">
                    <Text type="secondary" italic>Thinking</Text>
                    <div className="typing-dots ml-2">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <Space.Compact className="w-full">
              <TextArea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your health query..."
                autoSize={{ minRows: 1, maxRows: 4 }}
                onPressEnter={(e) => {
                  if (!e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={loading}
                className="rounded-l-lg"
                style={{ padding: '12px' }}
              />
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleSendMessage}
                disabled={loading || !inputMessage.trim()}
                className="rounded-r-lg h-auto"
                loading={loading}
                style={{ height: 'auto', padding: '0 16px' }}
              />
            </Space.Compact>
            <Text type="secondary" className="text-xs mt-2 block text-center">
              Press Shift+Enter for new line
            </Text>
          </div>
        </div>
      </Drawer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
        .typing-dots {
          display: inline-flex;
          align-items: center;
          height: 17px;
        }
        .typing-dots .dot {
          width: 6px;
          height: 6px;
          margin: 0 2px;
          background-color: #666;
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1.4s infinite ease-in-out;
        }
        .message-content ul {
          padding-left: 20px;
          margin: 8px 0;
        }
        .message-content li {
          margin-bottom: 4px;
        }
      `}</style>
    </>
  );
}
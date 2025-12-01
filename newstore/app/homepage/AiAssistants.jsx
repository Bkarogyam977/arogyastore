
// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { Button, FloatButton, Drawer, Avatar, Input, Spin, message, Tooltip } from 'antd';
// import { RobotOutlined, CloseOutlined, SendOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';

// export default function AiAssistantButton() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isStreaming, setIsStreaming] = useState(false);
//   const [threadId, setThreadId] = useState(null);
//   const messagesEndRef = useRef(null);

//   const API_BASE_URL = 'https://healdiway.bkarogyam.com/erp-api'; // Your API base URL
//   const assistantId = 3; // Set your default assistant ID

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const newMessage = { role: 'user', content: inputMessage };
//     setMessages(prev => [...prev, newMessage, { role: 'assistant_typing', content: '' }]);
//     setInputMessage('');
//     setLoading(true);
//     setIsStreaming(true);

//     try {
//       const payload = {
//         message: inputMessage
//       };
//       if (threadId) {
//         payload.thread_id = threadId;
//       }

//       const response = await fetch(`${API_BASE_URL}/assistants/${assistantId}/chatsteam/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add Authorization header if needed
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
//       }

//       // Handle streaming response
//       const reader = response.body?.getReader();
//       const decoder = new TextDecoder();
//       let assistantMessage = '';

//       while (reader) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         const chunk = decoder.decode(value);
//         const lines = chunk.split('\n\n').filter(line => line.trim());

//         for (const line of lines) {
//           if (line.startsWith('data: ')) {
//             const data = JSON.parse(line.replace('data: ', ''));
            
//             if (data.status === 'partial_response' && data.content) {
//               assistantMessage += data.content;
//               setMessages(prev => {
//                 const lastMessage = prev[prev.length - 1];
//                 if (lastMessage?.role === 'assistant_stream') {
//                   return [
//                     ...prev.slice(0, -1),
//                     { role: 'assistant_stream', content: assistantMessage }
//                   ];
//                 }
//                 return [
//                   ...prev.slice(0, -1), // Remove typing indicator
//                   { role: 'assistant_stream', content: assistantMessage }
//                 ];
//               });
//             }
//             else if (data.status === 'thread_created') {
//               setThreadId(data.thread_id);
//             }
//           }
//         }
//       }

//       // Finalize the assistant message
//       setMessages(prev => {
//         const filtered = prev.filter(msg => 
//           msg.role !== 'assistant_stream' && msg.role !== 'assistant_typing'
//         );
//         return [
//           ...filtered,
//           { role: 'assistant', content: assistantMessage }
//         ];
//       });

//     } catch (error) {
//       console.error('Error sending message:', error);
//       message.error(`Failed to chat: ${error.message}`);
//       setMessages(prev => [
//         ...prev.filter(msg => msg.role !== 'assistant_typing'),
//         { role: 'system', content: `Error: ${error.message}` }
//       ]);
//     } finally {
//       setLoading(false);
//       setIsStreaming(false);
//     }
//   };

//   return (
//     <>
//       <FloatButton
//         type="primary"
//         icon={<RobotOutlined />}
//         onClick={showDrawer}
//         className="left-6 bottom-16"
//         tooltip="Chat with Arogya Doctor"
//         style={{
//             width: 48,
//             height: 48,
//             fontSize: '32px' // This will make the icon larger
//         }}
//       />

//       <Drawer
//         title={
//           <div className="flex items-center">
//             <Avatar icon={<RobotOutlined />} size="small" className='bg-green-600 text-white'/>
//             <span className="ml-2 text-green-500">AI Arogya Doctor</span>
//           </div>
//         }
//         placement="right"
//         onClose={onClose}
//         open={open}
//         closable={false}
//         width={400}
//         height="80vh"
//         styles={{
//           body: { 
//             padding: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 'calc(100% - 55px)'
//           }
//         }}
//         extra={
//           <Button 
//             type="text" 
//             icon={<CloseOutlined />} 
//             onClick={onClose}
//           />
//         }
//       >
//         <div className="flex flex-col h-full bg-gray-50">
//           {/* Messages area */}
//           <div className="flex-1 p-4 overflow-y-auto bg-white">
//             {messages.length === 0 ? (
//               <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
//                 <RobotOutlined className="text-4xl text-green-500 mb-2" />
//                 <p className=" text-green-500">How can I help you today?</p>
//               </div>
//             ) : (
//               messages.map((msg, index) => (
//                 <div 
//                   key={index} 
//                   className={`mb-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto' : 'mr-auto'}`}
//                 >
//                   <div className={`px-3 py-2 rounded-2xl ${msg.role === 'user' 
//                     ? 'bg-blue-500 text-white' 
//                     : 'bg-gray-100 text-gray-800'}`}
//                   >
//                     <div className="flex items-center mb-1">
//                       {msg.role === 'user' ? (
//                         <UserOutlined className="mr-2" />
//                       ) : (
//                         <RobotOutlined className="mr-2" />
//                       )}
//                       <span className="font-medium">
//                         {msg.role === 'user' ? 'You' : 'Arogya Doctor'}
//                       </span>
//                     </div>
//                     {msg.role === 'assistant_typing' ? (
//                       <div className="flex items-center gap-1 text-gray-500 italic">
//                         <span>thinking</span>
//                         <span className="typing-dots">
//                           <span style={{ animationDelay: '0s' }}>.</span>
//                           <span style={{ animationDelay: '0.2s' }}>.</span>
//                           <span style={{ animationDelay: '0.4s' }}>.</span>
//                         </span>
//                       </div>
//                     ) : (
//                       <div className="whitespace-pre-wrap">
//                         {msg.content}
//                         {msg.role === 'assistant_stream' && (
//                           <span className="opacity-50">█</span>
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input area */}
//           <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
//             <Input.TextArea
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message..."
//               autoSize={{ minRows: 1, maxRows: 4 }}
//               onPressEnter={(e) => {
//                 if (!e.shiftKey && !isStreaming) {
//                   e.preventDefault();
//                   handleSendMessage();
//                 }
//               }}
//               disabled={loading || isStreaming}
//               className="rounded-2xl px-4 py-2"
//             />
//             <Button
//               type="primary"
//               icon={loading || isStreaming ? <LoadingOutlined /> : <SendOutlined />}
//               onClick={handleSendMessage}
//               disabled={!inputMessage.trim() || loading || isStreaming}
//               className="rounded-full w-10 h-10 flex items-center justify-center bg-green-500"
//             />
//           </div>
//         </div>
//       </Drawer>

//       {/* Animation for typing indicator */}
//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 1; }
//         }
//         .typing-dots span {
//           animation: blink 1.4s infinite both;
//           display: inline-block;
//         }
//       `}</style>
//     </>
//   );
// }




'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button, FloatButton, Drawer, Avatar, Input, Spin, message, Tooltip } from 'antd';
import { RobotOutlined, CloseOutlined, SendOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';

export default function AiAssistantButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [threadId, setThreadId] = useState(null);
  const [assistantDetails, setAssistantDetails] = useState(null);
  const messagesEndRef = useRef(null);

  const API_BASE_URL = 'https://healdiway.bkarogyam.com/erp-api';
  const assistantId = 3;

  // Load conversation history from localStorage when component mounts
  useEffect(() => {
    const savedConversation = localStorage.getItem('aiAssistantConversation');
    if (savedConversation) {
      try {
        const { messages: savedMessages, threadId: savedThreadId } = JSON.parse(savedConversation);
        setMessages(savedMessages);
        if (savedThreadId) setThreadId(savedThreadId);
      } catch (e) {
        console.error('Failed to parse saved conversation', e);
      }
    }

    // Fetch assistant details
    fetchAssistantDetails();
  }, []);

  // Save conversation to localStorage when it changes
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(
        'aiAssistantConversation',
        JSON.stringify({ messages, threadId })
      );
    }
  }, [messages, threadId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchAssistantDetails = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/assistants/${assistantId}/`);
      if (!response.ok) throw new Error('Failed to fetch assistant details');
      const data = await response.json();
      setAssistantDetails(data);
    } catch (error) {
      console.error('Error fetching assistant details:', error);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const clearConversation = () => {
    setMessages([]);
    setThreadId(null);
    localStorage.removeItem('aiAssistantConversation');
    message.success('Conversation cleared');
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, newMessage, { role: 'assistant_typing', content: '' }]);
    setInputMessage('');
    setLoading(true);
    setIsStreaming(true);

    try {
      const payload = {
        message: inputMessage,
        ...(threadId && { thread_id: threadId })
      };

      const response = await fetch(`${API_BASE_URL}/assistants/${assistantId}/chatsteam/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required authorization headers here
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      // Handle streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      let assistantMessage = '';
      let receivedThreadId = threadId;

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        
        // Process each line in the chunk
        const lines = chunk.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const dataStr = line.replace('data: ', '').trim();
              if (dataStr === '[DONE]') continue;
              
              const data = JSON.parse(dataStr);
              
              // Handle different response formats
              if (data.content) {
                assistantMessage += data.content;
              } else if (data.choices?.[0]?.delta?.content) {
                assistantMessage += data.choices[0].delta.content;
              }
              
              if (data.thread_id) {
                receivedThreadId = data.thread_id;
                setThreadId(data.thread_id);
              }

              setMessages(prev => {
                const lastMessage = prev[prev.length - 1];
                if (lastMessage?.role === 'assistant_stream') {
                  return [
                    ...prev.slice(0, -1),
                    { role: 'assistant_stream', content: assistantMessage }
                  ];
                }
                return [
                  ...prev.slice(0, -1),
                  { role: 'assistant_stream', content: assistantMessage }
                ];
              });
            } catch (e) {
              console.error('Error parsing JSON:', e);
            }
          }
        }
      }

      // Finalize the assistant message
      setMessages(prev => {
        const filtered = prev.filter(msg => 
          msg.role !== 'assistant_stream' && msg.role !== 'assistant_typing'
        );
        return [
          ...filtered,
          { role: 'assistant', content: assistantMessage }
        ];
      });

      // Update thread ID if we received a new one
      if (receivedThreadId && receivedThreadId !== threadId) {
        setThreadId(receivedThreadId);
      }

    } catch (error) {
      console.error('Error sending message:', error);
      message.error(`Failed to chat: ${error.message}`);
      setMessages(prev => [
        ...prev.filter(msg => msg.role !== 'assistant_typing'),
        { role: 'system', content: `Error: ${error.message}` }
      ]);
    } finally {
      setLoading(false);
      setIsStreaming(false);
    }
  };

  return (
    <>
      <FloatButton
        type="primary"
        icon={<RobotOutlined />}
        onClick={showDrawer}
        className="left-6 bottom-16"
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
        width={400}
        height="80vh"
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
        <div className="flex flex-col h-full bg-gray-50">
          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto bg-white">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
                <RobotOutlined className="text-4xl text-green-500 mb-2" />
                <p className="text-green-500">How can I help you today?</p>
                {assistantDetails?.instructions && (
                  <p className="text-xs text-gray-500 mt-2 max-w-xs">
                    {assistantDetails.instructions}
                  </p>
                )}
              </div>
            ) : (
              messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-3 max-w-[80%] ${msg.role === 'user' ? 'ml-auto' : 'mr-auto'}`}
                >
                  <div className={`px-3 py-2 rounded-2xl ${msg.role === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-800'}`}
                  >
                    <div className="flex items-center mb-1">
                      {msg.role === 'user' ? (
                        <UserOutlined className="mr-2" />
                      ) : (
                        <RobotOutlined className="mr-2" />
                      )}
                      <span className="font-medium">
                        {msg.role === 'user' ? 'You' : assistantDetails?.name || 'Assistant'}
                      </span>
                    </div>
                    {msg.role === 'assistant_typing' ? (
                      <div className="flex items-center gap-1 text-gray-500 italic">
                        <span>thinking</span>
                        <span className="typing-dots">
                          <span style={{ animationDelay: '0s' }}>.</span>
                          <span style={{ animationDelay: '0.2s' }}>.</span>
                          <span style={{ animationDelay: '0.4s' }}>.</span>
                        </span>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">
                        {msg.content}
                        {msg.role === 'assistant_stream' && (
                          <span className="opacity-50">█</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
            <Input.TextArea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              autoSize={{ minRows: 1, maxRows: 4 }}
              onPressEnter={(e) => {
                if (!e.shiftKey && !isStreaming) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              disabled={loading || isStreaming}
              className="rounded-2xl px-4 py-2"
            />
            <Button
              type="primary"
              icon={loading || isStreaming ? <LoadingOutlined /> : <SendOutlined />}
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || loading || isStreaming}
              className="rounded-full w-10 h-10 flex items-center justify-center bg-green-500"
            />
          </div>
        </div>
      </Drawer>

      {/* Animation for typing indicator */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .typing-dots span {
          animation: blink 1.4s infinite both;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
































// 'use client';

// import React, { useState, useRef, useEffect } from 'react';
// import { Button, FloatButton, Drawer, Avatar, Input, Spin, message, Tooltip } from 'antd';
// import { RobotOutlined, CloseOutlined, SendOutlined, LoadingOutlined, UserOutlined } from '@ant-design/icons';

// // Message component for better organization
// const MessageItem = ({ message }) => {
//   return (
//     <div className={`mb-3 max-w-[80%] ${message.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
//       <div className={`px-3 py-2 rounded-2xl ${message.role === 'user' 
//         ? 'bg-blue-500 text-white' 
//         : 'bg-gray-100 text-gray-800'}`}
//       >
//         <div className="flex items-center mb-1">
//           {message.role === 'user' ? (
//             <UserOutlined className="mr-2" />
//           ) : (
//             <RobotOutlined className="mr-2" />
//           )}
//           <span className="font-medium">
//             {message.role === 'user' ? 'You' : 'Arogya Doctor'}
//           </span>
//         </div>
//         {message.role === 'assistant_typing' ? (
//           <div className="flex items-center gap-1 text-gray-500 italic">
//             <span>thinking</span>
//             <span className="typing-dots">
//               <span style={{ animationDelay: '0s' }}>.</span>
//               <span style={{ animationDelay: '0.2s' }}>.</span>
//               <span style={{ animationDelay: '0.4s' }}>.</span>
//             </span>
//           </div>
//         ) : (
//           <div className="whitespace-pre-wrap">
//             {message.content}
//             {message.role === 'assistant_stream' && (
//               <span className="opacity-50">█</span>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default function AiAssistantButton() {
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isStreaming, setIsStreaming] = useState(false);
//   const [threadId, setThreadId] = useState(null);
//   const messagesEndRef = useRef(null);

//   const API_BASE_URL = 'https://healdiway.bkarogyam.com/erp-api';
//   const assistantId = 3;

//   // Load saved messages from localStorage
//   useEffect(() => {
//     const savedMessages = localStorage.getItem('aiAssistantMessages');
//     if (savedMessages) {
//       setMessages(JSON.parse(savedMessages));
//     }
//   }, []);

//   // Save messages to localStorage
//   useEffect(() => {
//     if (messages.length > 0) {
//       localStorage.setItem('aiAssistantMessages', JSON.stringify(messages));
//     }
//   }, [messages]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   const startNewChat = () => {
//     setMessages([]);
//     setThreadId(null);
//     localStorage.removeItem('aiAssistantMessages');
//   };

//   const handleSendMessage = async () => {
//     if (!inputMessage.trim()) return;

//     const newMessage = { role: 'user', content: inputMessage };
//     setMessages(prev => [...prev, newMessage, { role: 'assistant_typing', content: '' }]);
//     setInputMessage('');
//     setLoading(true);
//     setIsStreaming(true);

//     try {
//       const payload = {
//         message: inputMessage,
//         ...(threadId && { thread_id: threadId })
//       };

//       const response = await fetch(`${API_BASE_URL}/assistants/${assistantId}/chatsteam/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const reader = response.body?.getReader();
//       const decoder = new TextDecoder();
//       let assistantMessage = '';

//       while (reader) {
//         const { done, value } = await reader.read();
//         if (done) break;

//         const chunk = decoder.decode(value);
//         const lines = chunk.split('\n\n').filter(line => line.trim());

//         for (const line of lines) {
//           if (line.startsWith('data: ')) {
//             try {
//               const data = JSON.parse(line.replace('data: ', ''));
              
//               if (data.status === 'partial_response' && data.content) {
//                 assistantMessage += data.content;
//                 setMessages(prev => {
//                   const lastMessage = prev[prev.length - 1];
//                   if (lastMessage?.role === 'assistant_stream') {
//                     return [
//                       ...prev.slice(0, -1),
//                       { role: 'assistant_stream', content: assistantMessage }
//                     ];
//                   }
//                   return [
//                     ...prev.slice(0, -1),
//                     { role: 'assistant_stream', content: assistantMessage }
//                   ];
//                 });
//               }
//               else if (data.status === 'thread_created') {
//                 setThreadId(data.thread_id);
//               }
//             } catch (e) {
//               console.error('Error parsing stream data:', e);
//             }
//           }
//         }
//       }

//       setMessages(prev => {
//         const filtered = prev.filter(msg => 
//           msg.role !== 'assistant_stream' && msg.role !== 'assistant_typing'
//         );
//         return [
//           ...filtered,
//           { role: 'assistant', content: assistantMessage }
//         ];
//       });

//     } catch (error) {
//       console.error('Error sending message:', error);
//       message.error(`Failed to chat: ${error.message}`);
//       setMessages(prev => [
//         ...prev.filter(msg => msg.role !== 'assistant_typing'),
//         { role: 'system', content: `Error: ${error.message}` }
//       ]);
//     } finally {
//       setLoading(false);
//       setIsStreaming(false);
//     }
//   };

//   return (
//     <>
//       <FloatButton
//         type="primary"
//         icon={<RobotOutlined />}
//         onClick={showDrawer}
//         className="left-6 bottom-16"
//         tooltip="Chat with Arogya Doctor"
//         style={{
//           width: 48,
//           height: 48,
//           fontSize: '32px'
//         }}
//       />

//       <Drawer
//         title={
//           <div className="flex items-center">
//             <Avatar icon={<RobotOutlined />} size="small" className='bg-green-600 text-white'/>
//             <span className="ml-2 text-green-500">AI Arogya Doctor</span>
//           </div>
//         }
//         placement="right"
//         onClose={onClose}
//         open={open}
//         closable={false}
//         width={400}
//         height="80vh"
//         styles={{
//           body: { 
//             padding: 0,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 'calc(100% - 55px)'
//           }
//         }}
//         extra={
//           <div className="flex items-center gap-2">
//             <Button 
//               type="text" 
//               onClick={startNewChat}
//               disabled={messages.length === 0}
//             >
//               New Chat
//             </Button>
//             <Button 
//               type="text" 
//               icon={<CloseOutlined />} 
//               onClick={onClose}
//             />
//           </div>
//         }
//       >
//         <div className="flex flex-col h-full bg-gray-50">
//           {/* Messages area */}
//           <div className="flex-1 p-4 overflow-y-auto bg-white">
//             {messages.length === 0 ? (
//               <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
//                 <RobotOutlined className="text-4xl text-green-500 mb-2" />
//                 <p className="text-green-500">How can I help you today?</p>
//               </div>
//             ) : (
//               messages.map((msg, index) => (
//                 <MessageItem key={index} message={msg} />
//               ))
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input area */}
//           <div className="p-4 bg-white border-t border-gray-200 flex gap-2">
//             <Input.TextArea
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Type your message..."
//               autoSize={{ minRows: 1, maxRows: 4 }}
//               onPressEnter={(e) => {
//                 if (!e.shiftKey && !isStreaming) {
//                   e.preventDefault();
//                   handleSendMessage();
//                 }
//               }}
//               disabled={loading || isStreaming}
//               className="rounded-2xl px-4 py-2"
//             />
//             <Button
//               type="primary"
//               icon={loading || isStreaming ? <LoadingOutlined /> : <SendOutlined />}
//               onClick={handleSendMessage}
//               disabled={!inputMessage.trim() || loading || isStreaming}
//               className="rounded-full w-10 h-10 flex items-center justify-center bg-green-500"
//             />
//           </div>
//         </div>
//       </Drawer>

//       <style jsx>{`
//         @keyframes blink {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 1; }
//         }
//         .typing-dots span {
//           animation: blink 1.4s infinite both;
//           display: inline-block;
//         }
//       `}</style>
//     </>
//   );
// }
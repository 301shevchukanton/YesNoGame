import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: "You are a helpful assistant that generates logical and intriguing situational puzzles." },
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever chatHistory changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = async (complexity) => {
    // Set loading state
    setLoading(true);
    
    // Append user message to chat history
    const message = `Create a new and original situation puzzle (lateral thinking puzzle) that has never appeared online before. Format as JSON with two fields: "puzzle" (a one-sentence mysterious scenario) and "solution" (the explanation, 2-3 sentences). Make it creative and surprising, but logical once explained. Example format: {"puzzle": "A man lies dead surrounded by 53 bicycles.", "solution": "He was a cyclist who cheated using performance enhancers, was caught and exposed, then committed suicide out of shame."}`;
    
    // Add a complexity level hint based on the button pressed
    const complexityHint = complexity === "Легко" 
      ? " Make it simple with an easy-to-deduce solution."
      : complexity === "Складно" 
        ? " Make it challenging with a complex but logical solution that requires creative thinking."
        : " Make it moderately challenging with a solution that requires some lateral thinking.";
    
    const messageWithComplexity = message + complexityHint;
    
    // Update chat with user message
    setChatHistory((prev) => [...prev, { role: "user", content: `Нова ситуація - ${complexity} складності` }]);

    try {
      // Send the user's message to the server
      const response = await fetch("/api/generate?endpoint=chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageWithComplexity }),
      });

      const data = await response.json();
      if (data.success) {
        // Open a connection to receive streamed responses
        const eventSource = new EventSource("/api/generate?endpoint=stream");
        
        eventSource.onmessage = function (event) {
          // Parse the event data, which is a JSON string
          const parsedData = JSON.parse(event.data);

          // Check if the last message in the chat history is from the assistant
          setChatHistory((prevChatHistory) => {
            const newChatHistory = [...prevChatHistory];
            if (
              newChatHistory.length > 0 &&
              newChatHistory[newChatHistory.length - 1].role === "assistant"
            ) {
              // If so, append the new chunk to the existing assistant message content
              newChatHistory[newChatHistory.length - 1].content += parsedData;
            } else {
              // Otherwise, add a new assistant message to the chat history
              newChatHistory.push({ role: "assistant", content: parsedData });
            }
            return newChatHistory;
          });
        };
        
        eventSource.onerror = function () {
          eventSource.close();
          setLoading(false);
        };
        
        eventSource.onclose = function() {
          setLoading(false);
        };
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  };

  const clearChat = async () => {
    // Clear the chat history in the client state
    setChatHistory([
      { role: "system", content: "You are a helpful assistant that generates logical and intriguing situational puzzles." },
    ]);

    // Reset the chat history on the server
    await fetch("/api/generate?endpoint=reset", { method: "POST" });
  };
  
  const Complexity = {
    EASY: "Легко",
    MEDIUM: "Середньо",
    HARD: "Складно",
  };

  function handleComplexityInput(complexity) {
    // Check if the provided complexity is valid
    if (!Object.values(Complexity).includes(complexity)) {
      console.error("Invalid complexity level provided");
      return;
    }

    // Prevent the default form submission if event exists
    if (event) event.preventDefault();
  
    // Send the message
    sendMessage(complexity);

    // Clear the message input or any related field
    setMessage("");
  }

  // Format the puzzle content for display
  const formatPuzzleContent = (content) => {
    try {
      // Check if the content is in JSON format
      if (content.includes('"puzzle":') && content.includes('"solution":')) {
        // Try to extract and parse the JSON
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const puzzleData = JSON.parse(jsonMatch[0]);
          
          // Return formatted puzzle and solution
          return (
            <>
              <div className={styles.puzzleSection}>
                <strong>Puzzle:</strong> {puzzleData.puzzle}
              </div>
              <div className={styles.solutionSection}>
                <strong>Solution:</strong> {puzzleData.solution}
              </div>
            </>
          );
        }
      }
      
      // If not in JSON format or parsing fails, return the content as is
      return content;
    } catch (error) {
      console.error("Error formatting puzzle:", error);
      return content;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Yes/No Game Generator</title>
        <meta name="description" content="Generate unique lateral thinking puzzles" />
        <style jsx global>{`
          body {
            background: linear-gradient(135deg, #f0f4f8, #e6f7ff);
            font-size: 16px;
            line-height: 24px;
            color: #353740;
            font-family: "ColfaxAI", Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
        `}</style>
      </Head>
      
      <main>
        <h1 className={styles.heading1}>Yes/No Game Generator</h1>
        
        <div className={styles.chatContainer} ref={chatContainerRef}>
          {chatHistory.length > 1 ? (
            chatHistory.slice(1).map((msg, index) => (
              <div
                key={index}
                className={
                  msg.role === "user" ? styles.userMessage : styles.assistantMessage
                }
              >
                {msg.role === "user" ? (
                  <strong>Наступна:</strong>
                ) : (
                  <strong>Генератор:</strong>
                )}
                <div className={styles.messageContent}>
                  {msg.role === "assistant" 
                    ? formatPuzzleContent(msg.content)
                    : <p>{msg.content}</p>
                  }
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              Click a button below to generate your first puzzle!
            </div>
          )}
          
          {loading && (
            <div className={styles.loadingIndicator}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          )}
        </div>

        <div className={styles.verticalButtonsContainer}>
          <button
            className={`${styles.button} ${styles.complexityButton}`}
            onClick={() => handleComplexityInput(Complexity.EASY)}
            disabled={loading}
          >
            {loading ? "Generating..." : "New Puzzle - Easy"}
          </button>
          <button
            className={`${styles.button} ${styles.complexityButton}`}
            onClick={() => handleComplexityInput(Complexity.MEDIUM)}
            disabled={loading}
          >
            {loading ? "Generating..." : "New Puzzle - Medium"}
          </button>
          <button
            className={`${styles.button} ${styles.complexityButton}`}
            onClick={() => handleComplexityInput(Complexity.HARD)}
            disabled={loading}
          >
            {loading ? "Generating..." : "New Puzzle - Hard"}
          </button>
          <button
            className={`${styles.button} ${styles.clearButton}`}
            onClick={clearChat}
            disabled={loading}
          >
            Clear
          </button>
        </div>
      </main>
    </div>
  );
}

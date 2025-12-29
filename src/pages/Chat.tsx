import { Layout } from "@/components/layout/Layout";
import { ChatInterface } from "@/components/ChatInterface";
import { Helmet } from "react-helmet";

const Chat = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Chat | Your Store</title>
        <meta name="description" content="Chat with our AI assistant for help with products, orders, and more." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Assistant</h1>
          <p className="text-muted-foreground">
            Ask me anything! I'm here to help with your questions.
          </p>
        </div>
        
        <ChatInterface />
      </div>
    </Layout>
  );
};

export default Chat;

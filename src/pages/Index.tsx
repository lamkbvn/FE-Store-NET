import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 text-primary dark:text-primary-foreground">
          Welcome to Our Web Store!
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Discover amazing products and start shopping now.
        </p>
        <Link to="/store">
          <Button size="lg" className="text-lg px-8 py-4">
            Shop Now
          </Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
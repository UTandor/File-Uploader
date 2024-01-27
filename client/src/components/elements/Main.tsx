import { useState } from "react";
import Upload from "./Upload";
import Viewer from "./Viewer";
import { MenuIcon } from "lucide-react";

const Main = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (updatedFiles: File[]) => {
    setFiles(updatedFiles);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-gray-600 h-6 w-6" />
          <h1 className="text-xl font-semibold">My Files</h1>
        </div>
        <div className="md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <Upload files={files} onFileChange={handleFileChange} />
        </div>
      </header>
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="px-4 py-8 sm:px-0">
          <div className="text-left">
            <div className="mt-6 text-center ">
              <Viewer files={files} onFileChange={handleFileChange} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

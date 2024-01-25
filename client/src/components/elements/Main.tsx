import { useState } from "react";
import Upload from "./Upload";
import Viewer from "./Viewer";

const Main = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileChange = (updatedFiles: File[]) => {
    setFiles(updatedFiles);
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="text-3xl font-bold text-gray-900">Qomal.</span>
          </div>
          <div className="md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Upload files={files} onFileChange={handleFileChange} />
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="px-4 py-8 sm:px-0">
          <div className="text-left">
            <h1 className="text-4xl  font-semibold text-gray-900">My Files</h1>
            <div className="mt-6 text-center ">
              <Viewer files={files} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

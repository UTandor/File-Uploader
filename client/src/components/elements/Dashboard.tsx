import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Ghost, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

const Dashboard = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, _setUsername] = useState(localStorage.getItem("username"));

  useEffect(() => {
    if (!username) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [username]);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <Main username={username} />
        </>
      ) : (
        <div>You are not logged in</div>
      )}
    </div>
  );
};

export default Dashboard;

const Main = ({ username }) => {
  return (
    <div className="min-h-screen bg-white py-8">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="text-3xl font-bold text-gray-900">Qomal.</span>
          </div>
          <div className="md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Dialog>
              <DialogTrigger>
                <Button className="text-white bg-primary hover:bg-opacity-60 px-4 py-2 rounded-md">
                  Upload PDF
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>Upload File</DialogTitle>
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg max-w-md w-full ">
                    <div className="flex justify-between items-start">
                      <button className="text-gray-400 hover:text-gray-500"></button>
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg">
                      <Upload className="h-8 w-8 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PDF (up to 4MB)</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-gray-900">My Files</h1>
            <div className="mt-6">
              <Ghost className="mx-auto h-12 w-12 text-primary opacity-50" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                Pretty empty around here
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Let's upload your first PDF.
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

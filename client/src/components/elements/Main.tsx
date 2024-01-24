import { useDropzone } from "react-dropzone";
import { CheckCircle2, FileText, Ghost, Upload } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";

const Main = ({ username }: { username: string }) => {
  const [files, setFiles] = useState<File[]>([]);
  const inputFile = useRef<HTMLInputElement | null>(null);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: async (acceptedFiles: File[]) => {
      console.log("Files selected:", acceptedFiles);
      console.log("File's type: ", acceptedFiles[0].type);

      const updatedFiles = [...files];

      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i];

        if (file.type !== "application/pdf") {
          console.log(`${file.name} NOT PDF.`);
        }

        updatedFiles.push(file);
      }

      setFiles(updatedFiles);
    },
  });

  useEffect(() => {
    console.log(files);
  }, [files]);

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="text-3xl font-bold text-gray-900">Qomal.</span>
          </div>
          <div className="md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <Dialog>
              <DialogTrigger className="text-white bg-primary hover:bg-opacity-60 px-4 py-2 rounded-md">
                Upload File
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>Upload File</DialogTitle>
                <div className="bg-white  flex flex-col rounded-lg max-w-md w-full justify-center space-y-6">
                  <div
                    onClick={onButtonClick}
                    className="mt-4 flex flex-col items-center hover:bg-secondary   hover:cursor-pointer justify-center p-8 border-2 border-dashed rounded-lg"
                  >
                    <input
                      {...getInputProps()}
                      id="file"
                      ref={inputFile}
                      style={{ display: "none" }}
                    />
                    {files.length === 0 ? (
                      <div className="flex flex-col items-center">
                        <Upload className="h-8 w-8 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-600 ">
                          Upload your files here
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-stretch">
                        <p>Uploaded files</p>
                        {files.map((file, id) => (
                          <div
                            key={id}
                            className="flex items-center justify-between mt-3"
                          >
                            <div className="flex items-center space-x-4">
                              <FileText className="opacity-40" />
                              <h1>
                                {file.name.substring(0, 15)}....
                                {file.name.split(".").pop()}
                              </h1>
                            </div>
                            <CheckCircle2 className="opacity-40 text-green-700" />
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-xs text-gray-500">PDF (up to 4MB)</p>
                  </div>
                  <div className="w-full items-center flex justify-center">
                    <Button>Save</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div className="px-4 py-8 sm:px-0">
          <div className="text-left">
            <h1 className="text-4xl  font-semibold text-gray-900">My Files</h1>
            <div className="mt-6 text-center ">
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

export default Main;

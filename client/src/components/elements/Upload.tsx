import React, { useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { XCircleIcon, FileText, Upload as UploadIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface UploadProps {
  files: File[];
  onFileChange: (updatedFiles: File[]) => void;
}

const Upload: React.FC<UploadProps> = ({ files, onFileChange }) => {
  const inputFile = useRef<HTMLInputElement | null>(null);

  const { getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const updatedFiles = [...files, ...acceptedFiles];
      onFileChange(updatedFiles);
    },
  });

  const onButtonClick = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const handleSave = () => {
    console.log("Saved");
  };

  const handleRemoveFile = (id: number) => {
    const updatedFiles = files.filter((_, index) => index !== id);
    console.log(updatedFiles)
    onFileChange(updatedFiles);
  };

  useEffect(() => {
    console.log(files);
    onFileChange(files); // Update the parent state when files change
  }, [files, onFileChange]);

  return (
   
    <div>
      <Dialog>
        <DialogTrigger className="text-white bg-primary hover:bg-opacity-60 px-4 py-2 rounded-md">
          Upload File
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Upload File</DialogTitle>
          <div className="bg-white  flex flex-col rounded-lg max-w-md w-full justify-center space-y-6">
            <div
              onClick={onButtonClick}
              className="mt-4 flex flex-col items-center hover:bg-secondary hover:cursor-pointer justify-center p-8 border-2 border-dashed rounded-lg"
            >
              <input
                {...getInputProps()}
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />
              {files.length === 0 ? (
                <div className="flex flex-col items-center">
                  <UploadIcon className="h-8 w-8 text-gray-400" />
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
                      <div className="flex items-center space-x-1">
                        <FileText className="opacity-40" />
                        <h1>
                          {file.name.substring(0, 15)}....
                          {file.name.split(".").pop()}
                        </h1>
                      </div>
                      <XCircleIcon
                        onClick={() => handleRemoveFile(id)}
                        className="opacity-40 pointer-events-auto ml-4 text-red-700 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500">PDF (up to 4MB)</p>
            </div>
            <div className="w-full items-center flex justify-center">
              <Button asChild>
                <DialogClose onClick={handleSave}>Save</DialogClose>
              </Button>  
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Upload;

import { Trash2, Ghost, Image, FileText, File } from "lucide-react";
import { MessageCircleCode } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "../ui/button";

interface ViewerProps {
  files: File[];
  onFileChange: (updatedFiles: File[]) => void;
}

const Viewer: React.FC<ViewerProps> = ({ files, onFileChange }) => {
  const handleRemoveFile = (id: number) => {
    const updatedFiles = files.filter((_, index) => index !== id);
    console.log(updatedFiles);
    onFileChange(updatedFiles);
  };

  return (
    <div className="">
      {files.length === 0 ? (
        <div>
          <Ghost className="mx-auto h-12 w-12  text-primary opacity-50" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Pretty empty around here
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Let's upload your first PDF.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {files.map((file: File, id: number) => (
            <Card className="bg-white shadow-sm rounded-lg">
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <Fallback file={file} />
                  </Avatar>
                  <div>
                    <p className="font-medium text-left text-gray-700">
                      {`${file.name.substring(
                        0,
                        file.name.length - (file.name.length * 60) / 100
                      )}..${file.name.substring(
                        file.name.length - 4,
                        file.name.length
                      )}`
                        .toLowerCase()
                        .replace(/\s/g, "")}
                    </p>
                    <p className="text-sm text-left text-gray-500">
                      Size: {(file.size / 1000000).toString().substring(0, 4)}{" "}
                      MB
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around mb-0 items-center py-4 border-t border-opacity-40">
                <Button
                  className="text-destructive "
                  onClick={() => handleRemoveFile(id)}
                  variant="ghost"
                >
                  <Trash2 className="mr-2 " /> Delete
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                  <MessageCircleCode className="text-" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const Fallback = ({ file }) => {
  const fileName = file.name;
  const fileLength = file.name.length;

  return (
    <AvatarFallback className="">
      {fileName.substring(fileLength - 4, fileLength) === ".png" ||
      fileName.substring(fileLength - 4, fileLength) === ".jpg" ||
      fileName.substring(fileLength - 4, fileLength) === ".svg" ? (
        <Image />
      ) : fileName.substring(fileLength - 4, fileLength) === ".pdf" ||
        fileName.substring(fileLength - 5, fileLength) === ".docx" ||
        fileName.substring(fileLength - 4, fileLength) === ".txt" ? (
        <FileText />
      ) : (
        <File />
      )}
    </AvatarFallback>
  );
};

export default Viewer;

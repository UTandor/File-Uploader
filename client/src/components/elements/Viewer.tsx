import { Ghost } from "lucide-react";
import { FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ViewerProps {
  files: File[];
}

const Viewer: React.FC<ViewerProps> = ({ files }) => {
  return (
    <div>
      {files.length === 0 ? (
        <div>
          <Ghost className="mx-auto h-12 w-12 text-primary opacity-50" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            Pretty empty around here
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Let's upload your first PDF.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-5">
          {files.map((file: File) => (
            <Card className="w-48">
              <CardHeader>
                <CardTitle className="w-full  from-current bg-primary bg-gradient-to-l text-center p-2 rounded-lg to-inherit  ">
                  <FileText className="text-primary-foreground text-4xl w-12 h-12 text-center mx-auto "></FileText>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {file.name.substring(0, 10)}....
                  {file.name.split(".").pop()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Viewer;

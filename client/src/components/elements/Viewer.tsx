import { Ghost } from "lucide-react";

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
        <div>
          You have uploadded files:
          {files.map((file: File) => (
            <h1 className="font-semibold text-2xl">{file.name}</h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Viewer;

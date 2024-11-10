import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

interface ComponentsrcProps {
  onDataUploaded: (data: any) => void; // Typing the onDataUploaded prop as a function that accepts any data
}

export function Componentsrc({ onDataUploaded }: ComponentsrcProps) {
  const [file, setFile] = useState<File | null>(null); // State for the file, typed as File | null
  const [fileContent, setFileContent] = useState<any>(null); // State for file content

  // File reading logic
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonData = JSON.parse(event.target?.result as string); // Ensure proper typing
          setFileContent(jsonData);
          onDataUploaded(jsonData); // Pass the parsed data to the parent component
        } catch (error) {
          console.error('Error parsing JSON:', error);
          alert('Invalid JSON file. Please upload a valid JSON file.');
        }
      };
      reader.readAsText(file);
    }
  }, [file, onDataUploaded]); // Dependency array to re-run on file change

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile && selectedFile.type === 'application/json') {
      setFile(selectedFile); // Set the file if it's a valid JSON file
    } else {
      alert('Please select a valid JSON file.');
      event.target.value = ''; // Clear the file input if invalid file is selected
    }
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center cursor-pointer">
          <FileIcon className="w-12 h-12 text-gray-500" />
          <span className="text-sm font-medium text-gray-500">
            Drag and drop a file or click to browse
          </span>
          <span className="text-xs text-gray-500">
            JSON files only
          </span>
        </div>

        <div className="space-y-2 text-sm">
          <Label htmlFor="file" className="text-sm font-medium">
            File
          </Label>
          <Input
            id="file"
            type="file"
            accept=".json,application/json"
            onChange={handleFileChange}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg" disabled={!file}>
          Upload
        </Button>
       
      </CardFooter>
    </Card>
  );
}

// File Icon SVG component
function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

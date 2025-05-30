import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { useData } from "../../context/DataContext";

function FileDropzone() {
    const { setRawData } = useData();

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setRawData(results.data);
            },
        });
    }, [setRawData]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'text/csv': ['.csv'] }
    });

    return (
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer rounded bg-white">
            <input {...getInputProps()} />
            {
                isDragActive ? <p>Drop the file here...</p> : <p>Drag and drop a CSV file here, or click to upload</p>
            }
        </div>
    );
}

export default FileDropzone;

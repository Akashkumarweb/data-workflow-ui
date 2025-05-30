import { useState } from "react";
import { useData } from "../../context/DataContext";

function TransformPanel() {
    const { rawData, setTransformedData } = useData();
    const [renameMap, setRenameMap] = useState<{ [key: string]: string }>({});
    const [filter, setFilter] = useState<{ [key: string]: string }>({});

    if (!rawData || rawData.length === 0) return null;
    const headers = Object.keys(rawData[0]);

    // Handlers
    const handleRenameChange = (header: string, value: string) => {
        setRenameMap((prev) => ({ ...prev, [header]: value }));
    };
    const handleFilterChange = (header: string, value: string) => {
        setFilter((prev) => ({ ...prev, [header]: value }));
    };

    // Transform
    const applyTransformation = () => {
        let transformed = rawData.map((row) => {
            const newRow: any = {};
            headers.forEach((header) => {
                newRow[renameMap[header] || header] = row[header];
            });
            return newRow;
        });
        // Apply filtering
        Object.entries(filter).forEach(([header, value]) => {
            if (value) {
                transformed = transformed.filter((row) =>
                    row[renameMap[header] || header].toString().toLowerCase().includes(value.toLowerCase())
                );
            }
        });
        setTransformedData(transformed);
    };

    const resetTransformation = () => {
        setRenameMap({});
        setFilter({});
        setTransformedData([]);
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Transform Data</h2>
            <div className="space-y-4">
                {headers.map((header) => (
                    <div key={header} className="flex flex-col md:flex-row md:items-center md:gap-4">
                        <div>
                            <label className="block text-sm text-gray-700 font-medium">{header}</label>
                            <input
                                className="border p-2 rounded w-full md:w-36"
                                placeholder="Rename column"
                                value={renameMap[header] || ""}
                                onChange={(e) => handleRenameChange(header, e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="border p-2 rounded w-full md:w-36"
                                placeholder="Filter values"
                                value={filter[header] || ""}
                                onChange={(e) => handleFilterChange(header, e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-4 mt-4">
                <button
                    className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-700"
                    onClick={applyTransformation}
                >
                    Apply
                </button>
                <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={resetTransformation}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default TransformPanel;

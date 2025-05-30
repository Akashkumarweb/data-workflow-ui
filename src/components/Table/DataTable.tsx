import { useData } from "../../context/DataContext";

function DataTable() {
    const { rawData, transformedData } = useData();
    const data = transformedData.length > 0 ? transformedData : rawData;
    if (!data || data.length === 0) return null;
    const headers = Object.keys(data[0]);

    return (
        <div className="overflow-auto border rounded bg-white">
            <table className="min-w-full table-auto border-collapse">
                <thead className="bg-gray-100">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2 text-left border-b font-medium text-sm text-gray-700">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-50">
                            {headers.map((header, colIndex) => (
                                <td key={colIndex} className="px-4 py-2 text-sm border-b">
                                    {row[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;

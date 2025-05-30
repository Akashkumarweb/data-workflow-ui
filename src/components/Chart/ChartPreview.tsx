import { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from "recharts";

const COLORS = [
    "#6366f1", "#f59e42", "#16bdca", "#f87171", "#a3e635", "#fbbf24", "#34d399", "#e879f9",
];

function ChartPreview() {
    const { transformedData, rawData } = useData();
    const data = transformedData.length > 0 ? transformedData : rawData;

    // Always call hooks the same way on every render:
    const [chartType, setChartType] = useState<"bar" | "pie">("bar");
    const [xKey, setXKey] = useState<string>("");
    const [yKey, setYKey] = useState<string>("");

    // Safely update keys if data changes
    useEffect(() => {
        if (!data || data.length === 0) {
            setXKey("");
            setYKey("");
            return;
        }
        const headers = Object.keys(data[0]);
        const numericHeaders = headers.filter((h) => data.every((row) => !isNaN(Number(row[h]))));
        const stringHeaders = headers.filter((h) => !numericHeaders.includes(h));
        setXKey((prev) => stringHeaders.includes(prev) ? prev : (stringHeaders[0] || headers[0] || ""));
        setYKey((prev) => numericHeaders.includes(prev) ? prev : (numericHeaders[0] || headers[1] || ""));
    }, [data]);

    if (!data || data.length === 0 || !xKey) return null;

    // Compute headers each render for dropdowns
    const headers = Object.keys(data[0]);
    const numericHeaders = headers.filter((h) => data.every((row) => !isNaN(Number(row[h]))));
    const stringHeaders = headers.filter((h) => !numericHeaders.includes(h));

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Chart Preview</h2>
            <div className="flex gap-4 mb-4">
                <label>
                    <span className="text-sm mr-2">Chart Type</span>
                    <select value={chartType} onChange={e => setChartType(e.target.value as any)} className="border p-1 rounded">
                        <option value="bar">Bar</option>
                        <option value="pie">Pie</option>
                    </select>
                </label>
                <label>
                    <span className="text-sm mr-2">X Axis</span>
                    <select value={xKey} onChange={e => setXKey(e.target.value)} className="border p-1 rounded">
                        {stringHeaders.map(h => <option key={h} value={h}>{h}</option>)}
                    </select>
                </label>
                {chartType === "bar" && (
                    <label>
                        <span className="text-sm mr-2">Y Axis</span>
                        <select value={yKey} onChange={e => setYKey(e.target.value)} className="border p-1 rounded">
                            {numericHeaders.map(h => <option key={h} value={h}>{h}</option>)}
                        </select>
                    </label>
                )}
            </div>
            <div style={{ width: "100%", height: 300 }}>
                {chartType === "bar" && yKey && (
                    <ResponsiveContainer>
                        <BarChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey={xKey} />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey={yKey} fill="#6366f1" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
                {chartType === "pie" && (
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey={numericHeaders[0]}
                                nameKey={xKey}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}

export default ChartPreview;

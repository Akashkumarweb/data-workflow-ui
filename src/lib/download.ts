export function downloadCSV(data: any[], filename = "data.csv") {
  const headers = Object.keys(data[0]);
  const csvRows = [
    headers.join(","),
    ...data.map(row => headers.map(header => JSON.stringify(row[header] ?? "")).join(","))
  ];
  const csvData = csvRows.join("\n");
  const blob = new Blob([csvData], { type: 'text/csv' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
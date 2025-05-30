import FileDropzone from "./components/Upload/FileDropzone";
import DataTable from "./components/Table/DataTable";
import TransformPanel from "./components/Transform/TransformPanel";
import ChartPreview from "./components/Chart/ChartPreview";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6">SmartPrep - Data Workflow UI</h1>
        <FileDropzone />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <TransformPanel />
          <ChartPreview />
        </div>
        <div className="mt-6">
          <DataTable />
        </div>
      </main>
    </DataProvider>
  );
}

export default App;

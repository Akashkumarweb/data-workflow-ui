import FileDropzone from "./components/Upload/FileDropzone";
import DataTable from "./components/Table/DataTable";
import TransformPanel from "./components/Transform/TransformPanel";
import ChartPreview from "./components/Chart/ChartPreview";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <main className="min-h-screen bg-gray-50 p-6">
        <header className="mb-8 flex flex-col items-center">
          <span className="text-xs tracking-widest text-violet-600 font-semibold mb-1">SMARTPREP</span>
          <h1 className="text-4xl font-bold text-neutral-900 tracking-tight mb-2">Data Workflow Playground</h1>
          <p className="text-base text-neutral-500 font-medium mb-4 text-center">
            Upload CSV. Instantly edit, filter & visualize.
          </p>
          <div className="flex gap-2 mb-2">
            <a
              href="../public/sample-data.csv"
              download
              className="inline-flex items-center text-xs text-violet-600 border border-violet-100 bg-violet-50 rounded-full px-4 py-1 hover:bg-violet-100 transition"
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 mr-1"><path d="M10 2v12m0 0-3.5-3.5M10 14l3.5-3.5M4 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Sample CSV
            </a>
          </div>
        </header>
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
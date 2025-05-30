# SmartPrep UI – Interactive Data Workflow Tool

SmartPrep UI is a modern **React + Vite** application that empowers users to upload, transform, and visualize CSV data—no code required. Designed with scalability, clarity, and user experience in mind, this project demonstrates expertise in advanced frontend architecture, reusable component patterns, and the latest UI tooling.

![SmartPrep UI Screenshot](./smartprep.png)

## ✨ Features

- **Drag-and-drop CSV Upload**: Seamless file input using react-dropzone & PapaParse.
- **Live Data Table**: Instantly renders uploaded data in a sortable, responsive table.
- **Column Renaming & Filtering**: User-friendly transformation panel for cleaning & shaping data.
- **Instant Chart Preview**: Generate bar and pie charts on the fly with Recharts.
- **Downloadable Results**: Easily export transformed data (CSV).
- **Mobile-First, Accessible UI**: Styled with Tailwind CSS and built for performance.

## 🚀 Demo



## 🛠️ Tech Stack

- [React](https://react.dev/) (Hooks, Context, Function Components)
- [Vite](https://vitejs.dev/) (Lightning-fast dev/build tool)
- [Tailwind CSS](https://tailwindcss.com/) (with @tailwindcss/vite plugin)
- [PapaParse](https://www.papaparse.com/) (CSV parsing)
- [react-dropzone](https://react-dropzone.js.org/) (File upload)
- [Recharts](https://recharts.org/) (Beautiful, responsive charts)
- TypeScript (Strict types)

## 🧩 Folder Structure

```
src/
├── components/
│   ├── Upload/        # FileDropzone for uploads
│   ├── Table/         # DataTable for rendering data
│   ├── Transform/     # TransformPanel for renaming/filtering
│   ├── Chart/         # ChartPreview for visualization
│   ├── UI/            # Reusable Button and UI primitives
├── context/           # DataContext for global state
├── lib/              # Utility functions (CSV download, etc.)
├── App.tsx
├── main.tsx
├── index.css
```

## 🏁 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/smartprep-ui.git
   cd smartprep-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Upload Example

Try uploading a CSV file like:

```csv
Name,Department,Salary,Age
Alice,Engineering,85000,28
Bob,Marketing,72000,35
Charlie,Product,90000,30
Diana,Design,77000,26
```

## 🎯 What I Learned & Demonstrated

- Scalable folder architecture for large frontend projects
- Modern React (no legacy patterns)
- Using React Context for global, type-safe state
- Integrating file upload, parsing, transformation, and visualization in a cohesive UX
- Tailwind + Vite plugin usage for “just works” styling
- Error handling, user feedback, and production-readiness

## 📢 Contact

Want to discuss this project or hire me for frontend roles?

- [LinkedIn](https://www.linkedin.com/in/theakashkumar)
- [Email](mailto:akash@akashbuilds.com)

## 📝 License

MIT
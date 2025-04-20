import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Vivek Task 2",
  description: "Vivek task 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

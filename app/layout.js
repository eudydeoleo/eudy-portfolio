import "./globals.css";

export const metadata = {
  title: "Eudy De Oleo",
  description: "Data Analytics & Data Engineering Student",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
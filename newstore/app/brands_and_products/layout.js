
export default function HrmLayout({ children }) {
    return (
        <html lang="en">
        <body>
            <main>{children}</main> {/* Render the specific page content here */}
        </body>
        </html>
    );
}
